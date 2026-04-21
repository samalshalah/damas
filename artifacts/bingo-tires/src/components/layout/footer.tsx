import { Link } from "wouter";
import { locations, services } from "@/lib/data";
import { Phone, MapPin, Clock, ExternalLink } from "lucide-react";

export function Footer() {
  const autoServices = services.filter(s => s.category === "Auto Services");
  const tireServices = services.filter(s => s.category === "Tire and Wheel");

  return (
    <footer className="bg-zinc-950 text-zinc-300 border-t border-zinc-800">

      {/* Main grid */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand + Hours */}
          <div className="space-y-6">
            <div>
              <img
                src="/images/bingo-logo-new.png"
                alt="Bingo Tire & Auto Service"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-zinc-400 leading-relaxed text-sm">
              Since 2004, we've offered a full range of Tire and Auto Repair services for car owners in Northern Virginia. Trusted, professional, and reliable.
            </p>
            <div className="space-y-3">
              <h4 className="text-white font-semibold flex items-center gap-2 text-sm">
                <Clock className="w-4 h-4 text-primary" />
                Hours of Operation
              </h4>
              <ul className="text-sm space-y-1.5 text-zinc-400">
                <li className="flex justify-between gap-4">
                  <span>Mon – Fri</span>
                  <span className="text-white">8:00 AM – 6:00 PM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Saturday</span>
                  <span className="text-white">8:00 AM – 4:00 PM</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span>Sunday</span>
                  <span className="text-primary font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-base font-bold font-display text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/auto-services", label: "Auto Services" },
                { href: "/tire-services", label: "Tire Services" },
                { href: "/tires", label: "New & Used Tires" },
                { href: "/locations", label: "Locations" },
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
            </ul>
          </div>

          {/* Auto Services */}
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

          {/* Tire Services */}
          <div className="space-y-6">
            <h4 className="text-base font-bold font-display text-white">Tire Services</h4>
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
              <Link
                href="/tires"
                className="text-sm text-zinc-400 hover:text-primary transition-colors"
              >
                New &amp; Used Tires
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Locations horizontal strip */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-10">
          <h4 className="text-base font-bold font-display text-white mb-8 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            Our 5 Locations
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {locations.map((loc) => {
              const monEntry = loc.hours.find(h => h.day === "Monday");
              const satEntry = loc.hours.find(h => h.day === "Saturday");
              const sunEntry = loc.hours.find(h => h.day === "Sunday");
              return (
                <div key={loc.id} className="space-y-2.5">
                  <h5 className="text-sm font-bold text-white">{loc.name}</h5>
                  <a
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-start gap-1.5 text-xs text-zinc-400 hover:text-primary transition-colors group"
                  >
                    <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                    <span>{loc.address}, {loc.city}, {loc.state} {loc.zip}</span>
                    <ExternalLink className="w-3 h-3 mt-0.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={`tel:${loc.phone.replace(/\D/g, "")}`}
                    className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-primary transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 shrink-0" />
                    {loc.phone}
                  </a>
                  <div className="flex items-start gap-1.5 text-xs text-zinc-500">
                    <Clock className="w-3.5 h-3.5 mt-0.5 shrink-0 text-zinc-600" />
                    <div className="space-y-0.5">
                      {monEntry && (
                        <div><span className="text-zinc-500">Mon–Fri</span> <span className="text-zinc-300">{monEntry.hours}</span></div>
                      )}
                      {satEntry && (
                        <div><span className="text-zinc-500">Sat</span> <span className={satEntry.hours === "Closed" ? "text-primary" : "text-zinc-300"}>{satEntry.hours}</span></div>
                      )}
                      {sunEntry && (
                        <div><span className="text-zinc-500">Sun</span> <span className={sunEntry.hours === "Closed" ? "text-primary" : "text-zinc-300"}>{sunEntry.hours}</span></div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-zinc-800">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-500">
            &copy; {new Date().getFullYear()} Bingo Tire and Auto Service. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600">
            Serving Springfield · Woodbridge · Alexandria · Centreville · Winchester
          </p>
        </div>
      </div>

    </footer>
  );
}
