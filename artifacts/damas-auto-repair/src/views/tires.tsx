"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, HelpCircle, ShieldCheck, Star } from "lucide-react";
import { business, services } from "@/lib/data";
import { PageHero } from "@/components/layout/page-hero";

export default function Tires() {
  const tireServices = services.filter((s) => s.category === "Tire and Wheel");

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <PageHero
        category="Tires"
        title="Tires in Chantilly, VA"
        description="Ask Damas Auto Repair about tire availability, tire installation support, rotation, balancing, and tire-related maintenance."
        image="/images/damas/shop-lift.webp"
        imageAlt="Vehicle raised on a lift for tire service"
        stats={[
          { val: "Tire", label: "Service" },
          { val: "Wheel", label: "Balancing" },
          { val: "Local", label: "Chantilly Shop" },
        ]}
        primaryCta={{ label: "Request Tire Service", href: "/contact" }}
        secondaryCta={{ label: "Get Directions", href: business.mapUrl }}
        note="Contact the shop to confirm current tire availability"
      />

      <section className="py-16 border-b bg-white dark:bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold font-display tracking-tight mb-4">
              Tire Help at Damas Auto Repair
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Tires affect ride quality, braking, traction, fuel economy, and steering feel. Damas Auto Repair helps Chantilly drivers with tire rotation, balancing, tire condition checks, and tire-related repair guidance.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              If your vehicle vibrates at speed, pulls, has uneven tread wear, or needs tire service before a trip, request service at our shop at {business.address}, {business.city}, {business.state} {business.zip}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-display text-primary">Tire Availability</h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Contact Damas Auto Repair to ask about tire options for your vehicle size, driving needs, and budget. Availability can vary by size and brand.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Passenger cars, SUVs, trucks, and vans",
                  "Tire condition checks",
                  "Tire replacement guidance",
                  "Installation support when available",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="rounded-full w-full">
                <Link href="/contact">Ask About Tires</Link>
              </Button>
            </div>

            <div className="bg-white dark:bg-zinc-900 p-8 rounded-3xl border shadow-sm flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-3xl font-bold font-display text-primary">Tire Maintenance</h2>
              </div>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                Rotation and balancing help extend tire life, reduce vibration, and keep the vehicle tracking properly.
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {[
                  "Tire rotation",
                  "Wheel balancing",
                  "Tread wear review",
                  "Tire pressure check when applicable",
                  "Alignment and suspension recommendations when needed",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="rounded-full w-full">
                <Link href="/tire-services">View Tire Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-zinc-900 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-display text-center tracking-tight mb-4">
            Tire Services
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tire care and wheel services available through Damas Auto Repair in Chantilly.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tireServices.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`}>
                <div className="bg-white dark:bg-zinc-800 rounded-2xl border shadow-sm hover:border-primary/40 hover:shadow-md transition-all group cursor-pointer overflow-hidden">
                  <div className="h-40 overflow-hidden bg-zinc-200 dark:bg-zinc-700">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold font-display group-hover:text-primary transition-colors leading-tight">{service.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.shortDescription}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <HelpCircle className="w-7 h-7 text-primary shrink-0" />
              <h2 className="text-3xl font-bold font-display tracking-tight">
                Tire Questions
              </h2>
            </div>
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border shadow-sm p-6">
              <p className="text-muted-foreground leading-relaxed">
                If you are unsure whether your tires need replacement, rotation, balancing, or alignment service, send your vehicle details through the contact form and include your tire size if available.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight mb-4">
            Need Tire Service in Chantilly?
          </h2>
          <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto">
            Request service at Damas Auto Repair on Pleasant Valley Road.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full h-14 px-10 text-base font-semibold">
              <Link href="/contact">Request Tire Service</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-10 text-base bg-transparent border-zinc-600 text-white hover:bg-zinc-800">
              <a href={business.mapUrl} target="_blank" rel="noreferrer">Get Directions</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
