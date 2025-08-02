import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  speed: number
  direction: number
}

interface ParticleSystemProps {
  count?: number
  colors?: string[]
  maxSize?: number
  speed?: number
}

export function ParticleSystem({ 
  count = 30, 
  colors = ["cyan", "blue", "purple"], 
  maxSize = 4,
  speed = 1 
}: ParticleSystemProps) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const newParticles: Particle[] = []
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * maxSize + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * speed + 0.5,
        direction: Math.random() * 360
      })
    }
    setParticles(newParticles)
  }, [count, colors, maxSize, speed])

  const colorMap = {
    cyan: "#06b6d4",
    blue: "#3b82f6", 
    purple: "#8b5cf6",
    green: "#10b981",
    red: "#ef4444",
    orange: "#f97316"
  }

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            width: particle.size,
            height: particle.size,
            backgroundColor: colorMap[particle.color as keyof typeof colorMap] || colorMap.cyan,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            filter: `blur(${particle.size * 0.3}px)`,
          }}
          animate={{
            x: [
              0,
              Math.cos(particle.direction * Math.PI / 180) * 100,
              Math.cos((particle.direction + 60) * Math.PI / 180) * 80,
              0
            ],
            y: [
              0,
              Math.sin(particle.direction * Math.PI / 180) * 100, 
              Math.sin((particle.direction + 60) * Math.PI / 180) * 80,
              0
            ],
            opacity: [0.6, 0.9, 0.6],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 15 / particle.speed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  )
}
