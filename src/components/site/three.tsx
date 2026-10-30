// WebGL art pieces (three.js). three is imported lazily inside effects, so it never
// enters the SSR bundle or blocks first paint, and each scene:
//  - pauses its render loop when off-screen and releases the GPU context on unmount
//  - follows the live accent/ink colors (read from the CSS variables on <html>)
//  - drops idle motion for prefers-reduced-motion and renders nothing without WebGL
import { useEffect, useRef, type RefObject } from "react";
import { useReducedMotion, type MotionValue } from "framer-motion";
import type * as ThreeNS from "three";
import { cn } from "@/lib/utils";

type THREE = typeof ThreeNS;

interface SceneContext {
  THREE: THREE;
  scene: ThreeNS.Scene;
  camera: ThreeNS.PerspectiveCamera;
  renderer: ThreeNS.WebGLRenderer;
  reduce: boolean;
  /** Pointer in normalized device coords (-1..1) relative to the canvas; null when away. */
  pointer: { current: { x: number; y: number } | null };
}

interface SceneInstance {
  update: (t: number, dt: number) => void;
  resize?: (w: number, h: number) => void;
  /** Called with fresh colors whenever the theme changes. */
  colors?: (c: { accent: ThreeNS.Color; ink: ThreeNS.Color }) => void;
  dispose: () => void;
}

/**
 * Reads an "h s% l%" CSS variable. Values stay in sRGB (tagged linear so three.js doesn't
 * convert them), because these ShaderMaterials write gl_FragColor without color management.
 */
function cssColor(THREE: THREE, name: string, fallback: [number, number, number]) {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  const parsed = raw.split(/\s+/).map((v) => parseFloat(v));
  const [h, s, l] = parsed.length >= 3 && parsed.slice(0, 3).every(Number.isFinite) ? parsed : fallback;
  return new THREE.Color().setHSL(h / 360, s / 100, l / 100, THREE.LinearSRGBColorSpace);
}

function useThreeScene(container: RefObject<HTMLDivElement>, create: (ctx: SceneContext) => SceneInstance) {
  const reduce = !!useReducedMotion();
  const createRef = useRef(create);
  createRef.current = create;

  useEffect(() => {
    let disposed = false;
    let teardown = () => {};

    import("three").then((THREE) => {
      const el = container.current;
      if (disposed || !el) return;

      let renderer: ThreeNS.WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
      } catch {
        return; // no WebGL: the section still reads perfectly without its art
      }
      // 1.5× is visually identical for point art and saves ~45% GPU fill on Retina screens
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.style.cssText = "display:block;width:100%;height:100%";
      el.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
      const pointer: SceneContext["pointer"] = { current: null };
      const inst = createRef.current({ THREE, scene, camera, renderer, reduce, pointer });

      const pushColors = () =>
        inst.colors?.({ accent: cssColor(THREE, "--primary", [352, 72, 36]), ink: cssColor(THREE, "--foreground", [222, 47, 11]) });
      pushColors();
      const mo = new MutationObserver(pushColors);
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ["style", "class"] });

      const onMove = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
        pointer.current = inside ? { x: ((e.clientX - r.left) / r.width) * 2 - 1, y: -(((e.clientY - r.top) / r.height) * 2 - 1) } : null;
      };
      window.addEventListener("pointermove", onMove, { passive: true });

      const resize = () => {
        const w = Math.max(1, el.clientWidth);
        const h = Math.max(1, el.clientHeight);
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        inst.resize?.(w, h);
      };
      resize();
      const ro = new ResizeObserver(resize);
      ro.observe(el);

      let raf = 0;
      let visible = true;
      let last = performance.now();
      const start = last;
      const frame = (now: number) => {
        raf = 0;
        const dt = Math.min((now - last) / 1000, 0.05);
        last = now;
        inst.update((now - start) / 1000, dt);
        renderer.render(scene, camera);
        if (visible) raf = requestAnimationFrame(frame);
      };
      const io = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        if (visible && !raf) {
          last = performance.now();
          raf = requestAnimationFrame(frame);
        }
      });
      io.observe(el);
      raf = requestAnimationFrame(frame);

      teardown = () => {
        if (raf) cancelAnimationFrame(raf);
        io.disconnect();
        ro.disconnect();
        mo.disconnect();
        window.removeEventListener("pointermove", onMove);
        inst.dispose();
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement.remove();
      };
    });

    return () => {
      disposed = true;
      teardown();
    };
  }, [container, reduce]);
}

