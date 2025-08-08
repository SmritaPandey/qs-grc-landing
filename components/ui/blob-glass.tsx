"use client"

import { motion, useReducedMotion } from "framer-motion"

type BlobGlassProps = {
  className?: string
  hue?: number
}

export function BlobGlass({ className = "", hue = 200 }: BlobGlassProps) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute aspect-[1/1] w-[36rem] rounded-[40%] ${className}`}
      initial={false}
      animate={
        prefersReducedMotion
          ? { opacity: 0.16 }
          : {
              borderRadius: ["40% 60% 60% 40% / 40% 40% 60% 60%", "60% 40% 40% 60% / 60% 60% 40% 40%", "40% 60% 60% 40% / 40% 40% 60% 60%"],
              rotate: [0, 8, -6, 0],
              opacity: [0.12, 0.2, 0.16],
            }
      }
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      style={{
        background: `radial-gradient(50% 50% at 50% 50%, hsla(${hue}, 100%, 60%, 0.18) 0%, transparent 70%)`,
        boxShadow: `inset 0 1px 12px hsla(${hue}, 100%, 70%, 0.15), 0 12px 48px rgba(0,0,0,0.25)`,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        border: "1px solid rgba(148, 163, 184, 0.2)",
      }}
    />
  )
}
