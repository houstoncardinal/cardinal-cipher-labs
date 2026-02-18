import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"

const Dithering = lazy(() => 
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function HeroDitheringCard() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className="w-full relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-[48px] border border-gray-200 bg-card shadow-sm min-h-[600px] flex flex-col items-center justify-center duration-500">
           <Suspense fallback={<div className="absolute inset-0 bg-gray-100" />}>
          <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-multiply">
            <Dithering
              colorBack="#00000000" // Transparent
              colorFront="#DC2626"  // Red accent
              shape="warp"
              type="4x4"
              speed={isHovered ? 0.6 : 0.2}
              className="size-full"
              minPixelRatio={1}
            />
          </div>
        </Suspense>

        {/* This component is used as a background - content goes in Hero.tsx */}
      </div>
    </div>
  )
}
