import type { ElementType } from "react";
import {
  Activity,
  Battery,
  Car,
  CircleDot,
  Gauge,
  Search,
  Settings,
  ShieldCheck,
  Wrench,
} from "lucide-react";

export const business = {
  name: "Damas Auto Repair",
  shortName: "Damas",
  address: "25358 Pleasant Valley Rd #120",
  city: "Chantilly",
  state: "VA",
  zip: "20152",
  area: "Chantilly and Northern Virginia",
  mapUrl: "https://maps.google.com/?q=25358+Pleasant+Valley+Rd+%23120,+Chantilly,+VA+20152",
  description:
    "Damas Auto Repair is a local Chantilly auto repair shop focused on honest diagnostics, routine maintenance, brake service, alignments, exhaust repair, tune ups, timing chain and belt service, tire care, and dependable repairs for daily drivers and family vehicles. Loaner cars may be available for repair bills over $400; contact the shop to confirm availability.",
};

const locationLine = `${business.address}, ${business.city}, ${business.state} ${business.zip}`;

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  category: string;
  icon: ElementType;
  image: string;
  shortDescription: string;
  seoTitle: string;
  fullDescription: string;
  bodyParagraphs: string[];
  seoDescription: string;
  cityContent: string;
  whyUs: string;
  warnings: string[];
  included: string[];
  faqs: ServiceFAQ[];
  availableAt?: string[];
}

function makeFaq(service: string): ServiceFAQ[] {
  return [
    {
      question: `Do I need an appointment for ${service.toLowerCase()}?`,
      answer:
        "Appointments are recommended so we can reserve bay time, but you can contact the shop for same-day availability.",
    },
    {
      question: "Will I get an estimate before work starts?",
      answer:
        "Yes. Damas Auto Repair explains the concern, recommended repair, and estimated cost before approved work begins.",
    },
    {
      question: "Do you service all makes and models?",
      answer:
        "We service most domestic and import cars, trucks, SUVs, and vans. Share your year, make, model, and concern when requesting service.",
    },
  ];
}

