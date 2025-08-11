export const metadata = {
  title: "About – Neurq AI Labs & QS-GRC",
  description: "Neurq AI Labs crafts intelligent, ethical, and secure enterprise solutions. Learn about our mission, leadership, and QS-GRC platform.",
}

import Image from "next/image"

export default function AboutPage() {
  const sections = [
    { id: "overview", label: "Overview" },
    { id: "qs-grc", label: "QS-GRC" },
    { id: "leadership", label: "Leadership" },
    { id: "capabilities", label: "Capabilities" },
    { id: "reports", label: "Reports" },
    { id: "security", label: "IT & Security" },
    { id: "testing", label: "Testing" },
    { id: "least-privilege", label: "Least Privilege" },
    { id: "project-mgmt", label: "Project Mgmt" },
    { id: "architecture", label: "Architecture" },
  ]

  return (
    <div className="section-padding">
      <div className="container-fluid typo">
        <h1 className="display-1 text-white font-black mb-4">About Neurq AI Labs & QS-GRC</h1>
        <p className="text-slate-300 mb-10 max-w-3xl">
          In an age of mounting digital complexity, AI disruption, and regulatory evolution, Neurq AI Labs Pvt. Ltd. emerges as a next‑generation software agency crafting deeply intelligent, ethical, and secure enterprise solutions.
        </p>

        <nav aria-label="Sub navigation" className="mb-10">
          <ul className="flex flex-wrap gap-2">
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className="px-3 py-1 rounded-lg border border-slate-700/60 text-slate-300 hover:text-white hover:border-slate-500 bg-slate-800/30">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section id="overview" className="space-y-4 mb-12">
          <h2 className="text-white font-bold display-2">Company Overview</h2>
          <p className="text-slate-300">
            Headquartered in India and built with global ambition, Neurq AI Labs is not just writing code—it is architecting the future of digital trust, governance, and transformation.
          </p>
          <p className="text-slate-300">
            Our philosophy integrates spiritual integrity, green innovation, and cyber resilience into every platform we build.
          </p>
        </section>

        <section id="qs-grc" className="space-y-4 mb-12">
          <h2 className="text-white font-bold display-2">QS‑GRC Platform</h2>
          <p className="text-slate-300">
            QS‑GRC is an enterprise‑grade integrated risk and compliance platform engineered with AI‑native thinking, quantum‑secure frameworks, and modular GRC capabilities.
          </p>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Integrated Risk Management across strategic, operational, IT, third‑party, and compliance risks</li>
            <li>Standardized taxonomies; control testing; risk monitoring, mitigation, and reporting</li>
            <li>Quantum‑safe posture with AI‑assisted analytics and automation</li>
          </ul>
        </section>

        <section id="leadership" className="space-y-6 mb-12">
          <h2 className="text-white font-bold display-2">Leadership</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-400/30 flex-shrink-0">
                  <Image src="/founders/smrita.jpg?v=20250808" alt="Smrita Pandey headshot" fill sizes="112px" className="object-cover object-top scale-125" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-2xl mb-1">Smrita Pandey</h3>
                  <p className="text-cyan-300 font-medium mb-2">Founder & CEO</p>
                  <p className="text-slate-300">
                    The Cyber‑Conscious Architect of Ethical AI Systems. With expertise across AI, mobile, and cybersecurity, Smrita leads the creation of secure‑by‑design, AI‑integrated platforms that scale trust.
                  </p>
                </div>
              </div>
            </article>
            <article className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-cyan-500/40 transition-colors">
              <div className="flex items-start gap-4">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-400/30 flex-shrink-0">
                  <Image src="/founders/vikash.jpg?v=20250808" alt="Vikash Sharma headshot" fill sizes="112px" className="object-cover" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-2xl mb-1">Vikash Sharma</h3>
                  <p className="text-cyan-300 font-medium mb-2">Co-founder and President</p>
                  <p className="text-slate-300">
                    A dharma‑driven technocrat fusing national‑scale innovation with ethical governance—championing fraud‑resilient systems, mindful tech, and green innovation.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="capabilities" className="space-y-4 mb-12">
          <h2 className="text-white font-bold display-2">Core Capabilities</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-slate-300">
            <li className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4">Enterprise, Directorate/Departmental, and Project Risk Registers</li>
            <li className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4">Policy Management and Centralized Library of Compliance Obligations</li>
            <li className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4">Incident Reporting, BIA, and Risk–Strategy Mapping</li>
            <li className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4">High‑cost impact risk analytics and Risk Trend Analysis</li>
            <li className="bg-slate-800/40 border border-slate-700/40 rounded-xl p-4">Third‑Party Compliance and Due Diligence (TPRM)</li>
          </ul>
        </section>

        <section id="reports" className="space-y-3 mb-12">
          <h2 className="text-white font-bold display-2">Pre‑defined Reports</h2>
          <p className="text-slate-300">Enterprise Risk Register, Directorate/Departmental Risk Register, Project Risk Register, Incident Report, BIA, Risk–Objective Mapping, High Cost Impact Risks, Risk Implementation Plan, and Risk Trend Analysis.</p>
        </section>

        <section id="security" className="space-y-3 mb-12">
          <h2 className="text-white font-bold display-2">IT & Security Risk Solution (AAA)</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-1">
            <li>Authentication: MFA (password policy, OTP/CAPTCHA), biometrics</li>
            <li>Authorization: least privilege and role‑scoped controls</li>
            <li>Auditing: comprehensive authZ/authN event trails</li>
          </ul>
        </section>

        <section id="testing" className="space-y-3 mb-12">
          <h2 className="text-white font-bold display-2">QS‑GRC Testing Approach</h2>
          <p className="text-slate-300">Requirements validation, unit/integration/functional/UAT, performance, security, usability, regression, data migration, reporting/analytics, compliance/regulatory, DR/BCP, documentation and training, and post‑implementation review.</p>
        </section>

        <section id="least-privilege" className="space-y-3 mb-12">
          <h2 className="text-white font-bold display-2">Least Privilege & CRUD</h2>
          <p className="text-slate-300">Role‑based access control with just‑in‑time elevation where needed. CRUD permissions ensure data security, integrity, compliance, and accountability with auditability.</p>
        </section>

        <section id="project-mgmt" className="space-y-3 mb-12">
          <h2 className="text-white font-bold display-2">QS‑GRC Project Management</h2>
          <p className="text-slate-300">Structured initiation, planning, execution, monitoring/controlling, reporting, and closing—aligned to governance, risk, and compliance objectives.</p>
        </section>

        <section id="architecture" className="space-y-3">
          <h2 className="text-white font-bold display-2">Solution Architecture</h2>
          <p className="text-slate-300">AI‑native, quantum‑safe stack with data integrations, RBAC/MFA, workflow automation, analytics, compliance modules, risk tools, audit trail, training & docs, DR/BCP, encryption and monitoring, and scalable performance.</p>
        </section>
      </div>
    </div>
  )
}