const easeTo = (current: number, target: number, dt: number, speed: number) => current + (target - current) * Math.min(1, dt * speed);

// ── System sculpture ─────────────────────────────────────────────────────────
// One particle field that tells the "we build systems" story in five scenes:
//   0 dust → 1 your business in orbit → 2 a living workflow → 3 the platform we build → 4 a conversion funnel
// Scenes change as discrete, timed transitions (never scrubbed), always morphing directly from
// the current scene to the requested one. The camera re-frames per scene, the dashboard
// assembles itself, and labels arrive in sequence once a scene settles.

export interface SculptureAnchor {
  id: string;
  /** Scene (1–4) during which the label is shown */
  stage: number;
  label: string;
  pos: [number, number, number];
}

const SCULPTURE_VERT = /* glsl */ `
  attribute vec3 aB;   // orbits
  attribute vec3 aC0;  // workflow: edge start (or node)
  attribute vec3 aC1;  // workflow: edge end (or node)
  attribute vec3 aD;   // dashboard
  attribute vec3 aE;   // funnel params: angle, phase, jitter
  attribute vec3 aDir;
  attribute float aRand;
  attribute float aAccent;
  attribute float aPacket;
  attribute float aSeq;  // dashboard build order (0..1), -1 = always visible
  attribute float aBarBase; // dashboard bar baseline (y), or -99
  uniform float uFrom;
  uniform float uTo;
  uniform float uT;
  uniform float uTime;
  uniform float uSize;
  uniform float uPixelRatio;
  uniform float uMotion;
  uniform float uBuild;  // dashboard assembly 0..1
  uniform vec3 uPointer;
  uniform float uPointerStrength;
  varying float vAccent;
  varying float vAlpha;

  float h01;

  vec3 funnel(float t) {
    float h = fract(aE.y - t * 0.06);
    h01 = h;
    float y = mix(1.55, -1.65, h);
    float r = mix(1.8, 0.14, smoothstep(0.0, 0.9, h)) * (1.0 + (aE.z - 0.5) * 0.14);
    float a = aE.x + t * 0.28 + h * 2.8;
    return vec3(cos(a) * r, y, sin(a) * r);
  }

  vec3 shapeAt(float i, float t) {
    if (i < 0.5) return position + vec3(sin(t * 0.2 + aRand * 20.0), cos(t * 0.17 + aRand * 13.0), sin(t * 0.13 + aRand * 7.0)) * 0.18;
    if (i < 1.5) return aB;
    if (i < 2.5) return mix(aC0, aC1, fract(aRand * 7.31 + t * 0.14));
    if (i < 3.5) {
      vec3 d = aD;
      if (aBarBase > -50.0) d.y = aBarBase + (d.y - aBarBase) * smoothstep(aSeq - 0.25, aSeq + 0.05, uBuild);
      return d;
    }
    return funnel(t);
  }

  void main() {
    float t = uTime * uMotion;
    h01 = 0.0;
    // Per-particle stagger, eased: particles leave and arrive in a wave rather than all at once
    float k = clamp(uT * 1.45 - aRand * 0.45, 0.0, 1.0);
    k = k < 0.5 ? 4.0 * k * k * k : 1.0 - pow(-2.0 * k + 2.0, 3.0) / 2.0;
    vec3 a = shapeAt(uFrom, t);
    vec3 b = shapeAt(uTo, t);
    vec3 p = mix(a, b, k);

    // Mid-flight: drift outward and swirl around the vertical axis
    float flight = sin(k * 3.14159);
    p += aDir * flight * 0.55;
    float sw = flight * 0.9 * (aRand - 0.5);
    p.xz = mat2(cos(sw), -sin(sw), sin(sw), cos(sw)) * p.xz;
    p += normalize(p + 1e-4) * sin(t * 0.9 + aRand * 6.2831 + p.y * 1.7) * 0.012;

    // Particles part around the pointer
    vec3 dp = p - uPointer;
    float push = uPointerStrength * smoothstep(0.85, 0.0, length(dp));
    p += normalize(dp + 1e-4) * push * 0.3;

    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = uSize * uPixelRatio * (0.55 + aRand * 0.9) / -mv.z;

    float wFlow = (uFrom > 1.5 && uFrom < 2.5 ? 1.0 - k : 0.0) + (uTo > 1.5 && uTo < 2.5 ? k : 0.0);
    float wDash = (uFrom > 2.5 && uFrom < 3.5 ? 1.0 - k : 0.0) + (uTo > 2.5 && uTo < 3.5 ? k : 0.0);
    float wFunnel = (uFrom > 3.5 ? 1.0 - k : 0.0) + (uTo > 3.5 ? k : 0.0);
    // Converted leads glow at the bottom of the funnel
    float converted = wFunnel * smoothstep(0.82, 0.97, h01);
    vAccent = max(max(aAccent, aPacket * wFlow), max(converted, push * 0.9));
    // Dashboard elements fade in following their build order
    float reveal = aSeq < 0.0 ? 1.0 : mix(1.0, smoothstep(aSeq - 0.2, aSeq, uBuild), wDash);
    vAlpha = smoothstep(-8.5, -4.2, mv.z) * reveal * (1.0 - flight * 0.25);
  }
`;

