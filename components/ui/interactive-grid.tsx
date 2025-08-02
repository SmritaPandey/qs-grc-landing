import { motion } from "framer-motion"
import { useMemo } from "react"

interface InteractiveGridProps {
  intensity?: number
  color?: string
  animated?: boolean
}

export function InteractiveGrid({ 
  intensity = 0.2, 
  color = "cyan", 
  animated = true 
}: InteractiveGridProps) {
  const gridPattern = useMemo(() => {
    const colorMap = {
      cyan: "6, 182, 212",
      blue: "59, 130, 246", 
      purple: "147, 51, 234",
      green: "34, 197, 94",
      red: "239, 68, 68",
      orange: "249, 115, 22"
    }
    
    return `linear-gradient(rgba(${colorMap[color as keyof typeof colorMap] || colorMap.cyan}, ${intensity}) 1px, transparent 1px),
            linear-gradient(90deg, rgba(${colorMap[color as keyof typeof colorMap] || colorMap.cyan}, ${intensity}) 1px, transparent 1px)`
  }, [color, intensity])

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: gridPattern,
        backgroundSize: "50px 50px",
      }}
      animate={animated ? {
        backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
      } : {}}
      transition={animated ? {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      } : {}}
    />
  )
}
