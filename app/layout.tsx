import type { Metadata, Viewport } from "next";
import { company, companyContact, locations, services, siteUrl } from "@/lib/content";
import FloatingActions from "@/components/FloatingActions";
import PageMotion from "@/components/PageMotion";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#business`,
      name: company.name,
      legalName: company.legalName,
      url: siteUrl,
      logo: `${siteUrl}/consolidated-bureau-logo.webp`,
      image: `${siteUrl}/consolidated-bureau-marine-surveys-og.webp`,
      description: "Marine survey and loss adjusting services based in Abu Dhabi, U.A.E., serving ports and cargo operations across the Gulf region.",
      foundingDate: company.established,
      telephone: companyContact.phone,
      email: companyContact.email,
      address: { "@type": "PostalAddress", ...companyContact.address },
      geo: { "@type": "GeoCoordinates", ...companyContact.geo },
      areaServed: locations,
      serviceType: ["Marine survey", "Cargo survey", "Loss adjusting"],
      hasOfferCatalog: { "@type": "OfferCatalog", name: "Marine survey and loss adjusting services", itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title } })) },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: companyContact.phone,
        email: companyContact.email,
        areaServed: "AE",
        availableLanguage: ["English"],
      },
      sameAs: ["https://www.linkedin.com/company/13210078/", "https://www.facebook.com/csbauh", "https://youtube.com/@consolidatedbureau-bc6yh"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: company.name,
      description: "Abu Dhabi marine survey and loss adjusting services.",
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: "en-AE",
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Marine Survey and Loss Adjusting Company | Consolidated Bureau LLC-S.P.C", template: "%s | Consolidated Bureau LLC-S.P.C" },
  description: "Abu Dhabi marine survey and loss adjusting company established in 1993, providing cargo, draft, bunker, measurement, hull and machinery surveys across the UAE and Gulf region.",
  applicationName: company.name,
  keywords: ["marine survey Abu Dhabi", "marine survey UAE", "loss adjusting UAE", "cargo survey", "draft survey", "bunker survey", "measurement survey", "hull and machinery survey", "environmental damage survey", "cargo damage survey"],
  authors: [{ name: company.name, url: siteUrl }],
  creator: company.name,
  publisher: company.name,
  category: "Marine surveying and loss adjusting",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.ico" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "website",
    locale: "en_AE",
    siteName: company.name,
    title: "Marine Survey and Loss Adjusting Company | Abu Dhabi",
    description: "Independent marine survey and loss adjusting services for cargo owners, insurers, ship owners and logistics companies across the UAE and Gulf region.",
    url: siteUrl,
    images: [{ url: "/consolidated-bureau-marine-surveys-og.webp", width: 1200, height: 630, alt: "Consolidated Bureau LLC-S.P.C marine survey services in Abu Dhabi" }],
  },
  twitter: { card: "summary_large_image", title: company.name, description: "Marine survey and loss adjusting company established in 1993 in Abu Dhabi, U.A.E.", images: ["/consolidated-bureau-marine-surveys-og.webp"] },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b1c2a" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-AE"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
    {children}
    <PageMotion />
    <FloatingActions />
  </body></html>;
}