const SCULPTURE_FRAG = /* glsl */ `
  uniform vec3 uInk;
  uniform vec3 uAccent;
  varying float vAccent;
  varying float vAlpha;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float a = smoothstep(0.5, 0.12, d);
    gl_FragColor = vec4(mix(uInk, uAccent, vAccent), a * mix(0.18, 0.92, vAlpha));
  }
`;

type V3 = [number, number, number];

const RINGS = [
  { r: 0.95, tx: 1.15, tz: 0.15, label: "Your business" },
  { r: 1.25, tx: 1.35, tz: -0.55, label: "Your workflow" },
  { r: 1.55, tx: 0.95, tz: 0.6, label: "Your goals" },
  { r: 1.85, tx: 1.5, tz: -0.2, label: "Your customers" },
];
const ringPoint = (ring: (typeof RINGS)[number], a: number, lift = 0): V3 => {
  const x = Math.cos(a) * ring.r;
  const z = Math.sin(a) * ring.r;
  const y1 = lift * Math.cos(ring.tx) - z * Math.sin(ring.tx);
  const z1 = lift * Math.sin(ring.tx) + z * Math.cos(ring.tx);
  return [x * Math.cos(ring.tz) - y1 * Math.sin(ring.tz), x * Math.sin(ring.tz) + y1 * Math.cos(ring.tz), z1];
};

const NODES: { label: string; pos: V3 }[] = [
  { label: "Website", pos: [-2.0, 0.25, 0] },
  { label: "Lead captured", pos: [-0.95, 0.95, 0.3] },
  { label: "CRM", pos: [0.1, -0.05, 0] },
  { label: "Auto follow-up", pos: [1.15, 0.9, -0.3] },
  { label: "Booking", pos: [1.15, -0.95, 0.3] },
  { label: "Invoice paid", pos: [2.05, -0.05, 0] },
];
const EDGES: [number, number][] = [[0, 1], [1, 2], [0, 2], [2, 3], [2, 4], [3, 5], [4, 5]];

