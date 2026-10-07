import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GalleryCollection from "@/components/GalleryCollection";
import GalleryVideos from "@/components/GalleryVideos";

export const metadata: Metadata = {
  title: "Gallery | Marine Survey Work in the UAE",
  description: "View photographs and field footage of marine and cargo operations from Consolidated Services Bureau in Abu Dhabi, UAE.",
  alternates: { canonical: "/gallery" },
  openGraph: {
    title: "Field Gallery | Consolidated Services Bureau",
    description: "Photographs and footage from marine and cargo operations in the UAE.",
    url: "/gallery",
    images: ["/og-image.png"],
  },
};

const videos = [
  { src: "/gallery-first-video.mp4", poster: "/video-poster-01.jpg", title: "Field footage", description: "A view from the field, supplied by Consolidated Services Bureau." },
  { src: "/gallery-second-video.mp4", poster: "/video-poster-02.jpg", title: "More from the field", description: "More footage from the team's survey work." },
];

export default function GalleryPage() {
  return <>
    <Header />
    <main className="gallery-page">
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
