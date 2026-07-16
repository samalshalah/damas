"use client";
import Link from "next/link";
import { business, services } from "@/lib/data";
import { Clock, ExternalLink, MapPin } from "lucide-react";

export function Footer() {
  const autoServices = services.filter((s) => s.category === "Auto Services");
  const tireServices = services.filter((s) => s.category === "Tire and Wheel");

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="inline-flex">
              <img
                src="/images/brand/damas-logo-dark.webp"
                alt={business.name}
                className="h-14 w-auto max-w-[240px] object-contain"
              />
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Local auto repair, diagnostics, maintenance, brakes, exhaust, tune ups, timing service, and tire care at {business.address}, {business.city}, {business.state} {business.zip}.
            </p>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Looking for vehicle sales? Visit {business.dealershipName}, located at the same address.
            </p>
            <div className="space-y-3">
              <h4 className="text-white font-semibold flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                Hours of Operation
              </h4>
              <ul className="text-sm space-y-1.5 text-zinc-400">
                <li className="flex justify-between gap-4">
                  <span>Mon - Fri</span>
                  <span className="text-white">Call for hours</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span className="text-white">Call for hours</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="text-primary font-medium">Call for hours</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-base font-bold font-display text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/auto-services", label: "Auto Services" },
                { href: "/tire-services", label: "Tires & Wheels" },
                { href: "/locations", label: "Location" },
                { href: "/specials", label: "Specials" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-primary transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={business.dealershipUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-primary transition-colors"
                  data-testid="link-footer-dealership"
                >
                  Dealership
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-base font-bold font-display text-white">Auto Services</h4>
            <ul className="space-y-2.5">
              {autoServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-zinc-400 hover:text-primary transition-colors"
                    data-testid={`link-footer-service-${service.slug}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-base font-bold font-display text-white">Tires & Wheels</h4>
            <ul className="space-y-2.5">
              {tireServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-zinc-400 hover:text-primary transition-colors"
                    data-testid={`link-footer-tire-${service.slug}`}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="pt-2 border-t border-zinc-800">
              <a
                href={business.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-primary transition-colors"
              >
                <MapPin className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Serving Chantilly, South Riding, Centreville, Herndon, Fairfax, and nearby Northern Virginia drivers
          </p>
        </div>
      </div>
    </footer>
  );
}
