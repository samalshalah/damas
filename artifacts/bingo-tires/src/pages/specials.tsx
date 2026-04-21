import { specials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Tag, Calendar } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";

export default function Specials() {
  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <PageHero
        category="Current Deals"
        title={<>Bingo<br />Specials</>}
        description="Exceptional deals for our valued customers. Mention these offers when you call or book online. Pricing may vary — call to confirm."
        image="/images/2218_sm.jpg"
        imageAlt="Auto service specials"
        stats={[
          { val: "7", label: "Active Deals" },
          { val: "$69.99", label: "Oil Change" },
          { val: "Free", label: "Alignment Check" },
        ]}
        primaryCta={{ label: "Book & Save", href: "/contact" }}
        secondaryCta={{ label: "Find a Location", href: "/locations" }}
        note="Call to confirm current pricing · Offers subject to change"
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
                  {special.originalPrice && (
                    <span className="text-lg text-muted-foreground line-through">{special.originalPrice}</span>
                  )}
                </div>
                <p className="text-muted-foreground mb-8 flex-1">{special.description}</p>
                
                <div className="space-y-4 mt-auto">
                  <p className="text-xs font-medium text-muted-foreground italic">
                    * Please call to confirm current pricing as offers may change.
                  </p>
                  <Button asChild className="w-full rounded-full" size="lg">
                    <Link href="/contact">Claim Offer</Link>
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
