import { Link } from "wouter";
import { motion } from "framer-motion";
import { CheckCircle2, Wrench, Clock, Award, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";

const values = [
  {
    icon: Wrench,
    title: "We make auto repair more convenient for you",
    desc: "Five locations across Northern Virginia — Springfield, Woodbridge, Alexandria, Centreville, and Winchester — so quality service is never far away. Walk-ins welcome at all locations.",
  },
  {
    icon: ThumbsUp,
    title: "We get the job done right — the first time",
    desc: "Our ASE-certified technicians use state-of-the-art diagnostic equipment to identify the real problem and fix it correctly. No unnecessary upsells, no repeat visits.",
  },
  {
    icon: Award,
    title: "Proven results for setting exceptional standards",
    desc: "Since 2004, we've built a reputation across NOVA for honesty, reliability, and professional service. Customers come back because we treat every vehicle as if it were our own.",
  },
  {
    icon: Clock,
    title: "Same day service for most repairs",
    desc: "Most tire, oil, brake, and diagnostic services are completed the same day. We respect your time — and we'll give you an honest estimate before any work begins.",
  },
];

export default function About() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <PageHero
        category="About Us"
        title={<>Bingo Tire &amp;<br />Auto Service</>}
        description="Since 2004, the tire, alignment, and car care center of choice in Springfield, Woodbridge, Alexandria, Centreville, and Winchester."
        image="/images/bingo-storefront.jpg"
        imageAlt="Bingo Tire & Auto Service storefront"
        stats={[
          { val: "2004", label: "Founded" },
          { val: "5", label: "Locations" },
          { val: "20+", label: "Years Serving NOVA" },
        ]}
        primaryCta={{ label: "Book an Appointment", href: "/contact" }}
        secondaryCta={{ label: "Find a Location", href: "/locations" }}
        note="Mon–Fri 8am–6pm · Sat 8am–4pm · Walk-ins welcome"
      />

      {/* Main intro */}
      <section className="py-16 md:py-24 bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
                Your Neighborhood Tire &amp; Auto Experts
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2004, Bingo Tire &amp; Auto Service has been the tire, alignment, and car care center of choice in the Springfield, Woodbridge, Alexandria and Winchester areas. Our expert staff can help with any tire or car repair need.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer a full range of garage services to vehicle owners in Northern Virginia. Whether you drive a passenger car, medium-sized truck, or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our shop.
              </p>
              <blockquote className="border-l-4 border-primary pl-5 py-1">
                <p className="text-lg font-semibold text-primary font-display leading-snug">
                  "A well-established, trustworthy neighborhood shop that has been around 20+ years. Solid, professional, reliable — not a big chain. Customers know the owner by name."
                </p>
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]"
            >
              <img
                src="/images/bingo-storefront.jpg"
                alt="Bingo Tire & Auto Service Centreville storefront"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Value Props */}
      <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-4">
              Why Customers Choose Bingo Tire
            </h2>
            <p className="text-muted-foreground text-lg">
              Four reasons NOVA drivers have trusted us for over 20 years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-8 border shadow-sm flex gap-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <item.icon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display mb-2 leading-snug">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services summary */}
      <section className="py-16 bg-white dark:bg-zinc-900 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold font-display tracking-tight mb-6">
                Everything Your Vehicle Needs, Under One Roof
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                From new and used tires to brake repair, wheel alignment, oil changes, and Virginia State Inspections — we handle it all. 14 services across 5 locations.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "New & Used Tires — 10+ brands in stock",
                  "Brake Repair & Inspection",
                  "Wheel Alignment & Balancing",
                  "Engine Diagnostics & Tune-Up",
                  "Virginia State Inspection",
                  "Lube, Oil & Filters — all types",
                  "Steering, Suspension & Batteries",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="rounded-full h-13 px-8">
                  <Link href="/services">View All Services</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-13 px-8">
                  <Link href="/contact">Book Appointment</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "14", label: "Services Offered" },
                { val: "5", label: "Locations" },
                { val: "20+", label: "Years in Business" },
                { val: "3,000+", label: "Used Tires in Stock" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-6 text-center border"
                >
                  <p className="text-4xl font-bold font-display text-primary mb-1">{stat.val}</p>
                  <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight mb-4">Ready to Visit Us?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Five convenient locations across Northern Virginia. Walk-ins welcome — or book online to save time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-10 text-base font-bold">
              <Link href="/contact">Book an Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-10 text-base bg-transparent border-white text-white hover:bg-white/10">
              <Link href="/locations">Find a Location</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
