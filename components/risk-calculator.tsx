"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calculator, TrendingUp, AlertTriangle, DollarSign } from "lucide-react"
import { GlowingButton } from "@/components/glowing-button"

export function RiskCalculator() {
  const [companySize, setCompanySize] = useState<string>("")
  const [industry, setIndustry] = useState<string>("")
  const [currentCompliance, setCurrentCompliance] = useState<string>("")
  const [showResults, setShowResults] = useState(false)

  const calculateRisk = () => {
    setShowResults(true)
  }

  const getRiskScore = () => {
    let score = 0
    if (companySize === "large") score += 30
    else if (companySize === "medium") score += 20
    else score += 10

    if (industry === "finance") score += 40
    else if (industry === "healthcare") score += 35
    else if (industry === "government") score += 45
    else score += 25

    if (currentCompliance === "basic") score += 30
    else if (currentCompliance === "manual") score += 40
    else score += 10

    return Math.min(score, 100)
  }

  const getAnnualRisk = () => {
    const baseRisk = getRiskScore()
    const multiplier = companySize === "large" ? 500000 : companySize === "medium" ? 200000 : 50000
    return Math.round((baseRisk / 100) * multiplier)
  }

  const getSavings = () => {
    return Math.round(getAnnualRisk() * 0.6) // 60% reduction
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="card-enhanced max-w-2xl mx-auto"
    >
      <div className="text-center mb-8">
        <motion.div
          className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Calculator className="w-5 h-5" />
          <span className="font-semibold">Interactive Risk Calculator</span>
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2">Calculate Your Compliance Risk Exposure</h3>
        <p className="text-slate-400">Get instant insights into your potential compliance costs and savings</p>
      </div>

      {!showResults ? (
        <div className="space-y-6">
          {/* Company Size */}
          <div>
            <label className="block text-white font-semibold mb-3">Company Size</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "small", label: "1-100 employees" },
                { value: "medium", label: "100-1000 employees" },
                { value: "large", label: "1000+ employees" }
              ].map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCompanySize(option.value)}
                  className={`p-3 rounded-lg border transition-all ${
                    companySize === option.value
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                      : "bg-slate-800/50 border-slate-600 text-slate-300 hover:border-slate-500"
                  }`}
                >
                  <div className="text-sm font-medium">{option.label}</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Industry */}
          <div>
            <label className="block text-white font-semibold mb-3">Industry</label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { value: "finance", label: "Financial Services" },
                { value: "healthcare", label: "Healthcare" },
                { value: "government", label: "Government" },
                { value: "other", label: "Other" }
              ].map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIndustry(option.value)}
                  className={`p-3 rounded-lg border transition-all ${
                    industry === option.value
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                      : "bg-slate-800/50 border-slate-600 text-slate-300 hover:border-slate-500"
                  }`}
                >
                  <div className="text-sm font-medium">{option.label}</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Current Compliance */}
          <div>
            <label className="block text-white font-semibold mb-3">Current Compliance Approach</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "basic", label: "Basic/None" },
                { value: "manual", label: "Manual Processes" },
                { value: "automated", label: "Some Automation" }
              ].map((option) => (
                <motion.button
                  key={option.value}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setCurrentCompliance(option.value)}
                  className={`p-3 rounded-lg border transition-all ${
                    currentCompliance === option.value
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-300"
                      : "bg-slate-800/50 border-slate-600 text-slate-300 hover:border-slate-500"
                  }`}
                >
                  <div className="text-sm font-medium">{option.label}</div>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Calculate Button */}
          <div className="text-center pt-4">
            <GlowingButton 
              variant="primary" 
              size="lg"
              onClick={calculateRisk}
              className={`${!companySize || !industry || !currentCompliance ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <Calculator className="mr-2 w-5 h-5" />
              Calculate My Risk
            </GlowingButton>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          {/* Risk Score */}
          <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg p-6">
            <AlertTriangle className="w-12 h-12 text-red-400 mx-auto mb-3" />
            <h4 className="text-xl font-bold text-white mb-2">Your Risk Score</h4>
            <div className="text-4xl font-black text-red-400 mb-2">{getRiskScore()}%</div>
            <p className="text-red-300">High compliance vulnerability detected</p>
          </div>

          {/* Financial Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg p-4">
              <TrendingUp className="w-8 h-8 text-red-400 mx-auto mb-2" />
              <h5 className="font-bold text-white mb-1">Annual Risk Exposure</h5>
              <div className="text-2xl font-bold text-red-400">${getAnnualRisk().toLocaleString()}</div>
            </div>
            
            <div className="bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-lg p-4">
              <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <h5 className="font-bold text-white mb-1">Potential Savings</h5>
              <div className="text-2xl font-bold text-green-400">${getSavings().toLocaleString()}</div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-slate-800/50 border border-slate-600 rounded-lg p-6">
            <h5 className="text-lg font-bold text-white mb-2">Ready to reduce your risk?</h5>
            <p className="text-slate-300 mb-4">Get a personalized GRC strategy from our experts</p>
            <GlowingButton variant="primary" size="lg">
              Get My Free Risk Assessment
            </GlowingButton>
          </div>

          {/* Reset */}
          <button
            onClick={() => setShowResults(false)}
            className="text-cyan-400 hover:text-cyan-300 text-sm underline"
          >
            Calculate Again
          </button>
        </motion.div>
      )}
    </motion.div>
  )
}
