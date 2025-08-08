"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ParallaxBackground } from "@/components/parallax-background"
import { NavigationArrows } from "@/components/navigation-arrows"
import { ProgressBar } from "@/components/progress-bar"
import { PresentationControls } from "@/components/presentation-controls"

// Import slides
import { SlideOne } from "@/components/slide-one"
import { SlideTwo } from "@/components/slide-two"
import { SlideThree } from "@/components/slide-three"
import { SlideFour } from "@/components/slide-four"
import { SlideFive } from "@/components/slide-five"
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
  const [isScrolling, setIsScrolling] = useState(false)
  const slideContainerRef = useRef<HTMLDivElement>(null)

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1)
      setCurrentSlide(currentSlide + 1)
    }
  }, [currentSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1)
      setCurrentSlide(currentSlide - 1)
    }
  }, [currentSlide])

  const goToSlide = useCallback((index: number) => {
    if (index !== currentSlide) {
      setDirection(index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
    }
  }, [currentSlide])

  // Enhanced scroll handling for page-to-page navigation
  const handleWheel = useCallback((e: WheelEvent) => {
    if (isScrolling) return
    
    const slideContainer = slideContainerRef.current
    if (!slideContainer) return

    const { scrollTop, scrollHeight, clientHeight } = slideContainer
    const isAtTop = scrollTop === 0
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10

    // Only navigate between slides when at the top or bottom of current slide
    if (e.deltaY > 0 && isAtBottom) {
      // Scrolling down and at bottom - go to next slide
      e.preventDefault()
      if (currentSlide < slides.length - 1) {
        setIsScrolling(true)
        nextSlide()
        
        // Reset scroll position to top for next slide
        setTimeout(() => {
          if (slideContainerRef.current) {
            slideContainerRef.current.scrollTop = 0
          }
          setIsScrolling(false)
        }, 500)
      }
    } else if (e.deltaY < 0 && isAtTop) {
      // Scrolling up and at top - go to previous slide
      e.preventDefault()
      if (currentSlide > 0) {
        setIsScrolling(true)
        prevSlide()
        
        // Set scroll position to bottom for previous slide
        setTimeout(() => {
          if (slideContainerRef.current) {
            slideContainerRef.current.scrollTop = slideContainerRef.current.scrollHeight
          }
          setIsScrolling(false)
        }, 500)
      }
    }
  }, [currentSlide, isScrolling, nextSlide, prevSlide])

  // Touch handling for mobile devices
  const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null)
  
  const handleTouchStart = useCallback((e: TouchEvent) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY
    })
  }, [])

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    if (!touchStart) return

    const touchEnd = {
      x: e.changedTouches[0].clientX,
      y: e.changedTouches[0].clientY
    }

    const deltaX = touchStart.x - touchEnd.x
    const deltaY = touchStart.y - touchEnd.y

    // Only handle vertical swipes that are significant
    if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 50) {
      const slideContainer = slideContainerRef.current
      if (!slideContainer) return

      const { scrollTop, scrollHeight, clientHeight } = slideContainer
      const isAtTop = scrollTop === 0
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 10

      if (deltaY > 0 && isAtBottom) {
        // Swiping up (next slide)
        nextSlide()
      } else if (deltaY < 0 && isAtTop) {
        // Swiping down (previous slide)
        prevSlide()
      }
    }

    setTouchStart(null)
  }, [touchStart, nextSlide, prevSlide])

  // Auto-advance slides
  useEffect(() => {
    if (!autoplay) return
    
    const timer = setInterval(() => {
      if (currentSlide < slides.length - 1) {
        nextSlide()
      } else {
        setAutoplay(false)
      }
    }, 8000) // 8 seconds per slide for better readability

    return () => clearInterval(timer)
  }, [currentSlide, autoplay, nextSlide])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (isScrolling) return
      
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
  }, [currentSlide, autoplay, isScrolling, nextSlide, prevSlide, goToSlide])

  // Add scroll and touch event listeners
  useEffect(() => {
    const slideContainer = slideContainerRef.current
    if (!slideContainer) return

    slideContainer.addEventListener("wheel", handleWheel, { passive: false })
    slideContainer.addEventListener("touchstart", handleTouchStart, { passive: true })
    slideContainer.addEventListener("touchend", handleTouchEnd, { passive: true })

    return () => {
      slideContainer.removeEventListener("wheel", handleWheel)
      slideContainer.removeEventListener("touchstart", handleTouchStart)
      slideContainer.removeEventListener("touchend", handleTouchEnd)
    }
  }, [handleWheel, handleTouchStart, handleTouchEnd])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)",
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.98,
      filter: "blur(4px)",
    }),
  }

  const CurrentSlideComponent = slides[currentSlide].component

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <ParallaxBackground currentSlide={currentSlide} />
      </div>

      {/* Enhanced Progress Bar */}
      <ProgressBar current={currentSlide + 1} total={slides.length} />

      {/* Main Slide Container with Enhanced Scrolling */}
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { 
                type: "spring", 
                stiffness: 250, 
                damping: 25,
                duration: 0.6
              },
              opacity: { duration: 0.5 },
              scale: { duration: 0.5 },
              filter: { duration: 0.3 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            <div 
              ref={slideContainerRef}
              className="w-full h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-slate-800/30 scroll-smooth"
              style={{
                scrollBehavior: 'smooth',
              }}
            >
              <div className="min-h-full">
                <CurrentSlideComponent />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Enhanced Navigation Controls */}
      <NavigationArrows
        onPrevious={prevSlide}
        onNext={nextSlide}
        canGoPrevious={currentSlide > 0}
        canGoNext={currentSlide < slides.length - 1}
        isNavigating={isScrolling}
      />

      {/* Enhanced Presentation Controls */}
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

      {/* Enhanced Keyboard Shortcuts Help */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 0.8 }}
        className="absolute bottom-6 left-6 text-sm text-slate-400 space-y-2 bg-slate-900/60 backdrop-blur-sm px-4 py-3 rounded-lg border border-slate-700/50"
      >
        <div className="font-semibold text-cyan-400 mb-2">Keyboard Shortcuts</div>
        <div className="space-y-1 text-xs">
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">→</kbd>
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Space</kbd>
            <span>Next slide</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">←</kbd>
            <span>Previous slide</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">P</kbd>
            <span>Toggle autoplay</span>
          </div>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">Home</kbd>
            <kbd className="px-2 py-1 bg-slate-700 rounded text-xs">End</kbd>
            <span>First/Last slide</span>
          </div>
        </div>
      </motion.div>

      {/* Slide Transition Indicator */}
      {isScrolling && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-4 border-cyan-400 border-t-transparent rounded-full"
          />
        </motion.div>
      )}
    </div>
  )
}
