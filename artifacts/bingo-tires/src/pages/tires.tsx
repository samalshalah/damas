import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ShieldCheck, Building2, MapPin, ChevronDown, ChevronUp, HelpCircle, Star, Truck } from "lucide-react";
import { services } from "@/lib/data";
import { BrandStrip } from "@/components/brand-strip";
import { PageHero } from "@/components/layout/page-hero";
import { motion } from "framer-motion";
import { useState } from "react";

const tireBrands = [
  { name: "Michelin", logo: "/images/michelin_sm.jpg" },
  { name: "Goodyear", logo: "/images/goodyear_sm.png" },
  { name: "Bridgestone", logo: "/images/bridgestone_sm.png" },
  { name: "Continental", logo: "/images/continental_sm.png" },
  { name: "Pirelli", logo: "/images/pirelli_sm.png" },
  { name: "BF Goodrich", logo: "/images/bfgoodrich_sm.jpg" },
  { name: "Yokohama", logo: "/images/yokohama_sm.png" },
  { name: "Kumho", logo: "/images/kumho_sm.png" },
  { name: "Dunlop", logo: "/images/dunlop_sm.jpg" },
  { name: "Hankook", logo: "/images/hankook_sm.png" },
];

const faqs = [
  {
    question: "How do I know when it's time to replace my tires?",
    answer: "The most reliable indicator is tread depth. Insert a penny into the tread groove with Lincoln's head pointing down — if you can see all of Lincoln's head, your tread is below 2/32 inch and the tire must be replaced. For winter driving, the quarter test (Washington's head) gives you the safer 4/32-inch threshold. You should also replace tires with visible cracking in the sidewalls, bulges or blisters, or any tire that has been punctured in the sidewall or run flat."
  },
  {
    question: "What is the difference between new tires and used tires?",
    answer: "New tires come with full tread depth (typically 10/32 to 11/32 inch for standard passenger tires), manufacturer warranty, and a known service history. Used tires are previously owned tires with partial tread remaining. Every used tire in our inventory at Bingo Tire & Auto Service is inspected for minimum safe tread depth, sidewall integrity, and structural soundness. Used tires are a budget-friendly option for drivers who need to get back on the road quickly — but new tires offer superior predictable performance and peace of mind."
  },
  {
    question: "Which tire brands does Bingo Tire carry?",
    answer: "We stock Michelin, Goodyear, Bridgestone, Continental, Pirelli, BF Goodrich, Yokohama, Kumho, Dunlop, and Hankook in a wide range of sizes for passenger cars, trucks, SUVs, and minivans. We can also special-order sizes and brands not carried in our standard inventory. Call your nearest Northern Virginia location to confirm availability for your specific vehicle and tire size."
  },
  {
    question: "Does tire installation include balancing?",
    answer: "Yes — every new tire installation at Bingo Tire & Auto Service includes computerized wheel balancing at no extra charge. Balancing is essential for a smooth ride and even tire wear. We also include a TPMS sensor service check and torque all lug nuts to manufacturer specification as part of every tire installation."
  },
  {
    question: "Should I replace all four tires at once?",
    answer: "Ideally, yes — replacing all four tires at once ensures even tread depth across all positions, which is critical for all-wheel drive vehicles and important for handling balance on all vehicles. If budget is a concern, replacing in pairs (both fronts or both rears) is acceptable. We'll measure your current tread depths and give you an honest recommendation for your specific situation."
  },
  {
    question: "How many used tires do you have in stock?",
    answer: "Our Alexandria location keeps 3,000+ inspected used tires in stock, our Woodbridge location carries 700+ used tires, and all other locations maintain their own inventories. Inventory changes daily as tires come in and are sold. Call your nearest location to check availability for your specific tire size — we'll tell you exactly what we have."
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-primary transition-colors"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <h3 className="font-semibold text-sm sm:text-base leading-snug">{question}</h3>
        {open
          ? <ChevronUp className="w-5 h-5 shrink-0 text-primary" />
          : <ChevronDown className="w-5 h-5 shrink-0 text-muted-foreground" />
        }
      </button>
      {open && (
        <div className="pb-5 text-muted-foreground leading-relaxed text-sm pr-8">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function Tires() {
  const tireServices = services.filter(s => s.category === "Tire and Wheel");

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen">

      <PageHero
        category="Tires"
        title="New & Used Tires in Springfield, Woodbridge & Northern Virginia, VA"
        description="Bingo Tire & Auto Service carries an extensive inventory of new and budget-friendly inspected used tires at five Northern Virginia locations. Michelin, Goodyear, Bridgestone, Continental, and more — installed the same day with free computerized balancing."
        image="/images/961_sm.jpg"
        imageAlt="Tire inventory at Bingo Tire & Auto Service Northern Virginia"
        stats={[
          { val: "10+", label: "Brands In Stock" },
          { val: "3,000+", label: "Used Tires (Alexandria)" },
          { val: "Free", label: "Computer Balancing" },
        ]}
        primaryCta={{ label: "Request a Tire Quote", href: "/contact" }}
        secondaryCta={{ label: "Find a Location", href: "/locations" }}
        note="Inventory changes daily · Call to confirm availability for your size"
      />

      <BrandStrip />

      {/* Intro body copy */}
      <section className="py-16 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold font-display tracking-tight mb-4">
              Northern Virginia's Tire Shop Since 2004
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Bingo Tire &amp; Auto Service has been selling and installing tires for drivers across Northern Virginia since 2004. Whether you commute daily on I-95, I-395, or I-66, haul a truck on Route 1 through Alexandria, or need winter tires for the Shenandoah Valley roads near Winchester, we stock the right tire for your vehicle and your budget. Our technicians install every tire with precision — proper mounting, computerized balancing, torqued lug nuts, and a TPMS reset included with every installation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We stock both new name-brand tires and quality inspected used tires to serve every budget. Our Alexandria location on Richmond Hwy maintains over 3,000 used tires in stock, and our Woodbridge location carries 700+. All five Northern Virginia locations can help you find the right tire in the right size for your car, truck, SUV, or minivan — often the same day. No appointment needed, walk-ins welcome.
            </p>
          </div>
        </div>
      </section>

      {/* New vs Used Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* New Tires */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-display text-primary">New Tires</h2>
              </div>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                We carry all major brands for passenger cars, light trucks, and SUVs. Our team will match you with the best tire for your driving style, vehicle type, and budget — whether you need a touring all-season for the daily commute or a performance summer tire.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                Every new tire purchase includes free computerized balancing, TPMS sensor service, and installation by our certified technicians. We price-match major retailers — bring us a quote and we'll beat it.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {["Michelin", "Goodyear", "Bridgestone", "Continental", "Pirelli", "BF Goodrich", "Yokohama", "Kumho", "Dunlop", "Hankook"].map((brand) => (
                  <li key={brand} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{brand}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="rounded-full w-full">
                <Link href="/contact">Get a New Tire Quote</Link>
              </Button>
            </div>

            {/* Used Tires */}
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Truck className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-display text-primary">Used Tires</h2>
              </div>
              <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                Budget-friendly inspected used tires are a practical solution for drivers who need to replace a tire quickly without breaking the bank. Our Alexandria location stocks 3,000+ used tires, and our Woodbridge location carries 700+. Inventory changes daily.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                Every used tire in our inventory is inspected for safe tread depth, sidewall integrity, and structural soundness. We do not sell tires that fail our safety criteria. Our Centreville location offers a 30-day warranty on used tire purchases.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Thorough safety inspection on every tire",
                  "Minimum tread depth verified",
                  "Sidewall and structural check",
                  "Pressure tested before installation",
                  "Available individually, in pairs, or full sets",
                  "Fast, same-day installation",
                  "30-day warranty at Centreville location",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="rounded-full w-full">
                <Link href="/contact">Ask About Used Tires</Link>
              </Button>
            </div>

          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-20 bg-white dark:bg-zinc-900 border-t border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-3xl overflow-hidden aspect-video md:aspect-square">
              <img
                src="/images/img_630x421_carwork.jpg"
                alt="Professional tire installation at Bingo Tire & Auto Service Northern Virginia"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <ShieldCheck className="w-12 h-12 mb-6 text-primary" />
              <h2 className="text-3xl font-bold font-display tracking-tight mb-4">
                Why Buy Tires at Bingo Tire &amp; Auto Service?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                We don't just sell tires — we make sure they perform correctly on your vehicle. Every new tire installation includes precise computerized balancing, a TPMS sensor service check, and a thorough inspection of your wheels and suspension components before we put you back on the road.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                Since 2004, Bingo Tire &amp; Auto Service has built a reputation across Springfield, Woodbridge, Alexandria, Centreville, and Winchester for honest pricing and expert tire service. We carry the largest brands at competitive prices, offer walk-in convenience, and our technicians work on every make and model — from compact sedans to full-size pickup trucks.
              </p>
              <ul className="space-y-3">
                {[
                  "Competitive pricing on all brands — we'll beat written quotes",
                  "Free computerized balancing with every new tire installation",
                  "All makes, models, and tire sizes in stock or orderable",
                  "Expert installation torqued to factory specification",
                  "TPMS sensor service included with every installation",
                  "Walk-ins welcome at all five Northern Virginia locations",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Serving Northern Virginia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-zinc-100 dark:bg-zinc-900 rounded-3xl p-10 border border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold font-display">
                Serving Springfield, Woodbridge, Alexandria, Centreville &amp; Winchester
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
              Bingo Tire &amp; Auto Service sells and installs new and used tires at five Northern Virginia locations. Our Springfield shop at 7661 Fullerton Rd serves Fairfax County drivers heading to and from I-95. Our Alexandria location at 2920 Richmond Hwy is open until midnight every day of the week — perfect for drivers who can't make it in during standard business hours. Woodbridge at 1330 Old Bridge Rd is open until 10 PM Monday through Saturday and offers a military discount. Our Centreville location at 13600 Lee Hwy is women-owned and Asian-owned and offers a 30-day warranty on used tire purchases. And our Winchester shop at 709 N Loudoun St serves Shenandoah Valley drivers throughout Frederick County.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {[
                { city: "Springfield", phone: "(703) 440-0880", note: "VA State Inspections" },
                { city: "Woodbridge", phone: "(703) 494-8888", note: "Open until 10 PM" },
                { city: "Alexandria", phone: "(703) 548-0333", note: "Open until midnight" },
                { city: "Centreville", phone: "(703) 543-6900", note: "30-day used tire warranty" },
                { city: "Winchester", phone: "(540) 667-7777", note: "Shenandoah Valley" },
              ].map((loc) => (
                <motion.div
                  key={loc.city}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-zinc-800 rounded-2xl p-5 border shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-bold font-display">{loc.city}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{loc.phone}</div>
                  <div className="text-xs text-primary font-medium">{loc.note}</div>
                </motion.div>
              ))}
            </div>
            <div className="mt-6">
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/locations">View All Locations & Hours</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tire Services */}
      <section className="py-20 bg-white dark:bg-zinc-900 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-center tracking-tight mb-4">
            Complete Tire Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Beyond selling tires, Bingo Tire &amp; Auto Service provides every tire-related service your vehicle needs — from flat repair to TPMS sensor replacement — at all five Northern Virginia locations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tireServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div className="bg-white dark:bg-zinc-800 rounded-2xl border shadow-sm hover:border-primary/40 hover:shadow-md transition-all group cursor-pointer overflow-hidden">
                  <div className="h-40 overflow-hidden bg-zinc-200 dark:bg-zinc-700">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold font-display group-hover:text-primary transition-colors leading-tight">{service.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <HelpCircle className="w-7 h-7 text-primary shrink-0" />
              <h2 className="text-3xl font-bold font-display tracking-tight">
                Tire FAQs — Northern Virginia Drivers Ask
              </h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Common questions from customers at our Springfield, Woodbridge, Alexandria, Centreville, and Winchester locations.
            </p>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border shadow-sm divide-y px-6">
              {faqs.map((faq, i) => (
                <FAQItem key={i} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight mb-4">
            Need New or Used Tires in Northern Virginia?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Walk into any of our five Northern Virginia locations — Springfield, Woodbridge, Alexandria, Centreville, or Winchester — and we'll have you riding on the right tires the same day. No appointment needed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full h-14 px-10 text-base font-semibold">
              <Link href="/contact">Request a Tire Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-10 text-base bg-transparent border-zinc-600 text-white hover:bg-zinc-800">
              <Link href="/locations">Find My Nearest Location</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
