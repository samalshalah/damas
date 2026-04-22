"use client";
import Link from "next/link";
import { services } from "@/lib/data";
import { ArrowRight, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PageHero } from "@/components/layout/page-hero";

export default function TireServices() {
  const tireServices = services.filter(s => s.category === "Tire and Wheel");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <PageHero
        category="Tire &amp; Wheel"
        title={<>Tire Services<br />&amp; Repair</>}
        description="Complete tire care — rotation, balancing, flat repair, TPMS, and more. We also carry a full inventory of new and used tires."
        image="/images/961_sm.jpg"
        imageAlt="Tire services"
        stats={[
          { val: "40+", label: "Tire Brands" },
          { val: "5", label: "Locations" },
          { val: "3,000+", label: "Used Tires In Stock" },
        ]}
        primaryCta={{ label: "Book a Service", href: "/contact" }}
        secondaryCta={{ label: "Shop New & Used Tires", href: "/tires" }}
      />

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tireServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                  data-testid={`card-tire-service-${service.slug}`}
                >
                  <div className="h-44 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex gap-4">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg font-bold font-display mb-1.5 group-hover:text-primary transition-colors">{service.name}</h2>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.shortDescription}</p>
                      <div className="flex items-center text-primary font-medium text-sm">
                        Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

            {/* New & Used Tires card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: tireServices.length * 0.1 }}
            >
              <Link
                href="/tires"
                className="group block bg-primary text-primary-foreground rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:bg-primary/90 transition-all"
                data-testid="card-new-used-tires"
              >
                <div className="h-44 overflow-hidden">
                  <img src="/images/services/tire-shop-g2.jpg" alt="New and used tires" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-60" />
                </div>
                <div className="p-6 flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <CircleDot className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-lg font-bold font-display mb-1.5">New &amp; Used Tires</h2>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed mb-3">Michelin, Goodyear, Bridgestone, Continental, and more. Budget-friendly used tires in stock.</p>
                    <div className="flex items-center font-medium text-sm">
                      Browse tires <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-white dark:bg-zinc-900 border-t">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight mb-4">Expert Tire Care at Every Location</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Every Bingo Tire location is equipped with state-of-the-art computerized balancing and alignment equipment. We handle all makes and models.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full h-14 px-10 text-base font-bold">
              <Link href="/contact">Schedule Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-10 text-base">
              <Link href="/locations">Our Locations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
