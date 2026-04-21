import { useParams, Link } from "wouter";
import { locations, services } from "@/lib/data";
import { MapPin, Phone, Clock, ArrowRight, CheckCircle2, ChevronRight, Star, Quote, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { PageHero } from "@/components/layout/page-hero";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map(i => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-zinc-300"}`}
        />
      ))}
    </div>
  );
}

export default function LocationDetail() {
  const { id } = useParams<{ id: string }>();
  const loc = locations.find(l => l.id === id);

  if (!loc) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Location not found</h1>
          <Link href="/locations" className="text-primary underline">Back to all locations</Link>
        </div>
      </div>
    );
  }

  const autoServices = services.filter(s => s.category === "Auto Services");
  const tireServices = services.filter(s => s.category === "Tire and Wheel");

  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayHours = loc.hours.find(h => h.day === today);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <PageHero
        category="Bingo Tire &amp; Auto Service"
        title={<>{loc.city},<br />{loc.state}</>}
        description={`${loc.address}, ${loc.city}, ${loc.state} ${loc.zip} · ${loc.phone}`}
        image="/images/1431_sm.jpg"
        imageAlt={`Bingo Tire ${loc.city}`}
        stats={[
          { val: `${loc.rating}★`, label: `${loc.reviewCount} Reviews` },
          { val: "20+", label: "Years Serving NOVA" },
          { val: "14", label: "Services Offered" },
        ]}
        primaryCta={{ label: "Book Appointment", href: `/contact?location=${loc.id}` }}
        secondaryCta={{ label: loc.phone, href: `/contact`, tel: loc.phone.replace(/\D/g, '') }}
        note={todayHours ? (todayHours.hours === "Closed" ? "Closed today" : `Open today ${todayHours.hours}`) : "Mon–Fri 8am–6pm · Sat 8am–4pm"}
        breadcrumbs={
          <nav className="flex items-center gap-2 text-sm text-zinc-400">
            <Link href="/locations" className="hover:text-zinc-700 transition-colors">Locations</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-700 font-medium">{loc.city}, {loc.state}</span>
          </nav>
        }
      />

      {/* Info Bar */}
      <section className="bg-primary text-white py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm">
              <Clock className="w-4 h-4 shrink-0" />
              <span className="font-medium">Today ({today}):</span>
              <span>{todayHours?.hours ?? "See full hours below"}</span>
            </div>
            <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="text-lg font-bold hover:underline">{loc.phone}</a>
          </div>
        </div>
      </section>

      {/* Map + Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Map Image */}
            <div className="rounded-3xl overflow-hidden border shadow-sm bg-zinc-200 dark:bg-zinc-800 aspect-[4/3]">
              {loc.mapImage ? (
                <img src={loc.mapImage} alt={`${loc.name} map`} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-8 text-center">
                  <MapPin className="w-16 h-16 text-zinc-400" />
                  <p className="text-zinc-500 font-medium">{loc.address}<br />{loc.city}, {loc.state} {loc.zip}</p>
                  <Button asChild variant="outline" className="rounded-full">
                    <a href={loc.mapUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
                  </Button>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-display mb-6">Location Details</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground">{loc.address}</p>
                      <p className="text-muted-foreground">{loc.city}, {loc.state} {loc.zip}</p>
                      <a href={loc.mapUrl} target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline mt-1 inline-block">Get Directions →</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="text-muted-foreground hover:text-primary transition-colors">{loc.phone}</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div className="w-full">
                      <p className="font-semibold mb-2">Hours</p>
                      <table className="text-sm w-full max-w-xs">
                        <tbody>
                          {loc.hours.map(h => (
                            <tr key={h.day} className={h.day === today ? "font-semibold text-primary" : ""}>
                              <td className="pr-8 py-0.5 text-muted-foreground">{h.day}</td>
                              <td className={h.hours === "Closed" ? "text-red-500" : "font-medium text-foreground"}>{h.hours}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Business Attributes */}
              {loc.attributes.length > 0 && (
                <div className="pt-4 border-t">
                  <p className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">About This Location</p>
                  <div className="flex flex-wrap gap-2">
                    {loc.attributes.map(attr => (
                      <span key={attr} className="flex items-center gap-1.5 bg-primary/8 text-primary border border-primary/20 text-xs font-medium px-3 py-1.5 rounded-full">
                        <BadgeCheck className="w-3.5 h-3.5" />
                        {attr}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t">
                <Button asChild size="lg" className="rounded-full w-full sm:w-auto h-12 px-8">
                  <Link href={`/contact?location=${loc.id}`}>Schedule at This Location</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      {loc.reviews.length > 0 && (
        <section className="py-16 bg-white dark:bg-zinc-900 border-t">
          <div className="container mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <div>
                <h2 className="text-3xl font-bold font-display tracking-tight mb-2">What Customers Say</h2>
                <div className="flex items-center gap-3">
                  <StarRating rating={loc.rating} />
                  <span className="text-2xl font-bold">{loc.rating}</span>
                  <span className="text-muted-foreground">/ 5 &nbsp;·&nbsp; {loc.reviewCount} reviews</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {loc.reviews.map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-zinc-50 dark:bg-zinc-800 rounded-2xl p-6 border relative"
                >
                  <Quote className="w-6 h-6 text-primary/30 mb-3" />
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 italic">"{review.text}"</p>
                  <div className="mt-auto">
                    <StarRating rating={review.rating} />
                    <p className="font-semibold text-sm mt-1">{review.author}</p>
                    <p className="text-xs text-muted-foreground">{review.source}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Highlights */}
      {loc.highlights.length > 0 && (
        <section className="py-10 bg-zinc-50 dark:bg-zinc-950 border-t">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center">
              {loc.highlights.map(h => (
                <div key={h} className="flex items-center gap-2 bg-white dark:bg-zinc-900 border rounded-full px-5 py-2.5 text-sm font-medium shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  {h}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services at this location */}
      <section className="py-16 bg-white dark:bg-zinc-900 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-display tracking-tight mb-4">Services at {loc.city}</h2>
          <p className="text-muted-foreground text-lg mb-12">All of our locations offer the full range of auto repair and tire services.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold font-display text-primary mb-6">Auto Repair Services</h3>
              <ul className="space-y-3">
                {autoServices.map(service => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="flex items-center gap-3 group hover:text-primary transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">{service.name}</span>
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold font-display text-primary mb-6">Tire Services</h3>
              <ul className="space-y-3">
                {tireServices.map(service => (
                  <li key={service.slug}>
                    <Link href={`/services/${service.slug}`} className="flex items-center gap-3 group hover:text-primary transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-medium">{service.name}</span>
                      <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/tires" className="flex items-center gap-3 group hover:text-primary transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">New &amp; Used Tires</span>
                    <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Other Locations */}
      <section className="py-16 bg-zinc-950 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold font-display mb-8">Other Locations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.filter(l => l.id !== loc.id).map(other => (
              <Link key={other.id} href={`/locations/${other.id}`} className="group bg-zinc-900 rounded-xl p-4 border border-zinc-800 hover:border-primary/40 transition-all block">
                <p className="font-bold font-display group-hover:text-primary transition-colors mb-1">{other.city}</p>
                <div className="flex items-center gap-1.5 mb-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-zinc-300">{other.rating}</span>
                </div>
                <p className="text-sm text-zinc-400">{other.phone}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
