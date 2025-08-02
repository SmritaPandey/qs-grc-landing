"use client"

import { motion } from "framer-motion"
import { useState } from "react"

interface SlideIndicatorProps {
  slides: Array<{ id: number; title: string }>
  currentSlide: number
  onGoToSlide: (index: number) => void
  isNavigating: boolean
}

export function SlideIndicator({ slides, currentSlide, onGoToSlide, isNavigating }: SlideIndicatorProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40">
      <motion.div
        className="bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        <motion.div
          className="flex items-center px-6 py-3"
          animate={{ width: isExpanded ? "auto" : "180px" }}
          transition={{ duration: 0.3 }}
        >
          {/* Slide Dots */}
          <div className="flex items-center space-x-2">
            {slides.map((slide, index) => (
              <motion.button
                key={slide.id}
                className={`relative w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-cyan-400 scale-125" : "bg-slate-600 hover:bg-slate-500"
                } ${isNavigating ? "pointer-events-none" : ""}`}
                onClick={() => !isNavigating && onGoToSlide(index)}
                whileHover={!isNavigating ? { scale: 1.2 } : {}}
                whileTap={!isNavigating ? { scale: 0.9 } : {}}
                disabled={isNavigating}
              >
                {/* Active indicator glow */}
                {index === currentSlide && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-cyan-400"
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Slide Info */}
          <motion.div
            className="ml-4 text-white overflow-hidden"
            initial={{ opacity: 0, width: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              width: isExpanded ? "auto" : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-sm font-medium whitespace-nowrap">
              {currentSlide + 1} / {slides.length}
            </div>
            <div className="text-xs text-slate-400 whitespace-nowrap">{slides[currentSlide].title}</div>
          </motion.div>
        </motion.div>

        {/* Progress bar */}
        <div className="h-0.5 bg-slate-800">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </div>
  )
}
