"use client"

import { motion } from "framer-motion"
import { Star, TrendingUp, Quote } from "lucide-react"

export function SlideNine() {
  const metrics = [
    { label: "Audit Findings", before: "47", after: "3", improvement: "94% Reduction" },
    { label: "Service Delivery", before: "12 days", after: "3 days", improvement: "75% Faster" },
    { label: "Public Rating", before: "3.2/5", after: "4.7/5", improvement: "47% Increase" },
    { label: "Compliance Score", before: "72%", after: "98%", improvement: "26% Improvement" },
  ]

  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Success Story
            </span>
          </h1>
          <h2 className="text-3xl font-bold text-white mb-4">The City of Innovate: A GRC Transformation</h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            How one forward-thinking city transformed their governance with QS-GRC
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Story & Testimonial */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8">
                <div className="flex items-center mb-6">
                  <Quote className="w-8 h-8 text-cyan-400 mr-4" />
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-xl text-slate-300 italic leading-relaxed mb-6">
                  "QS-GRC transformed how we serve our citizens. What used to take weeks now happens in days. Our
                  compliance went from reactive firefighting to proactive excellence. The transparency features have
                  rebuilt trust with our community."
                </blockquote>

                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">MJ</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Maria Johnson</div>
                    <div className="text-cyan-300">Chief Information Officer</div>
                    <div className="text-slate-400">City of Innovate</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Challenge & Solution */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-red-300 mb-3">The Challenge</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Manual compliance processes taking 40+ hours per audit</li>
                  <li>• Fragmented data across 12 different systems</li>
                  <li>• Public trust at an all-time low (3.2/5 rating)</li>
                  <li>• 47 audit findings in the previous year</li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-300 mb-3">The Solution</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Implemented QS-GRC across all departments</li>
                  <li>• Unified data from all systems into one platform</li>
                  <li>• Launched public transparency dashboard</li>
                  <li>• Automated compliance monitoring and reporting</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Metrics & Results */}
          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Measurable Results</h3>
                <p className="text-slate-400">Transformation in 12 months</p>
              </div>

              {/* Metrics Cards */}
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg font-semibold text-white">{metric.label}</h4>
                    <div className="text-green-400 font-bold text-sm">{metric.improvement}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-red-400 text-2xl font-bold mb-1">{metric.before}</div>
                      <div className="text-slate-400 text-sm">Before</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 text-2xl font-bold mb-1">{metric.after}</div>
                      <div className="text-slate-400 text-sm">After</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                      initial={{ width: 0 }}
                      animate={{ width: "85%" }}
                      transition={{ duration: 2, delay: 1.2 + index * 0.2 }}
                    />
                  </div>
                </motion.div>
              ))}

              {/* Overall Impact */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 2 }}
                className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 text-center"
              >
                <TrendingUp className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Overall Impact</h3>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <div className="text-cyan-400 font-bold text-xl">$2.3M</div>
                    <div className="text-slate-400 text-sm">Annual Savings</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-bold text-xl">18 mo</div>
                    <div className="text-slate-400 text-sm">ROI Timeline</div>
                  </div>
                  <div>
                    <div className="text-green-400 font-bold text-xl">95%</div>
                    <div className="text-slate-400 text-sm">Staff Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
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
