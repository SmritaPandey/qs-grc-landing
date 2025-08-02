"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface ParallaxBackgroundProps {
  currentSlide: number
}

export function ParallaxBackground({ currentSlide }: ParallaxBackgroundProps) {
  const [backgroundElements, setBackgroundElements] = useState<Array<{
    id: number;
    x: number;
    y: number;
    size: number;
    speed: number;
    color: string;
  }>>([])

  useEffect(() => {
    const elements = []
    for (let i = 0; i < 15; i++) {
      elements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 0.5 + 0.1,
        color: ["cyan", "blue", "purple", "indigo"][Math.floor(Math.random() * 4)],
      })
    }
    setBackgroundElements(elements)
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

      {/* Floating Particles */}
      {backgroundElements.length > 0 && backgroundElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full bg-${element.color}-400/20`}
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
      ))}

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
    </div>
  )
}
