"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { galleryGroups, galleryPhotos, type GalleryGroupId, type GalleryPhoto } from "@/lib/gallery";

type Filter = "all" | GalleryGroupId;

export default function GalleryCollection() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activePhoto, setActivePhoto] = useState<GalleryPhoto | null>(null);
  const dialog = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLButtonElement | null>(null);
  const visiblePhotos = filter === "all" ? galleryPhotos : galleryPhotos.filter((photo) => photo.group === filter);

  useEffect(() => {
    if (!activePhoto) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActivePhoto(null);
      if (event.key === "Tab") {
        const focusable = dialog.current?.querySelectorAll<HTMLElement>("button, a[href]");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      trigger.current?.focus();
    };
  }, [activePhoto]);

  return <>
    <div className="gallery-filter-bar">
      <div className="gallery-filters" role="group" aria-label="Filter photographs">
        <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>All photographs <span>{galleryPhotos.length}</span></button>
        {galleryGroups.map((group) => {
          const count = galleryPhotos.filter((photo) => photo.group === group.id).length;
          return <button type="button" key={group.id} aria-pressed={filter === group.id} onClick={() => setFilter(group.id)}>{group.title} <span>{count}</span></button>;
        })}
      </div>
      <p>{visiblePhotos.length} {visiblePhotos.length === 1 ? "image" : "images"} shown</p>
    </div>

    <div className="photo-grid compact-photo-grid">
      {visiblePhotos.map((photo) => <article id={`photo-${photo.id}`} className="photo-card" key={photo.id}>
        <button type="button" className="photo-open" onClick={(event) => { trigger.current = event.currentTarget; setActivePhoto(photo); }} aria-label={`View ${photo.title}`}>
          <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 25vw" />
          <span className="photo-overlay"><span>{photo.category}</span><strong>{photo.title}</strong></span>
          <span className="photo-expand" aria-hidden="true">↗</span>
        </button>
      </article>)}
    </div>

    {activePhoto && <div className="photo-lightbox" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setActivePhoto(null); }}>
      <div ref={dialog} className="photo-lightbox-panel" role="dialog" aria-modal="true" aria-labelledby="photo-lightbox-title">
        <button ref={closeButton} className="photo-lightbox-close" type="button" onClick={() => setActivePhoto(null)} aria-label="Close image">×</button>
        <div className="photo-lightbox-image"><Image src={activePhoto.src} alt={activePhoto.alt} fill sizes="95vw" /></div>
        <div className="photo-lightbox-copy"><div><span>{activePhoto.category}</span><h2 id="photo-lightbox-title">{activePhoto.title}</h2><p>{activePhoto.description}</p></div><Link href={`/#service-${activePhoto.serviceId}`}>Explore related service ↗</Link></div>
      </div>
    </div>}
  </>;
}
