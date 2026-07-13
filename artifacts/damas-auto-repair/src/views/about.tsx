"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, ThumbsUp, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";
import { business } from "@/lib/data";

const values = [
  {
    icon: Wrench,
    title: "Practical repair guidance",
    desc: "We focus on the actual vehicle concern and explain the repair path before approved work begins.",
  },
  {
    icon: ThumbsUp,
    title: "Clear communication",
    desc: "You get straightforward recommendations for maintenance, diagnostics, and repairs without confusing shop talk.",
  },
  {
    icon: Clock,
    title: "Convenient Chantilly location",
    desc: `Visit us at ${business.address}, ${business.city}, ${business.state} ${business.zip}.`,
  },
  {
    icon: CheckCircle2,
    title: "Everyday auto care",
    desc: "Diagnostics, brakes, oil changes, alignment, batteries, steering, suspension, and tire service under one roof.",
  },
];

export default function About() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <PageHero
        category="About Us"
        title={<>{business.name}</>}
        description={business.description}
        image="/images/img_630x421_carwork.jpg"
        imageAlt="Auto repair technician working on a vehicle"
        stats={[
          { val: "Chantilly", label: "VA" },
          { val: "Auto", label: "Repair" },
          { val: "All Makes", label: "& Models" },
        ]}
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "Get Directions", href: business.mapUrl }}
      />

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
                Local Auto Repair for Chantilly Drivers
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Damas Auto Repair helps drivers maintain and repair the vehicles they rely on every day. Our work centers on diagnostics, brake service, oil changes, alignment, batteries, steering and suspension, and tire care.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The shop is located at {business.address}, {business.city}, {business.state} {business.zip}, making it convenient for Chantilly, South Riding, Centreville, Herndon, Fairfax, and nearby Northern Virginia drivers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]"
            >
              <img
                src="/images/service-description-list-3264.jpg"
                alt="Auto repair service bay"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-4">
              Why Customers Choose Damas
            </h2>
            <p className="text-muted-foreground text-lg">
              Reliable auto care depends on clear diagnosis, practical recommendations, and consistent service.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
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

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight mb-4">Ready to Visit?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Request service online or get directions to our Chantilly shop.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-10 text-base font-bold">
              <Link href="/contact">Request Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-10 text-base bg-transparent border-white text-white hover:bg-white/10">
              <a href={business.mapUrl} target="_blank" rel="noreferrer">Get Directions</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
