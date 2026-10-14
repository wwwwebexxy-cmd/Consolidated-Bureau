import type { Metadata } from "next";
import { siteUrl } from "@/lib/content";
import FloatingActions from "@/components/FloatingActions";
import PageMotion from "@/components/PageMotion";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Survey and Loss Adjusting Company | Consolidated Bureau", template: "%s | Consolidated Bureau" },
  description: "Established in 1993 as a Survey and Loss Adjusting Company with corporate base at Abu Dhabi, U.A.E.",
  applicationName: "Consolidated Bureau",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "en_AE", siteName: "Consolidated Bureau", title: "Survey and Loss Adjusting Company", description: "Established in 1993 with corporate base at Abu Dhabi, U.A.E.", url: siteUrl, images: [{ url: "/consolidated-bureau-marine-surveys-og.webp", width: 1200, height: 630, alt: "Consolidated Bureau, Abu Dhabi" }] },
  twitter: { card: "summary_large_image", title: "Consolidated Bureau", description: "Survey and Loss Adjusting Company established in 1993 in Abu Dhabi, U.A.E.", images: ["/consolidated-bureau-marine-surveys-og.webp"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}<PageMotion /><FloatingActions /></body></html>; }
