"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Pause, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface PresentationControlsProps {
  currentSlide: number
  totalSlides: number
  onPrevious: () => void
  onNext: () => void
  onGoToSlide: (index: number) => void
  isAutoPlay: boolean
  onToggleAutoPlay: () => void
  slides: Array<{ id: number; title: string }>
}

export function PresentationControls({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  onGoToSlide,
  isAutoPlay,
  onToggleAutoPlay,
  slides,
}: PresentationControlsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl px-6 py-3 flex items-center space-x-4 shadow-2xl">
        {/* Previous Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="text-slate-300 hover:text-white hover:bg-slate-700/50 disabled:opacity-30"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>

        {/* Slide Counter */}
        <div className="text-slate-300 font-medium min-w-[80px] text-center">
          {currentSlide + 1} / {totalSlides}
        </div>

        {/* Next Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="text-slate-300 hover:text-white hover:bg-slate-700/50 disabled:opacity-30"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>

        {/* Divider */}
        <div className="w-px h-6 bg-slate-600" />

        {/* Auto Play Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleAutoPlay}
          className={`${
            isAutoPlay
              ? "text-cyan-400 hover:text-cyan-300 bg-cyan-500/10"
              : "text-slate-300 hover:text-white hover:bg-slate-700/50"
          }`}
        >
          {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>

        {/* Slide Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-700/50">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            className="bg-slate-900/95 backdrop-blur-sm border-slate-700/50 max-h-80 overflow-y-auto"
          >
            {slides.map((slide, index) => (
              <DropdownMenuItem
                key={slide.id}
                onClick={() => onGoToSlide(index)}
                className={`cursor-pointer ${
                  index === currentSlide
                    ? "bg-cyan-500/20 text-cyan-300"
                    : "text-slate-300 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                <span className="mr-3 text-sm opacity-60">{index + 1}</span>
                {slide.title}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </motion.div>
  )
}
