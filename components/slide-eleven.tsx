"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Download, Phone, QrCode, Sparkles } from "lucide-react"
import { GlowingButton } from "@/components/glowing-button"

export function SlideEleven() {
  return (
    <div className="h-full flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-8 text-center relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <h1 className="text-7xl md:text-8xl font-black mb-8">
            <span className="text-white">The Choice is</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text">
              Clear
            </span>
          </h1>
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
            <Sparkles className="w-8 h-8 text-cyan-400 mx-4" />
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">The Time is Now.</h2>
        </motion.div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-16"
        >
          <p className="text-2xl text-slate-300 mb-8 leading-relaxed max-w-4xl mx-auto">
            This is not a cost, but an investment in the future of your agency. Let's schedule a personalized
            demonstration to show you exactly how QS-GRC can transform your operations.
          </p>

          <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl p-6 max-w-3xl mx-auto">
            <p className="text-lg text-cyan-300 font-semibold">
              Join the leaders who are already transforming governance with QS-GRC
            </p>
          </div>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-8 justify-center mb-16"
        >
          <GlowingButton variant="primary" size="lg">
            <Calendar className="mr-3 w-6 h-6" />
            Schedule a Demo
            <ArrowRight className="ml-3 w-6 h-6" />
          </GlowingButton>

          <GlowingButton variant="secondary" size="lg">
            <Download className="mr-3 w-6 h-6" />
            Download Brief
          </GlowingButton>

          <GlowingButton variant="secondary" size="lg">
            <Phone className="mr-3 w-6 h-6" />
            Talk to Sales
          </GlowingButton>
        </motion.div>

        {/* Contact Information & QR Code */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
        >
          {/* Contact Info */}
          <div className="text-left">
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
            <div className="space-y-2 text-slate-300">
              <p>📧 demo@neurq.ai</p>
              <p>📞 1-800-QS-GRC-AI</p>
              <p>🌐 www.neurq.ai/qs-grc</p>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-2xl">
              <QrCode className="w-24 h-24 text-slate-900" />
            </div>
            <p className="text-slate-400 text-sm">Scan to book demo</p>
          </div>

          {/* Company Info */}
          <div className="text-right">
            <h3 className="text-xl font-bold text-white mb-4">NeurQ AI Labs</h3>
            <div className="space-y-2 text-slate-300">
              <p>Quantum-Secure AI Solutions</p>
              <p>Trusted by Government</p>
              <p>Built for the Future</p>
            </div>
          </div>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Lead the Future of Governance?</h3>
            <p className="text-xl text-slate-300 leading-relaxed">
              The opportunity to transform your agency is here. Don't let outdated systems hold back your mission to
              serve the public. Take the first step today.
            </p>
          </div>
        </motion.div>

        {/* Pulsing CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-12"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              boxShadow: [
                "0 0 0 0 rgba(6, 182, 212, 0.4)",
                "0 0 0 20px rgba(6, 182, 212, 0)",
                "0 0 0 0 rgba(6, 182, 212, 0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            <GlowingButton variant="primary" size="lg">
              <Sparkles className="mr-3 w-6 h-6" />
              Transform Your Agency Today
              <ArrowRight className="ml-3 w-6 h-6" />
            </GlowingButton>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-6 h-6 bg-cyan-400 rounded-full"
        animate={{
          y: [0, -30, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-4 h-4 bg-blue-400 rounded-full"
        animate={{
          y: [0, 20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-8 h-8 bg-purple-400 rounded-full"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}
