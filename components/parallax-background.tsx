"use client"

import { motion } from "framer-motion"
import { useMemo, useState, useEffect } from "react"

interface ParallaxBackgroundProps {
  currentSlide: number
}

// Deterministic random function to avoid hydration mismatch
function seededRandom(seed: number): number {
  const x = Math.sin(seed) * 10000
  return x - Math.floor(x)
}

export function ParallaxBackground({ currentSlide }: ParallaxBackgroundProps) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const backgroundElements = useMemo(() => {
    const elements = []
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        x: seededRandom(i * 123) * 100,
        y: seededRandom(i * 456) * 100,
        size: seededRandom(i * 789) * 3 + 1,
        speed: seededRandom(i * 321) * 0.5 + 0.1,
        color: ["cyan", "blue", "purple", "indigo"][Math.floor(seededRandom(i * 654) * 4)],
      })
    }
    return elements
  }, [])

  const getSlideColor = (slide: number) => {
    const colors = [
      "from-slate-900 via-blue-900 to-indigo-900", // Slide 1
      "from-slate-900 via-red-900 to-orange-900", // Slide 2
      "from-slate-900 via-cyan-900 to-blue-900", // Slide 3
      "from-slate-900 via-purple-900 to-indigo-900", // Slide 4
      "from-slate-900 via-green-900 to-emerald-900", // Slide 5
      "from-slate-900 via-blue-900 to-cyan-900", // Slide 6
      "from-slate-900 via-yellow-900 to-orange-900", // Slide 7
      "from-slate-900 via-purple-900 to-pink-900", // Slide 8
      "from-slate-900 via-cyan-900 to-blue-900", // Slide 9
      "from-slate-900 via-indigo-900 to-purple-900", // Slide 10
      "from-slate-900 via-blue-900 to-purple-900", // Slide 11
    ]
    return colors[slide] || colors[0]
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dynamic Background Gradient */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${getSlideColor(currentSlide)}`}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
          style={{
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Particles (safe class mapping) */}
      {isClient && backgroundElements.map((element) => {
        const colorClass = element.color === 'cyan' ? 'bg-cyan-400/20' : element.color === 'blue' ? 'bg-blue-400/20' : element.color === 'purple' ? 'bg-purple-400/20' : 'bg-indigo-400/20'
        return (
          <motion.div
            key={element.id}
            className={`absolute rounded-full ${colorClass}`}
            style={{
              left: `${element.x}%`,
              top: `${element.y}%`,
              width: `${element.size}px`,
              height: `${element.size}px`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4 + element.speed * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: element.id * 0.2,
            }}
          />
        )
      })}

      {/* Large Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, -25, 0],
          y: [0, 15, 0],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 3,
        }}
      />

      {/* Optional decorative parallax cards (could be replaced with GRC imagery) */}
      <motion.div
        className="absolute left-4 bottom-8 w-48 h-28 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
      />
  {/** Removed top-right decorative card per request **/}
    </div>
  )
}
