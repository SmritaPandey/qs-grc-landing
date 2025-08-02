"use client"

import { motion } from "framer-motion"
import { ArrowRight, Shield, Globe, Zap, Sparkles } from "lucide-react"
import { GlowingButton } from "@/components/glowing-button"
import { SplineElement } from "@/components/spline-element"
import { Card3D } from "@/components/3d-card"

export function SlideOne() {
  return (
    <div className="w-full h-full overflow-y-auto">
      {/* Hero Section */}
      <section className="h-full flex items-center justify-center px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side - Content */}
            <div className="space-y-6">
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-transparent bg-clip-text">
                    Governing with
                  </span>
                  <br />
                  <span className="text-white">Confidence</span>
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
              </motion.div>

              {/* Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-3"
              >
                <h2 className="text-xl font-semibold text-slate-300">
                  The next generation of governance technology
                </h2>
                <p className="text-lg text-slate-400 leading-relaxed">
                  QS-GRC transforms public sector governance through AI-powered risk intelligence, seamless compliance 
                  automation, and data-driven insights that protect public trust.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <GlowingButton>
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </GlowingButton>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="grid grid-cols-2 gap-3"
              >
                {[
                  { icon: Shield, title: "Secure", description: "Enterprise-grade security", color: "cyan" },
                  { icon: Zap, title: "Fast", description: "Real-time processing", color: "blue" },
                  { icon: Globe, title: "Scalable", description: "Grows with your needs", color: "indigo" },
                  { icon: Sparkles, title: "Smart", description: "AI-powered insights", color: "purple" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                  >
                    <Card3D glowColor={feature.color} className="h-full p-4">
                      <feature.icon className={`w-6 h-6 text-${feature.color}-400 mb-2`} />
                      <h3 className="text-sm font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-slate-300 text-xs">{feature.description}</p>
                    </Card3D>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Hero Visualization */}
            <div className="relative h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className="relative"
              >
                <SplineElement type="sphere" size={300} />
                
                {/* Floating Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                  className="absolute -top-8 -left-8"
                >
                  <Card3D glowColor="cyan" className="p-3 text-center">
                    <div className="text-cyan-400 font-bold">99.9%</div>
                    <div className="text-slate-400 text-xs">Uptime</div>
                  </Card3D>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.7 }}
                  className="absolute -top-4 -right-12"
                >
                  <Card3D glowColor="blue" className="p-3 text-center">
                    <div className="text-blue-400 font-bold">50+</div>
                    <div className="text-slate-400 text-xs">Agencies</div>
                  </Card3D>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.9 }}
                  className="absolute -bottom-8 -right-8"
                >
                  <Card3D glowColor="indigo" className="p-3 text-center">
                    <div className="text-indigo-400 font-bold">24/7</div>
                    <div className="text-slate-400 text-xs">Support</div>
                  </Card3D>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 2.1 }}
                  className="absolute -bottom-4 -left-12"
                >
                  <Card3D glowColor="purple" className="p-3 text-center">
                    <div className="text-purple-400 font-bold">AI</div>
                    <div className="text-slate-400 text-xs">Powered</div>
                  </Card3D>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
