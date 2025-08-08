export const metadata = {
  title: "Resources – Guides, Playbooks, and Regulatory Updates",
  description: "Thought leadership hub: whitepapers, how-to guides, and the 2025 GRC Playbook.",
}

export default function ResourcesPage() {
  const items = [
    {
      title: "2025 GRC Playbook",
      summary: "A practical roadmap for AI-first governance and compliance.",
      cta: "Download (Free)",
  href: "/resources/neurq-ai-qs-grc.pdf",
    },
    {
      title: "How to Prepare for Your Next Audit",
      summary: "Reduce prep time by 75% with checklists and automation tips.",
      cta: "Read Guide",
      href: "#",
    },
    {
      title: "Regulatory Watch: Q3 2025",
      summary: "Key changes in ISO, SOC 2, and privacy rules you must know.",
      cta: "View Update",
      href: "#",
    },
  ]

  return (
    <div className="section-padding">
      <div className="container-fluid">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">Resources</h1>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl">Deepen your GRC expertise with curated content from our team.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((i) => (
            <div key={i.title} className="card-enhanced p-6 rounded-2xl border border-slate-700/50 bg-slate-800/50">
              <h2 className="text-xl font-semibold text-white mb-2">{i.title}</h2>
              <p className="text-slate-400 mb-4">{i.summary}</p>
              <a href={i.href} className="text-cyan-400 hover:text-cyan-300 font-medium" target={"_blank"} rel={"noopener noreferrer"}>
                {i.cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
