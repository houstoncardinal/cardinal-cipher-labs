"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 8 * position} -${189 + i * 10}C-${
            380 - i * 8 * position
        } -${189 + i * 10} -${312 - i * 8 * position} ${216 - i * 10} ${
            152 - i * 8 * position
        } ${343 - i * 10}C${616 - i * 8 * position} ${470 - i * 10} ${
            684 - i * 8 * position
        } ${875 - i * 10} ${684 - i * 8 * position} ${875 - i * 10}`,
        width: 0.4 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg
                className="w-full h-full text-red-600"
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.11 + path.id * 0.018}
                        initial={{ pathLength: 0.3, opacity: 0.135 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.135, 0.315, 0.135],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 25 + Math.random() * 15,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="absolute inset-0 overflow-hidden -z-10">
            <FloatingPaths position={1} />
            <FloatingPaths position={-1} />
        </div>
    );
}
