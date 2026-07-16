"use client";
import Link from "next/link";
import { business, services } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle2, ChevronDown, ChevronRight, ChevronUp, MapPin, Wrench } from "lucide-react";
import NotFound from "@/views/not-found";
import { motion } from "framer-motion";
import { useState } from "react";
import { PageHero } from "@/components/layout/page-hero";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-b-0">
      <button
        className="w-full flex items-center justify-between gap-4 py-5 text-left hover:text-primary transition-colors"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <h3 className="font-semibold text-sm sm:text-base leading-snug">{question}</h3>
        {open ? <ChevronUp className="w-5 h-5 shrink-0 text-primary" /> : <ChevronDown className="w-5 h-5 shrink-0 text-muted-foreground" />}
      </button>
      {open && (
        <div className="pb-5 text-muted-foreground leading-relaxed text-sm pr-8">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function ServiceDetail({ slug }: { slug: string }) {
  const service = services.find((s) => s.slug === slug);

  if (!service) return <NotFound />;

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 6);

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <PageHero
        category={service.category}
        title={service.seoTitle || service.name}
        description={service.seoDescription}
        image={service.image}
        imageAlt={service.name}
        stats={[
          { val: "Chantilly", label: "VA" },
          { val: "Local", label: "Shop" },
          { val: "All", label: "Makes & Models" },
        ]}
        primaryCta={{ label: "Request Appointment", href: `/contact?service=${service.slug}` }}
        secondaryCta={{ label: "Get Directions", href: business.mapUrl }}
        breadcrumbs={
          <nav className="flex items-center gap-2 text-sm text-zinc-400">
            <Link href="/" className="hover:text-zinc-700 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-zinc-700 transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-zinc-700 font-medium">{service.name}</span>
          </nav>
        }
      />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 md:p-8 border shadow-sm">
                <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Common symptoms</p>
                <h2 className="text-2xl font-bold font-display tracking-tight mb-4">
                  Not sure if you need {service.name.toLowerCase()}?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-5">
                  Start with what you are noticing. If any of these sound familiar, request an appointment and the shop can inspect the vehicle before recommending work.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.warnings.slice(0, 4).map((warning) => (
                    <div key={warning} className="flex items-start gap-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 p-4 border">
                      <AlertTriangle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{warning}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="mt-6 rounded-full h-12 px-6 font-semibold">
                  <Link href={`/contact?service=${service.slug}`}>Request Appointment</Link>
                </Button>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-display tracking-tight mb-4">
                  About {service.name} at {business.name}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-5">
                  {service.fullDescription}
                </p>
                {service.bodyParagraphs.map((para, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed mb-4">
                    {para}
                  </p>
                ))}
              </div>

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
                      key={w}
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

              <div>
                <h2 className="text-2xl font-bold font-display tracking-tight mb-6">
                  What's Included
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.included.map((item, i) => (
                    <motion.div
                      key={item}
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

              <div className="bg-zinc-100 dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold font-display">
                    Serving Chantilly and Nearby Northern Virginia
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-5">{service.cityContent}</p>
                <div className="flex flex-wrap gap-2">
                  {["Chantilly", "South Riding", "Centreville", "Herndon", "Fairfax"].map((city) => (
                    <span key={city} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                      <MapPin className="w-3 h-3" />
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-display tracking-tight mb-4">
                  Why Choose {business.name} for {service.name}?
                </h2>
                <p className="text-muted-foreground leading-relaxed">{service.whyUs}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold font-display tracking-tight mb-2">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground mb-6">
                  Common questions about {service.name.toLowerCase()} at our Chantilly shop.
                </p>
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border shadow-sm divide-y px-6">
                  {service.faqs.map((faq) => (
                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-primary text-white rounded-2xl p-6 sticky top-24">
                <h3 className="text-xl font-bold font-display mb-2">Request Service</h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  Tell us what your vehicle needs and our Chantilly shop can help with next steps.
                </p>
                <Button asChild size="lg" variant="secondary" className="w-full rounded-full h-12 font-semibold mb-3" data-testid="button-sidebar-book">
                  <Link href={`/contact?service=${service.slug}`}>Request Appointment</Link>
                </Button>
                <a href={business.mapUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white transition-colors font-medium">
                  <MapPin className="w-4 h-4" />
                  Get Directions
                </a>
                <div className="mt-5 pt-5 border-t border-white/20 text-xs text-white/70 text-center">
                  {business.address}, {business.city}, {business.state} {business.zip}
                </div>
              </div>

              <div className="bg-white dark:bg-zinc-900 rounded-2xl border shadow-sm p-6">
                <h3 className="font-bold font-display mb-4 flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-primary" />
                  Related Services
                </h3>
                <ul className="space-y-2">
                  {related.map((s) => (
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
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold font-display tracking-tight mb-4">
            {service.name} in Chantilly, VA
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Request service at {business.name}, located at {business.address}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full h-14 px-10 text-base font-semibold">
              <Link href={`/contact?service=${service.slug}`}>Request Appointment</Link>
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
