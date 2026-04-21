import { Link } from "wouter";
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
      <div className="relative min-h-[480px] flex items-center">
        {/* Right image with gradient fade */}
        <div className="absolute right-0 top-0 bottom-0 w-[58%]">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
        </div>

        {/* Left text */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="w-full md:w-[50%] py-16">
            {breadcrumbs && (
              <div className="mb-5 text-sm text-zinc-400">{breadcrumbs}</div>
            )}

            {category && (
              <div className="inline-flex items-center bg-primary text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-7 shadow-md shadow-red-900/15">
                {category}
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-black text-zinc-900 leading-tight tracking-tight mb-4">
              {title}
            </h1>

            <p className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-lg">
              {description}
            </p>

            {stats && stats.length > 0 && (
              <div className="flex gap-8 mb-8">
                {stats.map(s => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-zinc-900">{s.val}</div>
                    <div className="text-xs text-zinc-500 font-medium mt-0.5">{s.label}</div>
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
                  <Button asChild size="lg" variant="outline" className="rounded-full h-12 px-7 text-sm border-zinc-300">
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
              <div className="flex items-center gap-2 mt-8 pt-6 border-t border-zinc-100">
                <Clock className="w-4 h-4 text-zinc-400 shrink-0" />
                <span className="text-xs text-zinc-500">{note}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
