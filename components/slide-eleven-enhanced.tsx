"use client"

import { motion } from "framer-motion"
import { ArrowRight, Calendar, Download, Phone, Sparkles, Users, TrendingUp, Shield, CheckCircle, Star, Award } from "lucide-react"
import { GlowingButton } from "@/components/glowing-button"
import { QSGRCLogo } from "@/components/ui/qs-grc-logo"
import { FounderProfile } from "@/components/founder-profile"
import { RiskCalculator } from "@/components/risk-calculator"
import { companyContent } from "@/lib/content"

export function SlideElevenEnhanced() {
  const ctaOptions = [
    {
      icon: Calendar,
      title: "Book Your 15-Min Compliance Audit",
      description: "Free assessment of your current GRC maturity",
      action: "Schedule Now",
      href: "/#get-started",
      primary: true
    },
    {
      icon: Download,
      title: "Get Your Free Risk Assessment",
      description: "Detailed analysis and recommendations",
      action: "Download PDF",
      href: companyContent.pdfLink,
      external: true,
      primary: false
    },
    {
      icon: Users,
      title: "Request Live Demo",
      description: "See QS-GRC in action with your use case",
      action: "Watch Demo",
      href: "/#assess",
      primary: false
    }
  ]

  const socialProof = [
    { metric: "500+", label: "Enterprise Clients" },
    { metric: "40%", label: "Average Cost Reduction" },
    { metric: "99.9%", label: "Platform Uptime" },
    { metric: "15+", label: "Years Experience" }
  ]

  const certifications = [
    { name: "SOC 2 Type II", icon: Shield },
    { name: "ISO 27001", icon: CheckCircle },
    { name: "GDPR Compliant", icon: Star },
    { name: "Industry Leader", icon: Award }
  ]

  return (
    <div className="w-full min-h-screen relative overflow-hidden" id="get-started">
      {/* Enhanced Parallax Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
            x: [0, -40, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Main Content */}
  <div className="relative z-10 section-padding py-16 md:py-20">
        <div className="container-fluid">
          
          {/* Hero Section with Clear CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <div className="mb-8">
              <motion.div
                className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full px-6 py-3 text-cyan-400 text-lg font-medium mb-6"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.15)" }}
              >
                <Sparkles className="w-5 h-5" />
                Ready to Transform Your GRC?
              </motion.div>
              
              <h1 className="display-hero font-black mb-6">
                <span className="gradient-text">Start Your Journey</span>
                <br />
                <span className="text-white">to GRC Excellence</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Join 500+ organizations who have transformed their governance, risk, and compliance 
                with our AI-powered platform. Reduce costs by 40% and strengthen security.
              </p>
            </div>

            {/* Social Proof Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
            >
              {socialProof.map((item, index) => (
                <motion.div
                  key={item.label}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 2, repeat: Infinity }}
                  >
                    {item.metric}
                  </motion.div>
                  <div className="text-slate-400 font-medium">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Strategic CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            {ctaOptions.map((cta, index) => (
              <motion.div
                key={cta.title}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`card-enhanced p-8 text-center ${
                  cta.primary 
                    ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-blue-600/10' 
                    : 'border-slate-700/50'
                }`}
              >
                <motion.div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    cta.primary 
                      ? 'bg-cyan-500/20 text-cyan-400' 
                      : 'bg-slate-700/50 text-slate-400'
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <cta.icon className="w-8 h-8" />
                </motion.div>
                
                <h3 className="text-xl font-bold text-white mb-3">{cta.title}</h3>
                <p className="text-slate-400 mb-6">{cta.description}</p>
                
                <a
                  href={cta.href ?? "#"}
                  target={cta.external ? "_blank" : undefined}
                  rel={cta.external ? "noopener noreferrer" : undefined}
                  className="inline-flex justify-center items-center w-full"
                >
                  <GlowingButton 
                    variant={cta.primary ? "primary" : "secondary"}
                    className="w-full"
                  >
                    {cta.action}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </GlowingButton>
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Interactive Tools Section */}
          <motion.div
            id="assess"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mb-16"
          >
            <div className="text-center mb-12">
              <h2 className="display-2 font-bold text-white mb-4">
                Calculate Your Potential Savings
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Use our interactive calculator to see how much you could save with QS-GRC
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <RiskCalculator />
            </div>
          </motion.div>

          {/* Founder Profile & Trust Signals */}
          <motion.div
            id="implement"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Founder Profile */}
            <div>
              <h3 className="display-3 font-bold text-white mb-8 text-center lg:text-left">
                Meet Your GRC Experts
              </h3>
              <div className="space-y-6">
                {companyContent.founders.map((f) => (
                  <FounderProfile
                    key={f.name}
                    className="w-full"
                    name={f.name}
                    title={f.title}
                    intro={f.intro}
                    photoSrc={f.photoSrc}
                    photoClassName={f.photoClassName}
                    linkedinUrl={f.linkedinUrl}
                    twitterUrl={f.twitterUrl}
                    email={f.email}
                  />
                ))}
              </div>
            </div>

            {/* Certifications & Trust Signals */}
            <div id="maintain">
              <h3 className="display-3 font-bold text-white mb-8 text-center lg:text-left">
                Industry Recognition
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 text-center"
                  >
                    <cert.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <h4 className="text-white font-semibold">{cert.name}</h4>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Final CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-center bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-12 border border-slate-700/50"
          >
            <div className="mb-8 flex justify-center">
              <QSGRCLogo size={80} animated={false} />
            </div>
            
            <h2 className="display-2 font-bold text-white mb-4">
              Don't Wait for the Next Breach
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Every day without proper GRC puts your organization at risk. 
              Start your transformation today with a free consultation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GlowingButton variant="primary" size="lg">
                <Calendar className="mr-3 w-6 h-6" />
                Get Started - It's Free
                <ArrowRight className="ml-3 w-6 h-6" />
              </GlowingButton>
              
              <motion.a
                href="tel:+15551234567"
                className="flex items-center gap-2 text-slate-300 hover:text-cyan-300"
                whileHover={{ scale: 1.05 }}
              >
                <Phone className="w-5 h-5" />
                <span>Or call: +1 (555) 123-4567</span>
              </motion.a>
            </div>
            
            <div className="mt-8 pt-8 border-t border-slate-700/50">
              <p className="text-slate-500 text-sm">
                ✅ No commitment required  ✅ Free consultation  ✅ Expert guidance
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
