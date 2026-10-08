"use client";

import { useEffect, useRef, useState } from "react";
import ArrowIcon from "@/components/ArrowIcon";

type GalleryVideo = {
  src: string;
  poster: string;
  title: string;
  description: string;
};

export default function GalleryVideos({ videos }: { videos: GalleryVideo[] }) {
  const [expanded, setExpanded] = useState<number | null>(null);
  const zoomButtons = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (expanded === null) return;

    const previousOverflow = document.body.style.overflow;
    const zoomButton = zoomButtons.current[expanded];
    document.body.style.overflow = "hidden";
    zoomButton?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setExpanded(null);
    };
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      if (zoomButton?.isConnected) zoomButton.focus();
    };
  }, [expanded]);

  return <div className="video-grid">
    {videos.map((video, index) => {
      const isExpanded = expanded === index;
      return <article
        className={isExpanded ? "video-card video-card-expanded" : "video-card"}
        key={video.src}
        role={isExpanded ? "dialog" : undefined}
        aria-modal={isExpanded ? "true" : undefined}
        aria-label={isExpanded ? `${video.title} enlarged video` : undefined}
        onKeyDown={isExpanded ? (event) => {
          if (event.key === "Tab") {
            event.preventDefault();
            zoomButtons.current[index]?.focus();
          }
        } : undefined}
      >
        <div className="video-frame">
          <video autoPlay muted loop playsInline preload="auto" poster={video.poster} aria-label={video.title}>
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button
            ref={(element) => { zoomButtons.current[index] = element; }}
            type="button"
            className="video-zoom"
            aria-label={`${isExpanded ? "Zoom out of" : "Zoom in on"} ${video.title}`}
            onClick={() => setExpanded(isExpanded ? null : index)}
          >
            <span className="video-zoom-label">{isExpanded ? "Zoom out" : "Zoom in"} <ArrowIcon direction={isExpanded ? "down-left" : "up-right"} /></span>
          </button>
        </div>
        <div className="video-caption"><span>CSB GALLERY</span><h2>{video.title}</h2><p>{video.description}</p></div>
      </article>;
    })}
  </div>;
}
