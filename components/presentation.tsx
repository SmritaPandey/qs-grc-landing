"use client"

import { useState, useCallback, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ParallaxBackground } from "./parallax-background"
import { NavigationArrows } from "./navigation-arrows"
import { SlideIndicator } from "./slide-indicator"
import { SlideOne } from "./slide-one"
import { SlideTwo } from "./slide-two"
import { SlideThree } from "./slide-three"
import { SlideFour } from "./slide-four"
import { SlideFive } from "./slide-five"
import { SlideSix } from "./slide-six"
import { SlideSeven } from "./slide-seven"
import { SlideEight } from "./slide-eight"
import { SlideNine } from "./slide-nine"
import { SlideTen } from "./slide-ten"
import { SlideEleven } from "./slide-eleven"

const slides = [
  { id: 1, title: "Welcome to QS-GRC", component: SlideOne },
  { id: 2, title: "The Current Challenge", component: SlideTwo },
  { id: 3, title: "The QS-GRC Solution", component: SlideThree },
  { id: 4, title: "Core Pillars", component: SlideFour },
  { id: 5, title: "Proactive Compliance", component: SlideFive },
  { id: 6, title: "Risk Intelligence", component: SlideSix },
  { id: 7, title: "Operational Efficiency", component: SlideSeven },
  { id: 8, title: "Transparency Foundation", component: SlideEight },
  { id: 9, title: "Success Story", component: SlideNine },
  { id: 10, title: "Implementation Roadmap", component: SlideTen },
  { id: 11, title: "Get Started Today", component: SlideEleven },
]

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isNavigating, setIsNavigating] = useState(false)
  const [isAutoPlay, setIsAutoPlay] = useState(false)

  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length && !isNavigating) {
      setIsNavigating(true)
      setCurrentSlide(index)
      setTimeout(() => setIsNavigating(false), 500)
    }
  }, [isNavigating])

  const goToNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1)
    }
  }, [currentSlide, goToSlide])

  const goToPrevious = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1)
    }
  }, [currentSlide, goToSlide])

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlay(!isAutoPlay)
  }, [isAutoPlay])

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && !isNavigating) {
      const timer = setTimeout(() => {
        if (currentSlide < slides.length - 1) {
          goToNext()
        } else {
          setIsAutoPlay(false) // Stop at the last slide
        }
      }, 8000) // 8 seconds per slide

      return () => clearTimeout(timer)
    }
  }, [isAutoPlay, currentSlide, isNavigating, goToNext])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (isNavigating) return

      switch (event.key) {
        case "ArrowRight":
        case " ": // Spacebar
          event.preventDefault()
          goToNext()
          break
        case "ArrowLeft":
          event.preventDefault()
          goToPrevious()
          break
        case "Home":
          event.preventDefault()
          goToSlide(0)
          break
        case "End":
          event.preventDefault()
          goToSlide(slides.length - 1)
          break
        case "Escape":
          event.preventDefault()
          setIsAutoPlay(false)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [goToNext, goToPrevious, goToSlide, isNavigating])

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Background */}
      <ParallaxBackground currentSlide={currentSlide} />

      {/* Main Content */}
      <div className="relative z-10 w-full h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ 
              duration: 0.5, 
              ease: "easeInOut" 
            }}
            className="w-full h-full"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <NavigationArrows
        onNext={goToNext}
        onPrevious={goToPrevious}
        canGoNext={currentSlide < slides.length - 1}
        canGoPrevious={currentSlide > 0}
        isNavigating={isNavigating}
      />

      {/* Slide Indicator */}
      <SlideIndicator
        slides={slides}
        currentSlide={currentSlide}
        onGoToSlide={goToSlide}
        isNavigating={isNavigating}
      />

      {/* Slide Counter (top-right) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="fixed top-6 right-6 z-40 bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-lg px-4 py-2"
      >
        <div className="text-white text-sm font-medium">
          {currentSlide + 1} / {slides.length}
        </div>
      </motion.div>

      {/* Auto-play indicator */}
      {isAutoPlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-6 left-6 z-40 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/50 rounded-lg px-4 py-2"
        >
          <div className="text-cyan-300 text-sm font-medium flex items-center">
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse mr-2"></div>
            Auto-playing
          </div>
        </motion.div>
      )}
    </div>
  )
}
