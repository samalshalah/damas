import { Wrench, Car, Gauge, Activity, Compass, Settings, Zap, CheckCircle, Search, PowerOff, Battery, ShieldCheck, CircleDot, Monitor } from "lucide-react";

export const services = [
  {
    slug: "engine-diagnostics",
    name: "Engine Diagnostics",
    category: "Auto Services",
    icon: Search,
    shortDescription: "Computerized diagnostics to find the root cause of issues.",
    fullDescription: "Advanced computerized diagnostics to find the root cause of warning lights and performance issues. Our technicians use state-of-the-art equipment to accurately identify and resolve engine problems before they become major repairs."
  },
  {
    slug: "brake-repair",
    name: "Brake Repair",
    category: "Auto Services",
    icon: ShieldCheck,
    shortDescription: "Full brake inspection, pad replacement, and fluid flush.",
    fullDescription: "Full brake inspection, pad replacement, rotor resurfacing or replacement, brake fluid flush. Don't compromise on safety—our comprehensive brake services ensure your vehicle stops reliably every time."
  },
  {
    slug: "belts-hoses",
    name: "Belts and Hoses",
    category: "Auto Services",
    icon: Settings,
    shortDescription: "Inspection and replacement of timing and serpentine belts.",
    fullDescription: "Inspection and replacement of timing belts, serpentine belts, radiator and heater hoses. Prevent unexpected breakdowns and engine damage with timely replacement of worn belts and hoses."
  },
  {
    slug: "lube-oil-filters",
    name: "Lube, Oil & Filters",
    category: "Auto Services",
    icon: Activity,
    shortDescription: "Full-service oil change with multi-point inspection.",
    fullDescription: "Full-service oil change with multi-point inspection. All oil types available including conventional, synthetic blend, and full synthetic to keep your engine running smoothly and extend its lifespan."
  },
  {
    slug: "wheel-alignment",
    name: "Wheel Alignment",
    category: "Auto Services",
    icon: Compass,
    shortDescription: "Computer-aided alignment to manufacturer specs.",
    fullDescription: "Computer-aided alignment to manufacturer specs. Prevents uneven tire wear and improves handling. Proper alignment saves you money on tires and fuel while providing a safer, more comfortable ride."
  },
  {
    slug: "tune-up",
    name: "Tune-Up",
    category: "Auto Services",
    icon: Zap,
    shortDescription: "Spark plug, air filter, and ignition system service.",
    fullDescription: "Spark plug replacement, air filter, fuel filter, ignition system check. Regular tune-ups restore lost power, improve fuel economy, and lower emissions, keeping your vehicle running like new."
  },
  {
    slug: "state-inspection",
    name: "Virginia State Inspection",
    category: "Auto Services",
    icon: CheckCircle,
    shortDescription: "Official Virginia safety and emissions inspection.",
    fullDescription: "Official Virginia safety and emissions inspection. Quick turnaround. Our certified inspectors will thoroughly check your vehicle to ensure it meets all state safety and environmental requirements."
  },
  {
    slug: "steering-suspension",
    name: "Steering & Suspension",
    category: "Auto Services",
    icon: Wrench,
    shortDescription: "Shock absorbers, struts, tie rods, power steering.",
    fullDescription: "Shock absorbers, struts, tie rods, power steering service. Maintain control and ride comfort while preventing premature tire wear with our expert steering and suspension repairs."
  },
  {
    slug: "batteries",
    name: "Batteries",
    category: "Auto Services",
    icon: Battery,
    shortDescription: "Battery test, replacement, and terminal cleaning.",
    fullDescription: "Battery test, replacement, and terminal cleaning. All major brands available. We'll ensure your vehicle starts reliably in all weather conditions with professional battery and charging system services."
  },
  {
    slug: "150-point-check",
    name: "150 Point Check",
    category: "Auto Services",
    icon: Car,
    shortDescription: "Comprehensive vehicle inspection of major systems.",
    fullDescription: "Comprehensive vehicle inspection covering all major systems. Ideal for pre-purchase inspections or road trip preparation, giving you complete peace of mind about your vehicle's condition."
  },
  {
    slug: "flat-tire-repair",
    name: "Flat Tire Repair",
    category: "Tire and Wheel",
    icon: CircleDot,
    shortDescription: "Puncture repair, plug and patch, valve stem.",
    fullDescription: "Puncture repair, plug and patch, valve stem replacement. We use industry-standard repair methods to safely fix punctures and get you back on the road without needing a complete tire replacement."
  },
  {
    slug: "tpms",
    name: "TPMS Service",
    category: "Tire and Wheel",
    icon: Monitor,
    shortDescription: "Sensor diagnosis, reset, and replacement.",
    fullDescription: "Sensor diagnosis, reset, and replacement for tire pressure monitoring systems. Don't ignore the warning light—proper tire pressure is critical for safety, fuel efficiency, and tire longevity."
  },
  {
    slug: "tire-rotation",
    name: "Tire Rotation",
    category: "Tire and Wheel",
    icon: PowerOff,
    shortDescription: "Regular rotation to ensure even tire wear.",
    fullDescription: "Regular rotation to ensure even wear and extend tire life. Maximize your tire investment by letting us rotate them according to the manufacturer's recommended schedule and pattern."
  },
  {
    slug: "tire-balancing",
    name: "Tire Balancing",
    category: "Tire and Wheel",
    icon: Gauge,
    shortDescription: "Computerized wheel balancing to eliminate vibration.",
    fullDescription: "Computerized wheel balancing to eliminate vibration and uneven wear. Experience a smoother ride and protect your suspension components with our precise dynamic wheel balancing."
  }
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
    id: "springfield",
    name: "Springfield",
    address: "7661 Fullerton Rd",
    city: "Springfield",
    state: "VA",
    zip: "22153",
    phone: "(703) 440-0880",
    rating: 4.3,
    reviewCount: "54+",
    mapImage: "/images/springfield.jpg",
    mapUrl: "https://maps.google.com/?q=7661+Fullerton+Rd,+Springfield,+VA+22153",
    hours: [
      { day: "Monday", hours: "9:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "9:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "9:00 AM – 6:00 PM" },
      { day: "Friday", hours: "9:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
      { day: "Sunday", hours: "9:00 AM – 4:00 PM" }
    ],
    attributes: ["Free Wi-Fi", "Accepts Credit Cards", "BBB A+ Rated"],
    reviews: [
      {
        author: "Kofi M.",
        rating: 5,
        text: "Great service. Very pleasant and professional staff. Manager took care of me. Will definitely be back.",
        source: "Yelp"
      },
      {
        author: "MechanicAdvisor",
        rating: 5,
        text: "I went to 2 places and they both told me I needed new tires, 2 new rims, brake pads and rotors. The guy at Bingo Tires told me I just needed 2 tires and to rotate my tires. Honest shop.",
        source: "MechanicAdvisor"
      },
      {
        author: "Mattheus T.",
        rating: 5,
        text: "I had a tire that was damaged and needed to be replaced. They removed my old tire and mounted my new tire quickly and professionally.",
        source: "Yelp"
      }
    ],
    highlights: ["In business since 2004", "Quick no-appointment service", "Honest assessments"]
  },
  {
    id: "woodbridge",
    name: "Woodbridge",
    address: "1330 Old Bridge Rd",
    city: "Woodbridge",
    state: "VA",
    zip: "22192",
    phone: "(703) 494-8888",
    rating: 4.5,
    reviewCount: "37+",
    mapImage: "/images/woodbridge.jpg",
    mapUrl: "https://maps.google.com/?q=1330+Old+Bridge+Rd,+Woodbridge,+VA+22192",
    hours: [
      { day: "Monday", hours: "8:00 AM – 10:00 PM" },
      { day: "Tuesday", hours: "8:00 AM – 10:00 PM" },
      { day: "Wednesday", hours: "8:00 AM – 10:00 PM" },
      { day: "Thursday", hours: "8:00 AM – 10:00 PM" },
      { day: "Friday", hours: "8:00 AM – 10:00 PM" },
      { day: "Saturday", hours: "8:00 AM – 10:00 PM" },
      { day: "Sunday", hours: "9:00 AM – 7:00 PM" }
    ],
    attributes: ["Open Late Until 10 PM", "Military Discount", "Free Wi-Fi", "Accepts Credit Cards", "Curbside Pickup"],
    reviews: [
      {
        author: "Verified Customer",
        rating: 5,
        text: "I came in with a punctured tire that was leaking air. I was there for about 20 minutes and left with a fixed tire for very cheap. Will be returning for all my tire needs.",
        source: "Yelp"
      },
      {
        author: "Spanish-speaking Customer",
        rating: 5,
        text: "Excelente Servicio. The staff was very friendly and it was the only place open after 8 PM. Highly recommend!",
        source: "Yelp"
      },
      {
        author: "Verified Customer",
        rating: 5,
        text: "Mudasir and the team are fantastic. Fast, knowledgeable, and great pricing. They handled our tires perfectly.",
        source: "Yelp"
      }
    ],
    highlights: ["Open until 10 PM Mon–Sat", "700+ inspected used tires in stock", "Military discount available"]
  },
  {
    id: "alexandria",
    name: "Alexandria",
    address: "2920 Richmond Hwy",
    city: "Alexandria",
    state: "VA",
    zip: "22305",
    phone: "(703) 548-0333",
    rating: 4.5,
    reviewCount: "130+",
    mapImage: "/images/alexandria.jpg",
    mapUrl: "https://maps.google.com/?q=2920+Richmond+Hwy,+Alexandria,+VA+22305",
    hours: [
      { day: "Monday", hours: "8:00 AM – 12:00 AM" },
      { day: "Tuesday", hours: "8:00 AM – 12:00 AM" },
      { day: "Wednesday", hours: "8:00 AM – 12:00 AM" },
      { day: "Thursday", hours: "8:00 AM – 12:00 AM" },
      { day: "Friday", hours: "8:00 AM – 12:00 AM" },
      { day: "Saturday", hours: "8:00 AM – 12:00 AM" },
      { day: "Sunday", hours: "8:00 AM – 12:00 AM" }
    ],
    attributes: ["Open Until Midnight 7 Days", "3,000+ Used Tires In Stock", "Accepts Credit Cards"],
    reviews: [
      {
        author: "Business Owner",
        rating: 5,
        text: "I can't say enough good things about Alphonso Carrington and the amazing team at Bingo Tires. They've been a tremendous help to me and my small business.",
        source: "Google"
      },
      {
        author: "Verified Customer",
        rating: 5,
        text: "Great shop! Excellent prices. Hard to find a good tire place that doesn't try to milk you for money. These guys are friendly, quick and do good work.",
        source: "Google"
      },
      {
        author: "Verified Customer",
        rating: 5,
        text: "The very best car care place in the area. I bring my car here for tire changes, oil changes, and all maintenance.",
        source: "Google"
      }
    ],
    highlights: ["Open until midnight every day", "3,000+ used tires in stock", "130+ Google reviews"]
  },
  {
    id: "centreville",
    name: "Centreville",
    address: "13600 Lee Hwy",
    city: "Centreville",
    state: "VA",
    zip: "20120",
    phone: "(703) 543-6900",
    rating: 3.9,
    reviewCount: "15+",
    mapImage: null,
    mapUrl: "https://maps.google.com/?q=13600+Lee+Hwy,+Centreville,+VA+20120",
    hours: [
      { day: "Monday", hours: "8:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "9:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "8:00 AM – 6:00 PM" },
      { day: "Friday", hours: "8:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    attributes: ["Women-Owned", "Asian-Owned", "LGBTQ+ Friendly", "30-Day Warranty on Used Tires", "Accepts Credit Cards"],
    reviews: [
      {
        author: "Verified Customer",
        rating: 5,
        text: "Best car care place around the area. Always take my car here for tire changes, oil changes, and general maintenance.",
        source: "Yelp"
      },
      {
        author: "Verified Customer",
        rating: 4,
        text: "Good full-service shop. They handle tires, brakes, oil changes, and more. Staff is knowledgeable and professional.",
        source: "Yelp"
      }
    ],
    highlights: ["Women-owned & Asian-owned", "30-day warranty on used tires", "Full-service auto repair"]
  },
  {
    id: "winchester",
    name: "Winchester",
    address: "709 N Loudoun St",
    city: "Winchester",
    state: "VA",
    zip: "22601",
    phone: "(540) 667-7777",
    rating: 4.2,
    reviewCount: "20+",
    mapImage: "/images/winchester.jpg",
    mapUrl: "https://maps.google.com/?q=709+N+Loudoun+St,+Winchester,+VA+22601",
    hours: [
      { day: "Monday", hours: "8:00 AM – 6:00 PM" },
      { day: "Tuesday", hours: "8:00 AM – 6:00 PM" },
      { day: "Wednesday", hours: "8:00 AM – 6:00 PM" },
      { day: "Thursday", hours: "8:00 AM – 6:00 PM" },
      { day: "Friday", hours: "8:00 AM – 6:00 PM" },
      { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
      { day: "Sunday", hours: "Closed" }
    ],
    attributes: ["Accepts Credit Cards", "Serving the Shenandoah Valley"],
    reviews: [
      {
        author: "Verified Customer",
        rating: 5,
        text: "Reliable and honest shop. They've been serving Winchester for years and I trust them completely with my vehicle.",
        source: "Google"
      }
    ],
    highlights: ["Serving Winchester since 2004", "New & used tires", "Full auto repair"]
  }
];

export const specials = [
  {
    id: "oil-change",
    title: "Oil Change Special",
    price: "Starting at $29.99",
    originalPrice: "$49.99",
    description: "Conventional oil change including filter and multi-point inspection."
  },
  {
    id: "online-booking",
    title: "$5 Off Any Service",
    price: "$5 Off",
    description: "Save $5 on any service when you book your appointment online."
  },
  {
    id: "free-rotation",
    title: "Free Tire Rotation",
    price: "Free",
    description: "Get a free tire rotation with any paid brake service."
  },
  {
    id: "state-inspection",
    title: "VA State Inspection",
    price: "$16.00",
    description: "Official Virginia state safety inspection fee."
  },
  {
    id: "tire-rotation-deal",
    title: "Tire Rotation",
    price: "$19.99",
    originalPrice: "$35.00",
    description: "Professional tire rotation to extend the life of your tires."
  },
  {
    id: "battery-test",
    title: "Battery Test",
    price: "Free",
    description: "Complete diagnostic test of your battery and charging system."
  }
];
