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
    icon: PowerOff, // using as a rotation icon proxy
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

export const locations = [
  {
    id: "springfield",
    name: "Springfield",
    address: "7661 Fullerton Rd",
    city: "Springfield",
    state: "VA",
    zip: "22153",
    phone: "(703) 440-0880",
    mapUrl: "https://maps.google.com/?q=7661+Fullerton+Rd,+Springfield,+VA+22153"
  },
  {
    id: "centreville",
    name: "Centreville",
    address: "13600 Lee Hwy",
    city: "Centreville",
    state: "VA",
    zip: "20120",
    phone: "(703) 543-6900",
    mapUrl: "https://maps.google.com/?q=13600+Lee+Hwy,+Centreville,+VA+20120"
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
