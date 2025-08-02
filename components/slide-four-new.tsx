"use client"

import { motion, useInView } from "framer-motion"
import { Sparkles, Radar, Database, Shield, Brain, Lock, FileCheck, Zap } from "lucide-react"
import { useRef, useState } from "react"
import { GlowOrb } from "@/components/ui/glow-orb"
import { FloatingElement } from "@/components/ui/floating-element"

export function SlideFour() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null)

  const pillars = [
    {
      title: "AI Compliance Engine",
      icon: Sparkles,
      shortline: "Audit-readiness in real time",
      description: "Continuous monitoring across departments with automated evidence collection",
      color: "cyan",
      position: { row: 0, col: 0 },
      features: ["Real-time monitoring", "Auto evidence collection", "Compliance dashboards"]
    },
    {
      title: "Predictive Risk Radar", 
      icon: Radar,
      shortline: "Detects crises before they occur",
      description: "AI-powered risk prediction with 360° threat monitoring and early warning systems",
      color: "blue",
      position: { row: 0, col: 1 },
      features: ["Threat prediction", "Risk heatmaps", "Early warnings"]
    },
    {
      title: "Quantum-Secure Vault",
      icon: Lock,
      shortline: "Future-proof encryption today", 
      description: "Post-quantum cryptography securing data for the next 50 years",
      color: "purple",
      position: { row: 1, col: 0 },
      features: ["Post-quantum crypto", "Hash verification", "End-to-end encryption"]
    },
    {
      title: "Trusted Transparency",
      icon: Shield,
      shortline: "Reports citizens can believe in",
      description: "Immutable audit trails and shareable dashboards for public accountability",
      color: "green",
      position: { row: 1, col: 1 },
      features: ["Immutable logs", "Public dashboards", "Citizen verification"]
    }
  ]

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900/20 to-slate-900">
      {/* Background Effects */}
      <GlowOrb size={600} color="cyan" intensity={0.1} className="top-1/4 left-1/4" />
      <GlowOrb size={400} color="blue" intensity={0.08} className="bottom-1/4 right-1/4" />
      <GlowOrb size={300} color="purple" intensity={0.06} className="top-3/4 right-1/3" />

      {/* Floating Icons */}
      <FloatingElement className="absolute top-20 right-20" delay={0} amplitude={10}>
        <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center">
          <Brain className="w-4 h-4 text-cyan-400" />
        </div>
      </FloatingElement>

      <FloatingElement className="absolute bottom-32 left-16" delay={2} amplitude={15}>
        <div className="w-10 h-10 bg-purple-400/20 rounded-lg flex items-center justify-center">
          <Database className="w-5 h-5 text-purple-400" />
        </div>
      </FloatingElement>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center py-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold">4</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black">
              <span className="text-white">Built on</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
                Four Pillars
              </span>
            </h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl text-slate-300 max-w-4xl mx-auto"
          >
            of Excellence
          </motion.p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="flex-1 px-8 pb-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredPillar(index)}
                onHoverEnd={() => setHoveredPillar(null)}
                className="group relative"
              >
                <div className={`relative h-full bg-slate-800/60 backdrop-blur-sm border border-${pillar.color}-400/20 rounded-2xl p-8 hover:border-${pillar.color}-400/40 transition-all duration-500 overflow-hidden`}>
                  {/* Glow Effect on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br from-${pillar.color}-400/10 to-${pillar.color}-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    animate={hoveredPillar === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />

                  {/* Icon */}
                  <motion.div
                    className={`w-20 h-20 bg-gradient-to-br from-${pillar.color}-400/20 to-${pillar.color}-500/20 border border-${pillar.color}-400/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    animate={hoveredPillar === index ? { 
                      rotate: [0, 5, -5, 0],
                      scale: [1.1, 1.2, 1.1]
                    } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <pillar.icon className={`w-10 h-10 text-${pillar.color}-400`} />
                  </motion.div>

                  {/* Title */}
                  <motion.h3 
                    className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-300"
                  >
                    {pillar.title}
                  </motion.h3>

                  {/* Shortline */}
                  <motion.p 
                    className={`text-${pillar.color}-400 font-semibold text-lg mb-4`}
                    animate={hoveredPillar === index ? { opacity: [1, 0.7, 1] } : {}}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    {pillar.shortline}
                  </motion.p>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Features List */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={hoveredPillar === index ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 overflow-hidden"
                  >
                    {pillar.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        animate={hoveredPillar === index ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <div className={`w-1.5 h-1.5 bg-${pillar.color}-400 rounded-full`} />
                        <span className="text-slate-400 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Pillar Number */}
                  <motion.div
                    className={`absolute top-6 right-6 w-8 h-8 bg-${pillar.color}-400/20 border border-${pillar.color}-400/40 rounded-lg flex items-center justify-center`}
                    animate={hoveredPillar === index ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <span className={`text-${pillar.color}-400 font-bold text-sm`}>
                      {index + 1}
                    </span>
                  </motion.div>

                  {/* Animated Border */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl border-2 border-${pillar.color}-400/0 group-hover:border-${pillar.color}-400/30`}
                    animate={hoveredPillar === index ? {
                      borderColor: [
                        `rgba(${pillar.color === 'cyan' ? '6, 182, 212' : pillar.color === 'blue' ? '59, 130, 246' : pillar.color === 'purple' ? '147, 51, 234' : '34, 197, 94'}, 0.3)`,
                        `rgba(${pillar.color === 'cyan' ? '6, 182, 212' : pillar.color === 'blue' ? '59, 130, 246' : pillar.color === 'purple' ? '147, 51, 234' : '34, 197, 94'}, 0.6)`,
                        `rgba(${pillar.color === 'cyan' ? '6, 182, 212' : pillar.color === 'blue' ? '59, 130, 246' : pillar.color === 'purple' ? '147, 51, 234' : '34, 197, 94'}, 0.3)`
                      ]
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Foundation Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="text-center pb-8"
        >
          <div className="bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-400/20 rounded-2xl px-8 py-6 mx-8 backdrop-blur-sm">
            <motion.p 
              className="text-xl text-slate-300 mb-2"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Four pillars. One unbreakable foundation.
            </motion.p>
            <p className="text-slate-400">
              Built for governments that demand excellence in every decision.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
