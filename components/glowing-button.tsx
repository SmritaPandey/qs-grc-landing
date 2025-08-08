"use client"

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface GlowingButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary"
  size?: "default" | "lg"
  className?: string
  onClick?: () => void
  asChild?: boolean
}

export function GlowingButton({
  children,
  variant = "primary",
  size = "default",
  className,
  onClick,
  asChild = false,
}: GlowingButtonProps) {
  const baseClasses =
    "relative overflow-hidden font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900"

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:shadow-xl border border-cyan-400/30",
    secondary:
      "bg-transparent border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20",
  }

  const sizeClasses = {
    default: "px-8 py-3 text-lg rounded-lg",
    lg: "px-12 py-4 text-xl rounded-xl",
  }

  const shimmer = (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100"
      initial={{ x: "-100%" }}
      whileHover={{ x: "100%" }}
      transition={{ duration: 0.6 }}
    />
  )

  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ y: 0 }} className="inline-block">
      {asChild && React.isValidElement(children) ? (
        <Button
          className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
          asChild
          onClick={onClick}
        >
          {React.cloneElement(children as React.ReactElement, {}, (
            <>
              {shimmer}
              <span className="relative z-10 flex items-center justify-center gap-2 font-semibold tracking-wide">
                {(children as any)?.props?.children}
              </span>
            </>
          ))}
        </Button>
      ) : (
        <Button
          className={cn(baseClasses, variantClasses[variant], sizeClasses[size], className)}
          onClick={onClick}
        >
          {shimmer}
          <span className="relative z-10 flex items-center justify-center gap-2 font-semibold tracking-wide">
            {children}
          </span>
        </Button>
      )}
    </motion.div>
  )
}
