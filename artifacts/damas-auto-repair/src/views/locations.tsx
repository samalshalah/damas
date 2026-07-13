"use client";
import Link from "next/link";
import { business, locations } from "@/lib/data";
import { Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/layout/page-hero";

export default function Locations() {
  const loc = locations[0];
  const encodedAddress = encodeURIComponent(`${loc.address}, ${loc.city}, ${loc.state} ${loc.zip}`);
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodedAddress}&output=embed&z=15`;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <PageHero
        category="Location"
        title={<>Damas Auto Repair<br />in Chantilly, VA</>}
        description={`${loc.address}, ${loc.city}, ${loc.state} ${loc.zip}`}
        image="/images/img_630x421_carwork.jpg"
        imageAlt="Damas Auto Repair location"
        stats={[
          { val: "1", label: "Chantilly Shop" },
          { val: "Auto", label: "Repair" },
          { val: "Local", label: "Service" },
        ]}
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "Get Directions", href: business.mapUrl }}
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="rounded-3xl overflow-hidden border shadow-sm aspect-[4/3] bg-zinc-200">
              <iframe
                title="Map of Damas Auto Repair in Chantilly"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 shadow-sm border">
              <h2 className="text-3xl font-bold font-display mb-6">{loc.name}</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">{loc.address}</p>
                    <p className="text-muted-foreground">{loc.city}, {loc.state} {loc.zip}</p>
                    <a href={business.mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-2">
                      Open in Google Maps <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium mb-2">Hours</p>
                    <p className="text-muted-foreground">Please contact the shop for current hours and appointment availability.</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button asChild size="lg" className="rounded-full">
                  <Link href="/contact">Request Service</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href={business.mapUrl} target="_blank" rel="noreferrer">Get Directions</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
