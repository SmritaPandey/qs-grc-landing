"use client"

import { motion } from "framer-motion"
import { Users, Settings, TrendingUp, CheckCircle, Clock, Lightbulb } from "lucide-react"

export function SlideTen() {
  const phases = [
    {
      number: "01",
      title: "Discovery & Planning",
      duration: "2-4 weeks",
      description: "Define objectives, assess current state, and create implementation roadmap",
      icon: Lightbulb,
      color: "from-blue-400 to-cyan-500",
      tasks: [
        "Executive stakeholder alignment",
        "Current system assessment",
        "Risk and compliance audit",
        "Custom implementation plan",
      ],
    },
    {
      number: "02",
      title: "Implementation & Training",
      duration: "8-12 weeks",
      description: "Deploy QS-GRC platform and train your team for success",
      icon: Settings,
      color: "from-green-400 to-emerald-500",
      tasks: [
        "Platform configuration",
        "Data migration and integration",
        "User training and certification",
        "Pilot program launch",
      ],
    },
    {
      number: "03",
      title: "Ongoing Support & Optimization",
      duration: "Continuous",
      description: "Ensure long-term success with dedicated support and continuous improvement",
      icon: TrendingUp,
      color: "from-purple-400 to-pink-500",
      tasks: [
        "24/7 technical support",
        "Performance monitoring",
        "Feature updates and enhancements",
        "Strategic optimization reviews",
      ],
    },
  ]

  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10 py-16 md:py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-black mb-6">
            <span className="text-white">Your Roadmap to</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Modern Governance
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We don't just sell software; we provide a partnership. Here's how we ensure your success.
          </p>
        </motion.div>

        {/* Implementation Timeline */}
        <div className="space-y-12">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 + index * 0.3 }}
              className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"} gap-12`}
            >
              {/* Phase Content */}
              <div className="flex-1">
                <div
                  className={`bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 ${index % 2 === 0 ? "text-left" : "text-right"}`}
                >
                  <div className={`flex items-center mb-6 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${phase.color} rounded-2xl flex items-center justify-center ${index % 2 === 0 ? "mr-4" : "ml-4 order-2"}`}
                    >
                      <phase.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={index % 2 === 0 ? "" : "order-1"}>
                      <div className="text-3xl font-black text-white">{phase.title}</div>
                      <div className="text-slate-400 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {phase.duration}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg text-slate-300 mb-6 leading-relaxed">{phase.description}</p>

                  {/* Task List */}
                  <div className="space-y-3">
                    {phase.tasks.map((task, taskIndex) => (
                      <motion.div
                        key={task}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 + index * 0.3 + taskIndex * 0.1 }}
                        className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                      >
                        <CheckCircle
                          className={`w-5 h-5 text-green-400 ${index % 2 === 0 ? "mr-3" : "ml-3 order-2"}`}
                        />
                        <span className={`text-slate-300 ${index % 2 === 0 ? "" : "order-1"}`}>{task}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Phase Number & Connector */}
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.3 }}
                  className={`w-20 h-20 bg-gradient-to-r ${phase.color} rounded-full flex items-center justify-center text-white font-black text-2xl shadow-2xl`}
                >
                  {phase.number}
                </motion.div>

                {/* Connector Line */}
                {index < phases.length - 1 && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "120px" }}
                    transition={{ duration: 1, delay: 1 + index * 0.3 }}
                    className="w-1 bg-gradient-to-b from-slate-600 to-slate-700 mt-4"
                  />
                )}
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>

        {/* Partnership Promise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-3xl p-8 max-w-4xl mx-auto">
            <Users className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Our Partnership Promise</h3>
            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Your success is our success. We're committed to being your trusted partner throughout your digital
              governance transformation journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-slate-400">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">24/7</div>
                <div className="text-slate-400">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-slate-400">Success Rate</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
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
