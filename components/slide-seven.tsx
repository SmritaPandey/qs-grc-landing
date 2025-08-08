"use client"

import { motion } from "framer-motion"
import { TrendingUp, Clock, Users, BarChart3, Target, Zap } from "lucide-react"
import { AnimatedChart } from "@/components/animated-chart"
import { Card3D } from "@/components/3d-card"

export function SlideSeven() {
  const efficiencyData = [
    { label: "Manual Task Reduction", value: 50, color: "from-red-500 to-red-600" },
    { label: "Staff Productivity Increase", value: 75, color: "from-green-400 to-emerald-500" },
    { label: "Process Automation", value: 85, color: "from-blue-400 to-cyan-500" },
    { label: "Cost Savings", value: 60, color: "from-yellow-400 to-orange-500" },
  ]

  const donutData = [
    { label: "Automated", value: 70, color: "#10b981" },
    { label: "Manual", value: 20, color: "#f59e0b" },
    { label: "Optimized", value: 10, color: "#06b6d4" },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Content */}
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mr-6">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-black">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
                        Operational
                      </span>
                      <br />
                      <span className="text-white">Efficiency</span>
                    </h1>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-yellow-300">Doing More with Less: The GRC ROI</h2>
                <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                  Our platform reduces the time and resources spent on routine GRC tasks by up to 50%. This allows your
                  agency to reallocate budget and staff to mission-critical initiatives.
                </p>
              </motion.div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {[
                  { icon: Clock, text: "50% reduction in manual tasks", color: "yellow" },
                  { icon: Users, text: "Staff freed for strategic work", color: "orange" },
                  { icon: Target, text: "Focus on mission-critical initiatives", color: "yellow" },
                  { icon: TrendingUp, text: "Measurable productivity gains", color: "orange" },
                ].map((benefit, index) => (
                  <Card3D key={benefit.text} glowColor={benefit.color} className="p-4">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 bg-${benefit.color}-500/20 rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <benefit.icon className={`w-5 h-5 text-${benefit.color}-400`} />
                      </div>
                      <span className="text-slate-300 text-sm">{benefit.text}</span>
                    </div>
                  </Card3D>
                ))}
              </motion.div>
            </div>

            {/* Right Side - 3D Visualization */}
            <div className="relative h-96 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                <motion.div 
                  className="w-48 h-48 rounded-full border-8 border-transparent bg-gradient-to-r from-cyan-400/20 via-transparent to-blue-600/20 backdrop-blur-sm"
                  style={{ 
                    background: "conic-gradient(from 0deg, rgba(6, 182, 212, 0.3), rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3), rgba(6, 182, 212, 0.3))"
                  }}
                  animate={{ 
                    rotate: [0, 360]
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear" 
                  }}
                />

                {/* Floating efficiency indicators */}
                <div className="absolute -top-8 -left-8">
                  <Card3D glowColor="yellow" className="p-3 text-center">
                    <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                    <div className="text-yellow-400 font-bold text-sm">+75%</div>
                    <div className="text-slate-400 text-xs">Efficiency</div>
                  </Card3D>
                </div>

                <div className="absolute -top-8 -right-8">
                  <Card3D glowColor="orange" className="p-3 text-center">
                    <Clock className="w-6 h-6 text-orange-400 mx-auto mb-1" />
                    <div className="text-orange-400 font-bold text-sm">-50%</div>
                    <div className="text-slate-400 text-xs">Time</div>
                  </Card3D>
                </div>

                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                  <Card3D glowColor="yellow" className="p-3 text-center">
                    <BarChart3 className="w-6 h-6 text-yellow-400 mx-auto mb-1" />
                    <div className="text-yellow-400 font-bold text-sm">+60%</div>
                    <div className="text-slate-400 text-xs">ROI</div>
                  </Card3D>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-6">Measurable Impact</h2>
            <p className="text-xl text-slate-400">Real results from QS-GRC implementation</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Bar Chart */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Card3D glowColor="yellow" className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Efficiency Metrics</h3>
                <AnimatedChart data={efficiencyData} type="bar" />
              </Card3D>
            </motion.div>

            {/* Donut Chart */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <Card3D glowColor="orange" className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Process Distribution</h3>
                <div className="flex justify-center">
                  <AnimatedChart data={donutData} type="donut" />
                </div>
              </Card3D>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: "Time Savings",
                value: "12 hours",
                subtitle: "Per week per employee",
                color: "yellow",
              },
              {
                icon: Users,
                title: "Staff Reallocation",
                value: "5+ people",
                subtitle: "To strategic initiatives",
                color: "orange",
              },
              {
                icon: TrendingUp,
                title: "Cost Reduction",
                value: "$2.3M",
                subtitle: "Annual savings",
                color: "yellow",
              },
            ].map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card3D glowColor={metric.color} className="p-8 text-center h-full">
                  <metric.icon className={`w-12 h-12 text-${metric.color}-400 mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-2">{metric.title}</h3>
                  <div className={`text-3xl font-black text-${metric.color}-400 mb-2`}>{metric.value}</div>
                  <p className="text-slate-400 text-sm">{metric.subtitle}</p>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
