import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowIcon from "@/components/ArrowIcon";
import { faqs, mapEmbedUrl, mapUrl, services, siteUrl } from "@/lib/content";

const businessSchema = {
  "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${siteUrl}/#business`,
  name: "Consolidated Bureau", alternateName: "Consolidated Services Bureau", url: siteUrl, logo: `${siteUrl}/consolidated-bureau-logo.webp`,
  description: "Marine survey, cargo inspection and loss-adjusting services from Abu Dhabi for cargo, vessels and marine operations across the UAE.",
  foundingDate: "1993", telephone: "+971567931300", email: "cbops@consolidatedbureau.com",
  address: { "@type": "PostalAddress", streetAddress: "Office No. 10, 6th Floor, Al Hamed Business Tower, Al Falah St", addressLocality: "Abu Dhabi", addressCountry: "AE" },
  geo: { "@type": "GeoCoordinates", latitude: 24.4789371, longitude: 54.3713837 },
  areaServed: { "@type": "Country", name: "United Arab Emirates" },
  sameAs: ["https://www.linkedin.com/company/13210078/", "https://www.facebook.com/csbauh", "https://youtube.com/@consolidatedbureau-bc6yh"],
  hasOfferCatalog: { "@type": "OfferCatalog", name: "Survey and loss-adjusting services", itemListElement: services.map(service => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title } })) },
};