export const SCULPTURE_ANCHORS: SculptureAnchor[] = [
  ...RINGS.map((ring, i) => ({ id: `orbit-${i}`, stage: 1, label: ring.label, pos: ringPoint(ring, 0.6 + i * 1.55) })),
  ...NODES.map((n, i) => ({ id: `flow-${i}`, stage: 2, label: n.label, pos: n.pos })),
  { id: "dash-0", stage: 3, label: "Custom website", pos: [-1.2, 0.98, 0] },
  { id: "dash-1", stage: 3, label: "Client portal", pos: [-1.42, -0.2, 0.08] },
  { id: "dash-2", stage: 3, label: "Live KPIs", pos: [-0.2, 0.5, 0.18] },
  { id: "dash-3", stage: 3, label: "CRM pipeline", pos: [0.25, -0.78, 0.15] },
  { id: "dash-4", stage: 3, label: "Automations", pos: [1.42, 1.0, 0.6] },
  { id: "funnel-0", stage: 4, label: "Visitors", pos: [1.85, 1.5, 0] },
  { id: "funnel-1", stage: 4, label: "Qualified leads", pos: [0.95, -0.05, 0] },
  { id: "funnel-2", stage: 4, label: "Loyal clients", pos: [0.3, -1.62, 0] },
];

/** Camera framing per scene: distance, tilt, yaw. */
const SHOTS = [
  { z: 7.4, rx: 0.2, ry: 0 },
  { z: 6.4, rx: 0.3, ry: 0 },
  { z: 6.2, rx: 0.18, ry: 0 },
  { z: 6.5, rx: 0.1, ry: -0.18 },
  { z: 6.7, rx: 0.36, ry: 0 },
];

