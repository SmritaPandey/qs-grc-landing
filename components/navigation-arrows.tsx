"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface NavigationArrowsProps {
  onPrevious: () => void
  onNext: () => void
  canGoPrevious: boolean
  canGoNext: boolean
  isNavigating: boolean
}

export function NavigationArrows({
  onPrevious,
  onNext,
  canGoPrevious,
  canGoNext,
  isNavigating,
}: NavigationArrowsProps) {
  return (
    <>
      {/* Left Arrow */}
      <motion.button
        className={`fixed left-6 top-1/2 transform -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center transition-all duration-300 ${
          canGoPrevious && !isNavigating
            ? "text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:scale-110 cursor-pointer"
            : "text-slate-600 cursor-not-allowed opacity-50"
        }`}
        onClick={onPrevious}
        disabled={!canGoPrevious || isNavigating}
        whileHover={canGoPrevious && !isNavigating ? { scale: 1.1, x: -3 } : {}}
        whileTap={canGoPrevious && !isNavigating ? { scale: 0.95 } : {}}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <ChevronLeft className="w-7 h-7" />
      </motion.button>

      {/* Right Arrow */}
      <motion.button
        className={`fixed right-6 top-1/2 transform -translate-y-1/2 z-40 w-14 h-14 rounded-full bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center transition-all duration-300 ${
          canGoNext && !isNavigating
            ? "text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/50 hover:scale-110 cursor-pointer"
            : "text-slate-600 cursor-not-allowed opacity-50"
        }`}
        onClick={onNext}
        disabled={!canGoNext || isNavigating}
        whileHover={canGoNext && !isNavigating ? { scale: 1.1, x: 3 } : {}}
        whileTap={canGoNext && !isNavigating ? { scale: 0.95 } : {}}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <ChevronRight className="w-7 h-7" />
      </motion.button>
    </>
  )
}
