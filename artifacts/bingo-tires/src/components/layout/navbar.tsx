import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/tires", label: "Tires" },
    { href: "/specials", label: "Specials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:bg-zinc-950/95 dark:supports-[backdrop-filter]:bg-zinc-950/80">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group" data-testid="link-home-logo">
          <img 
            src="/images/pingologo.png" 
            alt="Bingo Tire & Auto Service" 
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === link.href ? "text-primary" : "text-muted-foreground"
              }`}
              data-testid={`link-nav-${link.label.toLowerCase().replace(" ", "-")}`}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="font-semibold text-sm h-10 px-6 shadow-sm rounded-full" data-testid="button-nav-call">
            <a href="tel:7034400880">
              <Phone className="w-4 h-4 mr-2" />
              (703) 440-0880
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white dark:bg-zinc-950 px-4 py-4 space-y-4">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  location === link.href ? "bg-primary/10 text-primary" : "hover:bg-muted text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-testid={`link-mobile-nav-${link.label.toLowerCase().replace(" ", "-")}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-4 pt-2">
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
