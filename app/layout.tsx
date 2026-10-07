import type { Metadata } from "next";
import { siteUrl } from "@/lib/content";
import FloatingActions from "@/components/FloatingActions";
import PageMotion from "@/components/PageMotion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Marine Surveyors & Loss Adjusters in Abu Dhabi | Consolidated Bureau", template: "%s | Consolidated Bureau" },
  description: "Independent marine surveys, cargo inspections and loss adjusting in Abu Dhabi and across the UAE. Serving insurers, vessel interests and traders since 1993.",
  applicationName: "Consolidated Bureau",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_AE", siteName: "Consolidated Bureau", title: "Marine Surveyors & Loss Adjusters in Abu Dhabi", description: "Independent marine, cargo and loss adjusting expertise across the UAE since 1993.", url: siteUrl, images: [{ url: "/consolidated-bureau-marine-surveys-og.webp", width: 1200, height: 630, alt: "Consolidated Bureau, Abu Dhabi marine surveyors" }] },
  twitter: { card: "summary_large_image", title: "Consolidated Bureau", description: "Marine surveys and loss adjusting in the UAE since 1993.", images: ["/consolidated-bureau-marine-surveys-og.webp"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}<PageMotion /><FloatingActions /></body></html>; }
