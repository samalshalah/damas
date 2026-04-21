import { Link } from "wouter";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function TireServices() {
  const tireServices = services.filter(s => s.category === "Tire and Wheel");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="relative bg-zinc-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/961_sm.jpg" alt="Tire services" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6">
            Tire Services
          </h1>
          <p className="text-xl text-zinc-300 mb-8">
            Complete tire care — rotation, balancing, flat repair, TPMS, and more. We also carry a full inventory of new and used tires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="rounded-full h-14 px-8 text-base">
              <Link href="/contact">Book a Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8 text-base bg-transparent border-zinc-600 text-white hover:bg-zinc-800">
              <Link href="/tires">Shop New &amp; Used Tires</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                  className="group flex gap-5 bg-white dark:bg-zinc-900 rounded-2xl p-6 border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                  data-testid={`card-tire-service-${service.slug}`}
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl font-bold font-display mb-2 group-hover:text-primary transition-colors">{service.name}</h2>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-3">{service.shortDescription}</p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
                className="group flex gap-5 bg-primary text-primary-foreground rounded-2xl p-6 shadow-sm hover:shadow-md hover:bg-primary/90 transition-all"
                data-testid="card-new-used-tires"
              >
                <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <img src="/images/961_sm.jpg" alt="Tires" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-xl font-bold font-display mb-2">New &amp; Used Tires</h2>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed mb-3">Michelin, Goodyear, Bridgestone, Continental, and more. New and budget-friendly used tires in stock.</p>
                  <div className="flex items-center font-medium text-sm">
                    Browse tires <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-16 bg-white dark:bg-zinc-900 border-t">
        <div className="container mx-auto px-4 max-w-4xl text-center">
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
