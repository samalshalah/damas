import { Link } from "wouter";
import { services } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AutoServices() {
  const autoServices = services.filter(s => s.category === "Auto Services");

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="relative bg-zinc-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/2218_sm.jpg" alt="Auto repair" className="w-full h-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight mb-6">
            Auto Repair Services
          </h1>
          <p className="text-xl text-zinc-300 mb-8">
            From engine diagnostics to brake repair, our certified technicians handle every aspect of your vehicle's maintenance and repair.
          </p>
          <Button asChild size="lg" className="rounded-full h-14 px-8 text-base">
            <Link href="/contact">Book an Appointment</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                  className="group flex gap-5 bg-white dark:bg-zinc-900 rounded-2xl p-6 border shadow-sm hover:shadow-md hover:border-primary/30 transition-all"
                  data-testid={`card-auto-service-${service.slug}`}
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight mb-4">Ready to Schedule?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">Book your auto repair appointment at any of our five Northern Virginia locations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-10 text-base font-bold">
              <Link href="/contact">Book Appointment</Link>
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
