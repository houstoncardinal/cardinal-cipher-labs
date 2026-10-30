// POST /.netlify/functions/admin-pin  { pin: "······" }
//
// PIN login for /admin. The PIN is checked HERE, on the server — it never ships in the
// website's JavaScript. On a match, this function signs in to your Supabase admin account
// (credentials also server-side only) and returns that session, so the database keeps its
// normal "signed-in admins only" protection.
//
// Netlify → Site configuration → Environment variables:
//   ADMIN_PIN        the 6-digit PIN
//   ADMIN_EMAIL      email of your Supabase admin user (Supabase → Authentication → Users)
//   ADMIN_PASSWORD   that user's password
//   (SUPABASE_URL / SUPABASE_ANON_KEY default to the site's VITE_ variables)
import { timingSafeEqual } from "node:crypto";

export const config = {
  // Slows brute-force guessing: at most 10 attempts per minute per IP
  rateLimit: { windowLimit: 10, windowSize: 60, aggregateBy: ["ip", "domain"] },
};

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json", "cache-control": "no-store" } });

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

function samePin(a: string, b: string) {
  const x = Buffer.from(a.padEnd(32));
  const y = Buffer.from(b.padEnd(32));
  return x.length === y.length && timingSafeEqual(x, y) && a.length === b.length;
}

export default async (req: Request) => {
  if (req.method !== "POST") return json({ error: "Method not allowed" }, 405);

  const { ADMIN_PIN, ADMIN_EMAIL, ADMIN_PASSWORD } = process.env;
  const url = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
  const anon = process.env.SUPABASE_ANON_KEY ?? process.env.VITE_SUPABASE_PUBLISHABLE_KEY;
  if (!ADMIN_PIN || !ADMIN_EMAIL || !ADMIN_PASSWORD || !url || !anon) {
    return json({ error: "Admin login isn't configured yet. Add ADMIN_PIN, ADMIN_EMAIL and ADMIN_PASSWORD in Netlify." }, 503);
  }

  let pin = "";
  try {
    pin = String((await req.json())?.pin ?? "");
  } catch {
    return json({ error: "Bad request" }, 400);
  }

  if (!/^\d{4,8}$/.test(pin) || !samePin(pin, ADMIN_PIN)) {
    await sleep(700); // constant-ish delay on failures
    return json({ error: "Incorrect PIN" }, 401);
  }

  const res = await fetch(`${url}/auth/v1/token?grant_type=password`, {
    method: "POST",
    headers: { apikey: anon, "content-type": "application/json" },
    body: JSON.stringify({ email: ADMIN_EMAIL, password: ADMIN_PASSWORD }),
  });
  if (!res.ok) return json({ error: "Couldn't start an admin session. Check ADMIN_EMAIL / ADMIN_PASSWORD in Netlify." }, 502);

  const session = await res.json();
  return json({ access_token: session.access_token, refresh_token: session.refresh_token });
};
