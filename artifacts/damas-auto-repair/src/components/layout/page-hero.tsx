"use client";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface Stat {
  val: string;
  label: string;
}

interface PageHeroProps {
  category?: string;
  title: ReactNode;
  description: string;
  image: string;
  imageAlt?: string;
  stats?: Stat[];
  primaryCta?: { label: string; href: string; icon?: ReactNode };
  secondaryCta?: { label: string; href: string; tel?: string };
  note?: string;
  breadcrumbs?: ReactNode;
}

export function PageHero({
  category,
  title,
  description,
  image,
  imageAlt = "",
  stats,
  primaryCta,
  secondaryCta,
  note,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="bg-white border-b overflow-hidden">
      <div className="relative min-h-[600px] md:h-[590px] flex items-stretch">
        {/* Right image with gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-full md:w-[58%]">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          {/* Mobile: dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-black/55 md:hidden" />
          {/* Desktop: gradient fade from white on left, subtle top/bottom */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white via-white/25 to-transparent" />
          <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
        </div>

        {/* Left text */}
        <div className="relative z-10 w-full container mx-auto px-4">
          <div className="w-full md:w-[50%] min-h-[600px] md:h-[590px] pt-28 pb-14 md:pt-28 md:pb-16 flex flex-col justify-center">
            {breadcrumbs && (
              <div className="mb-5 text-sm text-zinc-300 md:text-zinc-400">{breadcrumbs}</div>
            )}

            {category && (
              <div className="inline-flex w-fit items-center bg-primary text-white rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide mb-6 shadow-md shadow-red-900/15">
                {category}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-black text-white md:text-zinc-900 leading-tight tracking-tight mb-4">
              {title}
            </h1>

            <p className="text-zinc-200 md:text-zinc-600 text-lg leading-relaxed mb-8 max-w-lg">
              {description}
            </p>

            {stats && stats.length > 0 && (
              <div className="flex gap-8 mb-8">
                {stats.map(s => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-white md:text-zinc-900">{s.val}</div>
                    <div className="text-xs text-zinc-300 md:text-zinc-500 font-medium mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            )}

            {(primaryCta || secondaryCta) && (
              <div className="flex flex-wrap items-center gap-4">
                {primaryCta && (
                  <Button asChild size="lg" className="rounded-full h-12 px-7 text-sm font-bold shadow-lg shadow-red-900/20">
                    <Link href={primaryCta.href}>
                      {primaryCta.icon && <span className="mr-2">{primaryCta.icon}</span>}
                      {primaryCta.label}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
                {secondaryCta && (
                  <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 text-sm border-white text-white bg-transparent hover:bg-white/10 md:border-zinc-300 md:text-zinc-800 md:bg-white md:hover:bg-zinc-50">
                    {secondaryCta.tel ? (
                      <a href={`tel:${secondaryCta.tel}`}>{secondaryCta.label}</a>
                    ) : (
                      <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
                    )}
                  </Button>
                )}
              </div>
            )}

            {note && (
              <div className="flex items-center gap-2 mt-8 pt-6 border-t border-white/20 md:border-zinc-100">
                <Clock className="w-4 h-4 text-zinc-300 md:text-zinc-400 shrink-0" />
                <span className="text-xs text-zinc-300 md:text-zinc-500">{note}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
