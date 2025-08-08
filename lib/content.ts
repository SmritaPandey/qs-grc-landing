export type Founder = {
  name: string
  title: string
  intro: string
  photoSrc?: string
  photoClassName?: string
  linkedinUrl?: string
  twitterUrl?: string
  email?: string
}

export type CompanyContent = {
  companyName: string
  mission: string
  vision?: string
  valueProps: string[]
  founders: Founder[]
  grcHighlights: string[]
  pdfLink: string
}

// Populate these fields from the PDF: app/resources/NeurQ AI - QS-GRC.pdf
export const companyContent: CompanyContent = {
  companyName: "Neurq AI Labs – QS-GRC",
  mission:
    "We craft intelligent, ethical, and secure enterprise solutions. QS-GRC helps organizations make smarter, faster, and safer decisions with AI-native design, quantum-safe security, and modular GRC capabilities.",
  vision:
    "Build technology that blesses, businesses that serve, and systems that scale trust—one neural loop at a time.",
  valueProps: [
    "67% improvement in risk reporting visibility",
    "Up to 90% efficiency gains for executives and boards",
    "Reduce audit prep time by 75% with AI-driven automation",
    "Quantum-safe, AI-native architecture for future resilience",
    "Integrated risk, compliance, and governance on one platform",
  ],
  founders: [
    {
      name: "Smrita Pandey",
      title: "Founder & CEO",
      intro:
        "The cyber-conscious architect of ethical AI systems—blending AI, security, and human-centered design to build intelligent, secure, and spiritually resonant platforms.",
  photoSrc: "/founders/smrita.jpg?v=20250808",
  photoClassName: "scale-135 object-top",
      linkedinUrl: "#",
      twitterUrl: "#",
      email: "mailto:hello@qs-grc.com",
    },
    {
      name: "Vikash Sharma",
      title: "Chief Strategy Advisor",
      intro:
        "A dharma-driven technocrat aligning national-scale innovation with ethical governance—advocating fraud resilience, mindful tech, and green innovation.",
  photoSrc: "/founders/vikash.jpg?v=20250808",
      linkedinUrl: "#",
      twitterUrl: "#",
      email: "mailto:hello@qs-grc.com",
    },
  ],
  grcHighlights: [
    "Enterprise, Directorate/Departmental, and Project Risk Registers",
    "Policy management and centralized compliance obligations library",
    "Incident management, BIA, and risk–strategy mapping",
    "High cost impact risk analytics and trend reporting",
    "TPRM with due diligence, assessments, and continuous monitoring",
  ],
  pdfLink: "/resources/neurq-ai-qs-grc.pdf",
}