export const services: Service[] = [
  {
    slug: "engine-diagnostics",
    name: "Engine Diagnostics",
    category: "Auto Services",
    icon: Search,
    image: "/images/service-fit/engine-diagnostics.webp",
    shortDescription: "Check engine light testing and root-cause diagnostics.",
    seoTitle: "Engine Diagnostics in Chantilly, VA",
    fullDescription:
      "Damas Auto Repair provides engine diagnostics in Chantilly for check engine lights, rough idle, misfires, warning lights, and drivability issues.",
    bodyParagraphs: [
      "Modern vehicles store codes when a system falls outside its normal range, but a code is only the starting point. Our team checks the related sensors, wiring, data, and mechanical conditions so the repair recommendation is based on the real failure.",
      "Whether your vehicle hesitates, stalls, runs poorly, or simply has a warning light on, bring it to our shop at " + locationLine + " for a clear diagnostic process and straightforward next steps.",
    ],
    seoDescription:
      "Check engine light or drivability issue? Damas Auto Repair provides engine diagnostics in Chantilly, VA.",
    cityContent:
      "Damas Auto Repair serves Chantilly, South Riding, Centreville, Herndon, Fairfax, and nearby Northern Virginia drivers from our shop at " + locationLine + ".",
    whyUs:
      "Drivers choose Damas Auto Repair because we focus on honest testing, clear communication, and repairs that address the cause of the problem.",
    warnings: [
      "Check engine light or service engine light is on",
      "Rough idle, hesitation, or stalling",
      "Reduced fuel economy",
      "Misfire, shaking, or loss of power",
      "Unusual smells, smoke, or warning messages",
    ],
    included: [
      "Computer diagnostic scan",
      "Fault code review",
      "Visual inspection of related components",
      "Live data review when needed",
      "Repair recommendation and estimate",
    ],
    faqs: makeFaq("engine diagnostics"),
  },
  {
    slug: "brake-repair",
    name: "Brake Repair",
    category: "Auto Services",
    icon: ShieldCheck,
    image: "/images/service-fit/brake-repair.webp",
    shortDescription: "Brake pads, rotors, calipers, fluid, and inspections.",
    seoTitle: "Brake Repair in Chantilly, VA",
    fullDescription:
      "Damas Auto Repair performs brake inspections and repairs for vehicles that squeal, grind, vibrate, pull, or take longer than normal to stop.",
    bodyParagraphs: [
      "Brake concerns should be checked quickly. We inspect pad thickness, rotor condition, calipers, brake hoses, fluid condition, and related hardware before recommending repairs.",
      "From routine brake pad replacement to deeper brake system diagnosis, our Chantilly shop helps keep your vehicle stopping safely and predictably.",
    ],
    seoDescription:
      "Need brake repair in Chantilly? Damas Auto Repair handles brake pads, rotors, inspections, and brake system service.",
    cityContent:
      "Visit Damas Auto Repair at " + locationLine + " for brake service near Chantilly, South Riding, Centreville, and nearby Northern Virginia communities.",
    whyUs:
      "We explain what is worn, what still has life, and what should be addressed now so you can make a practical repair decision.",
    warnings: [
      "Squealing or grinding noise",
      "Brake pedal feels soft or spongy",
      "Vibration when braking",
      "Vehicle pulls when stopping",
      "Brake warning light is on",
    ],
    included: [
      "Brake pad and rotor inspection",
      "Caliper and hardware check",
      "Brake fluid inspection",
      "Brake hose and line visual check",
      "Written repair estimate",
    ],
    faqs: makeFaq("brake repair"),
  },
  {
    slug: "lube-oil-filters",
    name: "Oil Change",
    category: "Auto Services",
    icon: Activity,
    image: "/images/service-fit/lube-oil-filters.webp",
    shortDescription: "Full-service oil changes with filter replacement.",
    seoTitle: "Oil Change in Chantilly, VA",
    fullDescription:
      "Damas Auto Repair provides oil change service with the correct oil type, filter replacement, and a basic vehicle check.",
    bodyParagraphs: [
      "Regular oil changes help protect your engine from heat, friction, and sludge. We use the oil grade appropriate for your vehicle and replace the filter as part of the service.",
      "Ask our team about the right interval for your vehicle based on mileage, driving habits, and manufacturer guidance.",
    ],
    seoDescription:
      "Schedule an oil change in Chantilly, VA at Damas Auto Repair on Pleasant Valley Road.",
    cityContent:
      "Our Chantilly shop is convenient for drivers near Pleasant Valley Road, Route 50, South Riding, and Centreville.",
    whyUs:
      "We treat oil changes as a chance to look over the vehicle and alert you to visible issues without pressure.",
    warnings: [
      "Oil change reminder is on",
      "Oil is dark or low",
      "Engine sounds louder than normal",
      "Oil leak spots under the vehicle",
      "It has been several months since your last service",
    ],
    included: [
      "Drain and refill engine oil",
      "Replace oil filter",
      "Check visible leaks",
      "Check key fluids",
      "Maintenance reminder reset when applicable",
    ],
    faqs: makeFaq("oil change service"),
  },
  {
    slug: "wheel-alignment",
    name: "Wheel Alignment",
    category: "Auto Services",
    icon: Wrench,
    image: "/images/service-fit/wheel-alignment.webp",
    shortDescription: "Alignment checks and adjustments for safer handling.",
    seoTitle: "Wheel Alignment in Chantilly, VA",
    fullDescription:
      "Damas Auto Repair provides wheel alignment service to help correct pulling, uneven tire wear, and steering concerns.",
    bodyParagraphs: [
      "Alignment angles can shift after potholes, curb impacts, worn suspension parts, or normal driving. Correct alignment helps your vehicle track straight and protects your tires.",
      "If your steering wheel is off-center or the vehicle pulls on local roads, schedule an alignment check at our Chantilly shop.",
    ],
    seoDescription:
      "Damas Auto Repair offers wheel alignment service in Chantilly, VA for pulling, uneven tire wear, and steering issues.",
    cityContent:
      "Get alignment service at Damas Auto Repair, located at " + locationLine + ".",
    whyUs:
      "We inspect related tire and suspension conditions so alignment work is not masking a larger issue.",
    warnings: [
      "Vehicle pulls left or right",
      "Steering wheel is off-center",
      "Uneven or rapid tire wear",
      "Vehicle feels unstable at highway speed",
      "Recent pothole or curb impact",
    ],
    included: [
      "Alignment inspection",
      "Steering and suspension visual check",
      "Manufacturer specification adjustment",
      "Tire wear review",
      "Before-and-after results when available",
    ],
    faqs: makeFaq("wheel alignment"),
  },
  {
    slug: "steering-suspension",
    name: "Steering & Suspension",
    category: "Auto Services",
    icon: Car,
    image: "/images/service-fit/steering-suspension.webp",
    shortDescription: "Shocks, struts, control arms, steering, and ride issues.",
    seoTitle: "Steering and Suspension Repair in Chantilly, VA",
    fullDescription:
      "Damas Auto Repair diagnoses steering and suspension concerns including clunks, looseness, vibration, bouncing, and uneven tire wear.",
    bodyParagraphs: [
      "Steering and suspension parts affect ride comfort, tire wear, braking stability, and control. We inspect worn components before recommending replacement.",
      "If your vehicle feels loose, noisy, or unstable, our Chantilly team can help identify the cause.",
    ],
    seoDescription:
      "Steering and suspension repair in Chantilly, VA at Damas Auto Repair.",
    cityContent:
      "Damas Auto Repair serves drivers around Chantilly and Northern Virginia from " + locationLine + ".",
    whyUs:
      "We look at the full system so the repair addresses the real source of noise, vibration, or poor handling.",
    warnings: [
      "Clunking over bumps",
      "Vehicle bounces excessively",
      "Loose steering feel",
      "Uneven tire wear",
      "Vibration or wandering at speed",
    ],
    included: [
      "Steering component inspection",
      "Shock and strut visual check",
      "Control arm and bushing inspection",
      "Ball joint and tie rod review",
      "Repair estimate",
    ],
    faqs: makeFaq("steering and suspension repair"),
  },
  {
    slug: "batteries",
    name: "Battery Service",
    category: "Auto Services",
    icon: Battery,
    image: "/images/service-fit/batteries.webp",
    shortDescription: "Battery testing, replacement, and charging checks.",
    seoTitle: "Car Battery Service in Chantilly, VA",
    fullDescription:
      "Damas Auto Repair tests and replaces weak batteries and checks charging system concerns that can leave you stranded.",
    bodyParagraphs: [
      "A weak battery can cause slow starts, warning lights, and electrical issues. We test battery health and inspect visible terminal condition.",
      "If your car struggles to start, bring it to our Chantilly shop before it leaves you stuck.",
    ],
    seoDescription:
      "Car battery testing and replacement in Chantilly, VA at Damas Auto Repair.",
    cityContent:
      "Battery service is available at Damas Auto Repair on Pleasant Valley Road in Chantilly.",
    whyUs:
      "We verify the concern before recommending a replacement so you know whether the battery, alternator, or connection is the issue.",
    warnings: [
      "Slow crank or no start",
      "Battery warning light",
      "Corrosion on terminals",
      "Electrical accessories acting weak",
      "Battery is older than expected service life",
    ],
    included: [
      "Battery health test",
      "Terminal inspection",
      "Charging system check when needed",
      "Battery replacement estimate",
      "Basic reset guidance when applicable",
    ],
    faqs: makeFaq("battery service"),
  },
  {
    slug: "belts-hoses",
    name: "Belts and Hoses",
    category: "Auto Services",
    icon: Settings,
    image: "/images/service-fit/belts-hoses.webp",
    shortDescription: "Inspection and replacement of worn belts and hoses.",
    seoTitle: "Belt and Hose Replacement in Chantilly, VA",
    fullDescription:
      "Damas Auto Repair inspects and replaces worn belts, radiator hoses, heater hoses, and related maintenance items.",
    bodyParagraphs: [
      "Belts and hoses age from heat, mileage, and time. A failed belt or hose can lead to overheating, charging issues, steering problems, or a breakdown.",
      "We inspect visible condition, cracking, leaks, swelling, and wear so you can replace weak parts before they fail.",
    ],
    seoDescription:
      "Belt and hose inspection and replacement in Chantilly, VA at Damas Auto Repair.",
    cityContent:
      "Schedule belt and hose service at Damas Auto Repair, " + locationLine + ".",
    whyUs:
      "Our team helps you prioritize maintenance based on condition and risk, not guesswork.",
    warnings: [
      "Squealing from the engine bay",
      "Visible cracking or fraying",
      "Coolant leak or overheating",
      "Soft, swollen, or brittle hoses",
      "Battery or power steering warning symptoms",
    ],
    included: [
      "Visual belt inspection",
      "Hose condition check",
      "Leak review",
      "Replacement recommendation",
      "Estimate for parts and labor",
    ],
    faqs: makeFaq("belt and hose replacement"),
  },
  {
    slug: "exhaust-system-repair",
    name: "Exhaust System Repair",
    category: "Auto Services",
    icon: Settings,
    image: "/images/service-fit/exhaust-system.webp",
    shortDescription: "Mufflers, O2 sensors, catalytic converters, pipes, and exhaust leaks.",
    seoTitle: "Exhaust System Repair in Chantilly, VA",
    fullDescription:
      "Damas Auto Repair diagnoses and repairs exhaust system concerns including mufflers, oxygen sensors, catalytic converters, exhaust pipes, hangers, leaks, and related check engine light issues.",
    bodyParagraphs: [
      "A healthy exhaust system keeps your vehicle quieter, helps manage emissions, and supports proper engine performance. Exhaust leaks, failed O2 sensors, damaged mufflers, and catalytic converter problems can affect drivability, fuel economy, and inspection readiness.",
      "Bring your vehicle to our Chantilly shop at " + locationLine + " for a practical exhaust system inspection and a clear repair estimate before approved work begins.",
    ],
    seoDescription:
      "Exhaust system repair in Chantilly, VA for mufflers, O2 sensors, catalytic converters, pipes, leaks, and check engine light concerns.",
    cityContent:
      "Damas Auto Repair provides exhaust repair for drivers near Chantilly, South Riding, Centreville, Herndon, Fairfax, and nearby Northern Virginia communities.",
    whyUs:
      "We inspect the full exhaust path and related sensor data so the recommendation matches the actual failure, not just the symptom.",
    warnings: [
      "Loud exhaust or rattling under the vehicle",
      "Check engine light with oxygen sensor or catalyst codes",
      "Exhaust smell inside or around the vehicle",
      "Poor fuel economy or reduced performance",
      "Visible rust, broken hangers, or damaged exhaust pipes",
    ],
    included: [
      "Exhaust leak inspection",
      "Muffler and pipe condition check",
      "O2 sensor and related code review",
      "Catalytic converter assessment",
      "Repair recommendation and estimate",
    ],
    faqs: makeFaq("exhaust system repair"),
  },
  {
    slug: "tune-up",
    name: "Tune Up",
    category: "Auto Services",
    icon: Activity,
    image: "/images/service-fit/tune-up.webp",
    shortDescription: "Spark plugs, ignition checks, filters, and performance maintenance.",
    seoTitle: "Tune Up Service in Chantilly, VA",
    fullDescription:
      "Damas Auto Repair provides tune up service for vehicles with rough idle, misfires, hard starts, poor fuel economy, or overdue maintenance.",
    bodyParagraphs: [
      "Tune up needs vary by vehicle, mileage, and maintenance history. We review symptoms and service intervals, then inspect common wear items such as spark plugs, ignition components, filters, and related engine performance parts.",
      "If your vehicle feels sluggish, starts poorly, or has not had scheduled maintenance in a while, our Chantilly team can help plan the right tune up service.",
    ],
    seoDescription:
      "Schedule tune up service in Chantilly, VA at Damas Auto Repair for spark plugs, ignition checks, filters, and performance maintenance.",
    cityContent:
      "Tune up service is available at Damas Auto Repair, " + locationLine + ".",
    whyUs:
      "We avoid one-size-fits-all tune ups and base the service on your vehicle, mileage, symptoms, and manufacturer guidance.",
    warnings: [
      "Rough idle or engine misfire",
      "Hard starting or hesitation",
      "Poor fuel economy",
      "Sluggish acceleration",
      "Overdue spark plugs or maintenance interval",
    ],
    included: [
      "Maintenance interval review",
      "Spark plug and ignition system check",
      "Air and cabin filter review when applicable",
      "Visible engine bay inspection",
      "Recommended tune up estimate",
    ],
    faqs: makeFaq("tune up service"),
  },
  {
    slug: "timing-chain-belt",
    name: "Timing Chain and Belt",
    category: "Auto Services",
    icon: Wrench,
    image: "/images/service-fit/belts-hoses.webp",
    shortDescription: "Timing belt, timing chain, tensioner, guide, and related service.",
    seoTitle: "Timing Chain and Belt Service in Chantilly, VA",
    fullDescription:
      "Damas Auto Repair inspects and services timing belts, timing chains, tensioners, guides, and related components that keep engine timing correct.",
    bodyParagraphs: [
      "Timing belts and timing chains are critical engine components. A worn belt, stretched chain, weak tensioner, or damaged guide can cause noise, poor running, warning lights, or severe engine damage if ignored.",
      "Our Chantilly shop reviews the vehicle's mileage, symptoms, and manufacturer service guidance before recommending timing chain or timing belt work.",
    ],
    seoDescription:
      "Timing chain and timing belt service in Chantilly, VA at Damas Auto Repair for belts, chains, tensioners, guides, and timing-related concerns.",
    cityContent:
      "Damas Auto Repair serves Chantilly and nearby Northern Virginia drivers from " + locationLine + ".",
    whyUs:
      "We explain timing service clearly because these repairs are important, vehicle-specific, and should be planned with the right parts and scope.",
    warnings: [
      "Rattling or ticking noise from the engine",
      "Hard start, rough running, or misfire",
      "Timing-related fault codes",
      "Visible belt wear or overdue timing belt interval",
      "Oil leak near timing cover or related components",
    ],
    included: [
      "Mileage and service interval review",
      "Timing belt or chain symptom inspection",
      "Tensioner and related component review",
      "Manufacturer guidance check",
      "Repair recommendation and estimate",
    ],
    faqs: makeFaq("timing chain and belt service"),
  },
  {
    slug: "tire-rotation",
    name: "Tire Rotation",
    category: "Tire and Wheel",
    icon: CircleDot,
    image: "/images/service-fit/tire-rotation.webp",
    shortDescription: "Tire rotation to promote even tire wear.",
    seoTitle: "Tire Rotation in Chantilly, VA",
    fullDescription:
      "Damas Auto Repair rotates tires to help even out wear patterns and extend tire life.",
    bodyParagraphs: [
      "Regular tire rotation helps distribute wear across all four tires, especially on front-wheel-drive and all-wheel-drive vehicles.",
      "We can pair tire rotation with oil changes and routine maintenance for a more convenient visit.",
    ],
    seoDescription:
      "Tire rotation service in Chantilly, VA at Damas Auto Repair.",
    cityContent:
      "Tire rotation is available at Damas Auto Repair in Chantilly.",
    whyUs:
      "We check visible tire condition during rotation and let you know if we see abnormal wear or damage.",
    warnings: [
      "Uneven tread wear",
      "Front tires wearing faster than rear tires",
      "Vibration at speed",
      "More than 5,000 to 7,500 miles since last rotation",
      "Recent oil change without tire rotation",
    ],
    included: [
      "Rotate tires according to vehicle layout",
      "Visual tire condition check",
      "Tread wear review",
      "Lug nut torque",
      "Tire pressure check when applicable",
    ],
    faqs: makeFaq("tire rotation"),
  },
  {
    slug: "tire-balancing",
    name: "Tire Balancing",
    category: "Tire and Wheel",
    icon: Gauge,
    image: "/images/service-fit/tire-balancing.webp",
    shortDescription: "Wheel balancing to reduce vibration and tire wear.",
    seoTitle: "Tire Balancing in Chantilly, VA",
    fullDescription:
      "Damas Auto Repair balances wheel and tire assemblies to help correct vibration and improve ride quality.",
    bodyParagraphs: [
      "Wheel imbalance often shows up as vibration at certain speeds. Balancing helps smooth the ride and can reduce stress on tires and suspension components.",
      "If you recently installed tires, hit a pothole, or developed a highway vibration, schedule a tire balancing check.",
    ],
    seoDescription:
      "Tire balancing service in Chantilly, VA at Damas Auto Repair.",
    cityContent:
      "Damas Auto Repair provides tire balancing at " + locationLine + ".",
    whyUs:
      "We look for tire damage, uneven wear, or wheel concerns that may also contribute to vibration.",
    warnings: [
      "Steering wheel vibration",
      "Seat or floor vibration",
      "Uneven tire wear",
      "Recent tire replacement",
      "Recent pothole impact",
    ],
    included: [
      "Wheel and tire balance check",
      "Weight adjustment",
      "Visual tire inspection",
      "Valve stem visual check",
      "Ride concern review",
    ],
    faqs: makeFaq("tire balancing"),
  },
];

