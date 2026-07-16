"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Car, CheckCircle2, Clock, MapPin, ShieldCheck, Star, Wrench } from "lucide-react";
import { business, services, specials } from "@/lib/data";
import { motion } from "framer-motion";

const autoServices = services.filter((s) => s.category === "Auto Services");
const featuredSpecials = specials.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/damas/home-hero.webp"
            alt="Auto repair bay with vehicles being serviced"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/70 to-zinc-950/25" />
        </div>
        <div className="container mx-auto px-4 py-28 md:py-40 lg:py-48 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 mb-6 text-sm font-medium">
              <MapPin className="w-4 h-4 text-primary" />
              {business.address}, {business.city}, {business.state} {business.zip}
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight tracking-tight mb-6">
              {business.name}
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed max-w-2xl">
              Local auto repair in Chantilly for diagnostics, maintenance, brakes, alignment, exhaust systems, tune ups, timing chain and belt service, and tire care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base rounded-full shadow-lg" data-testid="button-hero-book">
                <Link href="/contact">Request Service</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-full bg-transparent border-zinc-600 text-white hover:bg-zinc-800">
                <a href={business.mapUrl} target="_blank" rel="noreferrer">Get Directions</a>
              </Button>
            </div>
            <div className="mt-7 inline-flex max-w-xl flex-col gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-xl shadow-black/20 backdrop-blur-sm sm:flex-row sm:items-center">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Car className="h-6 w-6" />
              </div>
              <div>
                <p className="text-base font-bold text-white">Loaner cars available for repair bills over $400</p>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">
                  Ask about loaner availability when you request your appointment.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-zinc-950 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Local Chantilly shop",
              "Honest diagnostics",
              "Loaner cars over $400",
              "Maintenance and repair",
            ].map((feature, i) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Auto Repair</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">Services at Damas Auto Repair</h2>
              <p className="text-muted-foreground mt-2 max-w-xl">
                Practical repair and maintenance for daily drivers, family vehicles, trucks, SUVs, and vans in Chantilly.
              </p>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full shrink-0" data-testid="button-auto-view-all">
              <Link href="/services">
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {autoServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block group bg-white dark:bg-zinc-950 rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all h-full overflow-hidden"
                  data-testid={`card-home-auto-${service.slug}`}
                >
                  <div className="h-44 overflow-hidden bg-zinc-100">
                    <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold font-display group-hover:text-primary transition-colors leading-tight">{service.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-3">{service.shortDescription}</p>
                    <span className="inline-flex items-center text-primary font-medium text-sm">
                      Learn more <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">Why Damas</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
                Straightforward Auto Care in Chantilly
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {business.description}
              </p>
              <ul className="space-y-3">
                {[
                  "Clear estimates before approved repairs",
                  "Diagnostics focused on the root cause",
                  "Brake, exhaust, tune up, timing, battery, and tire service",
                  "Loaner cars may be available for repair bills over $400",
                  "Convenient location near Pleasant Valley Road",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Wrench, label: "Repair", desc: "Diagnostics and fixes" },
                { icon: ShieldCheck, label: "Brakes", desc: "Pads, rotors, fluid" },
                { icon: Star, label: "Maintenance", desc: "Oil, belts, batteries" },
                { icon: Clock, label: "Scheduling", desc: "Request a visit online" },
              ].map((card) => (
                <div key={card.label} className="bg-zinc-50 dark:bg-zinc-900 border rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-3">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-bold mb-1">{card.label}</p>
                  <p className="text-muted-foreground text-sm">{card.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Service Requests</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">Common Reasons to Visit</h2>
              <p className="text-muted-foreground mt-2">Contact the shop for current pricing and availability.</p>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full shrink-0">
              <Link href="/contact">
                Request Service <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSpecials.map((deal, i) => (
              <motion.div
                key={deal.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-zinc-950 rounded-2xl border border-border/50 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="bg-primary px-6 py-4 flex items-center justify-between">
                  <h3 className="text-white font-bold font-display text-lg leading-tight">{deal.title}</h3>
                  <span className="text-white font-black text-2xl shrink-0 ml-4">{deal.price}</span>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{deal.description}</p>
                  <Button asChild size="sm" variant="outline" className="rounded-full w-full">
                    <Link href="/contact">Request This Service</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-6">Visit Damas Auto Repair in Chantilly</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            {business.address}, {business.city}, {business.state} {business.zip}
          </p>
          <Button asChild size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full font-bold shadow-xl">
            <a href={business.mapUrl} target="_blank" rel="noreferrer">Get Directions</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
