export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://consolidatedbureau.com";

export const company = {
  name: "Consolidated Bureau",
  legalName: "Consolidated Services Bureau",
  established: "1993",
  intro: [
    "Established in 1993 as a Survey and Loss Adjusting Company with corporate base at Abu Dhabi, capital city of U.A.E with the objective of meeting various survey requirements primarily of the Gulf region.",
    "Ever Since its inception, with seasoned professionals at helm of affairs, CB has been providing quality services to the insurers and shipping industry of this region. We have been addressing various survey requirements of Cargo Underwriters / Ship Owners / Ship Agents / Traders / Importers / Exporters / Manufacturers / Logistic Companies in Gulf region.",
    "CB has acquired highly competitive expertise in survey domain during its more than three decades experience in this region. We have been working and continuously updating ourselves to match with the practices / demands of international trade, logistics and insurance industries.",
    "Our surveyors who can boast of a combined experience of more than 100+ years in survey field basically act as an interface between all concerned parties and suggest feasible steps to solve the problems which come across while addressing various claims without getting into any disputes. Through the knowledge acquired over the years we have formulated a unique style of reporting which often exceeds the expectations of our clients.",
  ],
  clients: [
    "Cargo Underwriters",
    "Ship Owners",
    "Ship Agents",
    "Traders",
    "Importers",
    "Exporters",
    "Manufacturers",
    "Logistic Companies",
  ],
};

type Service = {
  id: string;
  title: string;
  description: string;
  details?: string[];
  image?: string;
  imageAlt?: string;
};

