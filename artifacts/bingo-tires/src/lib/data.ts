import { Wrench, Car, Gauge, Activity, Compass, Settings, Zap, CheckCircle, Search, PowerOff, Battery, ShieldCheck, CircleDot, Monitor } from "lucide-react";

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  category: string;
  icon: React.ElementType;
  image: string;
  shortDescription: string;
  fullDescription: string;
  seoDescription: string;
  warnings: string[];
  included: string[];
  faqs: ServiceFAQ[];
  availableAt?: string[];
}

export const services: Service[] = [
  {
    slug: "engine-diagnostics",
    name: "Engine Diagnostics",
    category: "Auto Services",
    icon: Search,
    image: "/images/services/engine-diagnostics.jpg",
    shortDescription: "Computerized diagnostics to find the root cause of issues.",
    fullDescription: "Advanced computerized diagnostics to find the root cause of warning lights and performance issues. Our technicians use state-of-the-art equipment to accurately identify and resolve engine problems before they become major repairs.",
    seoDescription: "Is your check engine light on? Bingo Tire & Auto Service in Northern Virginia uses advanced computerized diagnostics to pinpoint engine problems fast — saving you time and money. Serving Springfield, Woodbridge, Alexandria, Centreville, and Winchester.",
    warnings: [
      "Check engine light or service engine soon light is on",
      "Reduced fuel economy",
      "Engine misfires or rough idling",
      "Sluggish acceleration or loss of power",
      "Unusual engine smells or increased emissions",
      "Unusual noises from the engine bay"
    ],
    included: [
      "Full OBD-II diagnostic scan",
      "Retrieval of all stored fault codes",
      "Inspection of sensors, actuators, and wiring",
      "Live data stream analysis",
      "Detailed written report of findings",
      "Repair recommendations and cost estimate"
    ],
    faqs: [
      {
        question: "Can I drive with the check engine light on?",
        answer: "It depends on the situation. If the light is steady, you can drive cautiously and get it checked soon. If it's flashing, stop driving as soon as it's safe — a flashing check engine light indicates a serious issue like a misfiring engine that can damage your catalytic converter."
      },
      {
        question: "How long does a diagnostic take?",
        answer: "Most engine diagnostics take between 30 and 60 minutes. Complex issues requiring additional inspection may take longer. We'll give you a clear timeframe when you arrive."
      },
      {
        question: "Will diagnosing the code fix my car?",
        answer: "Diagnostics identifies the problem — the repair is a separate step. We'll provide a clear written estimate for any needed repairs, and you can decide how to proceed with no pressure."
      }
    ]
  },
  {
    slug: "brake-repair",
    name: "Brake Repair",
    category: "Auto Services",
    icon: ShieldCheck,
    image: "/images/services/brake-repair.jpg",
    shortDescription: "Full brake inspection, pad replacement, and fluid flush.",
    fullDescription: "Full brake inspection, pad replacement, rotor resurfacing or replacement, and brake fluid flush. Don't compromise on safety — our comprehensive brake services ensure your vehicle stops reliably every time.",
    seoDescription: "Get professional brake repair in Northern Virginia at Bingo Tire & Auto Service. We offer same-day brake pad replacement, rotor resurfacing, caliper service, and brake fluid flushes at all 5 locations. Trusted since 2004.",
    warnings: [
      "Squealing, grinding, or screeching when braking",
      "Vehicle pulls to one side when stopping",
      "Brake pedal feels spongy or sinks to the floor",
      "Vibration or shuddering through the steering wheel",
      "Brake warning light illuminated on dashboard",
      "Longer stopping distances than usual"
    ],
    included: [
      "Complete brake system inspection",
      "Brake pad thickness measurement",
      "Rotor condition assessment (resurfacing or replacement)",
      "Caliper inspection and lubrication",
      "Brake fluid level and condition check",
      "Brake hose and line inspection"
    ],
    faqs: [
      {
        question: "How often should brake pads be replaced?",
        answer: "Most brake pads last between 30,000 and 70,000 miles depending on your driving habits. City drivers who stop frequently tend to wear pads faster. We recommend an inspection at every tire rotation."
      },
      {
        question: "Do I need to replace rotors when I replace pads?",
        answer: "Not always. If your rotors are within manufacturer thickness specs and have minimal scoring, they can often be resurfaced. We'll measure them and give you an honest recommendation — we never recommend unnecessary parts."
      },
      {
        question: "How long does brake repair take?",
        answer: "A standard brake pad and rotor replacement typically takes 1 to 2 hours per axle. We strive for fast turnaround so you can get back on the road the same day."
      }
    ]
  },
  {
    slug: "belts-hoses",
    name: "Belts and Hoses",
    category: "Auto Services",
    icon: Settings,
    image: "/images/services/belts-hoses.jpg",
    shortDescription: "Inspection and replacement of timing and serpentine belts.",
    fullDescription: "Inspection and replacement of timing belts, serpentine belts, radiator and heater hoses. Prevent unexpected breakdowns and engine damage with timely replacement of worn belts and hoses.",
    seoDescription: "Worn belts and hoses are a leading cause of vehicle breakdowns. Bingo Tire & Auto Service in Northern Virginia inspects and replaces timing belts, serpentine belts, and all engine hoses to keep you from getting stranded on the road.",
    warnings: [
      "Squealing noise from the engine when starting or accelerating",
      "Cracking, fraying, or glazing visible on belts",
      "Coolant leaks or overheating engine",
      "Air conditioning or power steering stops working",
      "Vehicle doesn't start (timing belt failure)",
      "Battery warning light comes on (serpentine belt failure)"
    ],
    included: [
      "Visual inspection of all drive belts",
      "Timing belt condition assessment",
      "Serpentine belt tension and condition check",
      "All coolant and heater hose inspection",
      "Belt replacement with OEM or equivalent parts",
      "Hose clamp and fitting inspection"
    ],
    faqs: [
      {
        question: "What happens if my timing belt breaks?",
        answer: "A broken timing belt can cause catastrophic engine damage in interference engines, potentially bending valves and damaging pistons. Most manufacturers recommend replacement between 60,000 and 100,000 miles — check your owner's manual or ask us."
      },
      {
        question: "How do I know if my serpentine belt needs replacement?",
        answer: "Look for visible cracking, fraying, or a glazed appearance. You may also hear a high-pitched squeal when the engine starts. Most serpentine belts should be replaced every 60,000 to 100,000 miles."
      },
      {
        question: "Can I replace just one hose?",
        answer: "You can, but since hoses age together, many shops recommend replacing all hoses when one fails. We'll inspect them all and give you an honest assessment of which need immediate attention."
      }
    ]
  },
  {
    slug: "lube-oil-filters",
    name: "Lube, Oil & Filters",
    category: "Auto Services",
    icon: Activity,
    image: "/images/services/lube-oil-filters.jpg",
    shortDescription: "Full-service oil change with multi-point inspection.",
    fullDescription: "Full-service oil change with multi-point inspection. All oil types available including conventional, synthetic blend, and full synthetic to keep your engine running smoothly and extend its lifespan.",
    seoDescription: "Fast, affordable oil changes in Northern Virginia at Bingo Tire & Auto Service. We offer conventional, synthetic blend, and full synthetic oil changes with a multi-point inspection included. Walk-ins welcome at all 5 locations.",
    warnings: [
      "Oil change reminder light is on",
      "Engine oil appears dark or gritty on the dipstick",
      "You've driven over 3,000 miles since your last oil change",
      "Engine sounds louder or knocking",
      "Burning oil smell inside or outside the car",
      "Oil level is consistently low"
    ],
    included: [
      "Drain and replace engine oil (all types available)",
      "New oil filter installation",
      "Tire pressure check and top-off",
      "Windshield washer fluid top-off",
      "Visual inspection of belts and hoses",
      "Brake fluid and coolant level check",
      "Multi-point vehicle inspection"
    ],
    faqs: [
      {
        question: "How often should I change my oil?",
        answer: "Conventional oil typically needs changing every 3,000 to 5,000 miles. Full synthetic oil can last 7,500 to 10,000 miles or more. Check your owner's manual or ask us — we'll recommend what's right for your specific vehicle."
      },
      {
        question: "What type of oil does my car need?",
        answer: "The correct oil viscosity and type is listed in your owner's manual. We carry all grades of conventional, synthetic blend, and full synthetic oils and will use exactly what your manufacturer specifies."
      },
      {
        question: "How long does an oil change take?",
        answer: "Most oil changes take 20 to 30 minutes. With the multi-point inspection included, plan for about 30 to 45 minutes. No appointment needed — walk-ins are welcome."
      }
    ]
  },
  {
    slug: "wheel-alignment",
    name: "Wheel Alignment",
    category: "Auto Services",
    icon: Compass,
    image: "/images/services/wheel-alignment.jpg",
    shortDescription: "Computer-aided alignment to manufacturer specs.",
    fullDescription: "Computer-aided alignment to manufacturer specs. Prevents uneven tire wear and improves handling. Proper alignment saves you money on tires and fuel while providing a safer, more comfortable ride.",
    seoDescription: "Poor alignment costs you money in premature tire wear and reduced fuel efficiency. Get computerized wheel alignment at Bingo Tire & Auto Service in Northern Virginia. We align all makes and models to factory specs.",
    warnings: [
      "Vehicle drifts or pulls to one side",
      "Steering wheel is off-center on a straight road",
      "Tires show uneven or rapid wear on one edge",
      "Vibration felt through the steering wheel",
      "Squealing tires when turning",
      "Vehicle recently hit a curb, pothole, or was in a minor collision"
    ],
    included: [
      "Four-wheel computerized alignment check",
      "Toe, camber, and caster adjustment",
      "Steering center adjustment",
      "Tire pressure verification",
      "Alignment printout before and after",
      "Thrust angle correction (where applicable)"
    ],
    faqs: [
      {
        question: "How often should I get an alignment?",
        answer: "We recommend checking alignment every 6,000 miles or once a year — and any time you hit a significant pothole, curb, or are in an accident. Installing new tires is also a great time for an alignment check."
      },
      {
        question: "What's the difference between alignment and balancing?",
        answer: "Alignment adjusts the angle of your tires relative to each other and the road. Balancing corrects uneven weight distribution around the wheel and tire assembly. Both affect ride comfort and tire wear, and both should be checked regularly."
      },
      {
        question: "Will an alignment fix my steering pull?",
        answer: "Often yes. A steering pull is a classic sign of misalignment. However, it can also be caused by tire pressure differences or a worn suspension component — we'll diagnose the root cause before adjusting anything."
      }
    ]
  },
  {
    slug: "tune-up",
    name: "Tune-Up",
    category: "Auto Services",
    icon: Zap,
    image: "/images/services/tune-up.jpg",
    shortDescription: "Spark plug, air filter, and ignition system service.",
    fullDescription: "Spark plug replacement, air filter, fuel filter, ignition system check. Regular tune-ups restore lost power, improve fuel economy, and lower emissions, keeping your vehicle running like new.",
    seoDescription: "Restore your engine's performance with a professional tune-up at Bingo Tire & Auto Service in Northern Virginia. We replace spark plugs, air filters, and service the ignition system on all makes and models.",
    warnings: [
      "Difficulty starting the engine",
      "Engine misfires, stumbles, or hesitates on acceleration",
      "Noticeably worse fuel economy",
      "Engine runs rough or idles unevenly",
      "Failed emissions test",
      "It's been more than 30,000 miles since your last tune-up"
    ],
    included: [
      "Spark plug inspection and replacement",
      "Air filter inspection and replacement",
      "Fuel filter inspection",
      "Ignition wires and coils inspection",
      "Throttle body cleaning",
      "PCV valve check",
      "Idle speed and timing check"
    ],
    faqs: [
      {
        question: "How often does a car need a tune-up?",
        answer: "Older vehicles with conventional spark plugs typically need a tune-up every 30,000 miles. Modern vehicles with platinum or iridium plugs can go 60,000 to 100,000 miles. Check your owner's manual for the recommended interval."
      },
      {
        question: "How much fuel economy improvement can I expect?",
        answer: "A properly tuned engine can improve fuel economy by 4% to 40% depending on how poor its condition was. Replacing a clogged air filter alone can improve mileage by up to 10%."
      },
      {
        question: "Do I need a tune-up if my check engine light isn't on?",
        answer: "Yes. Many components that affect performance and fuel economy degrade gradually without triggering a warning light. Scheduled tune-ups catch wear before it becomes a problem."
      }
    ]
  },
  {
    slug: "state-inspection",
    name: "Virginia State Inspection",
    category: "Auto Services",
    icon: CheckCircle,
    image: "/images/services/state-inspection.jpg",
    shortDescription: "Official Virginia safety and emissions inspection.",
    fullDescription: "Official Virginia safety and emissions inspection. Quick turnaround with certified inspectors. We thoroughly check your vehicle to ensure it meets all state safety and environmental requirements.",
    seoDescription: "Get your Virginia state safety and emissions inspection at Bingo Tire & Auto Service. Certified inspectors, fast turnaround, and convenient locations in Springfield, Woodbridge, Alexandria, Centreville, and Winchester, VA.",
    warnings: [
      "Your current inspection sticker is expiring",
      "You just purchased a used vehicle in Virginia",
      "You moved to Virginia and need to register your vehicle",
      "Your vehicle registration renewal requires a passing inspection"
    ],
    included: [
      "Official Virginia safety inspection",
      "Brake system check",
      "Lighting and signals verification",
      "Tire condition and tread depth check",
      "Steering and suspension inspection",
      "Horn, mirrors, and wipers check",
      "Emissions OBD check (applicable vehicles)"
    ],
    faqs: [
      {
        question: "How much does a Virginia state inspection cost?",
        answer: "The official state-regulated fee is $16 for a passenger vehicle. This does not include any repairs that may be needed to pass."
      },
      {
        question: "What happens if my vehicle fails the inspection?",
        answer: "If your vehicle fails, we'll provide a detailed report of what needs to be corrected. You'll have 15 days and up to 25 miles of driving to make repairs and return for a free recheck."
      },
      {
        question: "Do I need an appointment for a state inspection?",
        answer: "We accept walk-ins for state inspections at our Centreville and Springfield locations. Bringing your vehicle in early in the day helps ensure faster service, especially during busy periods near registration renewal deadlines."
      }
    ],
    availableAt: ["Centreville", "Springfield"]
  },
  {
    slug: "steering-suspension",
    name: "Steering & Suspension",
    category: "Auto Services",
    icon: Wrench,
    image: "/images/services/steering-suspension.jpg",
    shortDescription: "Shock absorbers, struts, tie rods, power steering.",
    fullDescription: "Shock absorbers, struts, tie rods, power steering service. Maintain control and ride comfort while preventing premature tire wear with our expert steering and suspension repairs.",
    seoDescription: "Worn shocks and steering components are a safety hazard. Bingo Tire & Auto Service in Northern Virginia repairs and replaces shocks, struts, tie rods, ball joints, and power steering systems on all makes and models.",
    warnings: [
      "Rough, bumpy, or bouncy ride quality",
      "Vehicle nose dives when braking",
      "Body rolls excessively when cornering",
      "Clunking, knocking, or squeaking over bumps",
      "Uneven or accelerated tire wear",
      "Steering feels loose, vague, or wanders"
    ],
    included: [
      "Full steering and suspension inspection",
      "Shock absorber and strut condition assessment",
      "Ball joint and tie rod end inspection",
      "Control arm bushing inspection",
      "Sway bar and sway bar link check",
      "Power steering fluid level and condition check",
      "Alignment check after component replacement"
    ],
    faqs: [
      {
        question: "How do I know if my shocks are worn out?",
        answer: "Try the bounce test — press down firmly on each corner of the vehicle and release. Good shocks will stop bouncing after one or two rebounds. More than that indicates worn shocks. You may also notice excessive body roll, nose diving under braking, or a generally rough, unsettled ride."
      },
      {
        question: "How long do shocks and struts last?",
        answer: "Most shocks and struts last between 50,000 and 100,000 miles depending on road conditions and driving style. Vehicles driven on rough roads or carrying heavy loads will wear them faster."
      },
      {
        question: "What's the difference between shocks and struts?",
        answer: "Struts are a structural component of the suspension system and support the vehicle's weight. Shocks are separate components that control bounce and movement. Your vehicle has one type or the other depending on its design — we'll identify what you have and what needs attention."
      }
    ]
  },
  {
    slug: "batteries",
    name: "Batteries",
    category: "Auto Services",
    icon: Battery,
    image: "/images/services/batteries.jpg",
    shortDescription: "Battery test, replacement, and terminal cleaning.",
    fullDescription: "Battery test, replacement, and terminal cleaning. All major brands available. We'll ensure your vehicle starts reliably in all weather conditions with professional battery and charging system services.",
    seoDescription: "Don't get stranded with a dead battery. Bingo Tire & Auto Service offers free battery testing and fast battery replacement in Northern Virginia. We carry all major brands and will ensure your charging system is healthy too.",
    warnings: [
      "Vehicle is slow to start or cranks weakly",
      "Battery warning light is on",
      "Battery is more than 3–4 years old",
      "Lights and electronics dim when the engine is running",
      "Corroded or swollen battery terminals",
      "Vehicle needs jump-starts frequently"
    ],
    included: [
      "Complete battery load test",
      "Alternator and charging system check",
      "Starter draw test",
      "Terminal cleaning and corrosion removal",
      "Battery installation (all major brands)",
      "Battery registration/programming (for applicable vehicles)"
    ],
    faqs: [
      {
        question: "How long does a car battery last?",
        answer: "Most car batteries last 3 to 5 years. Hot climates accelerate wear. If your battery is approaching 4 years old, it's worth having it load-tested even if it seems to be working fine."
      },
      {
        question: "Can you test my battery for free?",
        answer: "Yes — we offer a free battery test at all locations. The test takes just a few minutes and tells us the current health and cold cranking amp capacity of your battery."
      },
      {
        question: "Will the radio and settings reset after a battery change?",
        answer: "Some vehicles require reprogramming of certain features after a battery replacement, including radio presets, power window limits, and in some cars, the throttle position. Modern vehicles may also need a battery registration procedure. We handle all of this as part of the installation."
      }
    ]
  },
  {
    slug: "150-point-check",
    name: "150 Point Check",
    category: "Auto Services",
    icon: Car,
    image: "/images/services/150-point-check.jpg",
    shortDescription: "Comprehensive vehicle inspection of major systems.",
    fullDescription: "Comprehensive vehicle inspection covering all major systems. Ideal for pre-purchase inspections or road trip preparation, giving you complete peace of mind about your vehicle's condition.",
    seoDescription: "Know exactly what's going on with your vehicle before a road trip or used car purchase. Bingo Tire's 150-point vehicle inspection covers every major system and gives you a detailed report. Available at all 5 Northern Virginia locations.",
    warnings: [
      "Buying a used vehicle and want an independent inspection",
      "Preparing for a long road trip",
      "Vehicle has high mileage (over 75,000 miles)",
      "You haven't had a full inspection in over a year",
      "Multiple warning lights are illuminated",
      "Vehicle recently came out of storage"
    ],
    included: [
      "Engine and drivetrain inspection",
      "Brake system assessment",
      "Steering and suspension check",
      "Tire condition and tread depth",
      "Battery and charging system test",
      "Fluid levels and condition (all major fluids)",
      "Lighting and electrical check",
      "Exhaust system visual inspection",
      "Detailed written report with priority rankings"
    ],
    faqs: [
      {
        question: "How is a 150-point check different from a regular oil change inspection?",
        answer: "The 150-point check is a comprehensive, dedicated inspection covering every major system in detail with a written report. A standard oil change inspection is a quick visual check of the most obvious items — it's not a substitute for a thorough inspection."
      },
      {
        question: "Should I get this before buying a used car?",
        answer: "Absolutely. A pre-purchase inspection is one of the best investments you can make before buying a used vehicle. We can often spot issues the seller may not have disclosed, potentially saving you thousands in future repairs."
      },
      {
        question: "How long does the inspection take?",
        answer: "The 150-point inspection typically takes 60 to 90 minutes. We'll perform a thorough examination and provide you with a detailed written report ranking any issues found by priority."
      }
    ]
  },
  {
    slug: "flat-tire-repair",
    name: "Flat Tire Repair",
    category: "Tire and Wheel",
    icon: CircleDot,
    image: "/images/services/flat-tire-repair.jpg",
    shortDescription: "Puncture repair, plug and patch, valve stem.",
    fullDescription: "Puncture repair, plug and patch, valve stem replacement. We use industry-standard repair methods to safely fix punctures and get you back on the road without needing a complete tire replacement.",
    seoDescription: "Got a flat tire in Northern Virginia? Bingo Tire & Auto Service provides fast, affordable flat tire repair at all 5 locations. We use the industry-standard plug and patch method and can have you back on the road quickly.",
    warnings: [
      "Tire pressure warning light (TPMS) is on",
      "Vehicle pulling to one side",
      "Flapping or thumping sound while driving",
      "Visible nail, screw, or object in the tire",
      "Tire visibly flat or very low",
      "Unusual vibration at highway speed"
    ],
    included: [
      "Tire removal from wheel",
      "Inside inspection to locate puncture",
      "Industry-standard plug and patch repair",
      "Valve stem inspection and replacement if needed",
      "Proper inflation to manufacturer specs",
      "Remount and torque to spec",
      "TPMS sensor reset"
    ],
    faqs: [
      {
        question: "Can all flat tires be repaired?",
        answer: "Not always. A tire can be repaired if the puncture is in the tread area and smaller than 1/4 inch in diameter. Damage to the sidewall, shoulder, or any tire driven on while flat cannot be safely repaired and requires replacement."
      },
      {
        question: "Is a plug repair as safe as a patch?",
        answer: "A plug alone is considered a temporary fix. The industry-standard repair is a combination plug and patch applied from the inside of the tire — this is what we use. It permanently seals the puncture and is safe for the life of the tire."
      },
      {
        question: "What should I do if I get a flat on the road?",
        answer: "Pull off safely, put on your hazard lights, and install your spare tire if you have one. If you don't have a spare or aren't comfortable changing a tire, call us or a roadside service. Avoid driving on a flat — it can damage the rim and make the tire unrepairable."
      }
    ]
  },
  {
    slug: "tpms",
    name: "TPMS Service",
    category: "Tire and Wheel",
    icon: Monitor,
    image: "/images/services/tpms.jpg",
    shortDescription: "Sensor diagnosis, reset, and replacement.",
    fullDescription: "Sensor diagnosis, reset, and replacement for tire pressure monitoring systems. Don't ignore the warning light — proper tire pressure is critical for safety, fuel efficiency, and tire longevity.",
    seoDescription: "TPMS light on in your car? Bingo Tire & Auto Service in Northern Virginia diagnoses, resets, and replaces TPMS sensors on all makes and models. Don't ignore your tire pressure warning light — it's there to keep you safe.",
    warnings: [
      "TPMS warning light is on (steady or flashing)",
      "Tires replaced recently and the light won't go off",
      "Tire pressure gauge is not working",
      "Recent cold weather drop triggering the warning",
      "One or more sensors are not reading on your dashboard"
    ],
    included: [
      "TPMS system scan and fault code retrieval",
      "Sensor location and identification",
      "Sensor battery life assessment",
      "TPMS sensor replacement (OEM or aftermarket)",
      "System relearn and reinitialization procedure",
      "Tire pressure verification on all four wheels"
    ],
    faqs: [
      {
        question: "Why is my TPMS light on even though my tires look fine?",
        answer: "The TPMS light can be triggered by a tire that is only slightly underinflated — tires can look fine but be 5 to 10 PSI below the recommended pressure. Cold weather can also drop tire pressure enough to trigger the warning. Sometimes a sensor itself has failed and needs to be replaced."
      },
      {
        question: "Do TPMS sensors need to be replaced when I get new tires?",
        answer: "Not automatically, but TPMS sensor service kits (valve core, cap, seal, and nut) should be replaced at every tire change. Sensors typically last 5 to 10 years before the battery fails and the whole sensor needs replacement."
      },
      {
        question: "Can I drive with the TPMS light on?",
        answer: "You can drive, but check your tire pressure first with a manual gauge. If any tire is significantly underinflated, add air immediately. Driving on underinflated tires causes excessive heat, uneven wear, and can lead to a blowout."
      }
    ]
  },
  {
    slug: "tire-rotation",
    name: "Tire Rotation",
    category: "Tire and Wheel",
    icon: PowerOff,
    image: "/images/services/tire-rotation.jpg",
    shortDescription: "Regular rotation to ensure even tire wear.",
    fullDescription: "Regular rotation to ensure even wear and extend tire life. Maximize your tire investment by letting us rotate them according to the manufacturer's recommended schedule and pattern.",
    seoDescription: "Regular tire rotation is one of the most cost-effective ways to extend tire life. Bingo Tire & Auto Service in Northern Virginia rotates tires on all vehicles using the correct rotation pattern. Walk-ins welcome.",
    warnings: [
      "You've driven 5,000 to 7,500 miles since your last rotation",
      "Front tires are wearing noticeably faster than rear",
      "One side of a tire is wearing faster than the other",
      "You notice vibration at highway speeds",
      "It's been over 6 months since your last rotation"
    ],
    included: [
      "Remove all four (or five with spare) wheels",
      "Rotate according to manufacturer's pattern",
      "Torque all lug nuts to factory specification",
      "Tire pressure check and adjustment on all tires",
      "Visual brake inspection during rotation",
      "Tread depth measurement on all tires"
    ],
    faqs: [
      {
        question: "How often should I rotate my tires?",
        answer: "Most manufacturers recommend tire rotation every 5,000 to 7,500 miles, or every oil change. Some tire manufacturers require regular rotation to maintain the warranty, so check your tire warranty documentation."
      },
      {
        question: "Does tire rotation matter on all-wheel drive vehicles?",
        answer: "Especially on AWD vehicles. Uneven tire wear on an AWD vehicle can cause the differentials to work harder, potentially leading to expensive drivetrain damage. Regular rotation is even more critical on AWD and 4WD vehicles."
      },
      {
        question: "What rotation pattern should be used?",
        answer: "The correct pattern depends on whether your vehicle is front-wheel drive, rear-wheel drive, AWD, and whether your tires are directional. We always use the manufacturer-specified pattern for your exact vehicle and tire combination."
      }
    ]
  },
  {
    slug: "tire-balancing",
    name: "Tire Balancing",
    category: "Tire and Wheel",
    icon: Gauge,
    image: "/images/services/tire-balancing.jpg",
    shortDescription: "Computerized wheel balancing to eliminate vibration.",
    fullDescription: "Computerized wheel balancing to eliminate vibration and uneven wear. Experience a smoother ride and protect your suspension components with our precise dynamic wheel balancing.",
    seoDescription: "Tire vibration and uneven wear are signs your wheels need balancing. Bingo Tire & Auto Service uses computerized wheel balancing equipment to eliminate vibration and extend tire life at all 5 Northern Virginia locations.",
    warnings: [
      "Vibration felt in the steering wheel at highway speeds (55+ mph)",
      "Vibration felt through the seat or floor",
      "Cupping or scalloping wear pattern on tires",
      "New tires were recently installed",
      "You hit a significant pothole or curb",
      "Steering wheel shakes when braking at high speed"
    ],
    included: [
      "Computerized dynamic balance of all four tires",
      "Removal of old wheel weights",
      "Precise placement of new balance weights",
      "Road force variation measurement (where applicable)",
      "Visual inspection of tires for damage",
      "Valve stem condition check"
    ],
    faqs: [
      {
        question: "What's the difference between balancing and alignment?",
        answer: "Balancing corrects uneven weight distribution in the wheel and tire assembly to eliminate vibration. Alignment adjusts the angle of your wheels relative to each other and the road to correct steering pull and uneven tire wear. Both are important and serve different purposes."
      },
      {
        question: "How often do tires need to be balanced?",
        answer: "Tires should be balanced every 6,000 to 12,000 miles, or whenever you notice vibration. It's good practice to balance tires whenever they're rotated. Tires should also be balanced after any impact that may have knocked a weight off the wheel."
      },
      {
        question: "Can unbalanced tires damage my car?",
        answer: "Yes. Over time, unbalanced tires cause uneven tire wear, extra stress on wheel bearings, and strain on steering and suspension components. Addressing vibration quickly will save you from more expensive repairs down the road."
      }
    ]
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
      { author: "Kofi M.", rating: 5, text: "Great service. Very pleasant and professional staff. Manager took care of me. Will definitely be back.", source: "Yelp" },
      { author: "MechanicAdvisor", rating: 5, text: "I went to 2 places and they both told me I needed new tires, 2 new rims, brake pads and rotors. The guy at Bingo Tires told me I just needed 2 tires and to rotate my tires. Honest shop.", source: "MechanicAdvisor" },
      { author: "Mattheus T.", rating: 5, text: "I had a tire that was damaged and needed to be replaced. They removed my old tire and mounted my new tire quickly and professionally.", source: "Yelp" }
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
      { author: "Verified Customer", rating: 5, text: "I came in with a punctured tire that was leaking air. I was there for about 20 minutes and left with a fixed tire for very cheap. Will be returning for all my tire needs.", source: "Yelp" },
      { author: "Spanish-speaking Customer", rating: 5, text: "Excelente Servicio. The staff was very friendly and it was the only place open after 8 PM. Highly recommend!", source: "Yelp" },
      { author: "Verified Customer", rating: 5, text: "Mudasir and the team are fantastic. Fast, knowledgeable, and great pricing. They handled our tires perfectly.", source: "Yelp" }
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
      { author: "Business Owner", rating: 5, text: "I can't say enough good things about Alphonso Carrington and the amazing team at Bingo Tires. They've been a tremendous help to me and my small business.", source: "Google" },
      { author: "Verified Customer", rating: 5, text: "Great shop! Excellent prices. Hard to find a good tire place that doesn't try to milk you for money. These guys are friendly, quick and do good work.", source: "Google" },
      { author: "Verified Customer", rating: 5, text: "The very best car care place in the area. I bring my car here for tire changes, oil changes, and all maintenance.", source: "Google" }
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
      { author: "Verified Customer", rating: 5, text: "Best car care place around the area. Always take my car here for tire changes, oil changes, and general maintenance.", source: "Yelp" },
      { author: "Verified Customer", rating: 4, text: "Good full-service shop. They handle tires, brakes, oil changes, and more. Staff is knowledgeable and professional.", source: "Yelp" }
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
      { author: "Verified Customer", rating: 5, text: "Reliable and honest shop. They've been serving Winchester for years and I trust them completely with my vehicle.", source: "Google" }
    ],
    highlights: ["Serving Winchester since 2004", "New & used tires", "Full auto repair"]
  }
];

export const specials = [
  { id: "oil-change", title: "Oil Change Special", price: "Starting at $29.99", originalPrice: "$49.99", description: "Conventional oil change including filter and multi-point inspection." },
  { id: "online-booking", title: "$5 Off Any Service", price: "$5 Off", description: "Save $5 on any service when you book your appointment online." },
  { id: "free-rotation", title: "Free Tire Rotation", price: "Free", description: "Get a free tire rotation with any paid brake service." },
  { id: "state-inspection", title: "VA State Inspection", price: "$16.00", description: "Official Virginia state safety inspection fee." },
  { id: "tire-rotation-deal", title: "Tire Rotation", price: "$19.99", originalPrice: "$35.00", description: "Professional tire rotation to extend the life of your tires." },
  { id: "battery-test", title: "Battery Test", price: "Free", description: "Complete diagnostic test of your battery and charging system." }
];
