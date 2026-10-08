"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const links = [{ label: "Home", href: "/" }, { label: "About", href: "/#about" }, { label: "Services", href: "/#services" }, { label: "Gallery", href: "/gallery" }, { label: "FAQs", href: "/#faq" }, { label: "Contact", href: "/#contact" }];

export default function Header() {
  const [open, setOpen] = useState(false);
  return <header id="top" className="site-header"><div className="container header-inner">
    <Link href="/" className="brand" onClick={() => setOpen(false)} aria-label="Consolidated Bureau home"><span className="brand-mark"><Image src="/consolidated-bureau-logo.webp" alt="Consolidated Bureau logo" width={54} height={48} priority /></span><span className="brand-name"><strong>CONSOLIDATED</strong><span>BUREAU</span></span></Link>
    <nav id="mobile-navigation" className={open ? "header-nav open" : "header-nav"} aria-label="Main navigation">{links.map(link => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<a className="header-mobile-cta" href="https://wa.me/971567931300" target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Request a survey &#8599;</a></nav>
    <a className="header-cta" href="https://wa.me/971567931300" target="_blank" rel="noopener noreferrer">Request a survey <span aria-hidden="true">&#8599;</span></a>
    <button className={open ? "menu-toggle active" : "menu-toggle"} type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation"><span /><span /></button>
  </div></header>;
}
