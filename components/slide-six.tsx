"use client"

import { motion } from "framer-motion"
import { Radar, Shield, AlertTriangle, Eye, Zap, TrendingUp } from "lucide-react"
import { Card3D } from "@/components/3d-card"

export function SlideSix() {
  const threats = [
    { name: "Cyber Attack", severity: "high", angle: 45 },
    { name: "Data Breach", severity: "medium", angle: 135 },
    { name: "Supply Chain", severity: "low", angle: 225 },
    { name: "Compliance Gap", severity: "medium", angle: 315 },
  ]

  return (
    <div className="w-full h-full overflow-y-auto">
      {/* Hero Section */}
      <section className="h-full flex items-center justify-center px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side - Content */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-3">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <h1 className="text-4xl font-black">
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
                      Risk
                    </span>
                    <span className="text-white ml-2">Foresight</span>
                  </h1>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <h2 className="text-xl font-bold text-blue-300 mb-3">Protecting Public Assets and Data</h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  Identify emerging risks, such as cybersecurity threats or supply chain vulnerabilities, with
                  predictive analytics. Our platform provides the intelligence needed to make informed, protective
                  decisions.
                </p>
              </motion.div>

              {/* Key Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="space-y-3"
              >
                {[
                  { icon: Eye, text: "Predictive threat intelligence" },
                  { icon: Radar, text: "360° risk monitoring" },
                  { icon: Zap, text: "Real-time alert system" },
                  { icon: Shield, text: "Automated threat mitigation" },
                ].map((capability, index) => (
                  <motion.div
                    key={capability.text}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-7 h-7 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <capability.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-slate-300 text-sm">{capability.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Impact Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="grid grid-cols-2 gap-3"
              >
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-1">85%</div>
                  <div className="text-slate-400 text-xs">Threat Prevention</div>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-3 text-center">
                  <div className="text-2xl font-bold text-cyan-400 mb-1">60%</div>
                  <div className="text-slate-400 text-xs">Faster Response</div>
                </div>
              </motion.div>

              {/* AI Features Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {[
                  {
                    icon: Eye,
                    title: "Predictive Analysis",
                    description: "AI models forecast risks 90 days ahead",
                    color: "blue",
                  },
                  {
                    icon: Shield,
                    title: "Auto Mitigation",
                    description: "Instant response protocols activate",
                    color: "cyan",
                  },
                  {
                    icon: TrendingUp,
                    title: "Learning",
                    description: "Improves with every threat detected",
                    color: "blue",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 + index * 0.1 }}
                  >
                    <Card3D glowColor={feature.color} className="p-4 text-center h-full">
                      <feature.icon className={`w-8 h-8 text-${feature.color}-400 mx-auto mb-2`} />
                      <h3 className="text-sm font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-300 text-xs leading-relaxed">{feature.description}</p>
                    </Card3D>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Risk Radar Visualization */}
            <div className="relative h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative w-72 h-72"
              >
                {/* Radar Background */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-cyan-500/10">
                  {/* Radar Rings */}
                  {[1, 2, 3].map((ring) => (
                    <div
                      key={ring}
                      className="absolute border border-blue-500/20 rounded-full"
                      style={{
                        width: `${ring * 25}%`,
                        height: `${ring * 25}%`,
                        top: `${50 - (ring * 25) / 2}%`,
                        left: `${50 - (ring * 25) / 2}%`,
                      }}
                    />
                  ))}

                  {/* Radar Lines */}
                  <div className="absolute top-1/2 left-0 w-full h-px bg-blue-500/20" />
                  <div className="absolute top-0 left-1/2 w-px h-full bg-blue-500/20" />
                  <div className="absolute top-1/2 left-1/2 w-full h-px bg-blue-500/20 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
                  <div className="absolute top-1/2 left-1/2 w-full h-px bg-blue-500/20 transform -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                </div>

                {/* Central Hub */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Radar className="w-5 h-5 text-white" />
                </motion.div>

                {/* Threat Indicators - positioned in a proper circle */}
                {threats.map((threat, index) => {
                  const radius = 70
                  const x = Math.cos((threat.angle * Math.PI) / 180) * radius
                  const y = Math.sin((threat.angle * Math.PI) / 180) * radius

                  const severityColors = {
                    high: "from-red-500 to-red-600",
                    medium: "from-yellow-500 to-orange-500",
                    low: "from-green-500 to-green-600",
                  }

                  return (
                    <motion.div
                      key={threat.name}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                      className="absolute top-1/2 left-1/2 w-16 h-12"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <motion.div
                        className={`w-6 h-6 bg-gradient-to-r ${severityColors[threat.severity]} rounded-full flex items-center justify-center mx-auto mb-1`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.8, 1, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.5,
                        }}
                      >
                        <AlertTriangle className="w-3 h-3 text-white" />
                      </motion.div>

                      {/* Threat Label */}
                      <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded px-1 py-0.5 text-center">
                        <span className="text-slate-300 text-xs font-medium whitespace-nowrap">{threat.name}</span>
                      </div>
                    </motion.div>
                  )
                })}

                {/* Scanning Beam */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-36 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-x-1/2 -translate-y-1/2 origin-left"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  style={{ transformOrigin: "0 50%" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
