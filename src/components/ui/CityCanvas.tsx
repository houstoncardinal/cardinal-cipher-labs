import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// Building component with windows
function Building({ position, width, height, depth, windowColor = '#1a1a1a' }: { 
  position: [number, number, number]; 
  width: number; 
  height: number; 
  depth: number;
  windowColor?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Generate windows
  const windows = useMemo(() => {
    const wins: { x: number; y: number; z: number; lit: boolean }[] = [];
    const floors = Math.floor(height / 3);
    const windowsPerFloor = Math.floor(width / 2);
    
    for (let floor = 0; floor < floors; floor++) {
      for (let w = 0; w < windowsPerFloor; w++) {
        // Front and back
        wins.push({
          x: (w - windowsPerFloor / 2 + 0.5) * 1.8,
          y: -height / 2 + floor * 3 + 2,
          z: depth / 2 + 0.01,
          lit: Math.random() > 0.4
        });
        wins.push({
          x: (w - windowsPerFloor / 2 + 0.5) * 1.8,
          y: -height / 2 + floor * 3 + 2,
          z: -depth / 2 - 0.01,
          lit: Math.random() > 0.4
        });
      }
    }
    return wins;
  }, [width, height, depth]);

  return (
    <group position={position}>
      {/* Main building body */}
      <mesh ref={meshRef} position={[0, height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[width, height, depth]} />
        <meshStandardMaterial 
          color="#e8e8e8" 
          roughness={0.8} 
          metalness={0.1}
        />
      </mesh>
      
      {/* Windows */}
      {windows.map((win, i) => (
        <mesh key={i} position={[win.x, win.y, win.z]}>
          <planeGeometry args={[1.2, 1.8]} />
          <meshStandardMaterial 
            color={win.lit ? '#fbbf24' : windowColor}
            emissive={win.lit ? '#fbbf24' : '#000000'}
            emissiveIntensity={win.lit ? 0.3 : 0}
            roughness={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

// Glass tower building
function GlassTower({ position, height }: { position: [number, number, number]; height: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });

  return (
    <group position={position}>
      {/* Glass facade */}
      <mesh ref={meshRef} position={[0, height / 2, 0]} castShadow>
        <boxGeometry args={[4, height, 4]} />
        <meshPhysicalMaterial 
          color="#f0f0f0"
          roughness={0.1}
          metalness={0.2}
          transmission={0.3}
          thickness={0.5}
          clearcoat={1}
        />
      </mesh>
      
      {/* Window frames */}
      {Array.from({ length: Math.floor(height / 4) }).map((_, i) => (
        <mesh key={i} position={[0, i * 4 + 2, 2.01]}>
          <planeGeometry args={[3.5, 3]} />
          <meshStandardMaterial 
            color="#fbbf24"
            emissive="#fbbf24"
            emissiveIntensity={0.2}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
    </group>
  );
}

// Animated car
function Car({ position, color }: { position: [number, number, number]; color: string }) {
  const carRef = useRef<THREE.Group>(null);
  
  useFrame((_, delta) => {
    if (carRef.current) {
      carRef.current.position.x += delta * 15;
      if (carRef.current.position.x > 50) {
        carRef.current.position.x = -50;
      }
    }
  });

  return (
    <group ref={carRef} position={position}>
      {/* Car body */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <boxGeometry args={[3, 0.6, 1.5]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
      </mesh>
      {/* Car top */}
      <mesh position={[-0.3, 0.7, 0]} castShadow>
        <boxGeometry args={[1.5, 0.5, 1.3]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
      </mesh>
      {/* Headlights */}
      <mesh position={[1.5, 0.3, 0.5]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="#ffffcc" emissive="#ffffcc" emissiveIntensity={1} />
      </mesh>
      <mesh position={[1.5, 0.3, -0.5]}>
        <sphereGeometry args={[0.15, 8, 8]} />
        <meshStandardMaterial color="#ffffcc" emissive="#ffffcc" emissiveIntensity={1} />
      </mesh>
      {/* Taillights */}
      <mesh position={[-1.5, 0.3, 0.5]}>
        <boxGeometry args={[0.1, 0.2, 0.3]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.8} />
      </mesh>
      <mesh position={[-1.5, 0.3, -0.5]}>
        <boxGeometry args={[0.1, 0.2, 0.3]} />
        <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

// Street lamp
function StreetLamp({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Pole */}
      <mesh position={[0, 3, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.15, 6, 8]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.5} metalness={0.8} />
      </mesh>
      {/* Lamp arm */}
      <mesh position={[1, 5.8, 0]} rotation={[0, 0, Math.PI / 4]} castShadow>
        <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.5} metalness={0.8} />
      </mesh>
      {/* Light */}
      <mesh position={[1.7, 5.6, 0]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshStandardMaterial 
          color="#fff8dc" 
          emissive="#fff8dc" 
          emissiveIntensity={1}
          transparent
          opacity={0.9}
        />
      </mesh>
      {/* Point light */}
      <pointLight position={[1.7, 5.6, 0]} intensity={5} distance={15} color="#fff8dc" />
    </group>
  );
}

// Tree
function Tree({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Trunk */}
      <mesh position={[0, 1, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.3, 2, 8]} />
        <meshStandardMaterial color="#5d4037" roughness={0.9} />
      </mesh>
      {/* Foliage */}
      <mesh position={[0, 3, 0]} castShadow>
        <coneGeometry args={[1.5, 3, 8]} />
        <meshStandardMaterial color="#2e7d32" roughness={0.8} />
      </mesh>
      <mesh position={[0, 4.5, 0]} castShadow>
        <coneGeometry args={[1.2, 2.5, 8]} />
        <meshStandardMaterial color="#388e3c" roughness={0.8} />
      </mesh>
    </group>
  );
}

// Cloud
function Cloud({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.5, 16, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={1} />
      </mesh>
      <mesh position={[1.5, 0.3, 0]}>
        <sphereGeometry args={[1.2, 16, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={1} />
      </mesh>
      <mesh position={[-1.2, 0.2, 0.3]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={1} />
      </mesh>
      <mesh position={[0.5, 0.8, 0.5]}>
        <sphereGeometry args={[0.8, 16, 16]} />
        <meshStandardMaterial color="#ffffff" roughness={1} />
      </mesh>
    </group>
  );
}

// Main city scene
function CityScene() {
  const groupRef = useRef<THREE.Group>(null);
  
  // Generate building positions - closer and more visible
  const buildings = useMemo(() => {
    const b: { position: [number, number, number]; width: number; height: number; depth: number; type: string }[] = [];
    
    // Left side buildings - closer to camera
    for (let i = 0; i < 10; i++) {
      b.push({
        position: [-45 + i * 9, 0, 5 + Math.random() * 8],
        width: 6 + Math.random() * 4,
        height: 25 + Math.random() * 35,
        depth: 6 + Math.random() * 4,
        type: 'building'
      });
    }
    
    // Right side buildings - closer to camera
    for (let i = 0; i < 10; i++) {
      b.push({
        position: [45 - i * 9, 0, 5 + Math.random() * 8],
        width: 6 + Math.random() * 4,
        height: 30 + Math.random() * 30,
        depth: 6 + Math.random() * 4,
        type: 'building'
      });
    }
    
    // Center buildings - taller ones in middle distance
    for (let i = 0; i < 6; i++) {
      b.push({
        position: [-25 + i * 10, 0, -5 + Math.random() * 10],
        width: 7 + Math.random() * 5,
        height: 40 + Math.random() * 40,
        depth: 7 + Math.random() * 5,
        type: i === 3 ? 'glass' : 'building'
      });
    }
    
    return b;
  }, []);

  // Generate street lamps - closer
  const streetLamps = useMemo(() => {
    const lamps: [number, number, number][] = [];
    for (let i = -6; i <= 6; i++) {
      lamps.push([i * 12, 0, 10]);
      lamps.push([i * 12, 0, -10]);
    }
    return lamps;
  }, []);

  // Generate trees - closer
  const trees = useMemo(() => {
    const t: [number, number, number][] = [];
    for (let i = 0; i < 15; i++) {
      t.push([-50 + Math.random() * 25, 0, 15 + Math.random() * 8]);
      t.push([40 + Math.random() * 20, 0, 15 + Math.random() * 8]);
    }
    return t;
  }, []);

  // Generate clouds - lower in sky
  const clouds = useMemo(() => {
    const c: { position: [number, number, number]; scale: number }[] = [];
    for (let i = 0; i < 10; i++) {
      c.push({
        position: [-40 + i * 12, 30 + Math.random() * 15, -20 - Math.random() * 15],
        scale: 2 + Math.random() * 2
      });
    }
    return c;
  }, []);

  return (
    <group ref={groupRef}>
      {/* Ground plane */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]} receiveShadow>
        <planeGeometry args={[200, 100]} />
        <meshStandardMaterial color="#d0d0d0" roughness={0.9} />
      </mesh>
      
      {/* Road */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]}>
        <planeGeometry args={[200, 12]} />
        <meshStandardMaterial color="#404040" roughness={0.8} />
      </mesh>
      
      {/* Road lines */}
      {Array.from({ length: 20 }).map((_, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[-90 + i * 10, 0.02, 0]}>
          <planeGeometry args={[4, 0.2]} />
          <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.3} />
        </mesh>
      ))}
      
      {/* Sidewalks */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, 8]}>
        <planeGeometry args={[200, 4]} />
        <meshStandardMaterial color="#b0b0b0" roughness={0.95} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, -8]}>
        <planeGeometry args={[200, 4]} />
        <meshStandardMaterial color="#b0b0b0" roughness={0.95} />
      </mesh>
      
      {/* Buildings */}
      {buildings.map((b, i) => (
        b.type === 'glass' ? (
          <GlassTower key={i} position={b.position} height={b.height} />
        ) : (
          <Building key={i} position={b.position} width={b.width} height={b.height} depth={b.depth} />
        )
      ))}
      
      {/* Street lamps */}
      {streetLamps.map((pos, i) => (
        <StreetLamp key={i} position={pos} />
      ))}
      
      {/* Trees */}
      {trees.map((pos, i) => (
        <Tree key={i} position={pos} />
      ))}
      
      {/* Clouds */}
      {clouds.map((c, i) => (
        <Float key={i} speed={0.5} rotationIntensity={0.1} floatIntensity={0.5}>
          <Cloud position={c.position} scale={c.scale} />
        </Float>
      ))}
      
      {/* Cars */}
      <Car position={[-30, 0, 3]} color="#2563eb" />
      <Car position={[20, 0, -3]} color="#dc2626" />
      <Car position={[40, 0, 3]} color="#059669" />
      
      {/* Ambient and directional lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight 
        position={[50, 80, 30]} 
        intensity={1.2} 
        castShadow 
        shadow-mapSize={[2048, 2048]}
        shadow-camera-far={200}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />
      
      {/* Soft shadows */}
      <ContactShadows 
        position={[0, 0, 0]} 
        opacity={0.4} 
        scale={100} 
        blur={2} 
        far={50} 
      />
    </group>
  );
}

// Main Canvas component
export function CityCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 8, 25], fov: 60 }}
      gl={{ antialias: true }}
      style={{ background: 'white' }}
    >
      <CityScene />
    </Canvas>
  );
}
