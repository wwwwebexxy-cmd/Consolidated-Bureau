import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";
import { company, faqItems, locations, mapEmbedUrl, mapUrl, services, whyUs } from "@/lib/content";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function Home() {
  return <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />
    <Header />
    <main>
      <section id="home" className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> MARINE SURVEY AND LOSS ADJUSTING · ABU DHABI, U.A.E</p>
            <h1>Marine Survey and<br /><em>Loss Adjusting Company</em><br />Established 1993.</h1>
            <p className="hero-subtitle">Established in 1993 as a Marine Survey and Loss Adjusting Company with corporate base at Abu Dhabi, capital city of U.A.E with the objective of meeting various survey requirements primarily of the Gulf region.</p>
            <div className="hero-actions">
              <a className="button button-sea" href="#contact">Contact us <ArrowIcon /></a>
              <a className="text-link text-link-light" href="#services">Our Services <ArrowIcon /></a>
            </div>
            <div className="hero-footnote"><span className="pulse-dot" /> More than 100+ years in survey field.</div>
          </div>
          <div className="hero-media">
            <video autoPlay muted loop playsInline preload="auto" poster="/hero-brand-still.webp" aria-label="Consolidated Bureau LLC-S.P.C logo animation.">
              <source src="/consolidated-bureau-hero-brand.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero-media-shade" />
            <div className="hero-media-top"><span>SURVEY / LOSS ADJUSTING</span><span>ABU DHABI<br />U.A.E</span></div>
            <div className="hero-media-bottom"><span className="hero-image-index">CONSOLIDATED BUREAU LLC-S.P.C</span></div>
          </div>
        </div>
        <div className="hero-rail"><div className="container"><span>ESTABLISHED IN 1993</span><span>MARINE SURVEY · GULF REGION</span><span>ABU DHABI, U.A.E</span></div></div>
      </section>

      <section className="proof-strip" aria-label="Company information"><div className="container proof-grid"><div><strong>1993</strong><span>Established as a Marine Survey and Loss Adjusting Company</span></div><div><strong>100<span className="plus">+</span></strong><span>Years Of Combined experience in survey field</span></div><div><strong>U.A.E</strong><span>Corporate base at Abu Dhabi</span></div></div></section>

      <section id="about" className="section about-section"><div className="container about-grid"><div className="section-side"><div className="ornament" aria-hidden="true"><span /><span /><span /></div></div><div className="about-content"><p className="eyebrow">WHO WE ARE?</p><h2>Who <em>we are?</em></h2><div className="about-text-grid">{company.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><div className="audience-line"><span>OUR CLIENTS</span><p>{company.clients.map((client, index) => <span key={client}>{index > 0 && <b> · </b>}{client}</span>)}</p></div></div></div></section>

      <section id="services" className="section services-section"><div className="container"><div className="section-heading-row"><div><p className="eyebrow">OUR SERVICES</p><h2>Our<br /><em>Services</em></h2></div><p className="heading-aside">Meeting various survey requirements primarily of the Gulf region.</p></div><div className="services-grid">
        {services.map((service) => (
          <article id={`service-${service.id}`} className={`service-card${service.image ? " service-card-with-image" : ""}`} key={service.id}>
            {service.image && <Link className="service-card-image" href="/gallery" aria-label={`View field photographs related to ${service.title}`}><Image src={service.image} alt={service.imageAlt ?? service.title} fill sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw" /></Link>}
            <div className="service-card-content"><div className="service-card-top"><span>OUR SERVICES</span><ArrowIcon className="service-arrow" /></div><h3>{service.title}</h3><p>{service.description}</p>{service.details && <ul className="service-details">{service.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>}</div>
          </article>
        ))}
      </div><div className="service-end"><span>MARINE SURVEY</span><a className="text-link" href="#contact">Contact us <ArrowIcon /></a></div></div></section>

      <section className="approach-section section"><div className="container approach-grid"><div className="approach-intro"><p className="eyebrow eyebrow-light">WHY WE ARE !</p><h2>Why We<br /><em>are !</em></h2><p>{company.intro[3]}</p></div><div className="approach-steps">{whyUs.map((point, index) => <div key={point}><span>{String(index + 1).padStart(2, "0")}</span><h3>{point}</h3></div>)}</div></div></section>

      <section className="section coverage-section"><div className="container coverage-grid"><div><p className="eyebrow">UAE</p><h2>What are the<br /><em>locations we operates?</em></h2><p className="coverage-copy">UAE</p><a className="text-link" href="#contact">Contact us <ArrowIcon /></a></div><div className="coverage-panel"><div className="coverage-panel-head"><span>UAE</span><span>ABU DHABI</span></div><ul>{locations.map((location) => <li key={location}>{location}</li>)}</ul><span className="coverage-watermark" aria-hidden="true">AE</span></div></div></section>

      <section id="faq" className="section faq-section"><div className="container faq-grid"><div><p className="eyebrow">QUICK ANSWERS</p><h2>Marine survey<br /><em>FAQs.</em></h2><p>Clear answers for ship owners, insurers, cargo interests and logistics teams arranging independent survey support in the UAE and Gulf region.</p></div><div className="faq-list">{faqItems.map((item) => <details key={item.question}><summary><span>{item.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div></div></section>

      <section className="gallery-teaser section"><div className="container gallery-teaser-grid"><Link href="/gallery" className="gallery-teaser-media" aria-label="View field photographs in the gallery"><span className="gallery-teaser-shot gallery-teaser-shot-main"><Image src="/gallery/cargo-vessel-at-berth.webp" alt="Cargo ship moored at a quay." fill sizes="(max-width: 760px) 65vw, 34vw" /></span><span className="gallery-teaser-shot"><Image src="/gallery/copper-sheet-inspection.webp" alt="Surveyor inspecting bundled copper sheets." fill sizes="(max-width: 760px) 35vw, 19vw" /></span><span className="gallery-teaser-shot"><Image src="/gallery/quayside-heavy-lift.webp" alt="Covered project cargo being lifted above a trailer." fill sizes="(max-width: 760px) 35vw, 19vw" /></span><span className="gallery-teaser-stamp">FIELD PHOTOGRAPHS <ArrowIcon /></span></Link><div className="gallery-teaser-copy"><p className="eyebrow">CONSOLIDATED BUREAU LLC-S.P.C</p><h2>Marine<br /><em>Survey.</em></h2><p>Our surveyors act as an interface between all concerned parties.</p><Link className="button button-dark" href="/gallery">View the gallery <ArrowIcon /></Link></div></div></section>

      <section id="contact" className="section contact-section"><div className="container"><div className="contact-heading"><p className="eyebrow eyebrow-light">MARINE SURVEY</p><h2>Contact<br /><em>Consolidated Bureau LLC-S.P.C.</em></h2><p>Cargo Underwriters / Ship Owners / Ship Agents / Traders / Importers / Exporters / Manufacturers / Logistic Companies</p></div><div className="contact-grid"><div className="contact-card contact-primary"><span className="contact-label">CONTACT</span><a href="mailto:cbops@consolidatedbureau.com" className="contact-big-link">cbops@<br />consolidatedbureau.com <ArrowIcon /></a><a href="mailto:ops@consoludatedbureau.com" className="contact-sub-link">ops@consoludatedbureau.com</a><div className="contact-actions"><a href="tel:+971567931300">Call +971 56 793 1300 <ArrowIcon /></a><a href="https://wa.me/971567931300" target="_blank" rel="noopener noreferrer">WhatsApp us <ArrowIcon /></a></div></div><div className="contact-card contact-address"><span className="contact-label">ABU DHABI</span><address>Office No. 10, 6th Floor<br />Al Hamed Business Tower<br />Al Falah St, Abu Dhabi, UAE</address><div className="contact-map"><iframe title="Satellite map of the CSB office in Abu Dhabi" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div><div className="contact-map-links"><a className="map-link" href={mapUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps <ArrowIcon /></a><a className="secondary-phone" href="tel:+9718002473">Additional number: +971 800 2473</a></div></div></div></div></section>
    </main>
    <Footer />
  </>;
}
