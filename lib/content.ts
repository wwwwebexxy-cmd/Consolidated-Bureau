export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://consolidatedbureau.com";

type Service = {
  id: string;
  title: string;
  category: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export const services: Service[] = [
  { id: "cargo-damage", title: "Cargo damage surveys", category: "Cargo claims", description: "Third-party inspections for cargo damaged in sea, air or road transit, including documented condition, loss assessment and findings on the cause of damage.", image: "/gallery/vehicle-condition-inspection.webp", imageAlt: "Surveyor inspecting the rear of a vehicle." },
  { id: "marine-warranty", title: "Marine warranty surveys", category: "Marine operations", description: "Independent technical review and approval of high-value, high-risk marine operations to address safety requirements and insurance policy conditions.", image: "/heavy-lift-at-sea.webp", imageAlt: "Large industrial equipment suspended above a vessel deck during a heavy lift." },
  { id: "discharge-loading", title: "Discharge, loading & pre-shipment", category: "Port operations", description: "Pre-loading cargo inspections; advice on loading, stowage and securing; monitoring of operations; and discharge supervision against manifests or client instructions.", image: "/night-time-cargo-loading.webp", imageAlt: "Crane lifting cylindrical project cargo at a port at night." },
  { id: "lashing-container", title: "Lashing, container & reefer surveys", category: "Securing & condition", description: "Assessment of lashing materials and securing for sea or road transport, plus container condition, CSC plate validity and reefer cargo inspections.", image: "/secured-project-cargo.webp", imageAlt: "Large industrial cargo secured with chains on a barge." },
  { id: "draft-measurement", title: "Draft & measurement surveys", category: "Cargo quantity", description: "Cargo quantity verification through draft readings after loading or discharge, and measurement surveys where shipper and carrier measurements are in dispute.", image: "/gallery/pipe-cargo-at-port.webp", imageAlt: "Rows of steel pipes stored at a port." },
  { id: "charter-bunker", title: "Charter handover & bunker surveys", category: "Charter support", description: "On-hire and off-hire condition surveys of holds, decks and vessel areas, with bunker quantity determination at charter handover or during bunker operations.", image: "/gallery/cargo-vessel-at-berth.webp", imageAlt: "Cargo vessel moored at a working quay." },
  { id: "hull-incidents", title: "Hull, machinery & incident surveys", category: "Vessel claims", description: "Hull and machinery surveys, repair-specification support, loss-of-hire surveys, and claim investigations following collision or machinery damage.", image: "/gallery/vessel-deck-cargo.webp", imageAlt: "Industrial structure secured on a cargo vessel deck." },
  { id: "specialist-inspections", title: "Environmental, contamination & small craft", category: "Specialist surveys", description: "Environmental damage assessments, chemical and oil contamination inspections, and condition or damage surveys for small craft and jet skis.", image: "/gallery/small-craft-at-the-quay.webp", imageAlt: "Wood-finish motorboat moored at a quay." },
];

export const faqs = [
  { question: "What does a cargo damage survey cover?", answer: "We inspect cargo affected during sea, air or road transit. The report records the condition observed, the estimated loss where required and the available information on the cause of damage." },
  { question: "What is included in loading and discharge work?", answer: "Depending on the instruction, the work can include cargo inspection before loading, advice on loading, stowage and securing, monitoring of cargo operations, and discharge supervision against the manifest or the client's instructions." },
  { question: "Who do you work with?", answer: "We serve cargo underwriters, shipowners, ship agents, traders, importers, exporters, manufacturers and logistics companies." },
  { question: "Where do you operate in the UAE?", answer: "The locations identified in our brochure are Abu Dhabi, Dubai, Sharjah, Ras Al Khaimah, Khor Fakkan and Fujairah. Contact the Abu Dhabi office to confirm availability for a specific assignment." },
  { question: "What should an instruction include?", answer: "Please provide the required survey service, the cargo, vessel or operation involved, the location, the relevant date and the scope required by the instructing principal." },
];

export const mapUrl = "https://www.google.com/maps/place/24%C2%B028'44.2%22N+54%C2%B022'17.0%22E/@24.4789371,54.3688088,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.4789371!4d54.3713837";
export const mapEmbedUrl = "https://maps.google.com/maps?q=24.4789371%2C54.3713837&t=k&z=17&output=embed";
