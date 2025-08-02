"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles, Shield, Database } from "lucide-react"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { FloatingElement } from "@/components/ui/floating-element"
import { GlowOrb } from "@/components/ui/glow-orb"
import { SplineElement } from "@/components/spline-element"

export function SlideOne() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px", "0px 0px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Floating Orbs */}
      <GlowOrb size={300} color="cyan" intensity={0.2} className="top-1/4 left-1/4" />
      <GlowOrb size={200} color="blue" intensity={0.15} className="bottom-1/3 right-1/4" />
      <GlowOrb size={150} color="purple" intensity={0.1} className="top-2/3 left-2/3" />

      {/* 3D Spline Background */}
      <div className="absolute inset-0 opacity-30">
        <SplineElement type="sphere" />
      </div>

      {/* Floating Icons */}
      <FloatingElement className="absolute top-20 left-20" delay={0} amplitude={15}>
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
          <Shield className="w-6 h-6 text-cyan-400" />
        </div>
      </FloatingElement>

      <FloatingElement className="absolute top-32 right-32" delay={1} amplitude={20}>
        <div className="w-14 h-14 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-blue-400/30">
          <Database className="w-7 h-7 text-blue-400" />
        </div>
      </FloatingElement>

      <FloatingElement className="absolute bottom-40 left-40" delay={2} amplitude={18}>
        <div className="w-10 h-10 bg-gradient-to-r from-purple-400/20 to-cyan-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-400/30">
          <Sparkles className="w-5 h-5 text-purple-400" />
        </div>
      </FloatingElement>

      {/* Main Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center"
        style={{ y: textY }}
      >
        {/* Hero Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-400/20 rounded-full backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-300 font-medium">The Future of Trust</span>
            <div className="ml-3 w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-none mb-4">
            <motion.span
              className="block bg-gradient-to-r from-white via-cyan-100 to-white text-transparent bg-clip-text"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Governing
            </motion.span>
            <motion.span
              className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: 0.5 
              }}
              style={{ backgroundSize: "300% 300%" }}
            >
              with Confidence
            </motion.span>
          </h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-2xl md:text-3xl font-semibold text-slate-300 mb-2"
          >
            A New Framework for a New Era
          </motion.p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-4xl mb-12"
        >
          <motion.p className="text-xl md:text-2xl text-slate-400 leading-relaxed">
            In a quantum-powered world, governance must be{" "}
            <motion.span
              className="text-cyan-400 font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              resilient
            </motion.span>
            ,{" "}
            <motion.span
              className="text-blue-400 font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
            >
              transparent
            </motion.span>
            , and{" "}
            <motion.span
              className="text-purple-400 font-semibold"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
            >
              AI-ready
            </motion.span>
            .
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-lg text-slate-300 mt-4"
          >
            Meet{" "}
            <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              QS-GRC
            </span>
            : built to secure decisions before they're made.
          </motion.p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <MagneticButton className="group relative px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-white text-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity 
              }}
            />
            <span className="relative z-10 flex items-center">
              Explore the Dashboard
              <motion.div
                className="ml-3"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </span>
            
            {/* Button Glow Effect */}
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-cyan-500/50 to-blue-600/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </MagneticButton>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-8 right-8"
        >
          <div className="flex justify-between items-center max-w-6xl mx-auto">
            <FloatingElement delay={0} amplitude={10}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl px-6 py-4">
                <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                <div className="text-sm text-slate-400">Secure</div>
              </div>
            </FloatingElement>
            
            <FloatingElement delay={1} amplitude={12}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-blue-400/20 rounded-xl px-6 py-4">
                <div className="text-2xl font-bold text-blue-400">50%</div>
                <div className="text-sm text-slate-400">Cost Reduction</div>
              </div>
            </FloatingElement>
            
            <FloatingElement delay={2} amplitude={8}>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-purple-400/20 rounded-xl px-6 py-4">
                <div className="text-2xl font-bold text-purple-400">24/7</div>
                <div className="text-sm text-slate-400">AI Monitoring</div>
              </div>
            </FloatingElement>
          </div>
        </motion.div>
      </motion.div>

      {/* Particle Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
