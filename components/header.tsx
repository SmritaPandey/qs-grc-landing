"use client"

import Link from "next/link"
import { useState } from "react"
import { QSGRCLogo } from "@/components/ui/qs-grc-logo"
import { GlowingButton } from "@/components/glowing-button"
import { Menu, X } from "lucide-react"

type NavItem =
  | { label: string; type: "slide"; slide: number; anchor?: string }
  | { label: string; type: "link"; href: string }

// Slide indices are 0-based. SlideElevenEnhanced is index 10.
const nav: NavItem[] = [
  { label: "About", type: "link", href: "/about" },
  { label: "Assess", type: "slide", slide: 10, anchor: "assess" },
  { label: "Implement", type: "slide", slide: 10, anchor: "implement" },
  { label: "Maintain", type: "slide", slide: 10, anchor: "maintain" },
  { label: "Resources", type: "link", href: "/resources" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" aria-label="QS-GRC Home" className="flex items-center gap-3">
          <QSGRCLogo size={32} animated={false} />
          <span className="text-white font-semibold tracking-wide">QS-GRC</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {nav.map((item) => (
            item.type === "link" ? (
              <Link key={item.label} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={`/#${item.anchor ?? ""}`}
                className="text-slate-300 hover:text-white transition-colors cursor-pointer"
                onClick={(e) => {
                  e.preventDefault()
                  // Dispatch a custom event for Presentation to handle slide navigation + in-slide anchor scroll
                  window.dispatchEvent(new CustomEvent("qs-grc:navigate", { detail: { slide: item.slide, anchor: item.anchor } }))
                }}
              >
                {item.label}
              </a>
            )
          ))}
          <GlowingButton variant="primary" className="ml-2" aria-label="Request Demo" onClick={() => {
            // Navigate to final slide and focus the get-started section
            window.dispatchEvent(new CustomEvent("qs-grc:navigate", { detail: { slide: 10, anchor: "get-started" } }))
          }}>
            Request Demo
          </GlowingButton>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          className="md:hidden text-slate-200 p-2 rounded hover:bg-slate-800"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/90 backdrop-blur-xl">
          <nav className="px-4 py-3 space-y-2" aria-label="Mobile">
            {nav.map((item) => (
              item.type === "link" ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-2 py-2 rounded text-slate-200 hover:bg-slate-800"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={`/#${item.anchor ?? ""}`}
                  className="block px-2 py-2 rounded text-slate-200 hover:bg-slate-800"
                  onClick={(e) => {
                    e.preventDefault()
                    window.dispatchEvent(new CustomEvent("qs-grc:navigate", { detail: { slide: item.slide, anchor: item.anchor } }))
                    setOpen(false)
                  }}
                >
                  {item.label}
                </a>
              )
            ))}
            <GlowingButton variant="primary" className="w-full" aria-label="Request Demo" onClick={() => {
              window.dispatchEvent(new CustomEvent("qs-grc:navigate", { detail: { slide: 10, anchor: "get-started" } }))
              setOpen(false)
            }}>
              Request Demo
            </GlowingButton>
          </nav>
        </div>
      )}
    </header>
  )
}
