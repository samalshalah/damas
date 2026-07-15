"use client";
import Link from "next/link";
import { business, services } from "@/lib/data";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PageHero } from "@/components/layout/page-hero";

export default function AutoServices() {
  const autoServices = services.filter(s => s.category === "Auto Services");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <PageHero
        category="Auto Services"
        title={<>Auto Repair<br />&amp; Maintenance</>}
        description="Diagnostics, maintenance, brakes, alignment, exhaust systems, tune ups, timing chain and belt service, batteries, steering, suspension, and repair services at our Chantilly shop."
        image="/images/damas/service-bay.webp"
        imageAlt="Auto repair technician working in a service bay"
        stats={[
          { val: "Chantilly", label: "VA" },
          { val: "Local", label: "Shop" },
          { val: "All Makes", label: "& Models" },
        ]}
        primaryCta={{ label: "Book an Appointment", href: "/contact" }}
        secondaryCta={{ label: "Get Directions", href: business.mapUrl }}
      />

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {autoServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                  data-testid={`card-auto-service-${service.slug}`}
                >
                  {/* Image */}
                  <div className="h-44 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-6 flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-bold font-display mb-1.5 group-hover:text-primary transition-colors">{service.name}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.shortDescription}</p>
                      {service.availableAt && (
                        <div className="flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 font-medium mb-3">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          {service.availableAt.join(" & ")} only
                        </div>
                      )}
                      <div className="flex items-center text-primary font-medium text-sm">
                        Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight mb-4">Ready to Schedule?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">Request service at Damas Auto Repair in Chantilly, VA.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-10 text-base font-bold">
              <Link href="/contact">Book Appointment</Link>
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
