"use client"

import { motion } from "framer-motion"
import { Linkedin, Twitter, Mail } from "lucide-react"

interface FounderProfileProps {
  className?: string
  name?: string
  title?: string
  intro?: string
  photoSrc?: string
  photoClassName?: string
  linkedinUrl?: string
  twitterUrl?: string
  email?: string
}

export function FounderProfile({ className, name = "Smrita Pandey", title = "Founder & CEO", intro = "10+ years transforming enterprise risk management across regulated industries.", photoSrc = "/neurq-logo-main.png", photoClassName = "", linkedinUrl = "#", twitterUrl = "#", email = "mailto:hello@example.com" }: FounderProfileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`card-enhanced max-w-md ${className}`}
    >
      <div className="flex items-center gap-6">
        {/* Founder Image */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-lg"
        >
          <img
            src={photoSrc}
            alt={`${name} – ${title}`}
            className={`absolute inset-0 w-full h-full object-cover ${photoClassName}`}
            loading="eager"
          />
        </motion.div>

        {/* Founder Info */}
        <div className="flex-1">
          <motion.h3 
            className="text-xl font-bold text-white mb-1"
            whileHover={{ color: "#06b6d4" }}
          >
            {name}
          </motion.h3>
          <p className="text-cyan-400 font-semibold mb-2">{title}</p>
          <p className="text-slate-400 text-sm leading-relaxed mb-3">
            {intro}
          </p>
          {/* Social Links */}
          <div className="flex gap-3">
            <motion.a
              href={linkedinUrl}
              aria-label="LinkedIn"
              whileHover={{ scale: 1.1, color: "#06b6d4" }}
              whileTap={{ scale: 0.95 }}
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={twitterUrl}
              aria-label="Twitter"
              whileHover={{ scale: 1.1, color: "#06b6d4" }}
              whileTap={{ scale: 0.95 }}
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </motion.a>
            <motion.a
              href={email}
              aria-label="Email"
              whileHover={{ scale: 1.1, color: "#06b6d4" }}
              whileTap={{ scale: 0.95 }}
              className="text-slate-500 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
