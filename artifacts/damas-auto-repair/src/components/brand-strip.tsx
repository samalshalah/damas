const brands = [
  { name: "Michelin",    logo: "/images/brand-michelin.jpg" },
  { name: "Goodyear",   logo: "/images/brand-goodyear.png" },
  { name: "Bridgestone",logo: "/images/brand-bridgestone.png" },
  { name: "Continental",logo: "/images/brand-continental.png" },
  { name: "Dunlop",     logo: "/images/brand-dunlop.jpg" },
  { name: "BF Goodrich",logo: "/images/brand-bfgoodrich.jpg" },
  { name: "Pirelli",    logo: "/images/brand-pirelli.png" },
  { name: "Yokohama",   logo: "/images/brand-yokohama.png" },
  { name: "Hankook",    logo: "/images/brand-hankook.png" },
  { name: "Kumho",      logo: "/images/brand-kumho.png" },
];

// Double the list so the loop is seamless
const doubled = [...brands, ...brands];

export function BrandStrip() {
  return (
    <section className="bg-white dark:bg-zinc-900 border-y py-6 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-5">
        Tire Brands We Carry
      </p>
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white dark:from-zinc-900 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white dark:from-zinc-900 to-transparent z-10" />

        <div className="flex gap-12 items-center animate-marquee whitespace-nowrap">
          {doubled.map((brand, i) => (
            <div
              key={i}
              className="inline-flex items-center justify-center h-12 px-4 shrink-0"
              title={brand.name}
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 max-w-[120px] w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
