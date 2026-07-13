"use client";
import { business, specials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tag } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";

export default function Specials() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <PageHero
        category="Service Requests"
        title={<>Damas<br />Auto Repair</>}
        description="Common service requests at Damas Auto Repair. Contact the Chantilly shop to confirm current pricing and availability."
        image="/images/damas/undercar-service.webp"
        imageAlt="Mechanic servicing the underside of a vehicle"
        stats={[
          { val: "Chantilly", label: "VA" },
          { val: "Auto", label: "Repair" },
          { val: "Call", label: "For Pricing" },
        ]}
        primaryCta={{ label: "Request Service", href: "/contact" }}
        secondaryCta={{ label: "Get Directions", href: business.mapUrl }}
        note="Contact the shop to confirm current pricing and availability"
      />
      <div className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specials.map((special, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={special.id}
                className="bg-white dark:bg-zinc-900 rounded-3xl p-8 border shadow-sm relative overflow-hidden flex flex-col"
                data-testid={`card-special-${special.id}`}
              >
                <div className="absolute top-0 right-0 p-4 opacity-5">
                  <Tag className="w-24 h-24 text-primary" />
                </div>
                <div className="relative z-10 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold font-display mb-2">{special.title}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{special.price}</span>
                  </div>
                  <p className="text-muted-foreground mb-8 flex-1">{special.description}</p>

                  <div className="space-y-4 mt-auto">
                    <p className="text-xs font-medium text-muted-foreground italic">
                      Please contact Damas Auto Repair to confirm current pricing.
                    </p>
                    <Button asChild className="w-full rounded-full" size="lg">
                      <Link href="/contact">Request Service</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
