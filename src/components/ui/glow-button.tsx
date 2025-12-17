import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GlowButtonProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
  isActive?: boolean;
  color?: 'green' | 'blue' | 'purple' | 'orange' | 'pink' | 'red';
  disabled?: boolean;
}

const colorClasses = {
  green: {
    bg: 'from-green-500/20 to-emerald-500/20',
    border: 'border-green-500/30',
    glow: 'shadow-[0_0_30px_rgba(34,197,94,0.3)] hover:shadow-[0_0_50px_rgba(34,197,94,0.5)]',
    icon: 'text-green-500',
    active: 'bg-green-500/20 border-green-500 shadow-[0_0_40px_rgba(34,197,94,0.6)]',
  },
  blue: {
    bg: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
    glow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]',
    icon: 'text-blue-500',
    active: 'bg-blue-500/20 border-blue-500 shadow-[0_0_40px_rgba(59,130,246,0.6)]',
  },
  purple: {
    bg: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30',
    glow: 'shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)]',
    icon: 'text-purple-500',
    active: 'bg-purple-500/20 border-purple-500 shadow-[0_0_40px_rgba(168,85,247,0.6)]',
  },
  orange: {
    bg: 'from-orange-500/20 to-amber-500/20',
    border: 'border-orange-500/30',
    glow: 'shadow-[0_0_30px_rgba(249,115,22,0.3)] hover:shadow-[0_0_50px_rgba(249,115,22,0.5)]',
    icon: 'text-orange-500',
    active: 'bg-orange-500/20 border-orange-500 shadow-[0_0_40px_rgba(249,115,22,0.6)]',
  },
  pink: {
    bg: 'from-pink-500/20 to-rose-500/20',
    border: 'border-pink-500/30',
    glow: 'shadow-[0_0_30px_rgba(236,72,153,0.3)] hover:shadow-[0_0_50px_rgba(236,72,153,0.5)]',
    icon: 'text-pink-500',
    active: 'bg-pink-500/20 border-pink-500 shadow-[0_0_40px_rgba(236,72,153,0.6)]',
  },
  red: {
    bg: 'from-red-500/20 to-rose-500/20',
    border: 'border-red-500/30',
    glow: 'shadow-[0_0_30px_rgba(239,68,68,0.3)] hover:shadow-[0_0_50px_rgba(239,68,68,0.5)]',
    icon: 'text-red-500',
    active: 'bg-red-500/20 border-red-500 shadow-[0_0_40px_rgba(239,68,68,0.6)]',
  },
};

export function GlowButton({
  icon: Icon,
  title,
  description,
  onClick,
  isActive = false,
  color = 'green',
  disabled = false,
}: GlowButtonProps) {
  const colors = colorClasses[color];

  return (
    <motion.button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileHover={disabled ? {} : { scale: 1.05, y: -5 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      className={cn(
        'relative p-6 rounded-xl border-2 backdrop-blur-sm',
        'transition-all duration-300 cursor-pointer',
        'transform-gpu perspective-1000',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        isActive ? colors.active : `${colors.border} ${colors.glow}`,
        disabled ? 'grayscale' : ''
      )}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Gradient background */}
      <div
        className={cn(
          'absolute inset-0 rounded-xl bg-gradient-to-br opacity-50',
          colors.bg
        )}
        style={{ transform: 'translateZ(-10px)' }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl blur-xl"
        animate={
          isActive
            ? {
                opacity: [0.3, 0.6, 0.3],
              }
            : {}
        }
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: isActive
            ? `radial-gradient(circle at center, ${color === 'green' ? 'rgba(34,197,94,0.4)' : 'rgba(59,130,246,0.4)'}, transparent)`
            : 'transparent',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Icon with pulsing effect */}
        <motion.div
          className={cn('mb-4', colors.icon)}
          animate={
            isActive
              ? {
                  scale: [1, 1.1, 1],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Icon size={48} strokeWidth={1.5} />
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>

        {/* Active indicator */}
        {isActive && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className={cn(
              'absolute -top-2 -right-2 w-6 h-6 rounded-full',
              'flex items-center justify-center',
              colors.icon,
              'bg-background border-2',
              colors.border
            )}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            >
              ✓
            </motion.div>
          </motion.div>
        )}
      </div>
    </motion.button>
  );
}
