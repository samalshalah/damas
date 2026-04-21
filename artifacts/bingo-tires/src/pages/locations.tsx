import { Link } from "wouter";
import { locations } from "@/lib/data";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Locations() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      {/* Hero */}
      <section className="relative bg-zinc-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/img_630x421_carwork.jpg" alt="Shop" className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/80 to-zinc-900" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">Our Locations</h1>
          <p className="text-xl text-zinc-300">
            Five convenient locations across Northern Virginia. Find the shop nearest you.
          </p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, i) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link href={`/locations/${loc.id}`} className="group block bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border shadow-sm hover:shadow-md hover:border-primary/30 transition-all">
                  <div className="h-48 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    {loc.mapImage ? (
                      <img src={loc.mapImage} alt={`${loc.name} map`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <MapPin className="w-12 h-12 text-zinc-400" />
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-2xl font-bold font-display mb-1 group-hover:text-primary transition-colors">
                      Bingo Tire — {loc.name}
                    </h2>
                    <div className="space-y-3 mt-4">
                      <div className="flex items-start gap-3 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{loc.address}, {loc.city}, {loc.state} {loc.zip}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Phone className="w-4 h-4 text-primary shrink-0" />
                        <span>{loc.phone}</span>
                      </div>
                      <div className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>Mon–Fri 8–6 &middot; Sat 8–4 &middot; Sun Closed</span>
                      </div>
                    </div>
                    <div className="flex items-center text-primary font-medium text-sm mt-5">
                      View location <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
          <h2 className="text-3xl font-bold font-display tracking-tight mb-4">Ready to Book?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">Choose any location and schedule your appointment online today.</p>
          <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-10 text-base font-bold">
            <Link href="/contact">Book an Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
