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
  { id: "cargo-damage", title: "Cargo damage surveys", category: "Cargo & claims", description: "Independent inspection of cargo damaged in transit, with findings on the extent and likely cause of loss.", image: "/gallery/cargo-cars.jpg", imageAlt: "Surveyor inspecting the rear of a vehicle." },
  { id: "marine-warranty", title: "Marine warranty surveys", category: "Marine operations", description: "Third-party technical review of high-risk marine operations to support safety and insurance requirements.", image: "/gallery-service1.jpeg", imageAlt: "Large industrial equipment suspended above a vessel deck during a heavy lift." },
  { id: "discharge-loading", title: "Discharge & loading surveys", category: "Port operations", description: "Condition checks, supervision and reporting before loading and during vessel discharge.", image: "/gallery-service3.jpeg", imageAlt: "Crane lifting cylindrical project cargo at a port at night." },
  { id: "lashing-container", title: "Lashing & container surveys", category: "Securing & condition", description: "Assessment of cargo securing, container condition, CSC plates and reefer cargo.", image: "/gallery-service2.jpeg", imageAlt: "Large industrial cargo secured with chains on a barge." },
  { id: "draft-measurement", title: "Draft & measurement surveys", category: "Cargo quantity", description: "Quantity and dimensional verification to help resolve measurement and shortage questions.", image: "/gallery/20230409_160319_resized.jpg", imageAlt: "Rows of steel pipes stored at a port." },
  { id: "charter-bunker", title: "On-hire, off-hire & bunker", category: "Charter support", description: "Vessel condition and fuel quantity records at charter handover and during bunker operations.", image: "/gallery/20180831_154441.jpg", imageAlt: "Cargo vessel moored at a working quay." },
  { id: "hull-incidents", title: "Hull, machinery & incidents", category: "Vessel & claims", description: "Surveys and cause investigations following machinery damage, collisions and onboard incidents.", image: "/gallery/20230307_143129_resized.jpg", imageAlt: "Industrial structure secured on a cargo vessel deck." },
  { id: "specialist-inspections", title: "Specialist inspections", category: "Specialist services", description: "Environmental damage, chemical and oil contamination, plus small craft and jet ski condition surveys.", image: "/gallery/20230222_092222_resized.jpg", imageAlt: "Wood-finish motorboat moored at a quay." },
];

export const faqs = [
  { question: "What does a cargo damage survey cover?", answer: "We inspect cargo affected during sea, air or road transit and report observed damage, estimated loss and evidence relevant to the cause. The exact scope is agreed for each instruction." },
  { question: "Who do you work with?", answer: "Our survey work supports cargo underwriters, shipowners, ship agents, traders, importers, exporters, manufacturers and logistics companies." },
  { question: "Where do you operate in the UAE?", answer: "Our brochure lists Abu Dhabi, Dubai, Sharjah, Ras Al Khaimah, Khor Fakkan and Fujairah. Contact the Abu Dhabi office to confirm availability for your assignment." },
  { question: "How can I request a survey?", answer: "Send the cargo or vessel details, location, incident date and required scope by email or WhatsApp. Our team can then discuss the next steps with you." },
];

export const mapUrl = "https://www.google.com/maps/place/24%C2%B028'44.2%22N+54%C2%B022'17.0%22E/@24.4789371,54.3688088,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.4789371!4d54.3713837";
