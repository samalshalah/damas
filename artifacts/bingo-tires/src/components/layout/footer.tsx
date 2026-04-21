import { Link } from "wouter";
import { locations, services } from "@/lib/data";
import { Phone, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-16 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <img
                src="/images/bingo-logo-new.png"
                alt="Bingo Tire & Auto Service"
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-zinc-400 leading-relaxed">
              Since 2004, we've offered a full range of Tire and Auto Repair services for car owners in NOVA. Trusted, professional, and reliable.
            </p>
            <div className="space-y-3">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" /> 
                Hours
              </h4>
              <ul className="text-sm space-y-1 text-zinc-400">
                <li className="flex justify-between"><span>Mon - Fri:</span> <span className="text-white">8:00 AM - 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday:</span> <span className="text-white">8:00 AM - 4:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span className="text-primary font-medium">Closed</span></li>
              </ul>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display text-white">Our Locations</h4>
            <div className="space-y-6">
              {locations.map((loc) => (
                <div key={loc.id} className="space-y-2">
                  <h5 className="font-semibold text-white">{loc.name}</h5>
                  <a href={loc.mapUrl} target="_blank" rel="noreferrer" className="flex items-start gap-2 text-sm text-zinc-400 hover:text-primary transition-colors group">
                    <MapPin className="w-4 h-4 mt-0.5 shrink-0 group-hover:text-primary" />
                    <span>{loc.address}<br/>{loc.city}, {loc.state} {loc.zip}</span>
                  </a>
                  <a href={`tel:${loc.phone.replace(/\D/g,'')}`} className="flex items-center gap-2 text-sm text-zinc-400 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 shrink-0" />
                    {loc.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display text-white">Quick Links</h4>
            <ul className="space-y-3">
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
                  <Link href={link.href} className="text-sm hover:text-primary transition-colors" data-testid={`link-footer-${link.label.toLowerCase().replace(" ", "-")}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold font-display text-white">Top Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-sm hover:text-primary transition-colors" data-testid={`link-footer-service-${service.slug}`}>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-zinc-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {new Date().getFullYear()} Bingo Tire and Auto Service. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
