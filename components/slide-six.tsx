"use client"

import { motion } from "framer-motion"
import { Radar, Shield, AlertTriangle, Eye, Zap, TrendingUp } from "lucide-react"
import { Card3D } from "@/components/3d-card"

export function SlideSix() {
  const threats = [
    { name: "Cyber Attack", severity: "high" as const, angle: 45 },
    { name: "Data Breach", severity: "medium" as const, angle: 135 },
    { name: "Supply Chain", severity: "low" as const, angle: 225 },
    { name: "Compliance Gap", severity: "medium" as const, angle: 315 },
  ]

  return (
    <div className="w-full h-full overflow-y-auto">
      {/* Hero Section */}
  <section className="flex items-center justify-center px-8 py-16 md:py-20 min-h-full">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* Left Side - Content */}
            <div>
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h1 className="text-5xl font-black">
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-500 text-transparent bg-clip-text">
                      Risk
                    </span>
                    <br />
                    <span className="text-white">Foresight</span>
                  </h1>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold text-blue-300 mb-4">Protecting Public Assets and Data</h2>
                <p className="text-xl text-slate-300 leading-relaxed mb-6">
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
                className="space-y-4 mb-8"
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
                    className="flex items-center space-x-4"
                  >
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <capability.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-slate-300">{capability.text}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Impact Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-1">85%</div>
                  <div className="text-slate-400 text-sm">Threat Prevention</div>
                </div>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">60%</div>
                  <div className="text-slate-400 text-sm">Faster Response</div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Risk Radar Visualization */}
            <div className="relative h-[500px] flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative w-96 h-96"
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
                  className="absolute top-1/2 left-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 z-10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                >
                  <Radar className="w-6 h-6 text-white" />
                </motion.div>

                {/* Fixed Threat Indicators - properly spaced */}
                {threats.map((threat, index) => {
                  const radius = 140 // Increased radius for better spacing
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
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                        transform: 'translate(-50%, -50%)',
                        zIndex: 20 + index,
                      }}
                    >
                      <div className="flex flex-col items-center space-y-2">
                        {/* Threat Icon */}
                        <motion.div
                          className={`w-10 h-10 bg-gradient-to-r ${severityColors[threat.severity]} rounded-full flex items-center justify-center shadow-lg`}
                          animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.9, 1, 0.9],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                            delay: index * 0.6,
                          }}
                        >
                          <AlertTriangle className="w-5 h-5 text-white" />
                        </motion.div>

                        {/* Threat Label */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 1.5 + index * 0.2 }}
                          className="bg-slate-800/95 backdrop-blur-sm border border-slate-600/50 rounded-lg px-3 py-1.5 shadow-xl min-w-max"
                        >
                          <span className="text-slate-200 text-xs font-medium whitespace-nowrap block text-center">
                            {threat.name}
                          </span>
                        </motion.div>

                        {/* Connection Line to Center */}
                        <motion.div
                          className="absolute top-5 left-5 w-px bg-gradient-to-b from-slate-400/60 to-transparent pointer-events-none"
                          style={{
                            height: Math.sqrt(x * x + y * y) - 50,
                            transformOrigin: 'top center',
                            transform: `rotate(${Math.atan2(y, x) + Math.PI/2}rad)`,
                          }}
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 1, delay: 2 + index * 0.3 }}
                        />
                      </div>
                    </motion.div>
                  )
                })}

                {/* Scanning Beam */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-40 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -translate-x-1/2 -translate-y-1/2 origin-left"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  style={{ transformOrigin: "0 50%" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Analysis Section */}
  <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-6">AI-Powered Risk Intelligence</h2>
            <p className="text-xl text-slate-400">Predictive analytics for proactive governance</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Predictive Analysis",
                description: "AI models forecast risks 90 days ahead",
                color: "blue",
              },
              {
                icon: Shield,
                title: "Automated Mitigation",
                description: "Instant response protocols activate automatically",
                color: "cyan",
              },
              {
                icon: TrendingUp,
                title: "Continuous Learning",
                description: "System improves with every threat detected",
                color: "blue",
              },
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card3D glowColor={feature.color as any} className="p-8 text-center h-full">
                  <feature.icon className={`w-12 h-12 text-${feature.color}-400 mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
