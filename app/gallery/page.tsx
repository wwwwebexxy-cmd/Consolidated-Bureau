import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { galleryGroups, galleryPhotos } from "@/lib/gallery";

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
            <h1>A closer look<br /><em>at the work.</em></h1>
            <p>Photographs and footage from marine and cargo operations in the field.</p>
          </div>
          <div className="gallery-hero-bottom"><span>MARINE SURVEYS / ABU DHABI, UAE</span><span>SCROLL TO EXPLORE ↓</span></div>
        </div>
      </section>

      <section id="photographs" className="gallery-content gallery-photos-section section">
        <div className="container">
          <div className="gallery-content-head"><p>FIELD PHOTOGRAPHS</p><span>{galleryPhotos.length} photographs across marine and cargo work</span></div>
          <nav className="gallery-jump-nav" aria-label="Photograph categories">
            {galleryGroups.map((group) => <a href={`#gallery-${group.id}`} key={group.id}>{group.title} <span aria-hidden="true">↗</span></a>)}
          </nav>
          {galleryGroups.map((group) => <div className="gallery-photo-group" id={`gallery-${group.id}`} key={group.id}>
            <div className="gallery-group-heading"><div><span>FIELD COLLECTION</span><h2>{group.title}</h2></div><p>{group.description}</p></div>
            <div className="photo-grid">
              {galleryPhotos.filter((photo) => photo.group === group.id).map((photo) => <article id={`photo-${photo.id}`} className="photo-card" key={photo.id}>
                <div className="photo-frame"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1100px) 50vw, 33vw" /></div>
                <div className="photo-caption">
                  <span>{photo.category}</span>
                  <h3>{photo.title}</h3>
                  <p>{photo.description}</p>
                  <Link href={`/#service-${photo.serviceId}`}>Explore related service <span aria-hidden="true">↗</span></Link>
                </div>
              </article>)}
            </div>
          </div>)}
        </div>
      </section>

      <section id="videos" className="gallery-content gallery-videos-section section">
        <div className="container">
          <div className="gallery-content-head"><p>FIELD VIDEOS</p><span>More from the team</span></div>
          <div className="video-grid">
            {videos.map((video) => <article className="video-card" key={video.src}>
              <div className="video-frame"><video controls preload="none" poster={video.poster} playsInline aria-label={video.title}><source src={video.src} type="video/mp4" />Your browser does not support the video tag.</video></div>
              <div className="video-caption"><span>CSB GALLERY</span><h2>{video.title}</h2><p>{video.description}</p></div>
            </article>)}
          </div>
          <div className="gallery-note"><span>INSIDE THE FIELD</span><p>Every assignment begins with a clear brief and ends with useful findings. Speak with our team about the survey you need.</p><Link className="text-link" href="/#contact">Start a conversation <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
