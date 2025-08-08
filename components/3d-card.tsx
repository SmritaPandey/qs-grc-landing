"use client"

import type React from "react"
import { motion, useReducedMotion } from "framer-motion"
import { useMemo, useState } from "react"

interface Card3DProps {
  children: React.ReactNode
  className?: string
  glowColor?: "cyan" | "blue" | "green" | "purple" | "indigo" | "pink" | "yellow"
}

export function Card3D({ children, className = "", glowColor = "cyan" }: Card3DProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const prefersReducedMotion = useReducedMotion()

  const glowClass = useMemo(() => {
    const map: Record<string, string> = {
      cyan: "from-cyan-500/20 to-cyan-600/20",
      blue: "from-blue-500/20 to-blue-600/20",
      green: "from-green-500/20 to-green-600/20",
      purple: "from-purple-500/20 to-purple-600/20",
      indigo: "from-indigo-500/20 to-indigo-600/20",
      pink: "from-pink-500/20 to-pink-600/20",
      yellow: "from-yellow-500/20 to-orange-500/20",
    }
    return map[glowColor] ?? map.cyan
  }, [glowColor])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const rotateXValue = (e.clientY - centerY) / 10
    const rotateYValue = (centerX - e.clientX) / 10

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
    >
      <motion.div
        className="relative w-full h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden"
        animate={prefersReducedMotion ? undefined : { rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${glowClass} rounded-2xl opacity-0`}
          whileHover={{ opacity: prefersReducedMotion ? 0.5 : 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Content */}
        <div className="relative z-10 p-6">{children}</div>

        {/* 3D depth effect */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-slate-700/20 to-slate-800/20 rounded-2xl"
          style={{ transform: "translateZ(-10px)" }}
        />
      </motion.div>
    </motion.div>
  )
}