function buildSystemShapes(count: number) {
  const dust = new Float32Array(count * 3);
  const orbit = new Float32Array(count * 3);
  const c0 = new Float32Array(count * 3);
  const c1 = new Float32Array(count * 3);
  const dash = new Float32Array(count * 3);
  const fun = new Float32Array(count * 3);
  const dir = new Float32Array(count * 3);
  const rand = new Float32Array(count);
  const accent = new Float32Array(count);
  const packet = new Float32Array(count);
  const seq = new Float32Array(count).fill(-1);
  const barBase = new Float32Array(count).fill(-99);
  const R = Math.random;
  const set = (arr: Float32Array, i: number, v: V3) => {
    arr[i * 3] = v[0];
    arr[i * 3 + 1] = v[1];
    arr[i * 3 + 2] = v[2];
  };
  const ball = (r: number): V3 => {
    const u = R() * 2 - 1;
    const a = R() * Math.PI * 2;
    const s = Math.sqrt(1 - u * u) * r * Math.cbrt(R());
    return [Math.cos(a) * s, Math.sin(a) * s, u * r * Math.cbrt(R())];
  };
  const onRect = (x0: number, y0: number, x1: number, y1: number, z: number): V3 => {
    const w = x1 - x0;
    const h = y1 - y0;
    let k = R() * 2 * (w + h);
    if (k < w) return [x0 + k, y0, z];
    k -= w;
    if (k < h) return [x1, y0 + k, z];
    k -= h;
    if (k < w) return [x1 - k, y1, z];
    return [x0, y1 - (k - w), z];
  };
  const fill = (x0: number, y0: number, x1: number, y1: number, z: number): V3 => [x0 + R() * (x1 - x0), y0 + R() * (y1 - y0), z];
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

  for (let n = 0; n < count; n++) {
    rand[n] = R();
    accent[n] = R() < 0.03 ? 1 : 0;

    const u = R() * 2 - 1;
    const a0 = R() * Math.PI * 2;
    const s0 = Math.sqrt(1 - u * u) * Math.cbrt(R());
    set(dust, n, [Math.cos(a0) * s0 * 5.5, Math.sin(a0) * s0 * 3.2, u * 2.4]);

    if (R() < 0.2) {
      const [x, y, z] = ball(1);
      const len = Math.hypot(x, y, z) || 1;
      const rr = 0.38 + R() * 0.06;
      set(orbit, n, [(x / len) * rr, (y / len) * rr, (z / len) * rr]);
    } else {
      set(orbit, n, ringPoint(RINGS[n % RINGS.length], R() * Math.PI * 2, (R() - 0.5) * 0.05));
    }

    if (R() < 0.34) {
      const node = NODES[(R() * NODES.length) | 0].pos;
      const [x, y, z] = ball(0.16);
      const v: V3 = [node[0] + x, node[1] + y, node[2] + z];
      set(c0, n, v);
      set(c1, n, v);
    } else {
      const [ia, ib] = EDGES[(R() * EDGES.length) | 0];
      const j = () => (R() - 0.5) * 0.05;
      const A = NODES[ia].pos;
      const B = NODES[ib].pos;
      set(c0, n, [A[0] + j(), A[1] + j(), A[2] + j()]);
      set(c1, n, [B[0] + j(), B[1] + j(), B[2] + j()]);
      packet[n] = R() < 0.22 ? 1 : 0;
    }

    // Dashboard, with a build order: frame → sidebar → KPI cards → bars (grow) → line (draws) → pipeline → automation card
    const k = R();
    let p: V3;
    if (k < 0.17) {
      p = onRect(-1.7, -1.1, 1.7, 1.1, 0);
      seq[n] = 0.05;
    } else if (k < 0.21) {
      p = [lerp(-1.7, 1.7, R()), 0.82, 0];
      seq[n] = 0.12;
    } else if (k < 0.3) {
      p = fill(-1.62, -1.02, -1.18, 0.74, 0.08);
      seq[n] = 0.2;
    } else if (k < 0.44) {
      const c = (R() * 3) | 0;
      const x0 = -1.0 + c * 0.86;
      p = onRect(x0, 0.32, x0 + 0.76, 0.68, 0.18);
      seq[n] = 0.3 + c * 0.06;
    } else if (k < 0.58) {
      const b = (R() * 7) | 0;
      const hgt = [0.25, 0.38, 0.3, 0.46, 0.4, 0.52, 0.6][b];
      const x0 = -1.0 + b * 0.17;
      p = fill(x0, -0.35, x0 + 0.11, -0.35 + hgt, 0.3);
      seq[n] = 0.5 + b * 0.04;
      barBase[n] = -0.35;
    } else if (k < 0.7) {
      const tt = R();
      const x = lerp(0.35, 1.55, tt);
      p = [x, -0.3 + tt * 0.38 + Math.sin(tt * 9) * 0.09 + (R() - 0.5) * 0.025, 0.3];
      seq[n] = 0.55 + tt * 0.3;
    } else if (k < 0.86) {
      const row = (R() * 4) | 0;
      p = [lerp(-1.0, 1.55, R()), -0.55 - row * 0.15, 0.15];
      seq[n] = 0.75 + row * 0.04;
    } else {
      p = R() < 0.7 ? onRect(0.9, 0.75, 1.95, 1.25, 0.6) : fill(1.0, 0.95, 1.6, 1.0, 0.6);
      seq[n] = 0.92;
    }
    set(dash, n, p);
    set(fun, n, [R() * Math.PI * 2, R(), R()]);

    const dz = R() * 2 - 1;
    const da = R() * Math.PI * 2;
    const dr = Math.sqrt(1 - dz * dz);
    set(dir, n, [Math.cos(da) * dr, Math.sin(da) * dr, dz]);
  }
  return { dust, orbit, c0, c1, dash, fun, dir, rand, accent, packet, seq, barBase };
}

const TRANSITION_S = 1.25;

