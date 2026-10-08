import Image from "next/image";
import Link from "next/link";

type SocialNetwork = "linkedin" | "facebook" | "youtube";

function SocialIcon({ network }: { network: SocialNetwork }) {
  if (network === "linkedin") return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="2" width="20" height="20" rx="3" /><circle cx="7" cy="8" r="1" fill="currentColor" stroke="none" /><path d="M7 12v6m4 0v-6m0 2.5c0-1.7 1-2.5 2.6-2.5 1.8 0 2.4 1 2.4 2.7V18" /></svg>;
  if (network === "facebook") return <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15 22v-8h2.7l.5-4H15V7.7c0-1.1.4-1.7 1.7-1.7H19V2.3A21 21 0 0 0 16.2 2C12.9 2 11 4 11 7.4V10H8v4h3v8h4Z" /></svg>;
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" aria-hidden="true" focusable="false"><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" /></svg>;
}

const socialLinks: { name: string; network: SocialNetwork; href: string }[] = [
  { name: "LinkedIn", network: "linkedin", href: "https://www.linkedin.com/company/13210078/" },
  { name: "Facebook", network: "facebook", href: "https://www.facebook.com/csbauh" },
  { name: "YouTube", network: "youtube", href: "https://youtube.com/@consolidatedbureau-bc6yh?si=U2VUUfhjXMPFvbOX" },
];

export default function Footer() {
  return <footer className="site-footer"><div className="container">
    <div className="footer-main">
      <div className="footer-brand">
        <Link href="/" aria-label="Consolidated Bureau home"><Image src="/consolidated-bureau-logo.webp" alt="Consolidated Bureau logo" width={68} height={61} /></Link>
        <h2>Consolidated<br />Bureau</h2>
        <p>Marine surveys, cargo inspections and loss adjusting from Abu Dhabi since 1993.</p>
      </div>
      <div className="footer-links">
        <div><span>EXPLORE</span><Link href="/#about">About us</Link><Link href="/#services">Services</Link><Link href="/gallery">Gallery</Link><Link href="/#faq">FAQs</Link></div>
        <div><span>CONNECT</span><a href="mailto:cbops@consolidatedbureau.com">Email us</a><a href="tel:+971567931300">Call us</a><a href="https://wa.me/971567931300" target="_blank" rel="noopener noreferrer">WhatsApp</a><Link href="/#contact">Find our office</Link></div>
        <div><span>FOLLOW</span>{socialLinks.map((link) => <a className="footer-social-link" href={link.href} target="_blank" rel="noopener noreferrer" key={link.network}><SocialIcon network={link.network} />{link.name} ↗</a>)}</div>
      </div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} Consolidated Bureau. All rights reserved.</span><span>ABU DHABI · UNITED ARAB EMIRATES</span><a href="#top">Back to top ↑</a></div>
  </div></footer>;
}
