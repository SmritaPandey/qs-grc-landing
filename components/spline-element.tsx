"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"

interface SplineElementProps {
  type: "sphere" | "torus" | "cube"
  color?: string
  size?: number
  className?: string
}

export function SplineElement({ type, color = "cyan", size = 100, className = "" }: SplineElementProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = size
    canvas.height = size

    let animationId: number
    let rotation = 0

    const animate = () => {
      ctx.clearRect(0, 0, size, size)

      const centerX = size / 2
      const centerY = size / 2

      if (type === "sphere") {
        // Draw animated sphere with gradient
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, size / 2)
        gradient.addColorStop(0, `rgba(6, 182, 212, 0.8)`)
        gradient.addColorStop(1, `rgba(6, 182, 212, 0.2)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(centerX, centerY, (size / 2) * 0.8, 0, Math.PI * 2)
        ctx.fill()

        // Add rotating highlight
        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(rotation)
        ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
        ctx.fillRect(-5, -size / 4, 10, size / 2)
        ctx.restore()
      }

      if (type === "torus") {
        // Draw animated torus
        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(rotation)

        const outerRadius = size * 0.35
        const innerRadius = size * 0.15

        ctx.strokeStyle = `rgba(6, 182, 212, 0.8)`
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.arc(0, 0, outerRadius, 0, Math.PI * 2)
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(0, 0, innerRadius, 0, Math.PI * 2)
        ctx.stroke()

        ctx.restore()
      }

      if (type === "cube") {
        // Draw animated cube with 3D effect
        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(rotation)

        const cubeSize = size * 0.6
        const offset = cubeSize * 0.2

        // Front face
        ctx.fillStyle = `rgba(6, 182, 212, 0.8)`
        ctx.fillRect(-cubeSize / 2, -cubeSize / 2, cubeSize, cubeSize)

        // Top face
        ctx.fillStyle = `rgba(6, 182, 212, 0.6)`
        ctx.beginPath()
        ctx.moveTo(-cubeSize / 2, -cubeSize / 2)
        ctx.lineTo(-cubeSize / 2 + offset, -cubeSize / 2 - offset)
        ctx.lineTo(cubeSize / 2 + offset, -cubeSize / 2 - offset)
        ctx.lineTo(cubeSize / 2, -cubeSize / 2)
        ctx.closePath()
        ctx.fill()

        // Right face
        ctx.fillStyle = `rgba(6, 182, 212, 0.4)`
        ctx.beginPath()
        ctx.moveTo(cubeSize / 2, -cubeSize / 2)
        ctx.lineTo(cubeSize / 2 + offset, -cubeSize / 2 - offset)
        ctx.lineTo(cubeSize / 2 + offset, cubeSize / 2 - offset)
        ctx.lineTo(cubeSize / 2, cubeSize / 2)
        ctx.closePath()
        ctx.fill()

        ctx.restore()
      }

      rotation += 0.02
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [type, size])

  return (
    <motion.div
      className={`${className}`}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.1 }}
    >
      <canvas
        ref={canvasRef}
        className="drop-shadow-2xl"
        style={{ filter: "drop-shadow(0 0 20px rgba(6, 182, 212, 0.5))" }}
      />
    </motion.div>
  )
}
