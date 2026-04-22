import { useRoute, Link } from "wouter";
import { services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Calendar, CheckCircle2, ChevronRight, ChevronDown, ChevronUp, MapPin, Info, Building2 } from "lucide-react";
import NotFound from "@/pages/not-found";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageHero } from "@/components/layout/page-hero";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-primary transition-colors"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <h3 className="font-semibold text-sm sm:text-base leading-snug">{question}</h3>
        {open
          ? <ChevronUp className="w-5 h-5 shrink-0 text-primary" />
          : <ChevronDown className="w-5 h-5 shrink-0 text-muted-foreground" />
        }
      </button>
      {open && (
        <div className="pb-5 text-muted-foreground leading-relaxed text-sm pr-8">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function ServiceDetail() {
  const [, params] = useRoute("/services/:slug");
  const slug = params?.slug;
  const service = services.find(s => s.slug === slug);

  if (!service) return <NotFound />;

  const autoServices = services.filter(s => s.category === "Auto Services" && s.slug !== service.slug).slice(0, 4);
  const tireServices = services.filter(s => s.category === "Tire and Wheel" && s.slug !== service.slug).slice(0, 4);
  const related = service.category === "Auto Services" ? autoServices : tireServices;

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">

      <PageHero
        category={service.category}
        title={service.seoTitle || service.name}
        description={service.seoDescription}
        image={service.image}
        imageAlt={service.name}
        stats={[
          { val: "20+", label: "Years Experience" },
          { val: "5", label: "Locations" },
          { val: "All", label: "Makes & Models" },
        ]}
        primaryCta={{ label: "Book This Service", href: `/contact?service=${service.slug}` }}
        secondaryCta={{ label: "Find a Location", href: "/locations" }}
        breadcrumbs={
          <nav className="flex items-center gap-2 text-sm text-zinc-400">
            <Link href="/" className="hover:text-zinc-700 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href={service.category === "Auto Services" ? "/auto-services" : "/tire-services"} className="hover:text-zinc-700 transition-colors">
              {service.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-700 font-medium">{service.name}</span>
          </nav>
        }
      />

      {service.availableAt && (
        <div className="bg-amber-50 border-b border-amber-100">
          <div className="container mx-auto px-4 py-3 flex items-center gap-2.5 text-sm text-amber-700 font-medium">
            <Info className="w-4 h-4 shrink-0" />
            This service is available at {service.availableAt.join(" & ")} locations only.
          </div>
        </div>
      )}

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left column: main content */}
            <div className="lg:col-span-2 space-y-12">

              {/* About this service */}
              <div>
                <h2 className="text-2xl font-bold font-display tracking-tight mb-4">
                  About {service.name} at Bingo Tire &amp; Auto Service
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                  {service.fullDescription}
                </p>
                {service.bodyParagraphs && service.bodyParagraphs.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>

              {/* Warning Signs */}
              <div className="bg-red-50 dark:bg-red-950/20 rounded-2xl p-8 border border-red-100 dark:border-red-900/30">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold font-display">Signs You May Need This Service</h2>
                </div>
                <ul className="space-y-3">
                  {service.warnings.map((w, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 text-sm"
                    >
                      <span className="w-5 h-5 rounded-full bg-primary text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        {i + 1}
                      </span>
                      <span className="text-foreground">{w}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-2xl font-bold font-display tracking-tight mb-6">
                  What's Included in Our {service.name} Service
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.included.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      className="flex items-start gap-3 bg-white dark:bg-zinc-900 rounded-xl p-4 border shadow-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Serving Northern Virginia */}
              {service.cityContent && (
                <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold font-display">
                      Serving Springfield, Woodbridge, Alexandria, Centreville &amp; Winchester
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5">{service.cityContent}</p>
                  <div className="flex flex-wrap gap-2">
                    {["Springfield", "Woodbridge", "Alexandria", "Centreville", "Winchester"].map(city => {
                      const available = !service.availableAt || service.availableAt.includes(city);
                      return (
                        <span
                          key={city}
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium ${
                            available
                              ? "bg-primary/10 text-primary"
                              : "bg-zinc-200 text-zinc-400 line-through"
                          }`}
                        >
                          <MapPin className="w-3 h-3" />
                          {city}
                        </span>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Why Choose Bingo Tire */}
              {service.whyUs && (
                <div>
                  <h2 className="text-2xl font-bold font-display tracking-tight mb-4">
                    Why Choose Bingo Tire &amp; Auto Service for {service.name}?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">{service.whyUs}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    {[
                      { icon: Calendar, label: "Since 2004", desc: "20+ years serving Northern Virginia" },
                      { icon: CheckCircle2, label: "Honest Estimates", desc: "No pressure, no unnecessary repairs" },
                      { icon: MapPin, label: "5 Locations", desc: "Walk-ins welcome at every shop" },
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center text-center bg-white dark:bg-zinc-900 rounded-xl p-5 border shadow-sm">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="font-semibold text-sm mb-1">{item.label}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ */}
              <div>
                <h2 className="text-2xl font-bold font-display tracking-tight mb-2">
                  Frequently Asked Questions About {service.name}
                </h2>
                <p className="text-muted-foreground mb-6">
                  Common questions about {service.name.toLowerCase()} from our Northern Virginia customers.
                </p>
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border shadow-sm divide-y px-6">
                  {service.faqs.map((faq, i) => (
                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>

            </div>

            {/* Right column: sidebar */}
            <div className="space-y-6">

              {/* Book CTA card */}
              <div className="bg-primary text-white rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold font-display mb-2">Ready to Book?</h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Schedule your {service.name} appointment online or call us — no pressure, free estimates.
                </p>
                <Button asChild size="lg" variant="secondary" className="w-full rounded-full h-12 font-semibold mb-3" data-testid="button-sidebar-book">
                  <Link href={`/contact?service=${service.slug}`}>Book Online</Link>
                </Button>
                <Link href="/locations" className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white transition-colors font-medium">
                  <MapPin className="w-4 h-4" />
                  Find Your Nearest Location
                </Link>
                <div className="mt-5 pt-5 border-t border-white/20 text-xs text-white/70 text-center">
                  5 locations across Northern Virginia
                </div>
              </div>

              {/* Locations */}
              <div className="bg-white dark:bg-zinc-900 rounded-2xl border shadow-sm p-6">
                <h3 className="font-bold font-display mb-1 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  {service.availableAt ? "Available Locations" : "Available At All Locations"}
                </h3>
                {service.availableAt && (
                  <p className="text-xs text-amber-600 dark:text-amber-400 mb-3 font-medium">
                    This service is only offered at select locations.
                  </p>
                )}
                {!service.availableAt && <div className="mb-3" />}
                <ul className="space-y-2 text-sm">
                  {[
                    { name: "Springfield", phone: "(703) 440-0880" },
                    { name: "Woodbridge", phone: "(703) 494-8888" },
                    { name: "Alexandria", phone: "(703) 548-0333" },
                    { name: "Centreville", phone: "(703) 543-6900" },
                    { name: "Winchester", phone: "(540) 667-7777" },
                  ].map(loc => {
                    const available = !service.availableAt || service.availableAt.includes(loc.name);
                    return (
                      <li key={loc.name} className={`flex items-center justify-between gap-2 ${available ? "text-foreground" : "text-muted-foreground/40 line-through"}`}>
                        <span>{loc.name}</span>
                        {available && <span className="text-muted-foreground text-xs">{loc.phone}</span>}
                      </li>
                    );
                  })}
                </ul>
                <Button asChild variant="outline" size="sm" className="w-full mt-4 rounded-full">
                  <Link href="/locations">Find a Location</Link>
                </Button>
              </div>

              {/* Related Services */}
              {related.length > 0 && (
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border shadow-sm p-6">
                  <h3 className="font-bold font-display mb-4">Related Services</h3>
                  <ul className="space-y-2">
                    {related.map(s => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="flex items-center gap-2 text-sm hover:text-primary transition-colors group">
                          <s.icon className="w-4 h-4 text-primary shrink-0" />
                          <span>{s.name}</span>
                          <ChevronRight className="w-3.5 h-3.5 ml-auto text-muted-foreground group-hover:text-primary transition-colors" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight mb-4">
            Trusted {service.name} in Northern Virginia
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Bingo Tire &amp; Auto Service has been serving Northern Virginia since 2004. Walk-ins welcome at all 5 locations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full h-14 px-10 text-base font-semibold">
              <Link href={`/contact?service=${service.slug}`}>Book Online — It's Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-10 text-base bg-transparent border-zinc-600 text-white hover:bg-zinc-800">
              <Link href="/locations">Find My Location</Link>
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
