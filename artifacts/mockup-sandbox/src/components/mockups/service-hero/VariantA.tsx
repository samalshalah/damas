import { Phone, Calendar, CheckCircle2, ShieldCheck, Star } from "lucide-react";

export function VariantA() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex flex-1 min-h-[640px]">
        {/* Left — text panel */}
        <div className="w-1/2 bg-[#1a1a1a] flex flex-col justify-center px-16 py-16 relative">
          {/* Accent line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C41E3A]" />

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-6 font-medium tracking-widest uppercase">
            <span>Auto Services</span>
            <span>/</span>
            <span className="text-[#C41E3A]">Brake Repair</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C41E3A]/10 border border-[#C41E3A]/30 text-[#C41E3A] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
            <ShieldCheck className="w-3.5 h-3.5" />
            Certified Technicians
          </div>

          <h1 className="text-5xl font-black text-white leading-tight mb-5 tracking-tight">
            Brake Repair<br />
            <span className="text-[#C41E3A]">& Service</span>
          </h1>

          <p className="text-zinc-400 text-base leading-relaxed mb-8 max-w-md">
            Complete brake system inspection, pad replacement, rotor resurfacing,
            and brake fluid flush. Certified technicians you can trust — serving
            Northern Virginia since 2004.
          </p>

          {/* Feature bullets */}
          <ul className="space-y-2.5 mb-10">
            {["Same-day service available", "All makes & models", "Free brake inspection"].map(f => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#C41E3A] shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          {/* CTAs */}
          <div className="flex gap-3">
            <button className="bg-[#C41E3A] hover:bg-[#a01830] text-white font-bold px-7 py-3.5 rounded-full text-sm flex items-center gap-2 transition-colors">
              <Calendar className="w-4 h-4" />
              Book Service
            </button>
            <button className="border border-zinc-600 hover:border-zinc-400 text-zinc-300 font-semibold px-7 py-3.5 rounded-full text-sm flex items-center gap-2 transition-colors">
              <Phone className="w-4 h-4" />
              (703) 440-0880
            </button>
          </div>

          {/* Review snippet */}
          <div className="mt-10 pt-8 border-t border-zinc-800">
            <div className="flex items-center gap-1 mb-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
              <span className="text-zinc-500 text-xs ml-1">4.3 / 5 · Springfield</span>
            </div>
            <p className="text-zinc-500 text-xs italic leading-relaxed">
              "Fast, honest, and affordable. The team fixed my brakes in under 2 hours."
            </p>
          </div>
        </div>

        {/* Right — image */}
        <div className="w-1/2 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80"
            alt="Brake repair"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Price tag overlay */}
          <div className="absolute bottom-10 left-8 bg-white rounded-2xl shadow-2xl px-6 py-4">
            <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-0.5">Starting from</div>
            <div className="text-3xl font-black text-[#1a1a1a]">$89<span className="text-base font-semibold text-zinc-400">/axle</span></div>
            <div className="text-xs text-[#C41E3A] font-semibold mt-0.5">Free inspection included</div>
          </div>
        </div>
      </div>
    </div>
  );
}
