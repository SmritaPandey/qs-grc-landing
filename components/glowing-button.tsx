"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GlowingButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "default" | "lg"
  className?: string
  onClick?: () => void
}

export function GlowingButton({
  children,
  variant = "primary",
  size = "default",
  className,
  onClick,
}: GlowingButtonProps) {
  const baseClasses = "relative overflow-hidden font-semibold transition-all duration-300"

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40",
    secondary: "bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400",
  }

  const sizeClasses = {
    default: "px-8 py-3 text-lg",
    lg: "px-12 py-4 text-xl",
  }

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)} onClick={onClick}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10 flex items-center">{children}</span>
      </Button>
    </motion.div>
  )
}
