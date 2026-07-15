"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarCheck, MapPinned, Phone, Menu, X, ChevronDown, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { business, services, locations } from "@/lib/data";

const autoServices = services.filter(s => s.category === "Auto Services");
const tireServices = services.filter(s => s.category === "Tire and Wheel");

const phoneLocations = locations;

function getCallHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 ? `tel:${digits}` : "/contact";
}

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

function DropdownMenu({
  children,
  items,
  dark = false,
}: {
  children: React.ReactNode;
  items: { href: string; label: string; sublabel?: string }[];
  dark?: boolean;
}) {
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
        className={`flex items-center gap-1 text-sm font-medium transition-colors ${
          dark ? "text-zinc-200 hover:text-white" : "text-muted-foreground hover:text-primary"
        }`}
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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 12);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
  const mobileCallHref = getCallHref(locations[0]?.phone ?? "");
  const navLinkClass = (active: boolean) =>
    `text-sm font-medium transition-colors ${
      active
        ? isScrolled
          ? "text-white"
          : "text-primary"
        : isScrolled
          ? "text-zinc-200 hover:text-white"
          : "text-muted-foreground hover:text-primary"
    }`;

  return (
    <header
      className="sticky top-0 z-50 w-full px-3 py-3"
    >
      <div
        className={`container mx-auto px-5 h-28 flex items-center justify-between gap-4 rounded-2xl border backdrop-blur transition-colors duration-300 ${
          isScrolled
            ? "border-zinc-800 bg-zinc-950/95 supports-[backdrop-filter]:bg-zinc-950/90 shadow-xl"
            : "border-zinc-200 bg-white/95 supports-[backdrop-filter]:bg-white/85 shadow-sm"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" data-testid="link-home-logo" aria-label={`${business.name} home`}>
          <img
            src={isScrolled ? "/images/brand/damas-logo-dark.webp" : "/images/brand/damas-logo-light.webp"}
            alt={business.name}
            className="h-20 w-auto max-w-[270px] sm:max-w-[360px] lg:max-w-[420px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className={navLinkClass(location === "/")}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={navLinkClass(isActive("/about"))}
          >
            About Us
          </Link>

          <DropdownMenu items={autoServiceItems} dark={isScrolled}>
            <span className={isActive("/auto-services") || location.includes("/services/") ? (isScrolled ? "text-white" : "text-primary") : ""}>
              Auto Services
            </span>
          </DropdownMenu>

          <DropdownMenu items={tireServiceItems} dark={isScrolled}>
            <span className={isActive("/tire-services") || isActive("/tires") ? (isScrolled ? "text-white" : "text-primary") : ""}>
              Tires & Wheels
            </span>
          </DropdownMenu>

          <Link
            href="/tires"
            className={navLinkClass(isActive("/tires"))}
          >
            Tires
          </Link>

          <DropdownMenu items={locationItems} dark={isScrolled}>
            <span className={isActive("/locations") ? (isScrolled ? "text-white" : "text-primary") : ""}>
              Location
            </span>
          </DropdownMenu>

          <Link
            href="/specials"
            className={navLinkClass(isActive("/specials"))}
          >
            Specials
          </Link>

          <Link
            href="/contact"
            className={navLinkClass(isActive("/contact"))}
          >
            Contact Us
          </Link>
        </nav>

        {/* Call Button */}
        <PhoneDropdown />

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 -mr-2 transition-colors ${isScrolled ? "text-white" : "text-foreground"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className={`container mx-auto mt-2 lg:hidden rounded-2xl border px-4 py-4 max-h-[80vh] overflow-y-auto shadow-xl ${isScrolled ? "border-zinc-800 bg-zinc-950 text-white" : "border-zinc-200 bg-white dark:bg-zinc-950"}`}>
          <nav className="flex flex-col gap-1">
            {/* Home */}
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${isScrolled ? "hover:bg-white/10" : "hover:bg-muted"}`} data-testid="link-mobile-nav-home">
              Home
            </Link>

            {/* About Us */}
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${isScrolled ? "hover:bg-white/10" : "hover:bg-muted"}`} data-testid="link-mobile-nav-about">
              About Us
            </Link>

            {/* Auto Services */}
            <div>
              <button
                className={`flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium transition-colors ${isScrolled ? "hover:bg-white/10" : "hover:bg-muted"}`}
                onClick={() => setMobileExpanded(mobileExpanded === "auto" ? null : "auto")}
              >
                Auto Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "auto" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "auto" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  <Link href="/auto-services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-semibold text-primary hover:bg-primary/10">All Auto Services</Link>
                  {autoServices.map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-2 rounded-md text-sm ${isScrolled ? "hover:bg-white/10" : "hover:bg-muted"}`}>{s.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tire Services */}
            <div>
              <button
                className={`flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium transition-colors ${isScrolled ? "hover:bg-white/10" : "hover:bg-muted"}`}
                onClick={() => setMobileExpanded(mobileExpanded === "tire" ? null : "tire")}
              >
                Tires & Wheels <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "tire" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "tire" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  <Link href="/tire-services" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-semibold text-primary hover:bg-primary/10">All Tire Services</Link>
                  {tireServices.map(s => (
                    <Link key={s.slug} href={`/services/${s.slug}`} onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-2 rounded-md text-sm ${isScrolled ? "hover:bg-white/10" : "hover:bg-muted"}`}>{s.name}</Link>
                  ))}
                </div>
              )}
            </div>

            {/* New & Used Tires */}
            <Link href="/tires" onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${isScrolled ? "hover:bg-white/10" : "hover:bg-muted"}`}>
              Tires
            </Link>

            {/* Locations */}
            <div>
              <button
                className={`flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium transition-colors ${isScrolled ? "hover:bg-white/10" : "hover:bg-muted"}`}
                onClick={() => setMobileExpanded(mobileExpanded === "locations" ? null : "locations")}
              >
                Location <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "locations" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "locations" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  <Link href="/locations" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-semibold text-primary hover:bg-primary/10">Location</Link>
                  {locations.map(l => (
                    <Link key={l.id} href={`/locations/${l.id}`} onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-2 rounded-md ${isScrolled ? "hover:bg-white/10" : "hover:bg-muted"}`}>
                      <span className="flex items-center gap-2 text-sm">
                        <MapPin className="w-3 h-3 text-primary shrink-0" />
                        {l.city} — {l.phone}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/specials" onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${isScrolled ? "hover:bg-white/10" : "hover:bg-muted"}`}>
              Specials
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${isScrolled ? "hover:bg-white/10" : "hover:bg-muted"}`}>
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
                className={`flex items-center justify-between px-4 py-2.5 rounded-md transition-colors ${isScrolled ? "hover:bg-white/10" : "hover:bg-muted"}`}
              >
                <span className={`flex items-center gap-2 text-sm font-medium ${isScrolled ? "text-zinc-100" : "text-zinc-800"}`}>
                  <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                  {loc.city}
                </span>
                <span className="text-sm text-primary font-semibold">Directions</span>
              </a>
            ))}
          </div>
        </div>
      )}

      <div
        className={`fixed inset-x-0 bottom-0 z-[60] px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] lg:hidden transition-all duration-300 ${
          isScrolled ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="mx-auto max-w-md rounded-2xl border border-zinc-800 bg-zinc-950/95 p-2 shadow-2xl shadow-black/30 backdrop-blur">
          <div className="grid grid-cols-3 gap-2">
            <Link
              href={mobileCallHref}
              className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl bg-white/8 px-2 text-xs font-semibold text-white transition-colors hover:bg-white/12"
              data-testid="mobile-sticky-call"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span>Call</span>
            </Link>
            <a
              href={business.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl bg-white/8 px-2 text-xs font-semibold text-white transition-colors hover:bg-white/12"
              data-testid="mobile-sticky-directions"
            >
              <MapPinned className="h-5 w-5 text-primary" />
              <span>Directions</span>
            </a>
            <Link
              href="/contact"
              className="flex min-h-14 flex-col items-center justify-center gap-1 rounded-xl bg-primary px-2 text-xs font-bold text-primary-foreground shadow-lg shadow-red-950/30 transition-colors hover:bg-primary/90"
              data-testid="mobile-sticky-appointment"
            >
              <CalendarCheck className="h-5 w-5" />
              <span>Appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
