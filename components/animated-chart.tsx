"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface AnimatedChartProps {
  data: Array<{ label: string; value: number; color: string }>
  type?: "bar" | "line" | "donut"
  className?: string
}

export function AnimatedChart({ data, type = "bar", className = "" }: AnimatedChartProps) {
  const [animatedData, setAnimatedData] = useState(data.map((item) => ({ ...item, animatedValue: 0 })))

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedData(data.map((item) => ({ ...item, animatedValue: item.value })))
    }, 500)
    return () => clearTimeout(timer)
  }, [data])

  const maxValue = Math.max(...data.map((item) => item.value))

  if (type === "bar") {
    return (
      <div className={`space-y-4 ${className}`}>
        {animatedData.map((item, index) => (
          <div key={item.label} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-slate-300 font-medium">{item.label}</span>
              <span className="text-white font-bold">{item.animatedValue}%</span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${(item.animatedValue / maxValue) * 100}%` }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (type === "donut") {
    const total = data.reduce((sum, item) => sum + item.value, 0)
    let cumulativePercentage = 0

    return (
      <div className={`relative ${className}`}>
        <svg width="200" height="200" className="transform -rotate-90">
          <circle cx="100" cy="100" r="80" fill="none" stroke="rgb(51, 65, 85)" strokeWidth="20" />
          {data.map((item, index) => {
            const percentage = (item.value / total) * 100
            const strokeDasharray = `${percentage * 5.02} 502`
            const strokeDashoffset = -cumulativePercentage * 5.02
            cumulativePercentage += percentage

            return (
              <motion.circle
                key={item.label}
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke={item.color.includes("from-") ? "#06b6d4" : item.color}
                strokeWidth="20"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
                initial={{ strokeDasharray: "0 502" }}
                animate={{ strokeDasharray }}
                transition={{
                  duration: 2,
                  delay: index * 0.3,
                  ease: "easeOut",
                }}
                className="drop-shadow-lg"
              />
            )
          })}
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">{total}%</div>
            <div className="text-slate-400 text-sm">Total</div>
          </div>
        </div>
      </div>
    )
  }

  return null
}
