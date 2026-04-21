import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown, MapPin } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { services, locations } from "@/lib/data";

const autoServices = services.filter(s => s.category === "Auto Services");
const tireServices = services.filter(s => s.category === "Tire and Wheel");

function DropdownMenu({ children, items }: { children: React.ReactNode; items: { href: string; label: string; sublabel?: string }[] }) {
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
      <button
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        onClick={() => setOpen(o => !o)}
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
  const [location] = useLocation();
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
    { href: "/locations", label: "All Locations" },
    ...locations.map(l => ({ href: `/locations/${l.id}`, label: l.city, sublabel: l.phone })),
  ];

  const isActive = (path: string) => location === path || location.startsWith(path + "/");

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0" data-testid="link-home-logo">
          <img
            src="/images/bingo-logo-new.png"
            alt="Bingo Tire & Auto Service"
            className="h-12 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${location === "/" ? "text-primary" : "text-muted-foreground"}`}
          >
            Home
          </Link>

          <DropdownMenu items={autoServiceItems}>
            <span className={isActive("/auto-services") || location.includes("/services/") ? "text-primary" : ""}>
              Auto Services
            </span>
          </DropdownMenu>

          <DropdownMenu items={tireServiceItems}>
            <span className={isActive("/tire-services") || isActive("/tires") ? "text-primary" : ""}>
              Tire Services
            </span>
          </DropdownMenu>

          <Link
            href="/tires"
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive("/tires") ? "text-primary" : "text-muted-foreground"}`}
          >
            New &amp; Used Tires
          </Link>

          <DropdownMenu items={locationItems}>
            <span className={isActive("/locations") ? "text-primary" : ""}>
              Locations
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
        <Button asChild className="hidden lg:flex font-semibold text-sm h-10 px-5 shadow-sm rounded-full shrink-0" data-testid="button-nav-call">
          <a href="tel:7034400880">
            <Phone className="w-4 h-4 mr-2" />
            (703) 440-0880
          </a>
        </Button>

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
                Tire Services <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "tire" ? "rotate-180" : ""}`} />
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
              New &amp; Used Tires
            </Link>

            {/* Locations */}
            <div>
              <button
                className="flex items-center justify-between w-full px-4 py-3 rounded-md text-base font-medium hover:bg-muted transition-colors"
                onClick={() => setMobileExpanded(mobileExpanded === "locations" ? null : "locations")}
              >
                Locations <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "locations" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "locations" && (
                <div className="ml-4 flex flex-col gap-1 mt-1">
                  <Link href="/locations" onClick={() => setIsMobileMenuOpen(false)} className="block px-4 py-2 rounded-md text-sm font-semibold text-primary hover:bg-primary/5">All Locations</Link>
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
          <div className="px-4 pt-4 border-t mt-4">
            <Button asChild className="w-full font-semibold rounded-full" size="lg">
              <a href="tel:7034400880">
                <Phone className="w-4 h-4 mr-2" />
                Call Now: (703) 440-0880
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
