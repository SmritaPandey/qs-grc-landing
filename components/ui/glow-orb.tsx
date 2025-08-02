import { motion } from "framer-motion"

interface GlowOrbProps {
  size?: number
  color?: string
  intensity?: number
  className?: string
}

export function GlowOrb({ 
  size = 200, 
  color = "cyan", 
  intensity = 0.3, 
  className = "" 
}: GlowOrbProps) {
  const colorMap = {
    cyan: "from-cyan-400 to-cyan-600",
    blue: "from-blue-400 to-blue-600", 
    purple: "from-purple-400 to-purple-600",
    green: "from-green-400 to-green-600",
    orange: "from-orange-400 to-orange-600",
  }

  return (
    <motion.div
      className={`absolute rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${colorMap[color as keyof typeof colorMap] || colorMap.cyan})`,
        opacity: intensity,
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [intensity, intensity * 1.5, intensity],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}
