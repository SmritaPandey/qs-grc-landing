import { motion } from "framer-motion"
import { ReactNode } from "react"

interface FloatingElementProps {
  children: ReactNode
  className?: string
  delay?: number
  amplitude?: number
  duration?: number
}

export function FloatingElement({ 
  children, 
  className = "", 
  delay = 0, 
  amplitude = 20,
  duration = 6 
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      animate={{
        y: [-amplitude, amplitude, -amplitude],
        x: [-amplitude/2, amplitude/2, -amplitude/2],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}
