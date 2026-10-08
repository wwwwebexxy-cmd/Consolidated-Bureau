import type { Metadata } from "next";
import { siteUrl } from "@/lib/content";
import FloatingActions from "@/components/FloatingActions";
import PageMotion from "@/components/PageMotion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Marine Surveyors & Loss Adjusters in Abu Dhabi | Consolidated Bureau", template: "%s | Consolidated Bureau" },
  description: "Marine surveys, cargo inspections and loss-adjusting services from Abu Dhabi for insurers, shipping interests and trade and logistics companies across the UAE.",
  applicationName: "Consolidated Bureau",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_AE", siteName: "Consolidated Bureau", title: "Marine Surveyors & Loss Adjusters in Abu Dhabi", description: "Marine surveys, cargo inspections and loss-adjusting services across the UAE since 1993.", url: siteUrl, images: [{ url: "/consolidated-bureau-marine-surveys-og.webp", width: 1200, height: 630, alt: "Consolidated Bureau, Abu Dhabi marine surveyors" }] },
  twitter: { card: "summary_large_image", title: "Consolidated Bureau", description: "Marine survey, cargo inspection and loss-adjusting services in the UAE since 1993.", images: ["/consolidated-bureau-marine-surveys-og.webp"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}<PageMotion /><FloatingActions /></body></html>; }
