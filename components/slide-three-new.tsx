"use client"

import { motion, useInView } from "framer-motion"
import { Shield, Zap, Brain, Lock, Database, Users, FileCheck, Radar } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { GlowOrb } from "@/components/ui/glow-orb"
import { FloatingElement } from "@/components/ui/floating-element"

export function SlideThree() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [connectionPhase, setConnectionPhase] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer1 = setTimeout(() => setConnectionPhase(1), 1500)
      const timer2 = setTimeout(() => setConnectionPhase(2), 3000)
      const timer3 = setTimeout(() => setConnectionPhase(3), 4500)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [isInView])

  const dataStreams = [
    { name: "Risk Analytics", icon: Radar, color: "red", angle: 0 },
    { name: "Policy Engine", icon: FileCheck, color: "blue", angle: 72 },
    { name: "Audit Trail", icon: Shield, color: "green", angle: 144 },
    { name: "Vendor Management", icon: Users, color: "purple", angle: 216 },
    { name: "Cybersecurity", icon: Lock, color: "cyan", angle: 288 },
  ]

  const features = [
    {
      title: "Real-Time Visibility",
      description: "See across all departments instantly",
      icon: Brain,
      color: "cyan"
    },
    {
      title: "Quantum-Secure",
      description: "Future-proof encryption today",
      icon: Lock,
      color: "blue"
    },
    {
      title: "AI-Driven Intelligence",
      description: "Predictive insights and automation",
      icon: Zap,
      color: "purple"
    }
  ]

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-900 via-cyan-900/20 to-slate-900">
      {/* Background Effects */}
      <GlowOrb size={500} color="cyan" intensity={0.15} className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      <GlowOrb size={300} color="blue" intensity={0.1} className="top-1/4 right-1/4" />
      <GlowOrb size={200} color="purple" intensity={0.08} className="bottom-1/4 left-1/4" />

      {/* Neural Network Grid */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
          animate={{
            backgroundPosition: connectionPhase >= 2 ? ["0px 0px", "40px 40px", "0px 0px"] : "0px 0px",
          }}
          transition={{
            duration: 8,
            repeat: connectionPhase >= 2 ? Infinity : 0,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center py-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                One Platform
              </span>
              <br />
              <span className="text-white">Total Visibility</span>
            </h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed"
          >
            QS‑GRC connects policy, risk, compliance, and audit data into a{" "}
            <span className="text-cyan-400 font-semibold">quantum-secure</span>,{" "}
            <span className="text-blue-400 font-semibold">AI‑driven</span> nerve center for governance.
          </motion.p>
        </motion.div>

        {/* Main Visualization */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 pb-8">
          {/* Left Side - Central Hub Visualization */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-96 h-96">
              {/* Central Hub */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5 }}
                className="absolute top-1/2 left-1/2 w-32 h-32 -translate-x-1/2 -translate-y-1/2 z-20"
              >
                <div className="w-full h-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl flex flex-col items-center justify-center shadow-2xl border border-cyan-400/30">
                  <Brain className="w-8 h-8 text-white mb-2" />
                  <span className="text-white font-bold text-sm">QS-GRC</span>
                  <span className="text-cyan-100 text-xs">Core</span>
                </div>
                
                {/* Pulsing Glow */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-3xl blur-xl"
                />
              </motion.div>

              {/* Data Stream Nodes */}
              {dataStreams.map((stream, index) => {
                const radius = 140
                const x = Math.cos((stream.angle * Math.PI) / 180) * radius
                const y = Math.sin((stream.angle * Math.PI) / 180) * radius

                return (
                  <motion.div
                    key={stream.name}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={connectionPhase >= 1 ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                    className="absolute top-1/2 left-1/2 w-20 h-20 z-10"
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <FloatingElement delay={index * 0.5} amplitude={8}>
                      <div className={`w-full h-full bg-gradient-to-br from-${stream.color}-400/20 to-${stream.color}-500/20 border border-${stream.color}-400/40 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform cursor-pointer`}>
                        <stream.icon className={`w-6 h-6 text-${stream.color}-400 mb-1`} />
                        <span className="text-xs text-slate-300 font-medium text-center leading-tight px-1">
                          {stream.name}
                        </span>
                      </div>
                    </FloatingElement>
                  </motion.div>
                )
              })}

              {/* Connection Lines */}
              {connectionPhase >= 2 && (
                <svg className="absolute inset-0 w-full h-full">
                  {dataStreams.map((stream, index) => {
                    const radius = 140
                    const x = Math.cos((stream.angle * Math.PI) / 180) * radius + 192
                    const y = Math.sin((stream.angle * Math.PI) / 180) * radius + 192
                    
                    return (
                      <motion.line
                        key={index}
                        x1="192"
                        y1="192"
                        x2={x}
                        y2={y}
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 2 + index * 0.1 }}
                      />
                    )
                  })}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              {/* Data Flow Particles */}
              {connectionPhase >= 3 && dataStreams.map((stream, index) => {
                const radius = 140
                const x = Math.cos((stream.angle * Math.PI) / 180) * radius
                const y = Math.sin((stream.angle * Math.PI) / 180) * radius

                return (
                  <motion.div
                    key={`particle-${index}`}
                    className={`absolute w-2 h-2 bg-${stream.color}-400 rounded-full top-1/2 left-1/2`}
                    animate={{
                      x: [x, 0, x],
                      y: [y, 0, y],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    }}
                    style={{ transform: 'translate(-50%, -50%)' }}
                  />
                )
              })}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 3 }}
              className="absolute bottom-0 text-center text-slate-400"
            >
              All governance data streams into one intelligent hub
            </motion.p>
          </div>

          {/* Right Side - Benefits */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-4xl font-bold text-white"
            >
              Breakthrough Benefits
            </motion.h2>

            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 + index * 0.3 }}
                whileHover={{ scale: 1.02, x: 10 }}
                className="group"
              >
                <div className="bg-slate-800/60 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className={`w-16 h-16 bg-gradient-to-br from-${feature.color}-400/20 to-${feature.color}-500/20 border border-${feature.color}-400/40 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`w-8 h-8 text-${feature.color}-400`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                      <p className="text-slate-300 text-lg leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Platform Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 2.5 }}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-xl p-6 text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 3 }}
                  className="text-3xl font-bold text-cyan-400 mb-2"
                >
                  100%
                </motion.div>
                <div className="text-slate-300">Unified View</div>
              </div>
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-xl p-6 text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 3.5 }}
                  className="text-3xl font-bold text-blue-400 mb-2"
                >
                  85%
                </motion.div>
                <div className="text-slate-300">Faster Decisions</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
