import { Link } from "wouter";
import { locations } from "@/lib/data";
import { MapPin, Phone, Clock, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PageHero } from "@/components/layout/page-hero";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i <= Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-zinc-300"}`}
        />
      ))}
    </div>
  );
}

function getTodayHours(hours: { day: string; hours: string }[]) {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  return hours.find(h => h.day === today);
}

export default function Locations() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <PageHero
        category="Locations"
        title={<>5 Locations in<br />Northern Virginia</>}
        description="Springfield, Woodbridge, Alexandria, Centreville, and Winchester. Find the Bingo Tire shop nearest you."
        image="/images/img_630x421_carwork.jpg"
        imageAlt="Bingo Tire location"
        stats={[
          { val: "5", label: "Locations" },
          { val: "NOVA", label: "Since 2004" },
          { val: "4.3★", label: "Avg. Google Rating" },
        ]}
        primaryCta={{ label: "Book an Appointment", href: "/contact" }}
        secondaryCta={{ label: "View All Hours", href: "/locations" }}
      />

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((loc, i) => {
              const todayHours = getTodayHours(loc.hours);
              const isOpen = todayHours && todayHours.hours !== "Closed";
              return (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link href={`/locations/${loc.id}`} className="group block bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border shadow-sm hover:shadow-md hover:border-primary/30 transition-all h-full">
                    <div className="h-48 overflow-hidden bg-zinc-200 dark:bg-zinc-800 relative">
                      {loc.mapImage ? (
                        <img src={loc.mapImage} alt={`${loc.name} map`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <MapPin className="w-12 h-12 text-zinc-400" />
                        </div>
                      )}
                      {/* Open/Closed badge */}
                      <div className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${isOpen ? "bg-green-500 text-white" : "bg-zinc-700 text-zinc-200"}`}>
                        {isOpen ? "Open Now" : "Closed Now"}
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h2 className="text-xl font-bold font-display group-hover:text-primary transition-colors">
                          Bingo Tire — {loc.name}
                        </h2>
                      </div>

                      {/* Star rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <StarRating rating={loc.rating} />
                        <span className="text-sm font-semibold">{loc.rating}</span>
                        <span className="text-xs text-muted-foreground">({loc.reviewCount})</span>
                      </div>

                      <div className="space-y-2.5">
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
                          <span>
                            {todayHours ? (
                              <>Today: <span className={todayHours.hours === "Closed" ? "text-red-500 font-medium" : "text-foreground font-medium"}>{todayHours.hours}</span></>
                            ) : "See hours"}
                          </span>
                        </div>
                      </div>

                      {/* Attributes (show first 2) */}
                      {loc.attributes.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-4">
                          {loc.attributes.slice(0, 2).map(attr => (
                            <span key={attr} className="text-xs bg-primary/8 text-primary border border-primary/15 px-2 py-0.5 rounded-full">{attr}</span>
                          ))}
                          {loc.attributes.length > 2 && (
                            <span className="text-xs text-muted-foreground px-2 py-0.5">+{loc.attributes.length - 2} more</span>
                          )}
                        </div>
                      )}

                      <div className="flex items-center text-primary font-medium text-sm mt-5">
                        View location <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
