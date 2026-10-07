import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { faqs, mapEmbedUrl, mapUrl, services, siteUrl } from "@/lib/content";

const businessSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${siteUrl}/#business`,
  name: "Consolidated Bureau", alternateName: "Consolidated Services Bureau", url: siteUrl, logo: `${siteUrl}/consolidated-bureau-logo.webp`,
  description: "Marine surveying, cargo inspection and loss adjusting services based in Abu Dhabi, UAE, since 1993.",
  foundingDate: "1993", telephone: "+971567931300", email: "cbops@consolidatedbureau.com",
  address: { "@type": "PostalAddress", streetAddress: "Office No. 10, 6th Floor, Al Hamed Business Tower, Al Falah St", addressLocality: "Abu Dhabi", addressCountry: "AE" },
  geo: { "@type": "GeoCoordinates", latitude: 24.4789371, longitude: 54.3713837 },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  sameAs: ["https://www.linkedin.com/company/13210078/", "https://www.facebook.com/csbauh", "https://youtube.com/@consolidatedbureau-bc6yh"],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Survey and loss adjusting services", itemListElement: services.map(service => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title } })) },
};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }} />
    <Header />
    <main>
      <section id="home" className="hero"><div className="hero-grid" aria-hidden="true" /><div className="container hero-layout">
        <div className="hero-copy"><p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> INDEPENDENT MARINE SURVEYORS · UAE</p><h1>When the stakes<br />are at sea, <em>clarity</em><br />matters.</h1><p className="hero-subtitle">Marine surveys, cargo inspections and loss adjusting grounded in experience, evidence and clear reporting.</p><div className="hero-actions"><a className="button button-sea" href="https://wa.me/971567931300?text=Hello%2C%20I%27d%20like%20to%20request%20a%20survey." target="_blank" rel="noopener noreferrer">Request a survey <span aria-hidden="true">↗</span></a><a className="text-link text-link-light" href="#services">Explore services <span aria-hidden="true">↗</span></a></div><div className="hero-footnote"><span className="pulse-dot" /> Abu Dhabi based. Working across the UAE.</div></div>
        <div className="hero-media"><Image src="/abu-dhabi-marine-survey.webp" alt="Illustrative scene of surveyors observing a project cargo lift beside a ship." fill priority sizes="(max-width: 760px) 100vw, 45vw" /><div className="hero-media-shade" /><div className="hero-media-top"><span>MARINE / CARGO / CLAIMS</span><span>ABU DHABI<br />UNITED ARAB EMIRATES</span></div><div className="hero-media-bottom"><span className="hero-image-index"> / SURVEY PERSPECTIVE</span><span>Every detail<br />counts.</span></div></div>
      </div><div className="hero-rail"><div className="container"><span>EST. 1993</span><span>MARINE · CARGO · CLAIMS</span><span>ABU DHABI, UAE</span></div></div></section>

      <section className="proof-strip" aria-label="Company at a glance"><div className="container proof-grid"><div><strong>1993</strong><span>Established in Abu Dhabi</span></div><div><strong>100<span className="plus">+</span></strong><span>Combined years of survey experience</span></div><div><strong>UAE</strong><span>Coverage across key ports and cities</span></div></div></section>

      <section id="about" className="section about-section"><div className="container about-grid"><div className="section-side"><span className="section-number">ABOUT US</span><div className="ornament" aria-hidden="true"><span /><span /><span /></div></div><div className="about-content"><p className="eyebrow">SURVEY EXPERIENCE SINCE 1993</p><h2>Perspective built<br />over <em>three decades.</em></h2><div className="about-text-grid"><p>Consolidated Services Bureau began in Abu Dhabi as a survey and loss adjusting company serving the Gulf region. Our work connects insurers, vessel interests and the wider trade and logistics community with independent findings they can act on.</p><p>Our surveyors bring more than 100 years of combined field experience. We examine the facts, work with the parties involved and present practical, well-structured reports that help move claims and operations forward.</p></div><div className="audience-line"><span>WORKING WITH</span><p>Underwriters <b>·</b> Shipowners <b>·</b> Agents <b>·</b> Traders <b>·</b> Logistics teams</p></div></div></div></section>

      <section id="services" className="section services-section"><div className="container"><div className="section-heading-row"><div><p className="eyebrow">WHAT WE DO</p><h2>Expertise for every<br /><em>critical moment.</em></h2></div><p className="heading-aside">From cargo in transit to vessels in port, our surveyors help establish condition, quantity, cause and next steps.</p></div><div className="services-grid">
              {services.map((service) => (
                <article id={`service-${service.id}`} className={`service-card${service.image ? " service-card-with-image" : ""}`} key={service.id}>
                  {service.image && (
                    <Link className="service-card-image" href={`/gallery#photo-${service.id}`} aria-label={`View field photograph related to ${service.title}`}>
                      <Image src={service.image} alt={service.imageAlt ?? service.title} fill sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw" />
                    </Link>
                  )}
                  <div className="service-card-content">
                    <div className="service-card-top"><span>{service.category}</span><span className="service-arrow" aria-hidden="true">↗</span></div>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>
                </article>
              ))}
            </div><div className="service-end"><span>NEED A SPECIALIST SURVEY?</span><a className="text-link" href="mailto:cbops@consolidatedbureau.com?subject=Survey%20enquiry">Tell us about your assignment <span aria-hidden="true">↗</span></a></div></div></section>

      <section className="approach-section section"><div className="container approach-grid"><div className="approach-intro"><p className="eyebrow eyebrow-light">THE CSB APPROACH</p><h2>Facts first.<br /><em>Always.</em></h2><p>When an incident is complex, a clear independent account makes all the difference.</p></div><div className="approach-steps"><div><h3>Inspect closely</h3><p>We observe condition, circumstances and the details that matter to the instruction.</p></div><div><h3>Connect the evidence</h3><p>We consider the people, cargo, vessel and documents involved to establish a sound picture.</p></div><div><h3>Report clearly</h3><p>We present findings in a practical format for clients and other concerned parties.</p></div></div></div></section>

      <section className="section coverage-section"><div className="container coverage-grid"><div><p className="eyebrow">WHERE WE WORK</p><h2>Local knowledge.<br /><em>Regional reach.</em></h2><p className="coverage-copy">Based in Abu Dhabi, with survey work across the UAE locations named in our brochure and a long history serving the Gulf region.</p><a className="text-link" href="#contact">Contact our Abu Dhabi office <span aria-hidden="true">↗</span></a></div><div className="coverage-panel"><div className="coverage-panel-head"><span>UAE COVERAGE</span><span>24.4789° N / 54.3714° E</span></div><ul>{["Abu Dhabi", "Dubai", "Sharjah", "Ras Al Khaimah", "Khor Fakkan", "Fujairah"].map(city => <li key={city}>{city}</li>)}</ul><span className="coverage-watermark" aria-hidden="true">AE</span></div></div></section>

      <section className="gallery-teaser section"><div className="container gallery-teaser-grid"><Link href="/gallery" className="gallery-teaser-media" aria-label="View field photographs in the gallery"><span className="gallery-teaser-shot gallery-teaser-shot-main"><Image src="/gallery/cargo-vessel-at-berth.webp" alt="Cargo ship moored at a quay." fill sizes="(max-width: 760px) 65vw, 34vw" /></span><span className="gallery-teaser-shot"><Image src="/gallery/copper-sheet-inspection.webp" alt="Surveyor inspecting bundled copper sheets." fill sizes="(max-width: 760px) 35vw, 19vw" /></span><span className="gallery-teaser-shot"><Image src="/gallery/quayside-heavy-lift.webp" alt="Covered project cargo being lifted above a trailer." fill sizes="(max-width: 760px) 35vw, 19vw" /></span><span className="gallery-teaser-stamp">42 FIELD PHOTOGRAPHS <span aria-hidden="true">↗</span></span></Link><div className="gallery-teaser-copy"><p className="eyebrow">A CLOSER LOOK</p><h2>See the work<br /><em>behind the words.</em></h2><p>Explore photographs and footage from the field in our dedicated gallery.</p><Link className="button button-dark" href="/gallery">View the gallery <span aria-hidden="true">↗</span></Link></div></div></section>

      <section id="faq" className="section faq-section"><div className="container faq-grid"><div><p className="eyebrow">GOOD TO KNOW</p><h2>Questions,<br /><em>answered.</em></h2><p>Useful starting points before you get in touch.</p></div><div className="faq-list">{faqs.map(faq => <details key={faq.question}><summary><span>{faq.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section id="contact" className="section contact-section"><div className="container"><div className="contact-heading"><p className="eyebrow eyebrow-light">START A CONVERSATION</p><h2>Need clarity on<br /><em>your next move?</em></h2><p>Share your survey requirement with our Abu Dhabi team.</p></div><div className="contact-grid"><div className="contact-card contact-primary"><span className="contact-label">DIRECT ENQUIRIES</span><a href="mailto:cbops@consolidatedbureau.com" className="contact-big-link">cbops@<br />consolidatedbureau.com <span aria-hidden="true">↗</span></a><a href="mailto:ops@consoludatedbureau.com" className="contact-sub-link">ops@consoludatedbureau.com</a><div className="contact-actions"><a href="tel:+971567931300">Call +971 56 793 1300 ↗</a><a href="https://wa.me/971567931300" target="_blank" rel="noopener noreferrer">WhatsApp us ↗</a></div></div><div className="contact-card contact-address"><span className="contact-label">VISIT OUR OFFICE</span><address>Office No. 10, 6th Floor<br />Al Hamed Business Tower<br />Al Falah St, Abu Dhabi, UAE</address><div className="contact-map"><iframe title="Satellite map of the CSB office in Abu Dhabi" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div><div className="contact-map-links"><a className="map-link" href={mapUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps <span aria-hidden="true">↗</span></a><a className="secondary-phone" href="tel:+9718002473">Additional number: +971 800 2473</a></div></div></div></div></section>
    </main><Footer />
  </>;
}
