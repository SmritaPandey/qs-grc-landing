"use client"

import { motion } from "framer-motion"
import { CheckCircle, AlertCircle, FileCheck, Clock, TrendingUp } from "lucide-react"

export function SlideFive() {
  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h1 className="text-5xl font-black">
                  <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                    Compliance
                  </span>
                  <br />
                  <span className="text-white">Automation</span>
                </h1>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-green-300 mb-4">From Reactive to Proactive Compliance</h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                Stop reacting to audits. Our solution provides continuous monitoring, automated evidence collection, and
                real-time compliance dashboards. This ensures your agency is always audit-ready.
              </p>
            </motion.div>

            {/* Key Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-4 mb-8"
            >
              {[
                { icon: CheckCircle, text: "Continuous monitoring across all systems" },
                { icon: FileCheck, text: "Automated evidence collection and storage" },
                { icon: TrendingUp, text: "Real-time compliance scoring and alerts" },
                { icon: Clock, text: "Always audit-ready documentation" },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-slate-300">{benefit.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-green-400 mb-1">90%</div>
                <div className="text-slate-400 text-sm">Faster Audits</div>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-emerald-400 mb-1">24/7</div>
                <div className="text-slate-400 text-sm">Monitoring</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Before/After Visualization */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Before Section */}
              <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <AlertCircle className="w-6 h-6 text-red-400 mr-3" />
                  <h3 className="text-xl font-bold text-red-300">Before: Manual Chaos</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-slate-400">Scattered documents and spreadsheets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-slate-400">Reactive audit responses</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-slate-400">Weeks of preparation time</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-slate-400">High risk of compliance gaps</span>
                  </div>
                </div>
              </div>

              {/* Transformation Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex justify-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              {/* After Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                  <h3 className="text-xl font-bold text-green-300">After: Automated Excellence</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Centralized compliance dashboard</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Proactive monitoring and alerts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Always audit-ready evidence</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-slate-300">Continuous compliance assurance</span>
                  </div>
                </div>

                {/* Live Status Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.8 }}
                  className="mt-4 p-3 bg-green-500/20 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-green-300 font-semibold">Compliance Status</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-bold">98% Compliant</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl"
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
