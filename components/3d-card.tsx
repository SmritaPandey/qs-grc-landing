"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"

interface Card3DProps {
  children: React.ReactNode
  className?: string
  glowColor?: string
}

export function Card3D({ children, className = "", glowColor = "cyan" }: Card3DProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="relative w-full h-full bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden"
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r from-${glowColor}-500/20 to-${glowColor}-600/20 rounded-2xl opacity-0`}
          whileHover={{ opacity: 1 }}
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
