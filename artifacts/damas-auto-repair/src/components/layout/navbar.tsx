"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ChevronDown, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { business, services, locations } from "@/lib/data";

const autoServices = services.filter(s => s.category === "Auto Services");
const tireServices = services.filter(s => s.category === "Tire and Wheel");

const phoneLocations = locations;

function PhoneDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <Button
        onClick={() => setOpen(o => !o)}
        className="hidden lg:flex font-semibold text-sm h-10 px-5 shadow-sm rounded-full shrink-0"
        data-testid="button-nav-call"
      >
        <Phone className="w-4 h-4 mr-2" />
        Directions
        <ChevronDown className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </Button>
      {open && (
        <div className="absolute right-0 top-full mt-2 w-64 bg-white rounded-xl shadow-xl border border-border/60 py-2 z-50">
          <p className="px-4 py-1.5 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Visit Our Chantilly Shop</p>
          {phoneLocations.map(loc => (
            <a
              key={loc.id}
              href={loc.mapUrl}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between px-4 py-2.5 hover:bg-zinc-50 transition-colors group"
            >
              <span className="flex items-center gap-2 text-sm font-medium text-zinc-800 group-hover:text-primary">
                <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                {loc.city}
              </span>
              <span className="text-sm text-zinc-500 group-hover:text-primary font-medium">Directions</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

function DropdownMenu({ children, items }: { children: React.ReactNode; items: { href: string; label: string; sublabel?: string }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  }

  function handleMouseLeave() {
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  }

  return (
    <div className="relative" ref={ref} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      >
        {children}
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-60 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-border/50 py-2 z-50">
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block px-4 py-2.5 hover:bg-primary/5 hover:text-primary transition-colors"
            >
              <span className="text-sm font-medium">{item.label}</span>
              {item.sublabel && <span className="block text-xs text-muted-foreground mt-0.5">{item.sublabel}</span>}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const location = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  const autoServiceItems = [
    { href: "/auto-services", label: "All Auto Services" },
    ...autoServices.map(s => ({ href: `/services/${s.slug}`, label: s.name })),
  ];

  const tireServiceItems = [
    { href: "/tire-services", label: "All Tire Services" },
    ...tireServices.map(s => ({ href: `/services/${s.slug}`, label: s.name })),
  ];

  const locationItems = [
            { href: "/locations", label: "Location" },
    ...locations.map(l => ({ href: `/locations/${l.id}`, label: l.city, sublabel: l.phone })),
  ];

  const isActive = (path: string) => location === path || location.startsWith(path + "/");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" data-testid="link-home-logo">
          <span className="leading-tight">
            <span className="block text-xl font-black font-display text-zinc-950 tracking-tight">{business.name}</span>
            <span className="block text-xs font-semibold uppercase tracking-wide text-primary">{business.city}, {business.state}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-muted-foreground"}`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/about") ? "text-primary" : "text-muted-foreground"}`}
          >
            About Us
          </Link>

          <DropdownMenu items={autoServiceItems}>
            <span className={isActive("/auto-services") || location.includes("/services/") ? "text-primary" : ""}>
              Auto Services
            </span>
          </DropdownMenu>

          <DropdownMenu items={tireServiceItems}>
            <span className={isActive("/tire-services") || isActive("/tires") ? "text-primary" : ""}>
              Tires & Wheels
            </span>
          </DropdownMenu>

          <Link
            href="/tires"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/tires") ? "text-primary" : "text-muted-foreground"}`}
          >
            Tires
          </Link>

          <DropdownMenu items={locationItems}>
            <span className={isActive("/locations") ? "text-primary" : ""}>
              Location
            </span>
          </DropdownMenu>

          <Link
            href="/specials"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/specials") ? "text-primary" : "text-muted-foreground"}`}
          >
            Specials
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/contact") ? "text-primary" : "text-muted-foreground"}`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Call Button */}
        <PhoneDropdown />

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-white dark:bg-zinc-950 px-4 py-4 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col gap-1">
            {/* Home */}
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md text-base font-medium hover:bg-muted transition-colors" data-testid="link-mobile-nav-home">
              Home
            </Link>

            {/* About Us */}
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md text-base font-medium hover:bg-muted transition-colors" data-testid="link-mobile-nav-about">
              About Us
            </Link>

            {/* Auto Services */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium hover:bg-muted transition-colors"
                onClick={() => setMobileExpanded(mobileExpanded === "auto" ? null : "auto")}
              >
                Auto Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "auto" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "auto" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  <Link href="/auto-services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-semibold text-primary hover:bg-primary/5">All Auto Services</Link>
                  {autoServices.map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm hover:bg-muted">{s.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tire Services */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium hover:bg-muted transition-colors"
                onClick={() => setMobileExpanded(mobileExpanded === "tire" ? null : "tire")}
              >
                Tires & Wheels <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "tire" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "tire" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  <Link href="/tire-services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-semibold text-primary hover:bg-primary/5">All Tire Services</Link>
                  {tireServices.map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm hover:bg-muted">{s.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* New & Used Tires */}
            <Link href="/tires" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md text-base font-medium hover:bg-muted transition-colors">
              Tires
            </Link>

            {/* Locations */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium hover:bg-muted transition-colors"
                onClick={() => setMobileExpanded(mobileExpanded === "locations" ? null : "locations")}
              >
                Location <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "locations" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "locations" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  <Link href="/locations" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-semibold text-primary hover:bg-primary/5">Location</Link>
                  {locations.map(l => (
                    <Link key={l.id} href={`/locations/${l.id}`} onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md hover:bg-muted">
                      <span className="flex items-center gap-2 text-sm">
                        <MapPin className="w-3 h-3 text-primary shrink-0" />
                        {l.city} — {l.phone}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/specials" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md text-base font-medium hover:bg-muted transition-colors">
              Specials
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-3 rounded-md text-base font-medium hover:bg-muted transition-colors">
              Contact Us
            </Link>
          </nav>
          <div className="pt-4 border-t mt-4">
            <p className="px-4 pb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Visit Our Chantilly Shop</p>
            {phoneLocations.map(loc => (
              <a
                key={loc.id}
                href={loc.mapUrl}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between px-4 py-2.5 rounded-md hover:bg-muted transition-colors"
              >
                <span className="flex items-center gap-2 text-sm font-medium text-zinc-800">
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  {loc.city}
                </span>
                <span className="text-sm text-primary font-semibold">Directions</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
