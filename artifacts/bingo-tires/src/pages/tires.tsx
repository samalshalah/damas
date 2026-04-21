import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { CheckCircle2, ShieldCheck, CircleDot } from "lucide-react";
import { services } from "@/lib/data";

export default function Tires() {
  const tireServices = services.filter(s => s.category === "Tire and Wheel");

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      {/* Hero */}
      <section className="bg-zinc-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <CircleDot className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">New & Used Tires</h1>
          <p className="text-xl text-zinc-300 mb-8">
            Extensive inventory of top brands and budget-friendly options to keep you safe on the road.
          </p>
          <Button asChild size="lg" className="rounded-full h-14 px-8 text-base">
            <Link href="/contact">Request a Quote</Link>
          </Button>
        </div>
      </section>

      {/* Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border shadow-sm">
              <h2 className="text-3xl font-bold font-display mb-4 text-primary">New Tires</h2>
              <p className="text-muted-foreground mb-6 text-lg">We carry all major brands for cars, trucks, and SUVs. Finding the right tire for your driving needs and budget is our specialty.</p>
              <ul className="space-y-3 mb-8">
                {["Michelin", "Goodyear", "Bridgestone", "Continental", "Pirelli", "Firestone"].map((brand) => (
                  <li key={brand} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium">{brand}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border shadow-sm">
              <h2 className="text-3xl font-bold font-display mb-4 text-primary">Used Tires</h2>
              <p className="text-muted-foreground mb-6 text-lg">Quality inspected used tires offer a budget-friendly alternative without compromising on safety. Inventory changes daily.</p>
              <ul className="space-y-3 mb-8">
                {[
                  "Strict safety inspection",
                  "Verified tread depth",
                  "Pressure tested",
                  "Budget friendly",
                  "Single, pairs, or sets",
                  "Fast installation"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="py-20 bg-white dark:bg-zinc-900 border-y">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <ShieldCheck className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold font-display tracking-tight mb-6">Why Buy Tires Here?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We don't just sell tires; we ensure they perform correctly. Every new tire installation includes precise computer balancing and a thorough inspection of your wheels and suspension components.
          </p>
        </div>
      </section>

      {/* Tire Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-center tracking-tight mb-12">Comprehensive Tire Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tireServices.map((service) => (
              <div key={service.slug} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold font-display mb-2">{service.name}</h3>
                <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
