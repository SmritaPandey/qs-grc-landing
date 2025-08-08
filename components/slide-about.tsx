"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { companyContent } from "@/lib/content"

export function SlideAbout() {
  const { companyName, mission, valueProps, grcHighlights, pdfLink } = companyContent
  return (
    <section className="min-h-screen section-padding">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="display-1 font-black text-white mb-4">About {companyName}</h1>
          <p className="text-lg text-slate-300 mb-8">{mission}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">What we deliver</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                {valueProps.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-white mb-4">GRC focus areas</h2>
              <ul className="list-disc list-inside text-slate-300 space-y-2">
                {grcHighlights.map((v) => (
                  <li key={v}>{v}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link
            href={pdfLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 hover:bg-cyan-500/25"
          >
            Read our PDF overview →
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
