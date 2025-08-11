"use client"

import { motion } from "framer-motion"
import { Users, Eye, FileText, TrendingUp, Shield, CheckCircle } from "lucide-react"

export function SlideEight() {
  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden">
  <div className="max-w-7xl mx-auto px-8 relative z-10 pt-16 md:pt-20 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <div>
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <h1 className="display-hero font-black">
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                    Public Trust
                  </span>
                  <br />
                  <span className="text-white">& Transparency</span>
                </h1>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-bold text-purple-300 mb-4">Building a Foundation of Transparency</h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                We provide comprehensive, shareable reports and dashboards that demonstrate accountability to the
                public. Show, don't just tell, how taxpayer money is being protected and managed with integrity.
              </p>
            </motion.div>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="space-y-4 mb-8"
            >
              {[
                { icon: Eye, text: "Public-facing transparency dashboards" },
                { icon: FileText, text: "Automated accountability reports" },
                { icon: Shield, text: "Immutable audit trails" },
                { icon: TrendingUp, text: "Real-time performance metrics" },
              ].map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-slate-300">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-1">92%</div>
                <div className="text-slate-400 text-sm">Public Satisfaction</div>
              </div>
              <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-pink-400 mb-1">100%</div>
                <div className="text-slate-400 text-sm">Data Integrity</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Transparency Flow */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="space-y-8"
            >
              {/* Data Collection */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Data Collection</h3>
                    <p className="text-slate-400 text-sm">Automated evidence gathering</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-400 to-cyan-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 1.2 }}
                    />
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="flex justify-center"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
              </motion.div>

              {/* Processing & Analysis */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.6 }}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Transparency Engine</h3>
                    <p className="text-slate-400 text-sm">AI-powered analysis & reporting</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-purple-400 to-pink-500"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 2, delay: 2 }}
                    />
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </motion.div>

              {/* Arrow */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.2 }}
                className="flex justify-center"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
              </motion.div>

              {/* Public Trust */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 2.4 }}
                className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Public Trust</h3>
                    <p className="text-slate-400 text-sm">Citizen confidence & engagement</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-4">
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-lg">92%</div>
                    <div className="text-slate-400 text-xs">Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-emerald-400 font-bold text-lg">85%</div>
                    <div className="text-slate-400 text-xs">Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-cyan-400 font-bold text-lg">98%</div>
                    <div className="text-slate-400 text-xs">Accuracy</div>
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
          className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
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
