import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.qs-grc.com"),
  title: {
    default: "QS-GRC – AI-Powered Governance, Risk & Compliance Platform",
    template: "%s | QS-GRC",
  },
  description:
    "We help security, risk, and compliance teams achieve 99% compliance in 90 days. Reduce breach costs by 40% and cut audit prep time by 75% with AI automation.",
  keywords: [
    "GRC software",
    "governance risk compliance",
    "risk management",
    "compliance automation",
    "audit automation",
    "ISO 27001",
    "SOC 2",
    "GDPR",
    "enterprise risk",
  ],
  openGraph: {
    title: "QS-GRC – AI-Powered Governance, Risk & Compliance Platform",
    description:
      "Achieve 99% compliance in 90 days. Reduce breach costs by 40% with AI-powered risk & compliance automation.",
    url: "https://www.qs-grc.com",
    siteName: "QS-GRC",
    images: [
      {
        url: "/qs-grc-logo.png",
        width: 1200,
        height: 630,
        alt: "QS-GRC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QS-GRC – AI-Powered Governance, Risk & Compliance Platform",
    description:
      "Achieve 99% compliance in 90 days. Reduce breach costs by 40% with AI-powered risk & compliance automation.",
    images: ["/qs-grc-logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QS-GRC",
    url: "https://www.qs-grc.com",
    logo: "https://www.qs-grc.com/qs-grc-logo.png",
    sameAs: [],
  };

  const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "QS-GRC",
    url: "https://www.qs-grc.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.qs-grc.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en" className={roboto.variable}>
      <body className={`${roboto.className} antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-slate-900 text-white px-3 py-2 rounded">
          Skip to content
        </a>
  <main id="main" role="main" className="typo">{children}</main>
        <Script
          id="jsonld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="jsonld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </body>
    </html>
  );
}
