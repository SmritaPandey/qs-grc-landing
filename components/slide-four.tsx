"use client"

import { motion } from "framer-motion"
import { Shield, Radar, Zap, Users } from "lucide-react"

export function SlideFour() {
  const pillars = [
    {
      icon: Shield,
      title: "Compliance Automation",
      description: "Effortlessly manage regulations, from federal mandates to local policies",
      color: "from-green-400 to-emerald-500",
      bgColor: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
    },
    {
      icon: Radar,
      title: "Risk Foresight",
      description: "Proactively identify, assess, and mitigate threats before they become crises",
      color: "from-blue-400 to-cyan-500",
      bgColor: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
    },
    {
      icon: Zap,
      title: "Operational Efficiency",
      description: "Automate manual tasks to free up staff for strategic work",
      color: "from-yellow-400 to-orange-500",
      bgColor: "from-yellow-500/20 to-orange-500/20",
      borderColor: "border-yellow-500/30",
    },
    {
      icon: Users,
      title: "Public Trust & Transparency",
      description: "Build confidence through demonstrable accountability and clear reporting",
      color: "from-purple-400 to-pink-500",
      bgColor: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
    },
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
              Four Pillars
            </span>
            <br />
            <span className="text-white">of Excellence</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            We empower your agency to excel in four critical areas that define modern public service
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              className={`relative bg-gradient-to-br ${pillar.bgColor} backdrop-blur-sm border ${pillar.borderColor} rounded-3xl p-8 group cursor-pointer`}
            >
              {/* Pillar Number */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">{index + 1}</span>
              </div>

              {/* Icon */}
              <motion.div
                className={`w-16 h-16 bg-gradient-to-r ${pillar.color} rounded-2xl flex items-center justify-center mb-6`}
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <pillar.icon className="w-8 h-8 text-white" />
              </motion.div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">{pillar.description}</p>

              {/* Hover Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />

              {/* Animated Border */}
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `linear-gradient(45deg, transparent, ${
                    pillar.color.includes("green")
                      ? "#10b981"
                      : pillar.color.includes("blue")
                        ? "#06b6d4"
                        : pillar.color.includes("yellow")
                          ? "#f59e0b"
                          : "#a855f7"
                  }20, transparent)`,
                }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-lg text-slate-300">
              Each pillar works in harmony to create a comprehensive governance ecosystem that serves citizens better
              while protecting public resources.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        {pillars.map((pillar, index) => (
          <motion.div
            key={index}
            className={`absolute w-64 h-64 bg-gradient-to-r ${pillar.color} rounded-full blur-3xl`}
            style={{
              top: `${20 + (index % 2) * 60}%`,
              left: `${10 + (index % 3) * 30}%`,
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + index,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: index * 2,
            }}
          />
        ))}
      </div>
    </div>
  )
}
