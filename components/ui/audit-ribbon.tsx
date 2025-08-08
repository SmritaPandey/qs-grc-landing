"use client"

import { useReducedMotion, motion } from "framer-motion"
import { useMemo, useRef, useEffect, useState } from "react"

type AuditItem = {
  title: string
  badge?: string
}

type AuditRibbonProps = {
  items?: AuditItem[]
  direction?: "left" | "right"
  /**
   * When true, renders as an absolute, decorative overlay (non-interactive).
   * When false, renders inline as a regular, in-flow section (interactive).
   */
  overlay?: boolean
}

export function AuditRibbon({
  items,
  direction = "left",
  overlay = true,
}: AuditRibbonProps) {
  const prefersReducedMotion = useReducedMotion()

  const data: AuditItem[] = useMemo(
    () =>
      items ?? [
        { title: "Risk Register", badge: "ISO 27001" },
        { title: "Control Mapping", badge: "Annex A" },
        { title: "SOC 2 Readiness", badge: "TSC" },
        { title: "Evidence Collection", badge: "Auto" },
        { title: "Policy Management", badge: "Lifecycle" },
        { title: "Vendor Risk", badge: "TPRM" },
        { title: "Incident Response", badge: "Runbooks" },
        { title: "Privacy Impact", badge: "DPIA" },
        { title: "Audit Trail", badge: "Immutable" },
        { title: "Training & Acknowledgments", badge: "Annual" },
      ],
    [items]
  )

  const dir = direction === "left" ? -1 : 1

  // Measure width of a single sequence to create a seamless marquee
  const trackRef = useRef<HTMLDivElement | null>(null)
  const seqRef = useRef<HTMLDivElement | null>(null)
  const [halfWidth, setHalfWidth] = useState(600) // default fallback

  useEffect(() => {
    const measure = () => {
      if (seqRef.current) {
        const w = seqRef.current.scrollWidth
        if (w > 0) setHalfWidth(w)
      }
    }
    measure()
    const ro = new ResizeObserver(measure)
    if (seqRef.current) ro.observe(seqRef.current)
    window.addEventListener('resize', measure)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', measure)
    }
  }, [data])

  const wrapperClasses = overlay
    ? "pointer-events-none absolute left-[-10%] right-[-10%] top-[15%] rotate-[-12deg] opacity-50 md:opacity-70"
    : "relative pointer-events-auto opacity-100 py-2 px-2 overflow-hidden rounded-xl border border-slate-700/50 bg-slate-900/30 backdrop-blur-sm";

  return (
    <div aria-hidden={overlay} className={wrapperClasses}>
      <div className="relative overflow-hidden">
        <motion.div
          ref={trackRef}
          key={halfWidth} /* restart animation when width changes */
          initial={false}
          animate={
            prefersReducedMotion
              ? { x: 0 }
              : { x: [0, dir * halfWidth] }
          }
          transition={
            prefersReducedMotion
              ? { duration: 0 }
              : { duration: Math.max(halfWidth / 80, 15), repeat: Infinity, ease: "linear" }
          }
          className="flex gap-4"
          style={{ willChange: prefersReducedMotion ? undefined : "transform" }}
        >
          {/* Sequence A */}
          <div ref={seqRef} className="flex gap-4 shrink-0">
            {data.map((item, idx) => (
              <div
                key={`A-${item.title}-${idx}`}
                className="min-w-[220px] select-none rounded-2xl border border-slate-600/50 bg-slate-900/70 px-4 py-3 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
              >
                <div className="text-sm text-slate-200">{item.title}</div>
                {item.badge && (
                  <span className="mt-1 inline-block rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-medium text-cyan-200 ring-1 ring-inset ring-cyan-400/25">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
          {/* Sequence B (duplicate) */}
          <div className="flex gap-4 shrink-0" aria-hidden>
            {data.map((item, idx) => (
              <div
                key={`B-${item.title}-${idx}`}
                className="min-w-[220px] select-none rounded-2xl border border-slate-600/50 bg-slate-900/70 px-4 py-3 backdrop-blur-md shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
              >
                <div className="text-sm text-slate-200">{item.title}</div>
                {item.badge && (
                  <span className="mt-1 inline-block rounded-full bg-cyan-500/20 px-2 py-0.5 text-[10px] font-medium text-cyan-200 ring-1 ring-inset ring-cyan-400/25">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
