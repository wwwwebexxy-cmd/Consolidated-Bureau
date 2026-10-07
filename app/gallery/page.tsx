import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryCollection from "@/components/GalleryCollection";
import GalleryVideos from "@/components/GalleryVideos";
import { siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery | Marine Survey Work in the UAE",
  description: "View photographs and field footage of marine and cargo operations from Consolidated Bureau in Abu Dhabi, UAE.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Field Gallery | Consolidated Bureau",
    description: "Photographs and footage from marine and cargo operations in the UAE.",
    url: "/gallery",
    images: ["/consolidated-bureau-marine-surveys-og.webp"],
  },
};

const videos = [
  { src: "/consolidated-bureau-field-footage-01.mp4", poster: "/marine-survey-field-video-poster.webp", title: "Field footage", description: "A view from the field, supplied by Consolidated Bureau." },
  { src: "/consolidated-bureau-field-footage-02.mp4", poster: "/cargo-survey-field-video-poster.webp", title: "More from the field", description: "More footage from the team's survey work." },
];

const videoJsonLd = {
  "@context": "https://schema.org",
  "@graph": videos.map((video) => ({
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: new URL(video.poster, siteUrl).href,
    contentUrl: new URL(video.src, siteUrl).href,
  })),
};

export default function GalleryPage() {
  return <>
    <Header />
    <main className="gallery-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd).replace(/</g, "\\u003c") }} />
      <section className="gallery-hero">
        <div className="container">
          <p className="eyebrow eyebrow-light">THE CSB GALLERY</p>
          <div className="gallery-hero-row">
            <h1>From quay<br /><em>to cargo hold.</em></h1>
            <p>A working archive of vessel operations, cargo condition, heavy lifts and secured transport.</p>
          </div>
          <div className="gallery-hero-bottom"><span>MARINE SURVEYS / ABU DHABI, UAE</span><span>SCROLL TO EXPLORE ↓</span></div>
        </div>
      </section>

      <section id="videos" className="gallery-content gallery-videos-section section">
        <div className="container">
          <div className="gallery-content-head"><p>01 / FIELD VIDEOS</p><span>Watch the work in motion</span></div>
          <GalleryVideos videos={videos} />
        </div>
      </section>

      <section id="photographs" className="gallery-content gallery-photos-section section">
        <div className="container">
          <div className="gallery-content-head"><p>02 / FIELD PHOTOGRAPHS</p><span>Filter the collection, then open an image for details</span></div>
          <GalleryCollection />
          <div className="gallery-note"><span>INSIDE THE FIELD</span><p>Every assignment begins with a clear brief and ends with useful findings. Speak with our team about the survey you need.</p><Link className="text-link" href="/#contact">Start a conversation <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
