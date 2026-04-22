import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, CheckCircle2, MapPin, Phone, Star, Clock,
  Wrench, CircleDollarSign, Tag, ShieldCheck
} from "lucide-react";
import { services, locations, specials } from "@/lib/data";
import { motion } from "framer-motion";
import { BrandStrip } from "@/components/brand-strip";

const autoServices = services.filter(s => s.category === "Auto Services").slice(0, 4);
const tireServices = services.filter(s => s.category === "Tire and Wheel").slice(0, 4);
const featuredSpecials = specials.slice(0, 3);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* ── Hero ── */}
      <section className="relative bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/bingo-storefront.jpg"
            alt="Bingo Tire & Auto Service storefront"
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-950/20" />
        </div>
        <div className="container mx-auto px-4 py-32 md:py-44 lg:py-52 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary-foreground border border-primary/30 mb-6 text-sm font-medium">
              <Star className="w-4 h-4 fill-primary text-primary" />
              Trusted in Northern Virginia since 2004
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-display leading-tight tracking-tight mb-6">
              Expert Auto Repair &amp; <span className="text-primary">Premium Tires</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed max-w-xl">
              Since 2004, we've offered a full range of tire and auto repair services for car owners in NOVA. Reliable, professional, and neighborhood-friendly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base rounded-full shadow-lg" data-testid="button-hero-book">
                <Link href="/contact">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base rounded-full bg-transparent border-zinc-600 text-white hover:bg-zinc-800" data-testid="button-hero-services">
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Feature Highlights ── */}
      <section className="py-12 bg-white dark:bg-zinc-950 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Experts Since 2004",
              "Friendly, Honest Staff",
              "All Makes and Models",
              "Fast Turnaround Time",
            ].map((feature, i) => (
              <motion.div
                key={i}
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

      <BrandStrip />

      {/* ── Auto Services ── */}
      <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Auto Services</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">Expert Repair &amp; Maintenance</h2>
              <p className="text-muted-foreground mt-2 max-w-lg">ASE-certified technicians handling everything from oil changes to engine diagnostics.</p>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full shrink-0" data-testid="button-auto-view-all">
              <Link href="/auto-services">
                View All Auto Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {autoServices.map((service, i) => (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
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

      {/* ── Tire Services ── */}
      <section className="py-20 md:py-28 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Tire Services</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">Rotation, Balancing &amp; More</h2>
              <p className="text-muted-foreground mt-2 max-w-lg">Keep your tires in top shape with our full range of tire care services.</p>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full shrink-0" data-testid="button-tire-view-all">
              <Link href="/tire-services">
                View All Tire Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="block group bg-zinc-50 dark:bg-zinc-900 rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all h-full overflow-hidden"
                  data-testid={`card-home-tire-${service.slug}`}
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

      {/* ── New & Used Tires ── */}
      <section className="py-20 md:py-28 bg-zinc-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_50%,_#C41E3A_0%,_transparent_60%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">New &amp; Used Tires</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">
                Huge Selection of Tires — In Stock &amp; Ready
              </h2>
              <p className="text-zinc-300 text-lg leading-relaxed">
                We carry new tires from all the major brands — Michelin, Goodyear, BFGoodrich, Cooper, Nexen, and more. Need to save money? We also keep a large inventory of quality used tires at budget-friendly prices.
              </p>
              <ul className="space-y-3">
                {[
                  "40+ brands — new tires in stock",
                  "3,000+ quality used tires available",
                  "Mounting, balancing &amp; disposal included",
                  "Same-day installation for most sizes",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button asChild size="lg" className="rounded-full h-12 px-8" data-testid="button-tires-shop">
                  <Link href="/tires">Shop Tires</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8 border-zinc-600 text-white bg-transparent hover:bg-zinc-800">
                  <Link href="/contact">Get a Quote</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: ShieldCheck, label: "New Tires", desc: "40+ brands in stock" },
                { icon: CircleDollarSign, label: "Used Tires", desc: "Budget-friendly options" },
                { icon: Wrench, label: "Installation", desc: "Mount, balance &amp; dispose" },
                { icon: Tag, label: "Best Prices", desc: "Competitive pricing always" },
              ].map((card, i) => (
                <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-3">
                    <card.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-bold mb-1">{card.label}</p>
                  <p className="text-zinc-400 text-sm" dangerouslySetInnerHTML={{ __html: card.desc }} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Specials ── */}
      <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-2">Current Specials</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">Save on Your Next Visit</h2>
              <p className="text-muted-foreground mt-2">Limited-time deals on our most popular services. Call to confirm availability.</p>
            </div>
            <Button asChild variant="outline" size="lg" className="rounded-full shrink-0" data-testid="button-specials-view-all">
              <Link href="/specials">
                View All Specials <ArrowRight className="w-4 h-4 ml-2" />
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
                    <Link href="/contact">Book This Deal</Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Us ── */}
      <section className="py-20 md:py-28 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src="/images/bingo-storefront.jpg" alt="Bingo Tire storefront" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <p className="text-primary font-semibold text-sm uppercase tracking-wider">About Us</p>
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">Your Trusted Neighborhood Shop Since 2004</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2004, Bingo Tire &amp; Auto Service has been the tire, alignment, and car care center of choice in the Springfield, Woodbridge, Alexandria and Winchester areas. Our expert staff can help with any tire or car repair need.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "We make auto repair more convenient for you",
                  "We get the job done right — the first time",
                  "Proven results for setting exceptional standards",
                  "Same day service for most repairs",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-8" data-testid="button-about-learn-more">
                  <Link href="/about">
                    Learn More About Us <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Locations ── */}
      <section className="py-20 md:py-28 bg-zinc-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-4">Five Convenient Locations</h2>
            <p className="text-zinc-400 text-lg">Serving Northern Virginia from Springfield to Winchester.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {locations.map((loc, i) => {
              const encodedAddress = encodeURIComponent(`${loc.address}, ${loc.city}, ${loc.state} ${loc.zip}`);
              const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&output=embed&z=15`;
              const monEntry = loc.hours.find(h => h.day === "Monday");
              const satEntry = loc.hours.find(h => h.day === "Saturday");
              const sunEntry = loc.hours.find(h => h.day === "Sunday");
              return (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex flex-col hover:border-zinc-600 transition-colors"
                >
                  <div className="h-40 overflow-hidden bg-zinc-800">
                    <iframe
                      title={`Map of Bingo Tire ${loc.city}`}
                      src={mapEmbedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold font-display mb-3">{loc.name}</h3>
                    <div className="space-y-2 mb-4 flex-1">
                      <div className="flex items-start gap-2 text-xs">
                        <MapPin className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-zinc-400 leading-snug">{loc.address}, {loc.city}, {loc.state} {loc.zip}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                        <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="text-zinc-400 hover:text-white transition-colors">{loc.phone}</a>
                      </div>
                      <div className="flex items-start gap-2 text-xs pt-1">
                        <Clock className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <div className="text-zinc-500 space-y-0.5">
                          {monEntry && <div><span className="text-zinc-400">Mon–Fri</span> {monEntry.hours}</div>}
                          {satEntry && <div><span className="text-zinc-400">Sat</span> {satEntry.hours}</div>}
                          {sunEntry && <div><span className={sunEntry.hours === "Closed" ? "text-primary" : "text-zinc-400"}>Sun</span>{" "}<span className={sunEntry.hours === "Closed" ? "text-primary" : ""}>{sunEntry.hours}</span></div>}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-auto">
                      <Button asChild size="sm" className="flex-1 rounded-full h-8 text-xs" variant="secondary">
                        <a href={`tel:${loc.phone.replace(/\D/g,'')}`}>Call</a>
                      </Button>
                      <Button asChild size="sm" className="flex-1 rounded-full h-8 text-xs bg-primary hover:bg-primary/90 text-white">
                        <Link href={`/locations/${loc.id}`}>Details</Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white">
              <Link href="/locations">View All Locations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-6">Make an Appointment Online</h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Skip the phone call. Schedule your next service or repair online and we'll confirm it shortly.
          </p>
          <Button asChild size="lg" variant="secondary" className="h-14 px-10 text-lg rounded-full font-bold shadow-xl hover:scale-105 transition-transform" data-testid="button-cta-book">
            <Link href="/contact">Book Now</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
