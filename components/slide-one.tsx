"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Shield, Globe, Zap, Sparkles, CheckCircle, Star } from "lucide-react"
import { GlowingButton } from "@/components/glowing-button"
import { Card3D } from "@/components/3d-card"
import { QSGRCLogo } from "@/components/ui/qs-grc-logo"
import { AuditRibbon } from "@/components/ui/audit-ribbon"

export function SlideOne() {
  const trustSignals = [
    { icon: Shield, text: "SOC 2 Type II Certified" },
    { icon: CheckCircle, text: "ISO 27001 Compliant" },
    { icon: Star, text: "99.99% Uptime SLA" },
  ];

  const clientLogos = [
    "Fortune 500 Companies",
    "Government Agencies", 
    "Healthcare Systems",
    "Financial Institutions"
  ];

  // Core features displayed in the features section
  const features = [
    {
      icon: Shield,
      title: "Quantum-Secure",
      description: "Advanced encryption and post-quantum cryptography protect sensitive government data",
      color: "cyan" as const,
    },
    {
      icon: Globe,
      title: "Fully Transparent",
      description: "Real-time dashboards and public reporting build trust with citizens",
      color: "blue" as const,
    },
    {
      icon: Zap,
      title: "Highly Efficient",
      description: "AI-powered automation reduces manual work and accelerates service delivery",
      color: "indigo" as const,
    },
  ] as const;

  // KPI stats displayed in the stats section
  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", color: "green" as const },
    { number: "50%", label: "Cost Reduction", color: "blue" as const },
    { number: "24/7", label: "Support Available", color: "purple" as const },
    { number: "100+", label: "Agencies Served", color: "cyan" as const },
  ] as const;

  // Visual screenshots to showcase GRC UI (drop files into /public/grc with these names)
  const visuals: { src: string; alt: string }[] = [
    { src: "/grc/streamline-dashboard.png", alt: "GRC Dashboard overview" },
    { src: "/grc/streamline-heatmap.png", alt: "Risk Heatmap matrix" },
    { src: "/grc/streamline-governance.png", alt: "Governance and policies" },
    { src: "/grc/streamline-reports.png", alt: "Reports and compliance dashboards" },
    { src: "/grc/grc-dashboard-1.webp", alt: "GRC dashboard UI 1" },
    { src: "/grc/grc-dashboard-2.webp", alt: "GRC dashboard UI 2" },
    { src: "/grc/grc-audit-log.webp", alt: "GRC audit logs" },
    { src: "/grc/grc-risk-heatmap.webp", alt: "GRC risk heatmap" },
  ]

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section - Above the Fold */}
      <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
  {/* Removed background overlay ribbon; ribbon now lives as an in-flow section below */}
        {/* Parallax Background Elements */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            backgroundPosition: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{
            backgroundImage: "radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
            backgroundSize: "200% 200%"
          }}
          aria-hidden="true"
        />

        <div className="container-fluid relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-20 items-center">
            {/* Left Side - Value Proposition */}
            <div className="space-y-8">
              {/* Crystal-Clear Value Proposition */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <div className="mb-4">
                  <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-semibold border border-cyan-500/30">
                    🚀 #1 Rated GRC Platform
                  </span>
                </div>
                
                <h1 className="display-hero font-black mb-6">
                  <span className="gradient-text">
                    We help you achieve
                  </span>
                  <br />
                  <span className="text-white">99% Compliance</span>
                  <br />
                  <span className="gradient-text">in 90 days</span>
                </h1>
                
                <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mb-6" />
              </motion.div>

              {/* Supporting Headline */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="space-y-6"
              >
                <h2 className="display-2 font-bold text-slate-300">
                  Transform your governance, risk, and compliance with AI-powered automation
                </h2>
                <p className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-2xl">
                  Stop losing money to compliance failures. Our platform reduces breach costs by 40% 
                  and audit preparation time by 75% for over 500+ organizations worldwide.
                </p>
              </motion.div>

              {/* Trust Signals */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="flex flex-wrap gap-4 mb-8"
                aria-label="Trust and certifications"
              >
                {trustSignals.map((signal, index) => (
                  <div key={index} className="flex items-center gap-2 bg-slate-800/50 px-3 py-2 rounded-lg border border-slate-700/50">
                    <signal.icon className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                    <span className="text-sm text-slate-300">{signal.text}</span>
                  </div>
                ))}
              </motion.div>

              {/* Strategic CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <GlowingButton variant="primary" size="lg" className="group" asChild>
                  <Link href="/#assess" aria-label="Start my free risk assessment">
                    <Sparkles className="mr-3 w-5 h-5 group-hover:animate-spin" aria-hidden="true" />
                    Start My Risk Assessment
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </GlowingButton>
                
                <GlowingButton variant="secondary" size="lg" asChild>
                  <Link href="/#get-started" aria-label="Book a 15-minute compliance audit">
                    <Globe className="mr-3 w-5 h-5" aria-hidden="true" />
                    Book 15-Min Compliance Audit
                  </Link>
                </GlowingButton>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.0 }}
                className="pt-8"
              >
                <p className="text-sm text-slate-500 mb-4">Trusted by industry leaders:</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4" aria-label="Client categories">
                  {clientLogos.map((logo, index) => (
                    <div key={index} className="text-xs text-slate-400 bg-slate-800/30 px-3 py-2 rounded border border-slate-700/30 text-center">
                      {logo}
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Moved GRC visuals below ribbon to keep hero split layout intact */}
            </div>

            {/* Right Side - Enhanced 3D Elements */}
            <div className="relative h-96 lg:h-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="relative"
              >
                {/* Central 3D Element with Logo and Metrics */}
                <div className="flex justify-center relative">
                  <motion.div 
                    className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/30 backdrop-blur-sm border border-cyan-400/30 animate-pulse-glow flex items-center justify-center relative overflow-hidden"
                    animate={{ 
                      rotateY: [0, 360],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      rotateY: { duration: 15, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    aria-hidden="true"
                  >
                    {/* Floating metrics around the logo */}
                    <motion.div
                      className="absolute top-4 right-4 bg-green-500/90 text-white px-2 py-1 rounded text-xs font-bold"
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      99% Uptime
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-4 left-4 bg-blue-500/90 text-white px-2 py-1 rounded text-xs font-bold"
                      animate={{ y: [5, -5, 5] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                    >
                      40% Cost Reduction
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-1/2 left-2 bg-purple-500/90 text-white px-2 py-1 rounded text-xs font-bold"
                      animate={{ x: [-3, 3, -3] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      75% Faster
                    </motion.div>

                    {/* QS-GRC Logo inside the sphere */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1
                      }}
                      transition={{ 
                        opacity: { duration: 1, delay: 0.8 },
                        scale: { duration: 1, delay: 0.8 }
                      }}
                      className="z-10"
                    >
                      <QSGRCLogo size={150} animated={true} />
                    </motion.div>
                  </motion.div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-10 -left-10" aria-hidden="true">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-purple-400/20 to-indigo-600/30 backdrop-blur-sm border border-purple-400/30 rounded-lg"
                    animate={{ 
                      rotateX: [0, 360],
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      rotateX: { duration: 8, repeat: Infinity, ease: "linear" },
                      y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                </div>
                <div className="absolute -top-10 -right-10" aria-hidden="true">
                  <motion.div 
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400/20 to-emerald-600/30 backdrop-blur-sm border border-green-400/30"
                    style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                      scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                  />
                </div>
                <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2" aria-hidden="true">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400/20 to-rose-600/30 backdrop-blur-sm border border-pink-400/30"
                    animate={{ 
                      y: [0, -15, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1 
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

  {/* Sliding Audit Ribbon Section (in-flow) */}
  <section aria-label="Audit capabilities" className="py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="-mx-8 z-10 relative rounded-xl">
            <AuditRibbon direction="left" overlay={false} />
          </div>
        </div>
      </section>

  {/* GRC Visuals Bento Grid Section */}
  <section aria-label="GRC Visuals" className="py-8 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-6 gap-3 auto-rows-[8rem] md:auto-rows-[10rem]"
          >
            {visuals.map((v, i) => (
              <div
                key={v.src}
                className={
                  "rounded-xl overflow-hidden bg-slate-800/40 border border-slate-700/50 relative group " +
                  (i % 8 === 0 ? "col-span-6 md:col-span-4 row-span-2" :
                   i % 8 === 1 ? "col-span-3 row-span-1" :
                   i % 8 === 2 ? "col-span-3 row-span-1" :
                   i % 8 === 3 ? "col-span-6 md:col-span-2 row-span-2" :
                   i % 8 === 4 ? "col-span-3 row-span-1" :
                   i % 8 === 5 ? "col-span-3 row-span-1" :
                   i % 8 === 6 ? "col-span-6 md:col-span-3 row-span-2" :
                                  "col-span-6 md:col-span-3 row-span-2")
                }
                title={v.alt}
                aria-label={v.alt}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.src} alt={v.alt} className="w-full h-full object-cover" onError={(e) => {
                  const el = e.currentTarget as HTMLImageElement
                  el.style.display = 'none'
                  el.parentElement && (el.parentElement.style.background = 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(59,130,246,0.15))')
                }} />
                <div className="absolute inset-x-2 bottom-2 px-2 py-1 rounded-md bg-slate-900/70 text-[11px] text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {v.alt}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

  {/* Features Section */}
  <section id="features" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Core Principles</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Built on three fundamental pillars that define modern governance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card3D glowColor={feature.color as any} className="h-full p-8">
                  <div className="text-center space-y-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${
                        feature.color === 'cyan'
                          ? 'from-cyan-500 to-cyan-600'
                          : feature.color === 'blue'
                          ? 'from-blue-500 to-blue-600'
                          : 'from-indigo-500 to-indigo-600'
                      } rounded-2xl flex items-center justify-center mx-auto`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                    <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                  </div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* Stats Section */}
  <section id="stats" className="py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card3D glowColor={stat.color as any} className="p-8 text-center">
                  <div
                    className={`text-4xl font-black ${
                      stat.color === 'green'
                        ? 'text-green-400'
                        : stat.color === 'blue'
                        ? 'text-blue-400'
                        : stat.color === 'purple'
                        ? 'text-purple-400'
                        : 'text-cyan-400'
                    } mb-2`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                </Card3D>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
