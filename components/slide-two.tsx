"use client"

import { motion } from "framer-motion"
import { AlertTriangle, TrendingDown, Users, FileX } from "lucide-react"
import { Card3D } from "@/components/3d-card"

export function SlideTwo() {
  const problems = [
    {
      icon: Users,
      title: "Siloed Departments",
      description: "Disconnected teams working in isolation",
      color: "from-red-500 to-orange-500",
    },
    {
      icon: FileX,
      title: "Manual Processes",
      description: "Time-consuming, error-prone workflows",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: TrendingDown,
      title: "Fragmented Data",
      description: "Incomplete visibility across systems",
      color: "from-yellow-500 to-red-500",
    },
    {
      icon: AlertTriangle,
      title: "Hidden Risks",
      description: "Threats emerge without warning",
      color: "from-red-600 to-red-400",
    },
  ]

  return (
    <div className="w-full h-full overflow-y-auto">
      {/* Hero Section */}
      <section className="h-full flex items-center justify-center px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full">
            {/* Left Side - Title and Description */}
            <div className="space-y-6">
              <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                <h1 className="text-4xl font-black mb-4">
                  <span className="text-red-400">The Hidden Costs</span>
                  <br />
                  <span className="text-white">of Disconnected</span>
                  <br />
                  <span className="text-slate-300">Systems</span>
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <p className="text-lg text-slate-300 leading-relaxed mb-4">
                  Our current approach, with siloed departments, manual processes, and fragmented data, leads to
                  significant risks and inefficiencies.
                </p>
                <p className="text-lg text-red-300 font-semibold">
                  This costs taxpayers money, slows down services, and erodes public trust.
                </p>
              </motion.div>

              {/* Impact Statistics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="grid grid-cols-2 gap-4"
              >
                {[
                  { number: "$2.3B", label: "Annual Waste", color: "red" },
                  { number: "67%", label: "Slower Response", color: "orange" },
                  { number: "45%", label: "Higher Costs", color: "yellow" },
                  { number: "3.2/5", label: "Public Trust", color: "red" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  >
                    <Card3D glowColor={stat.color} className="p-3 text-center">
                      <div className={`text-xl font-black text-${stat.color}-400 mb-1`}>{stat.number}</div>
                      <div className="text-slate-300 text-sm font-medium">{stat.label}</div>
                    </Card3D>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Side - Problem Cards */}
            <div className="grid grid-cols-2 gap-4 h-full">
              {problems.map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                  className="h-full"
                >
                  <Card3D glowColor="red" className="h-full p-4 text-center flex flex-col justify-center">
                    <div className={`w-8 h-8 bg-gradient-to-r ${problem.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <problem.icon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-white mb-2">{problem.title}</h3>
                    <p className="text-slate-300 text-xs leading-relaxed">{problem.description}</p>
                  </Card3D>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
