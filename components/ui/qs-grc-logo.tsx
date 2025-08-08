"use client"

import { motion } from "framer-motion"

interface QSGRCLogoProps {
  size?: number
  className?: string
  animated?: boolean
}

export function QSGRCLogo({ size = 100, className = "", animated = true }: QSGRCLogoProps) {
  const LogoImage = () => (
    <picture>
      <source srcSet="/qs-grc-logo-new.svg" type="image/svg+xml" />
      <source srcSet="/qs-grc-logo.webp" type="image/webp" />
      <img
        src="/qs-grc-logo.png"
        alt="QS-GRC – Governance, Risk & Compliance Platform"
        width={size}
        height={size}
        className={`object-contain ${className}`}
        style={{ width: size, height: size }}
      />
    </picture>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="inline-block"
      >
        <LogoImage />
      </motion.div>
    )
  }

  return <LogoImage />
}
