/** Small inline SVGs for the Halloween layer. Colours lean on the brand: navy ink, crimson, beak orange. */

export function BatIcon({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <svg viewBox="0 0 64 30" width={size} height={(size * 30) / 64} className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M32 9c-1.3 0-2.2.9-2.8 2.1L28.4 8l-.9 3.6C24.2 6.9 18.3 3.9 11 4c2.6 2.6 3.6 6.4 2.8 9.6-3-1.9-7.1-2-10.3-.2 3.9 1 6.9 3.9 7.7 7.7 3.1-2.6 7.8-3.3 11.6-1.5 2.4 1.1 4.3 3.8 9.2 4.4 4.9-.6 6.8-3.3 9.2-4.4 3.8-1.8 8.5-1.1 11.6 1.5.8-3.8 3.8-6.7 7.7-7.7-3.2-1.8-7.3-1.7-10.3.2-.8-3.2.2-7 2.8-9.6-7.3-.1-13.2 2.9-16.5 7.6L35.6 8l-.8 3.1C34.2 9.9 33.3 9 32 9z"
      />
    </svg>
  );
}

export function PumpkinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path d="M20 9c0-3 1.2-5.3 3.6-6.4l1.2 2C23 5.6 22.2 7.2 22.3 9.4z" fill="#3f5a2a" />
      <ellipse cx="12.5" cy="23" rx="9" ry="12" fill="#d9590f" />
      <ellipse cx="27.5" cy="23" rx="9" ry="12" fill="#d9590f" />
      <ellipse cx="20" cy="23" rx="9.5" ry="13" fill="#ec6f15" />
      <path className="hw-face" d="M13 19l3.4-3.6 2 4.3zM27 19l-3.4-3.6-2 4.3zM12.5 26c3 3.4 12 3.4 15 0-1.4.4-2.6.5-3.6.4l-.9 1.6-1.3-1.5c-1.1.1-2.3.1-3.4 0l-1.3 1.5-.9-1.6c-1.1.1-2.3 0-3.6-.4z" fill="#1b1206" />
    </svg>
  );
}

export function GhostIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 48" className={className} aria-hidden>
      <path
        d="M20 2C10 2 4 9.5 4 19v25l5-4 5 4 6-4 6 4 5-4 5 4V19C36 9.5 30 2 20 2z"
        fill="currentColor"
      />
      <ellipse cx="14.5" cy="19" rx="2.6" ry="3.6" fill="#0f172a" />
      <ellipse cx="25.5" cy="19" rx="2.6" ry="3.6" fill="#0f172a" />
      <ellipse cx="20" cy="29" rx="3" ry="3.8" fill="#0f172a" />
    </svg>
  );
}

export function SpiderIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 36" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round">
        <path d="M15 15 7 8 3 12M15 18 5 16 2 21M15 21 7 25 5 31M17 23l-5 6-1 5" />
        <path d="M25 15l8-7 4 4M25 18l10-2 3 5M25 21l8 4 2 6M23 23l5 6 1 5" />
      </g>
      <ellipse cx="20" cy="20" rx="6.5" ry="7.5" fill="currentColor" />
      <circle cx="20" cy="11.5" r="4.2" fill="currentColor" />
      <circle cx="18.4" cy="11" r="1.1" fill="#ef4444" />
      <circle cx="21.6" cy="11" r="1.1" fill="#ef4444" />
    </svg>
  );
}

export function Tombstone({ text, className }: { text: string; className?: string }) {
  return (
    <svg viewBox="0 0 60 64" className={className} aria-hidden>
      <path d="M6 64V24C6 11 17 2 30 2s24 9 24 22v40z" fill="currentColor" />
      <text x="30" y="30" textAnchor="middle" fontSize="11" fontWeight="700" fontFamily="Inter Tight, Inter, sans-serif" fill="rgba(255,255,255,.28)" letterSpacing="1">
        {text}
      </text>
      <path d="M18 40h24M18 47h18" stroke="rgba(255,255,255,.14)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
