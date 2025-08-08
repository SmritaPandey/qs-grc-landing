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
  const scrollTimeoutRef = useRef<NodeJS.Timeout>()

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
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
              scale: { duration: 0.4 },
            }}
            className="absolute inset-0 w-full h-full overflow-y-auto scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800"
          >
            <div className="min-h-full">
              <CurrentSlideComponent />
            </div>
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
