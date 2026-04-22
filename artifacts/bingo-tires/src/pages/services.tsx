import { services } from "@/lib/data";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/page-hero";

export default function Services() {
  const autoServices = services.filter(s => s.category === "Auto Services");
  const tireServices = services.filter(s => s.category === "Tire and Wheel");

  return (
    <div className="bg-zinc-50 dark:bg-zinc-950 min-h-screen">
      <PageHero
        category="Services"
        title={<>All Repair &amp;<br />Tire Services</>}
        description="Expert repair and maintenance for all makes and models. 14 services across 5 Northern Virginia locations."
        image="/images/2218_sm.jpg"
        imageAlt="Auto repair services"
        stats={[
          { val: "5", label: "Locations" },
          { val: "20+", label: "Years Experience" },
          { val: "Same Day", label: "Most Repairs" },
        ]}
        primaryCta={{ label: "Book an Appointment", href: "/contact" }}
        secondaryCta={{ label: "Find a Location", href: "/locations" }}
      />
      <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">

        <div className="mb-20">
          <h2 className="text-3xl font-bold font-display mb-10 flex items-center gap-4">
            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
            Auto Repair & Maintenance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {autoServices.map((service, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                key={service.slug}
              >
                <Link 
                  href={`/services/${service.slug}`}
                  className="block group bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all h-full overflow-hidden"
                  data-testid={`card-service-${service.slug}`}
                >
                  <div className="h-40 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold font-display group-hover:text-primary transition-colors leading-tight">{service.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.shortDescription}</p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold font-display mb-10 flex items-center gap-4">
            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
            Tire & Wheel Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {tireServices.map((service, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                key={service.slug}
              >
                <Link 
                  href={`/services/${service.slug}`}
                  className="block group bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-border/50 hover:shadow-md hover:border-primary/30 transition-all h-full overflow-hidden"
                  data-testid={`card-service-${service.slug}`}
                >
                  <div className="h-40 overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        <service.icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold font-display group-hover:text-primary transition-colors leading-tight">{service.name}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{service.shortDescription}</p>
                    <div className="flex items-center text-primary font-medium text-sm">
                      Details <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      </div>
    </div>
  );
}
