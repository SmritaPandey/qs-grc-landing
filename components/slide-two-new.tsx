"use client"

import { motion, useInView } from "framer-motion"
import { AlertTriangle, TrendingDown, Clock, DollarSign, Users, FileX, Shield, Database } from "lucide-react"
import { useRef, useState, useEffect } from "react"
import { GlowOrb } from "@/components/ui/glow-orb"
import { FloatingElement } from "@/components/ui/floating-element"

export function SlideTwo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer1 = setTimeout(() => setAnimationPhase(1), 1000)
      const timer2 = setTimeout(() => setAnimationPhase(2), 2500)
      const timer3 = setTimeout(() => setAnimationPhase(3), 4000)
      return () => {
        clearTimeout(timer1)
        clearTimeout(timer2)
        clearTimeout(timer3)
      }
    }
  }, [isInView])

  const departments = [
    { name: "Finance", icon: DollarSign, color: "green", position: { x: 10, y: 20 } },
    { name: "IT", icon: Database, color: "blue", position: { x: 80, y: 25 } },
    { name: "Legal", icon: Shield, color: "purple", position: { x: 15, y: 70 } },
    { name: "Operations", icon: Users, color: "orange", position: { x: 75, y: 75 } },
  ]

  const problems = [
    {
      title: "Manual Reporting",
      description: "Hours wasted on spreadsheets",
      impact: "$2.3M annually",
      icon: FileX,
      color: "red"
    },
    {
      title: "Risk Blind Spots", 
      description: "Critical issues go undetected",
      impact: "85% higher breach risk",
      icon: AlertTriangle,
      color: "orange"
    },
    {
      title: "Audit Failures",
      description: "Compliance gaps cost millions",
      impact: "$8.7M in penalties",
      icon: Clock,
      color: "red"
    }
  ]

  return (
    <div ref={ref} className="relative w-full h-full overflow-hidden bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
      {/* Background Effects */}
      <GlowOrb size={400} color="orange" intensity={0.1} className="top-1/4 right-1/4" />
      <GlowOrb size={300} color="red" intensity={0.08} className="bottom-1/3 left-1/4" />

      {/* Warning Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(239, 68, 68, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(239, 68, 68, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: animationPhase >= 2 ? ["0px 0px", "30px 30px"] : "0px 0px",
          }}
          transition={{
            duration: 3,
            repeat: animationPhase >= 2 ? Infinity : 0,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 h-full flex flex-col">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="text-center py-12"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mr-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black">
              <span className="text-white">The</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 to-orange-500 text-transparent bg-clip-text">
                Hidden Costs
              </span>
            </h1>
          </div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-2xl text-slate-300 max-w-4xl mx-auto"
          >
            Disconnected Governance is Expensive
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 px-8 pb-8">
          {/* Left Side - Tangled Departments */}
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl font-bold text-white mb-8"
            >
              Siloed Systems Create Chaos
            </motion.h2>

            {/* Department Network Visualization */}
            <div className="relative h-96 bg-slate-800/50 backdrop-blur-sm border border-red-400/20 rounded-2xl p-8">
              {/* Department Nodes */}
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.2 }}
                  className="absolute"
                  style={{
                    left: `${dept.position.x}%`,
                    top: `${dept.position.y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <FloatingElement delay={index} amplitude={5}>
                    <div className={`w-20 h-20 bg-gradient-to-r from-${dept.color}-400/20 to-${dept.color}-500/20 border border-${dept.color}-400/40 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm`}>
                      <dept.icon className={`w-6 h-6 text-${dept.color}-400 mb-1`} />
                      <span className="text-xs text-slate-300 font-medium">{dept.name}</span>
                    </div>
                  </FloatingElement>
                </motion.div>
              ))}

              {/* Tangled Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                {departments.map((from, i) => 
                  departments.slice(i + 1).map((to, j) => {
                    const key = `${i}-${i + j + 1}`
                    return (
                      <motion.path
                        key={key}
                        d={`M ${from.position.x}% ${from.position.y}% Q ${(from.position.x + to.position.x) / 2 + Math.sin(i + j) * 20}% ${(from.position.y + to.position.y) / 2 + Math.cos(i + j) * 20}% ${to.position.x}% ${to.position.y}%`}
                        stroke={animationPhase >= 1 ? "#ef4444" : "#64748b"}
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={isInView ? { 
                          pathLength: 1, 
                          opacity: animationPhase >= 1 ? 0.8 : 0.3,
                        } : {}}
                        transition={{ 
                          duration: 2, 
                          delay: 1.5 + (i + j) * 0.1,
                        }}
                      />
                    )
                  })
                )}
              </svg>

              {/* Breaking Animation */}
              {animationPhase >= 3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 2, 0] }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="w-32 h-32 border-4 border-red-500 rounded-full animate-ping" />
                </motion.div>
              )}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 2 }}
              className="text-slate-400 mt-6 text-center"
            >
              Critical workflows trapped in departmental silos
            </motion.p>
          </div>

          {/* Right Side - Problem Cards */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl font-bold text-white mb-8"
            >
              The Real Cost of Disconnection
            </motion.h2>

            <div className="space-y-6">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 + index * 0.3 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className="relative"
                >
                  <div className="bg-slate-800/60 backdrop-blur-sm border border-red-400/20 rounded-xl p-6 hover:border-red-400/40 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r from-${problem.color}-400/20 to-${problem.color}-500/20 border border-${problem.color}-400/40 rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <problem.icon className={`w-6 h-6 text-${problem.color}-400`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{problem.title}</h3>
                        <p className="text-slate-300 mb-3">{problem.description}</p>
                        <div className="flex items-center space-x-2">
                          <TrendingDown className="w-4 h-4 text-red-400" />
                          <span className="text-red-400 font-bold text-lg">{problem.impact}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Blinking Alert */}
                    <motion.div
                      animate={{ opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`absolute top-4 right-4 w-3 h-3 bg-${problem.color}-400 rounded-full`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Impact Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 2.5 }}
              className="mt-8 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-xl p-6"
            >
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl font-black text-red-400 mb-2"
                >
                  $13.2B
                </motion.div>
                <p className="text-slate-300 font-semibold">
                  Lost annually across governments due to siloed systems
                </p>
                <div className="flex justify-center items-center mt-4 space-x-4 text-sm text-slate-400">
                  <span>• Public mistrust</span>
                  <span>• Operational inefficiency</span>
                  <span>• Compliance failures</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
