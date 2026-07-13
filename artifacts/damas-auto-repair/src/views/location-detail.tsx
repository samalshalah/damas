"use client";
import Link from "next/link";
import { business, locations, services } from "@/lib/data";
import { ArrowRight, CheckCircle2, ChevronRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";

export default function LocationDetail({ id }: { id: string }) {
  const loc = locations.find((l) => l.id === id);

  if (!loc) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Location not found</h1>
          <Link href="/locations" className="text-primary underline">Back to location</Link>
        </div>
      </div>
    );
  }

  const encodedAddress = encodeURIComponent(`${loc.address}, ${loc.city}, ${loc.state} ${loc.zip}`);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&output=embed&z=15`;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <PageHero
        category={business.name}
        title={<>{loc.city},<br />{loc.state}</>}
        description={`${loc.address}, ${loc.city}, ${loc.state} ${loc.zip}`}
        image="/images/damas/home-hero.webp"
        imageAlt="Damas Auto Repair Chantilly service bay"
        stats={[
          { val: "Chantilly", label: "Location" },
          { val: "Auto", label: "Repair" },
          { val: "All Makes", label: "& Models" },
        ]}
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "Get Directions", href: business.mapUrl }}
        breadcrumbs={
          <nav className="flex items-center gap-2 text-sm text-zinc-400">
            <Link href="/locations" className="hover:text-zinc-700 transition-colors">Location</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-700 font-medium">{loc.city}, {loc.state}</span>
          </nav>
        }
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="rounded-3xl overflow-hidden border shadow-sm aspect-[4/3]">
              <iframe
                title="Map of Damas Auto Repair Chantilly"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold font-display mb-6">Shop Details</h2>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Address</p>
                      <p className="text-muted-foreground">{loc.address}</p>
                      <p className="text-muted-foreground">{loc.city}, {loc.state} {loc.zip}</p>
                      <a href={loc.mapUrl} target="_blank" rel="noreferrer" className="text-primary text-sm hover:underline mt-1 inline-block">Get Directions</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Hours</p>
                      <p className="text-muted-foreground">Please contact the shop for current hours and service availability.</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t">
                <Button asChild size="lg" className="rounded-full w-full sm:w-auto h-12 px-8">
                  <Link href="/contact">Request Service</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-zinc-900 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold font-display tracking-tight mb-4">Services at Damas Auto Repair</h2>
          <p className="text-muted-foreground text-lg mb-12">Auto repair and maintenance services from our Chantilly shop.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {services.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="flex items-center gap-3 group hover:text-primary transition-colors bg-zinc-50 dark:bg-zinc-800 border rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                <span className="font-medium">{service.name}</span>
                <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