export interface LocationHours {
  day: string;
  hours: string;
}

export interface LocationReview {
  author: string;
  rating: number;
  text: string;
  source: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  rating: number;
  reviewCount: string;
  mapImage: string | null;
  mapUrl: string;
  hours: LocationHours[];
  attributes: string[];
  reviews: LocationReview[];
  highlights: string[];
}

export const locations: Location[] = [
  {
    id: "chantilly",
    name: "Damas Auto Repair",
    address: business.address,
    city: business.city,
    state: business.state,
    zip: business.zip,
    phone: "Contact shop",
    rating: 5,
    reviewCount: "Local shop",
    mapImage: "/images/damas/home-hero.webp",
    mapUrl: business.mapUrl,
    hours: [
      { day: "Monday", hours: "Call for hours" },
      { day: "Tuesday", hours: "Call for hours" },
      { day: "Wednesday", hours: "Call for hours" },
      { day: "Thursday", hours: "Call for hours" },
      { day: "Friday", hours: "Call for hours" },
      { day: "Saturday", hours: "Call for hours" },
      { day: "Sunday", hours: "Call for hours" },
    ],
    attributes: ["Local Chantilly shop", "Auto repair", "Diagnostics", "Maintenance", "Exhaust service", "Tire service"],
    reviews: [
      {
        author: "Damas Auto Repair",
        rating: 5,
        text: "Honest service, practical repair guidance, and dependable auto care from our Chantilly location.",
        source: "Business profile",
      },
    ],
    highlights: ["Located in Chantilly", "Auto repair and maintenance", "Loaner cars over $400"],
  },
];

export interface Special {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
}

export const specials: Special[] = [
  {
    id: "loaner-cars",
    title: "Loaner Cars",
    price: "$400+",
    description:
      "Loaner cars may be available for qualifying repair bills over $400. Contact Damas Auto Repair to confirm availability when scheduling.",
  },
  {
    id: "diagnostic-check",
    title: "Diagnostic Check",
    price: "Call",
    description:
      "Check engine light, warning light, or drivability concern? Contact Damas Auto Repair for diagnostic availability.",
  },
  {
    id: "oil-change",
    title: "Oil Change",
    price: "Call",
    description:
      "Full-service oil change with filter replacement and a basic vehicle check. Contact the shop for current pricing.",
  },
  {
    id: "brake-inspection",
    title: "Brake Inspection",
    price: "Call",
    description:
      "Squeal, grind, vibration, or longer stopping distance? Schedule a brake inspection and estimate.",
  },
  {
    id: "alignment-check",
    title: "Alignment Check",
    price: "Call",
    description:
      "Pulling, uneven tire wear, or an off-center steering wheel? Ask about wheel alignment service.",
  },
];
