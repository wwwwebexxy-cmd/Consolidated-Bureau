import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryCollection from "@/components/GalleryCollection";
import GalleryVideos from "@/components/GalleryVideos";
import { siteUrl } from "@/lib/content";

export const metadata: Metadata = {
  title: "Field Gallery | Marine and Cargo Survey Work",
  description: "Photographs and field footage of cargo condition, vessel operations, heavy lifts and cargo securing from Consolidated Bureau.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Marine and Cargo Survey Field Gallery | Consolidated Bureau",
    description: "Photographs and field footage of cargo condition, vessel operations, heavy lifts and cargo securing.",
    url: "/gallery",
    images: ["/consolidated-bureau-marine-surveys-og.webp"],
  },
};

const videos = [
  { src: "/consolidated-bureau-field-footage-01.mp4", poster: "/marine-survey-field-video-poster.webp", title: "Marine operation footage", description: "Supplied footage from a marine operation." },
  { src: "/consolidated-bureau-field-footage-02.mp4", poster: "/cargo-survey-field-video-poster.webp", title: "Cargo survey footage", description: "Supplied footage from cargo survey work." },
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
          <p className="eyebrow eyebrow-light">CSB FIELD GALLERY</p>
          <div className="gallery-hero-row">
            <h1>Marine and cargo<br /><em>survey work in the field.</em></h1>
            <p>Photographs and footage of cargo condition, vessel operations, heavy lifts, container work and cargo securing.</p>
          </div>
          <div className="gallery-hero-bottom"><span>MARINE &amp; CARGO SURVEY WORK / UAE</span><span>VIEW THE COLLECTION &#8595;</span></div>
        </div>
      </section>

      <section id="videos" className="gallery-content gallery-videos-section section">
        <div className="container">
          <div className="gallery-content-head"><p>01 / FIELD VIDEOS</p><span>Supplied footage from marine and cargo operations</span></div>
          <GalleryVideos videos={videos} />
        </div>
      </section>

      <section id="photographs" className="gallery-content gallery-photos-section section">
        <div className="container">
          <div className="gallery-content-head"><p>02 / FIELD PHOTOGRAPHS</p><span>Browse by operation type, then open an image for details</span></div>
          <GalleryCollection />
          <div className="gallery-note"><span>CSB SURVEY SERVICES</span><p>The gallery includes examples associated with cargo damage, loading and discharge, marine warranty, lashing, container and charter-survey work.</p><Link className="text-link" href="/#contact">Discuss an instruction <span aria-hidden="true">&#8599;</span></Link></div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
