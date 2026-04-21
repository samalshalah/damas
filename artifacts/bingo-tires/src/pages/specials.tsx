import { specials } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Tag, Calendar } from "lucide-react";

export default function Specials() {
  return (
    <div className="py-16 md:py-24 bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-6">Bingo Specials</h1>
          <p className="text-xl text-muted-foreground">Exceptional deals for our valued customers. Mention these offers when you call or book online.</p>
        </div>

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
  );
}
