"use client"

import { motion } from "framer-motion"
import { Shield, Zap, Brain, Lock } from "lucide-react"

export function SlideThree() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Title and Description */}
            <div>
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <h1 className="display-hero font-black mb-8">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                    A Unified Platform
                  </span>
                  <br />
                  <span className="text-white">for Unbreakable</span>
                  <br />
                  <span className="text-slate-300">Governance</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mb-8"
              >
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
                  QS-GRC is a single, integrated platform that breaks down silos and provides a real-time, holistic view
                  of all governance, risk, and compliance activities.
                </p>
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-6">
                  <p className="text-cyan-300 font-semibold text-lg">Quantum-Secure • AI-Powered • Government-Ready</p>
                </div>
              </motion.div>

              {/* Key Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="space-y-4"
              >
                {[
                  { icon: Brain, text: "AI-Driven Intelligence" },
                  { icon: Lock, text: "Post-Quantum Security" },
                  { icon: Zap, text: "Real-Time Monitoring" },
                  { icon: Shield, text: "Compliance Automation" },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-slate-300 font-medium">{feature.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Platform Visualization */}
            <div className="relative h-96 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative w-full max-w-sm"
              >
                {/* Central Platform */}
                <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-6 shadow-2xl">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">QS-GRC Platform</h3>
                    <p className="text-cyan-300 text-sm">Unified Control Center</p>
                  </div>

                  {/* Dashboard Preview */}
                  <div className="bg-slate-900/50 rounded-xl p-3 mb-3">
                    <div className="grid grid-cols-3 gap-2 mb-2">
                      <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-2 text-center">
                        <div className="text-green-400 font-bold text-sm">98%</div>
                        <div className="text-xs text-slate-400">Compliance</div>
                      </div>
                      <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-2 text-center">
                        <div className="text-blue-400 font-bold text-sm">Low</div>
                        <div className="text-xs text-slate-400">Risk</div>
                      </div>
                      <div className="bg-cyan-500/20 border border-cyan-500/30 rounded-lg p-2 text-center">
                        <div className="text-cyan-400 font-bold text-sm">24/7</div>
                        <div className="text-xs text-slate-400">Monitor</div>
                      </div>
                    </div>
                    <div className="h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ duration: 2, delay: 1 }}
                      />
                    </div>
                  </div>

                  {/* Data Flow Indicators */}
                  <div className="flex justify-between items-center text-xs text-slate-400">
                    <span>Real-time</span>
                    <span>AI Analysis</span>
                    <span>Secure</span>
                  </div>
                </div>

                {/* Floating Data Nodes - positioned outside the main container */}
                {[
                  { label: "Finance", position: { top: "-20px", left: "-40px" }, delay: 1.2 },
                  { label: "IT", position: { top: "-20px", right: "-40px" }, delay: 1.4 },
                  { label: "Legal", position: { bottom: "-20px", left: "-40px" }, delay: 1.6 },
                  { label: "Operations", position: { bottom: "-20px", right: "-40px" }, delay: 1.8 },
                ].map((node, index) => (
                  <motion.div
                    key={node.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: node.delay }}
                    className="absolute"
                    style={node.position}
                  >
                    <div className="bg-slate-700/90 backdrop-blur-sm border border-slate-600 rounded-lg px-3 py-1.5">
                      <span className="text-slate-300 text-xs font-medium">{node.label}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}
