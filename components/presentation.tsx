"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ParallaxBackground } from "@/components/parallax-background"
import { NavigationArrows } from "@/components/navigation-arrows"
import { SlideIndicator } from "@/components/slide-indicator"
import { ProgressBar } from "@/components/progress-bar"
import { PresentationControls } from "@/components/presentation-controls"

// Import new slides
import { SlideOne } from "@/components/slide-one-new"
import { SlideTwo } from "@/components/slide-two-new"
import { SlideThree } from "@/components/slide-three-new"
import { SlideFour } from "@/components/slide-four-new"
import { SlideFive } from "@/components/slide-five-new"
import { SlideSix } from "@/components/slide-six"
import { SlideSeven } from "@/components/slide-seven"
import { SlideEight } from "@/components/slide-eight"
import { SlideNine } from "@/components/slide-nine"
import { SlideTen } from "@/components/slide-ten"
import { SlideEleven } from "@/components/slide-eleven"

const slides = [
  { component: SlideOne, title: "The Future of Trust" },
  { component: SlideTwo, title: "The Hidden Costs" },
  { component: SlideThree, title: "One Platform" },
  { component: SlideFour, title: "Core Pillars" },
  { component: SlideFive, title: "AI Compliance" },
  { component: SlideSix, title: "Predictive Risk" },
  { component: SlideSeven, title: "Quantum Security" },
  { component: SlideEight, title: "Trusted Transparency" },
  { component: SlideNine, title: "Case Study" },
  { component: SlideTen, title: "Implementation" },
  { component: SlideEleven, title: "Call to Action" },
]

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)
  const [autoplay, setAutoplay] = useState(false)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(currentSlide - 1)
    }
  }

  const goToSlide = (index: number) => {
    if (index !== currentSlide) {
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
    }
  }

  // Auto-advance slides
  useEffect(() => {
    if (!autoplay) return
    
    const timer = setInterval(() => {
      if (currentSlide < slides.length - 1) {
        nextSlide()
      } else {
        setAutoplay(false)
      }
    }, 10000) // 10 seconds per slide

    return () => clearInterval(timer)
  }, [currentSlide, autoplay])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault()
          nextSlide()
          break
        case "ArrowLeft":
          e.preventDefault()
          prevSlide()
          break
        case "Home":
          e.preventDefault()
          goToSlide(0)
          break
        case "End":
          e.preventDefault()
          goToSlide(slides.length - 1)
          break
        case "p":
        case "P":
          e.preventDefault()
          setAutoplay(!autoplay)
          break
        case "Escape":
          e.preventDefault()
          setAutoplay(false)
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [currentSlide, autoplay])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.95,
    }),
  }

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <ParallaxBackground currentSlide={currentSlide} />
      </div>

      {/* Progress Bar */}
      <ProgressBar current={currentSlide + 1} total={slides.length} />

      {/* Main Slide Container */}
      <div className="relative w-full h-full">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            className="absolute inset-0"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <NavigationArrows
        onPrevious={prevSlide}
        onNext={nextSlide}
        canGoPrevious={currentSlide > 0}
        canGoNext={currentSlide < slides.length - 1}
        isNavigating={false}
      />

      {/* Slide Indicators */}
      <SlideIndicator
        slides={slides.map((slide, index) => ({ id: index, title: slide.title }))}
        currentSlide={currentSlide}
        onGoToSlide={goToSlide}
        isNavigating={false}
      />

      {/* Presentation Controls */}
      <PresentationControls
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={prevSlide}
        onNext={nextSlide}
        onGoToSlide={goToSlide}
        isAutoPlay={autoplay}
        onToggleAutoPlay={() => setAutoplay(!autoplay)}
        slides={slides.map((slide, index) => ({ id: index, title: slide.title }))}
      />

      {/* Keyboard Shortcuts Help */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-4 text-xs text-slate-500 space-y-1"
      >
        <div>→ / Space: Next slide</div>
        <div>← : Previous slide</div>
        <div>P: Toggle autoplay</div>
        <div>Home/End: First/Last slide</div>
      </motion.div>
    </div>
  )
}