export default function Home() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }} />
    <Header />
    <main>
      <section id="home" className="hero">
        <div className="hero-grid" aria-hidden="true" />
        <div className="container hero-layout">
          <div className="hero-copy">
            <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> MARINE SURVEY &amp; LOSS ADJUSTING &#183; UAE</p>
            <h1>Marine surveys for<br /><em>cargo, vessels</em><br />and operations.</h1>
            <p className="hero-subtitle">Consolidated Services Bureau provides survey, inspection and loss-adjusting services from Abu Dhabi for the marine, cargo, insurance and logistics sectors.</p>
            <div className="hero-actions">
              <a className="button button-sea" href="https://wa.me/971567931300?text=Hello%2C%20I%27d%20like%20to%20request%20a%20survey." target="_blank" rel="noopener noreferrer">Request a survey <ArrowIcon /></a>
              <a className="text-link text-link-light" href="#services">View survey services <ArrowIcon /></a>
            </div>
            <div className="hero-footnote"><span className="pulse-dot" /> Established in Abu Dhabi in 1993. UAE assignments by instruction.</div>
          </div>
          <div className="hero-media">
            <Image src="/abu-dhabi-marine-survey.webp" alt="Illustrative scene of surveyors observing a project cargo lift beside a ship." fill priority sizes="(max-width: 760px) 100vw, 45vw" />
            <div className="hero-media-shade" />
            <div className="hero-media-top"><span>CARGO / VESSEL / MARINE OPERATIONS</span><span>ABU DHABI<br />UNITED ARAB EMIRATES</span></div>
            <div className="hero-media-bottom"><span className="hero-image-index"> / CSB SURVEY SERVICES</span><span>Survey, inspection<br />and loss adjusting.</span></div>
          </div>
        </div>
        <div className="hero-rail"><div className="container"><span>ESTABLISHED 1993</span><span>MARINE SURVEYS &#183; CARGO INSPECTIONS &#183; CLAIMS</span><span>ABU DHABI, UAE</span></div></div>
      </section>

      <section className="proof-strip" aria-label="Company at a glance"><div className="container proof-grid"><div><strong>1993</strong><span>Established in Abu Dhabi</span></div><div><strong>100<span className="plus">+</span></strong><span>Combined years of survey experience</span></div><div><strong>UAE</strong><span>Locations identified in our brochure</span></div></div></section>

      <section id="about" className="section about-section"><div className="container about-grid"><div className="section-side"><span className="section-number">ABOUT CSB</span><div className="ornament" aria-hidden="true"><span /><span /><span /></div></div><div className="about-content"><p className="eyebrow">CONSOLIDATED SERVICES BUREAU</p><h2>Survey and loss adjusting<br />from <em>Abu Dhabi since 1993.</em></h2><div className="about-text-grid"><p>Consolidated Services Bureau was established in Abu Dhabi to meet survey and loss-adjusting requirements in the Gulf region. We support insurers, shipping interests and businesses involved in international trade, logistics and insurance.</p><p>Our surveyors bring more than 100 years of combined experience. Each assignment is handled against the agreed scope, with findings and relevant information presented for the instructing principal and the concerned parties.</p></div><div className="audience-line"><span>WORKING WITH</span><p>Cargo underwriters <b>&#183;</b> Shipowners <b>&#183;</b> Ship agents <b>&#183;</b> Traders <b>&#183;</b> Logistics companies</p></div></div></div></section>

      <section id="services" className="section services-section"><div className="container"><div className="section-heading-row"><div><p className="eyebrow">SURVEY SERVICES</p><h2>Services for cargo, vessels<br />and <em>marine operations.</em></h2></div><p className="heading-aside">Our work covers transit loss, loading and discharge, cargo securing, quantities, charter handover, bunker quantities, and incident or contamination investigations.</p></div><div className="services-grid">
        {services.map((service) => (
          <article id={`service-${service.id}`} className={`service-card${service.image ? " service-card-with-image" : ""}`} key={service.id}>
            {service.image && <Link className="service-card-image" href={`/gallery#photo-${service.id}`} aria-label={`View field photograph related to ${service.title}`}><Image src={service.image} alt={service.imageAlt ?? service.title} fill sizes="(max-width: 560px) 100vw, (max-width: 980px) 50vw, 25vw" /></Link>}
            <div className="service-card-content"><div className="service-card-top"><span>{service.category}</span><ArrowIcon className="service-arrow" /></div><h3>{service.title}</h3><p>{service.description}</p></div>
          </article>
        ))}
      </div><div className="service-end"><span>REQUEST A SPECIFIC SURVEY SCOPE</span><a className="text-link" href="mailto:cbops@consolidatedbureau.com?subject=Survey%20enquiry">Discuss an instruction <ArrowIcon /></a></div></div></section>

      <section className="approach-section section"><div className="container approach-grid"><div className="approach-intro"><p className="eyebrow eyebrow-light">HOW WE HANDLE AN INSTRUCTION</p><h2>Defined scope.<br /><em>Documented findings.</em></h2><p>We agree the assignment requirements with the instructing principal and record the observations, measurements and information relevant to the survey.</p></div><div className="approach-steps"><div><h3>Attend and inspect</h3><p>We inspect the cargo, vessel, operation or incident circumstances identified in the agreed scope.</p></div><div><h3>Record the relevant details</h3><p>We document condition, stowage, securing, measurements, quantities or damage as required for the assignment.</p></div><div><h3>Issue the survey report</h3><p>We present the findings, quantity records or loss assessment required by the instruction for the principal and concerned parties.</p></div></div></div></section>

      <section className="section coverage-section"><div className="container coverage-grid"><div><p className="eyebrow">UAE SURVEY LOCATIONS</p><h2>Abu Dhabi office.<br /><em>UAE assignments.</em></h2><p className="coverage-copy">Our brochure identifies survey locations in Abu Dhabi, Dubai, Sharjah, Ras Al Khaimah, Khor Fakkan and Fujairah. Please contact the Abu Dhabi office to confirm availability for your assignment.</p><a className="text-link" href="#contact">Contact the Abu Dhabi office <ArrowIcon /></a></div><div className="coverage-panel"><div className="coverage-panel-head"><span>UAE LOCATIONS</span><span>24.4789&#176; N / 54.3714&#176; E</span></div><ul>{["Abu Dhabi", "Dubai", "Sharjah", "Ras Al Khaimah", "Khor Fakkan", "Fujairah"].map(city => <li key={city}>{city}</li>)}</ul><span className="coverage-watermark" aria-hidden="true">AE</span></div></div></section>

      <section className="gallery-teaser section"><div className="container gallery-teaser-grid"><Link href="/gallery" className="gallery-teaser-media" aria-label="View field photographs in the gallery"><span className="gallery-teaser-shot gallery-teaser-shot-main"><Image src="/gallery/cargo-vessel-at-berth.webp" alt="Cargo ship moored at a quay." fill sizes="(max-width: 760px) 65vw, 34vw" /></span><span className="gallery-teaser-shot"><Image src="/gallery/copper-sheet-inspection.webp" alt="Surveyor inspecting bundled copper sheets." fill sizes="(max-width: 760px) 35vw, 19vw" /></span><span className="gallery-teaser-shot"><Image src="/gallery/quayside-heavy-lift.webp" alt="Covered project cargo being lifted above a trailer." fill sizes="(max-width: 760px) 35vw, 19vw" /></span><span className="gallery-teaser-stamp">42 FIELD PHOTOGRAPHS <ArrowIcon /></span></Link><div className="gallery-teaser-copy"><p className="eyebrow">CSB FIELD GALLERY</p><h2>Examples from<br /><em>marine and cargo work.</em></h2><p>View supplied photographs and footage of cargo condition, vessel operations, heavy lifts and cargo securing.</p><Link className="button button-dark" href="/gallery">View the field gallery <ArrowIcon /></Link></div></div></section>

      <section id="faq" className="section faq-section"><div className="container faq-grid"><div><p className="eyebrow">SURVEY INSTRUCTIONS</p><h2>Information before<br /><em>you contact us.</em></h2><p>Answers based on the services and UAE locations described in our company brochure.</p></div><div className="faq-list">{faqs.map(faq => <details key={faq.question}><summary><span>{faq.question}</span><span className="faq-plus" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section>

      <section id="contact" className="section contact-section"><div className="container"><div className="contact-heading"><p className="eyebrow eyebrow-light">SURVEY INSTRUCTIONS</p><h2>Discuss your cargo, vessel<br />or <em>marine operation.</em></h2><p>Contact our Abu Dhabi office with the required service, location and scope of the assignment.</p></div><div className="contact-grid"><div className="contact-card contact-primary"><span className="contact-label">DIRECT ENQUIRIES</span><a href="mailto:cbops@consolidatedbureau.com" className="contact-big-link">cbops@<br />consolidatedbureau.com <ArrowIcon /></a><a href="mailto:ops@consoludatedbureau.com" className="contact-sub-link">ops@consoludatedbureau.com</a><div className="contact-actions"><a href="tel:+971567931300">Call +971 56 793 1300 <ArrowIcon /></a><a href="https://wa.me/971567931300" target="_blank" rel="noopener noreferrer">WhatsApp us <ArrowIcon /></a></div></div><div className="contact-card contact-address"><span className="contact-label">ABU DHABI OFFICE</span><address>Office No. 10, 6th Floor<br />Al Hamed Business Tower<br />Al Falah St, Abu Dhabi, UAE</address><div className="contact-map"><iframe title="Satellite map of the CSB office in Abu Dhabi" src={mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen /></div><div className="contact-map-links"><a className="map-link" href={mapUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps <ArrowIcon /></a><a className="secondary-phone" href="tel:+9718002473">Additional number: +971 800 2473</a></div></div></div></div></section>
    </main>
    <Footer />
  </>;
}