export const services: Service[] = [
  {
    id: "cargo-damage",
    title: "Car Inspection / Car Survey",
    description: "Cars are transported predominantly by Sea, Air and Road. Whenever a car gets damaged during transit, the concerned parties require an inspection report by a third-party inspector. We inspect the car and prepare a report incorporating all relevant information required by the instructing principal. The survey includes estimation of the actual loss and throws maximum light on the cause of the damage.",
    image: "/gallery/vehicle-condition-inspection.webp",
    imageAlt: "Surveyor inspecting the rear of a vehicle.",
  },
  {
    id: "marine-warranty",
    title: "Loading Module On Deck",
    description: "Loading a module on deck is a high-value, high-risk marine operation that requires independent third-party technical review and approval to ensure safety and satisfy insurance policy conditions.",
    image: "/heavy-lift-at-sea.webp",
    imageAlt: "Large industrial equipment suspended above a vessel deck during a heavy lift.",
  },
  {
    id: "discharge",
    title: "Discharge Survey",
    description: "This inspection generally includes inspection of cargo on board vessel prior to discharge, report on the stowage condition, supervision of discharge and verify whether the discharge operation is carried out in accordance with the manifest and / or client's instructions, report on the damages, if any, upon discharge.",
    image: "/night-time-cargo-loading.webp",
    imageAlt: "Crane lifting cylindrical project cargo at a port at night.",
  },
  {
    id: "pre-shipment-loading",
    title: "Pre-Shipment / Loading Survey",
    description: "The scope of work under this category comprised of the following",
    details: [
      "General inspection of the cargo prior to loading",
      "Advising the Master on loading, stowage and securing.",
      "Monitoring the loading, stowage and securing",
      "Advising on the tally and measurements.",
    ],
    image: "/gallery/steel-coils-in-the-hold.webp",
    imageAlt: "Steel coils packed in rows inside a ship's hold.",
  },
  {
    id: "measurement",
    title: "Measurement Survey",
    description: "This survey is carried out prior to loading and / or after discharge especially when there is a dispute between the shipper and the carriers on measurements of the cargo",
    image: "/gallery/pipe-cargo-at-port.webp",
    imageAlt: "Rows of steel pipes stored at a port.",
  },
  {
    id: "lashing",
    title: "Lashing Survey",
    description: "In the case of flat racks and open top containers, Lashing Survey certification has become a prerequisite. The scope of work includes inspection of lashing materials used and certify the adequacy of lashing of the cargo loaded on the container. And also to certify that the lashing provided is adequate for the intended sea transportation. We also undertake Lashing Survey of cargo transported on trailer trucks by road.",
    image: "/secured-project-cargo.webp",
    imageAlt: "Large industrial cargo secured with chains on a barge.",
  },
  {
    id: "container",
    title: "Container Survey",
    description: "Inspection of various types of containers and certify its sea worthiness.",
    details: [
      "Inspect and confirm the validity of CSC plates and report on the general condition of the containers.",
      "Inspection of all types of perishable cargo shipped in Reefer Containers",
    ],
    image: "/gallery/container-exterior-inspection.webp",
    imageAlt: "Surveyor photographing the doors of a freight container.",
  },
  {
    id: "on-hire-off-hire",
    title: "On Hire / Off Hire Survey",
    description: "This survey is carried out on the start or completion of a charter of a ship. The scope of work consists of inspection of the holds, areas of decks and the ship in general including ship side plating with fair wear and tear consistent with the age of the ship is accepted. In addition to the conditions survey, a bunker survey is usually carried out to determine the quantity of various fuels in ships tanks. The calculations of bunkers on board the vessel are then adjusted to a time determined between the owner and charter party. Usually we represent either the owner or charter party in carrying out the survey.",
    image: "/gallery/cargo-vessel-at-berth.webp",
    imageAlt: "Cargo vessel moored at a working quay.",
  },
  {
    id: "draft",
    title: "Draft Survey",
    description: "This survey is carried out to quantify the cargo after loading on the vessel or discharged from the vessel by obtaining draft measurements.",
    image: "/gallery/steel-coil-inspection.webp",
    imageAlt: "Surveyor inspecting a steel coil.",
  },
  {
    id: "hull-machinery",
    title: "Hull and Machinery Survey",
    description: "Under take various kinds of Hull and Machinery Surveys",
    details: [
      "Provide Assistance to underwriters with issuance of repair specifications.",
      "Claim Handling in cases of collision incidents, arranging of surveys and cause investigations.",
      "Loss of Hire Surveys",
    ],
    image: "/gallery/vessel-deck-cargo.webp",
    imageAlt: "Industrial structure secured on a cargo vessel deck.",
  },
  {
    id: "draught",
    title: "Draught Survey",
    description: "Accurate weight determination for bulk cargo logistics. We conduct precise waterline and displacement measurements before and after cargo operations to verify exact cargo quantities, protecting you against shortage claims.",
    image: "/gallery/pipe-cargo-at-port.webp",
    imageAlt: "Rows of steel pipes stored at a port.",
  },
  {
    id: "bunker",
    title: "Bunker Survey",
    description: "Your essential loss-control tool for fuel management. We perform independent tank soundings, temperature corrections, and density verifications to confirm the exact quantity of fuel oil and lubricants delivered or remaining on board.",
    image: "/gallery/cargo-vessel-at-berth.webp",
    imageAlt: "Cargo vessel moored at a working quay.",
  },
  {
    id: "on-hire-off-hire-detail",
    title: "On-Hire / Off-Hire Survey",
    description: "Seamless transitions for vessel chartering. We thoroughly document a vessel’s structural condition and fuel remaining on board (ROB) at the start and end of a charter, providing indisputable photographic and analytical evidence to prevent financial disputes.",
    image: "/gallery/cargo-vessel-at-berth.webp",
    imageAlt: "Cargo vessel moored at a working quay.",
  },
  {
    id: "onboard-incident",
    title: "Onboard Incident Investigation",
    description: "Root-cause analysis when it matters most. In the event of a collision, machinery breakdown, or crew injury, our surveyors conduct rigorous, independent investigations to deliver concrete evidence for court litigation, insurance underwriters, and P&I clubs.",
    image: "/gallery/heavy-lift-archive.webp",
    imageAlt: "Archival view of a heavy lift operation.",
  },
  {
    id: "environmental-damage",
    title: "Environmental Damage Survey",
    description: "Rapid response and liability mitigation for ecological incidents. We assess the physical impact and spread of hull groundings, oil spills, or chemical leaks to help guide containment, clean-up, and insurance valuation.",
    image: "/gallery/small-craft-at-the-quay.webp",
    imageAlt: "Small craft moored at a quay.",
  },
  {
    id: "chemical-oils",
    title: "Chemical & Oils Contamination Inspection",
    description: "Safeguarding liquid cargo integrity. From wall-wash tests in empty tanks to strict sampling protocols throughout transit, we pinpoint exactly where and how liquid cargo purity was compromised to help resolve high-value contamination claims.",
    image: "/gallery/reefer-container.webp",
    imageAlt: "Reefer container at a cargo facility.",
  },
  {
    id: "small-craft",
    title: "Small Crafts & Jet Skis Condition & Damage Surveys",
    description: "Commercial-grade precision for private and leisure vessels. We provide comprehensive pre-purchase condition assessments, hull integrity mapping, and detailed damage evaluations for yachts, speedboats, and personal watercraft following accidents or groundings.",
    image: "/gallery/small-craft-at-the-quay.webp",
    imageAlt: "Small craft moored at a quay.",
  },
];

export const whyUs = [
  "Accurate investingation and findings",
  "Timely reporting",
  "Experienced professionals",
  "Vast experience with all kinds of marine cargo and losses",
  "Experienced surveyors with professional knowledge in general insurance and marine insurance.",
  "More than 3 decades relationship with regions leading insurers, vessel agents, vessel owners and P&I Clubs.",
];

export const locations = ["Abu Dhabi", "Dubai", "Shrajah", "Ras Al Khaima", "Korfakan", "Fujairah"];

export const mapUrl = "https://www.google.com/maps/place/24%C2%B028'44.2%22N+54%C2%B022'17.0%22E/@24.4789371,54.3688088,17z/data=!3m1!4b1!4m4!3m3!8m2!3d24.4789371!4d54.3713837";
export const mapEmbedUrl = "https://maps.google.com/maps?q=24.4789371%2C54.3713837&t=k&z=17&output=embed";