/**
 * Graphite particles that move between five scenes. `scene` is a MotionValue holding the
 * requested scene index (0–4); labels in `labels` (keyed by anchor id) are pinned on screen.
 */
export function SystemSculpture({
  scene,
  labels,
  className,
}: {
  scene: MotionValue<number>;
  labels: { current: Record<string, HTMLElement | null> };
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useThreeScene(ref, ({ THREE, scene: world, camera, renderer, reduce, pointer }) => {
    const count = window.innerWidth < 768 ? 7000 : 15000;
    const s = buildSystemShapes(count);
    const geometry = new THREE.BufferGeometry();
    const attr = (name: string, arr: Float32Array, size: number) => geometry.setAttribute(name, new THREE.BufferAttribute(arr, size));
    attr("position", s.dust, 3);
    attr("aB", s.orbit, 3);
    attr("aC0", s.c0, 3);
    attr("aC1", s.c1, 3);
    attr("aD", s.dash, 3);
    attr("aE", s.fun, 3);
    attr("aDir", s.dir, 3);
    attr("aRand", s.rand, 1);
    attr("aAccent", s.accent, 1);
    attr("aPacket", s.packet, 1);
    attr("aSeq", s.seq, 1);
    attr("aBarBase", s.barBase, 1);
    geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 50);

    const start = Math.round(scene.get());
    const uniforms = {
      uFrom: { value: start },
      uTo: { value: start },
      uT: { value: 1 },
      uTime: { value: 0 },
      uSize: { value: 15 },
      uPixelRatio: { value: renderer.getPixelRatio() },
      uMotion: { value: reduce ? 0 : 1 },
      uBuild: { value: start === 3 ? 1 : 0 },
      uPointer: { value: new THREE.Vector3(0, 0, 100) },
      uPointerStrength: { value: 0 },
      uInk: { value: new THREE.Color() },
      uAccent: { value: new THREE.Color() },
    };
    const material = new THREE.ShaderMaterial({ vertexShader: SCULPTURE_VERT, fragmentShader: SCULPTURE_FRAG, uniforms, transparent: true, depthWrite: false });
    const points = new THREE.Points(geometry, material);
    const group = new THREE.Group();
    group.add(points);
    world.add(group);

    const anchors = SCULPTURE_ANCHORS.map((a, i) => ({ ...a, v: new THREE.Vector3(...a.pos), order: SCULPTURE_ANCHORS.filter((b, j) => b.stage === a.stage && j < i).length }));
    const tmp = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();
    const ndc = new THREE.Vector2();
    const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
    const hit = new THREE.Vector3();
    let size = { w: 1, h: 1 };
    let base = { x: 0, y: 0, scale: 1 };
    const cam = { ...SHOTS[start] };
    let tiltX = 0;
    let tiltY = 0;
    let settled = 0; // seconds since the current scene finished arriving
    let pending: number | null = null;

    return {
      update(t, dt) {
        uniforms.uTime.value = t;

        // Scene state machine: timed transitions, retargeted early or queued late
        const want = Math.max(0, Math.min(4, Math.round(scene.get())));
        if (want !== uniforms.uTo.value) {
          if (uniforms.uT.value >= 1) {
            uniforms.uFrom.value = uniforms.uTo.value;
            uniforms.uTo.value = want;
            uniforms.uT.value = 0;
            settled = 0;
          } else if (uniforms.uT.value < 0.35) {
            uniforms.uTo.value = want; // still leaving: just change destination
          } else {
            pending = want;
          }
        } else pending = null;
        if (uniforms.uT.value < 1) {
          uniforms.uT.value = reduce ? 1 : Math.min(1, uniforms.uT.value + dt / TRANSITION_S);
        } else {
          settled += dt;
          if (pending !== null && pending !== uniforms.uTo.value) {
            uniforms.uFrom.value = uniforms.uTo.value;
            uniforms.uTo.value = pending;
            uniforms.uT.value = 0;
            settled = 0;
            pending = null;
          }
        }
        const to = uniforms.uTo.value;
        // Dashboard assembles after it arrives; resets when you leave
        if (to !== 3) uniforms.uBuild.value = easeTo(uniforms.uBuild.value, 0, dt, 3);
        else if (reduce) uniforms.uBuild.value = 1;
        else if (uniforms.uT.value > 0.6) uniforms.uBuild.value = Math.min(1, uniforms.uBuild.value + dt / 1.6);

        // Camera choreography
        const shot = SHOTS[to];
        cam.z = easeTo(cam.z, shot.z, dt, 1.8);
        cam.rx = easeTo(cam.rx, shot.rx, dt, 1.8);
        cam.ry = easeTo(cam.ry, shot.ry, dt, 1.8);
        camera.position.z = cam.z;

        const p = pointer.current;
        tiltX = easeTo(tiltX, p && !reduce ? -p.y * 0.18 : 0, dt, 2.5);
        tiltY = easeTo(tiltY, p && !reduce ? p.x * 0.28 : 0, dt, 2.5);
        const sway = reduce || to === 3 ? 0 : Math.sin(t * 0.18) * 0.28;
        points.rotation.set(cam.rx + tiltX, cam.ry + sway + tiltY, 0);
        group.position.set(base.x, base.y, 0);
        group.scale.setScalar(base.scale);
        group.updateMatrixWorld();
        camera.updateMatrixWorld();

        let strength = 0;
        if (p && !reduce) {
          ndc.set(p.x, p.y);
          raycaster.setFromCamera(ndc, camera);
          if (raycaster.ray.intersectPlane(plane, hit)) {
            uniforms.uPointer.value.copy(points.worldToLocal(hit));
            strength = 1;
          }
        }
        uniforms.uPointerStrength.value = easeTo(uniforms.uPointerStrength.value, strength, dt, 3);

        // Labels: fade out as a scene departs; arrive one by one once the next settles
        const leaving = uniforms.uFrom.value;
        for (const a of anchors) {
          const el = labels.current[a.id];
          if (!el) continue;
          let vis = 0;
          if (a.stage === to && uniforms.uT.value >= 1) vis = Math.min(1, Math.max(0, (settled - 0.1 - a.order * 0.12) / 0.4));
          else if (a.stage === leaving && uniforms.uT.value < 0.25) vis = 1 - uniforms.uT.value / 0.25;
          if (vis <= 0.01) {
            el.style.opacity = "0";
            continue;
          }
          tmp.copy(a.v).applyMatrix4(points.matrixWorld).project(camera);
          const half = el.offsetWidth / 2 + 8;
          const x = Math.min(Math.max(((tmp.x + 1) / 2) * size.w, half), size.w - half);
          const y = ((1 - tmp.y) / 2) * size.h;
          const e = 1 - Math.pow(1 - vis, 3);
          el.style.opacity = String(e);
          el.style.transform = `translate3d(${x.toFixed(1)}px, ${(y + (1 - e) * 10).toFixed(1)}px, 0) translate(-50%, -50%) scale(${(0.92 + e * 0.08).toFixed(3)})`;
        }
      },
      resize(w, h) {
        size = { w, h };
        const viewH = 2 * 6.5 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
        const viewW = viewH * (w / h);
        // The scene owns its own box: centre it and fit the widest form (≈4.3 × 3.6 units) with breathing room
        base = { x: 0, y: 0, scale: Math.min(1.05, (viewW * 0.86) / 4.3, (viewH * 0.86) / 3.6) };
      },
      colors({ ink, accent }) {
        uniforms.uInk.value.copy(ink);
        uniforms.uAccent.value.copy(accent);
      },
      dispose() {
        geometry.dispose();
        material.dispose();
      },
    };
  });

  return <div ref={ref} aria-hidden className={cn("pointer-events-none absolute inset-0", className)} />;
}

