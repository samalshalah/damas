import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, MapPin, Phone, Star, Clock } from "lucide-react";
import { services, locations } from "@/lib/data";
import { motion } from "framer-motion";
import { BrandStrip } from "@/components/brand-strip";

export default function Home() {
  const featuredServices = services.slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-zinc-950 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/bingo-storefront.jpg" 
            alt="Bingo Tire & Auto Service storefront" 
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/90 via-zinc-950/60 to-zinc-950/20" />
        </div>
        
        <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
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
              Expert Auto Repair & <span className="text-primary">Premium Tires</span>
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

      {/* Feature Highlights */}
      <section className="py-12 bg-white dark:bg-zinc-950 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Experts Since 2004", 
              "Friendly, Honest Staff", 
              "All Makes and Models", 
              "Fast Turnaround Time"
            ].map((feature, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
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

      {/* Featured Services */}
      <section className="py-20 md:py-28 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight mb-4">Our Featured Services</h2>
            <p className="text-muted-foreground text-lg">Whether you drive a passenger car, medium-sized truck, or SUV, our mechanics ensure your vehicle performs at its best.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={service.slug}
              >
                <Link 
                  href={`/services/${service.slug}`}
                  className="block group bg-white dark:bg-zinc-950 rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all h-full overflow-hidden"
                  data-testid={`card-home-service-${service.slug}`}
                >
                  <div className="h-48 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <service.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-bold font-display group-hover:text-primary transition-colors leading-tight">{service.name}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm mb-5">{service.shortDescription}</p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/services">View All 14 Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 md:py-28 bg-white dark:bg-zinc-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <div className="aspect-square rounded-3xl bg-zinc-100 dark:bg-zinc-900 overflow-hidden relative border">
                <img src="/images/2218_sm.jpg" alt="Mechanic working on vehicle" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display tracking-tight">Your Trusted Neighborhood Shop</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We offer a full range of garage services to vehicle owners in Northern Virginia. Our professionals know how to handle a wide range of car services. Whether you drive a passenger car, medium sized truck, or SUV, our mechanics strive to ensure that your vehicle will be performing at its best before leaving our shop.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A well-established, trustworthy neighborhood shop that has been around 20+ years. Solid, professional, reliable — not a big chain. Customers know the owner by name.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "ASE Certified Technicians",
                  "State-of-the-art Diagnostic Equipment",
                  "Honest Pricing & Transparent Estimates",
                  "Comfortable Waiting Area with Wi-Fi"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Locations */}
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
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  key={loc.id}
                  className="bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 flex flex-col hover:border-zinc-600 transition-colors"
                >
                  {/* Google Map */}
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

                  {/* Content */}
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

      {/* CTA Banner */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
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
