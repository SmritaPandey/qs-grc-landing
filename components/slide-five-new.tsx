"use client"

import { motion, useInView } from "framer-motion"
import { CheckCircle2, AlertTriangle, FileText, TrendingUp, Database, Brain, Clock, Sparkles } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { GlowOrb } from "@/components/ui/glow-orb"
import { FloatingElement } from "@/components/ui/floating-element"
import { AnimatedCounter } from "@/components/ui/animated-counter"

export function SlideFive() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [gaugeProgress, setGaugeProgress] = useState(0)
  const [documentStack, setDocumentStack] = useState("paper")

  useEffect(() => {
    if (isInView) {
      const timer1 = setTimeout(() => setGaugeProgress(85), 1500)
      const timer2 = setTimeout(() => setDocumentStack("digital"), 3000)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
      }
    }
  }, [isInView])

  const complianceMetrics = [
    { label: "Compliance Rate", value: 98, suffix: "%", color: "green" },
    { label: "Audit Ready Time", value: 24, suffix: " hrs", color: "blue" },
    { label: "Manual Tasks Reduced", value: 85, suffix: "%", color: "cyan" },
    { label: "Risk Detection", value: 96, suffix: "%", color: "purple" }
  ]

  const beforeAfter = {
    before: [
      { item: "Manual spreadsheets", icon: FileText, stress: true },
      { item: "Scattered evidence", icon: AlertTriangle, stress: true },
      { item: "Weeks of prep time", icon: Clock, stress: true },
      { item: "Human error prone", icon: AlertTriangle, stress: true }
    ],
    after: [
      { item: "Real-time dashboards", icon: TrendingUp, stress: false },
      { item: "Auto evidence collection", icon: Database, stress: false },
      { item: "Instant audit readiness", icon: CheckCircle2, stress: false },
      { item: "AI-powered accuracy", icon: Brain, stress: false }
    ]
  }

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900/20 to-slate-900">
      {/* Background Effects */}
      <GlowOrb size={500} color="green" intensity={0.12} className="top-1/3 right-1/4" />
      <GlowOrb size={300} color="cyan" intensity={0.08} className="bottom-1/4 left-1/4" />

      {/* Floating Elements */}
      <FloatingElement className="absolute top-16 left-16" delay={0} amplitude={12}>
        <div className="w-12 h-12 bg-green-400/20 rounded-xl flex items-center justify-center">
          <Sparkles className="w-6 h-6 text-green-400" />
        </div>
      </FloatingElement>

      <FloatingElement className="absolute bottom-20 right-20" delay={2} amplitude={8}>
        <div className="w-10 h-10 bg-cyan-400/20 rounded-lg flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-cyan-400" />
        </div>
      </FloatingElement>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center py-8"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold">5</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black">
              <span className="text-white">From Reactive to</span>
              <br />
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text">
                Predictive Compliance
              </span>
            </h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl text-slate-300 max-w-5xl mx-auto"
          >
            QS‑GRC performs continuous compliance monitoring across departments, automatically collects evidence, and shows real-time dashboards for audits.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8 px-8 pb-8">
          {/* Left Side - Before vs After Visualization */}
          <div className="space-y-8">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl font-bold text-white"
            >
              The Transformation
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Before */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-red-500/10 border border-red-400/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-400 mr-2" />
                  <h3 className="text-xl font-bold text-red-400">Before</h3>
                </div>
                
                <div className="space-y-3">
                  {beforeAfter.before.map((item, index) => (
                    <motion.div
                      key={item.item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <item.icon className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item.item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Paper Stack Animation */}
                <motion.div
                  className="mt-6 relative h-20 flex items-center justify-center"
                  animate={documentStack === "paper" ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-16 h-12 bg-red-100 border border-red-300 rounded shadow-sm"
                      style={{ zIndex: 5 - i }}
                      animate={{
                        x: i * 2,
                        y: i * -2,
                        rotate: i * 2 - 4
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* After */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-green-500/10 border border-green-400/20 rounded-xl p-6"
              >
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-2" />
                  <h3 className="text-xl font-bold text-green-400">After</h3>
                </div>
                
                <div className="space-y-3">
                  {beforeAfter.after.map((item, index) => (
                    <motion.div
                      key={item.item}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                      className="flex items-center space-x-3"
                    >
                      <item.icon className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{item.item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Digital Dashboard Animation */}
                <motion.div
                  className="mt-6 relative h-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={documentStack === "digital" ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="bg-slate-800 border border-green-400/30 rounded-lg p-3">
                    <div className="grid grid-cols-3 gap-1 mb-2">
                      {[98, 24, 96].map((value, i) => (
                        <div key={i} className="bg-green-400/20 rounded px-1 py-0.5 text-center">
                          <div className="text-green-400 font-bold text-xs">{value}%</div>
                        </div>
                      ))}
                    </div>
                    <div className="h-1 bg-slate-700 rounded overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                        initial={{ width: 0 }}
                        animate={{ width: documentStack === "digital" ? "85%" : 0 }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Side - Compliance Dashboard */}
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl font-bold text-white"
            >
              Real-Time Compliance Dashboard
            </motion.h2>

            {/* Compliance Gauge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: 1 }}
              className="bg-slate-800/60 backdrop-blur-sm border border-green-400/20 rounded-xl p-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">Overall Compliance Status</h3>
                
                {/* Circular Progress Gauge */}
                <div className="relative w-32 h-32 mx-auto">
                  <svg className="w-32 h-32 transform -rotate-90">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="rgb(71, 85, 105)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="url(#gaugeGradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 56}`}
                      initial={{ strokeDashoffset: `${2 * Math.PI * 56}` }}
                      animate={{ strokeDashoffset: `${2 * Math.PI * 56 * (1 - gaugeProgress / 100)}` }}
                      transition={{ duration: 2, delay: 1.5 }}
                    />
                    <defs>
                      <linearGradient id="gaugeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#34d399" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Gauge Value */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        className="text-3xl font-bold text-green-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5 }}
                      >
                        <AnimatedCounter value={gaugeProgress} suffix="%" />
                      </motion.div>
                      <div className="text-xs text-slate-400">Compliant</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 2.8 }}
                className="flex items-center justify-center space-x-2 mb-4"
              >
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-green-400 font-semibold">Audit Ready</span>
              </motion.div>
            </motion.div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-4">
              {complianceMetrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1.5 + index * 0.2 }}
                  className={`bg-${metric.color}-500/10 border border-${metric.color}-400/20 rounded-xl p-4 text-center`}
                >
                  <motion.div
                    className={`text-2xl font-bold text-${metric.color}-400 mb-1`}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 2 + index * 0.5 }}
                  >
                    <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  </motion.div>
                  <div className="text-slate-400 text-sm">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* AI Insights */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 2.5 }}
              className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-400/20 rounded-xl p-6"
            >
              <div className="flex items-center mb-3">
                <Brain className="w-5 h-5 text-green-400 mr-2" />
                <h4 className="font-bold text-white">AI Insights</h4>
              </div>
              <div className="space-y-2 text-sm text-slate-300">
                <div>• No compliance gaps detected</div>
                <div>• Audit evidence 100% complete</div>
                <div>• Next review scheduled in 30 days</div>
                <div>• Risk level: <span className="text-green-400 font-semibold">Low</span></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
