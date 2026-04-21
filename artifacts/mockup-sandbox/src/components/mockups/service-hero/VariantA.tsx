import { Phone, Calendar, CheckCircle2, ShieldCheck, Star } from "lucide-react";

export function VariantA() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] py-8 px-4 flex items-start justify-center">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl flex min-h-[600px]">
        {/* Left — text panel */}
        <div className="w-1/2 bg-[#1a1a1a] flex flex-col justify-center px-12 py-14 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#C41E3A]" />

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-zinc-500 mb-5 font-medium tracking-widest uppercase">
            <span>Auto Services</span>
            <span>/</span>
            <span className="text-[#C41E3A]">Brake Repair</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#C41E3A]/10 border border-[#C41E3A]/30 text-[#C41E3A] rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-5 w-fit">
            <ShieldCheck className="w-3.5 h-3.5" />
            Certified Technicians
          </div>

          <h1 className="text-4xl font-black text-white leading-tight mb-4 tracking-tight">
            Brake Repair<br />
            <span className="text-[#C41E3A]">& Service</span>
          </h1>

          <p className="text-zinc-400 text-sm leading-relaxed mb-7 max-w-sm">
            Complete brake system inspection, pad replacement, rotor resurfacing,
            and brake fluid flush. Certified technicians serving Northern Virginia since 2004.
          </p>

          <ul className="space-y-2.5 mb-8">
            {["Same-day service available", "All makes & models", "Free brake inspection"].map(f => (
              <li key={f} className="flex items-center gap-2.5 text-sm text-zinc-300">
                <CheckCircle2 className="w-4 h-4 text-[#C41E3A] shrink-0" />
                {f}
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <button className="bg-[#C41E3A] hover:bg-[#a01830] text-white font-bold px-6 py-3 rounded-full text-sm flex items-center gap-2 transition-colors">
              <Calendar className="w-4 h-4" />
              Book Service
            </button>
            <button className="border border-zinc-600 hover:border-zinc-400 text-zinc-300 font-semibold px-6 py-3 rounded-full text-sm flex items-center gap-2 transition-colors">
              <Phone className="w-4 h-4" />
              (703) 440-0880
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800">
            <div className="flex items-center gap-1 mb-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
              <span className="text-zinc-500 text-xs ml-1">4.3 / 5 · Springfield</span>
            </div>
            <p className="text-zinc-500 text-xs italic">"Fast, honest, and affordable. Fixed my brakes in under 2 hours."</p>
          </div>
        </div>

        {/* Right — image */}
        <div className="w-1/2 relative overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80"
            alt="Brake repair"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-8 left-6 bg-white rounded-2xl shadow-2xl px-5 py-4">
            <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider mb-0.5">Starting from</div>
            <div className="text-2xl font-black text-[#1a1a1a]">$89<span className="text-sm font-semibold text-zinc-400">/axle</span></div>
            <div className="text-xs text-[#C41E3A] font-semibold mt-0.5">Free inspection included</div>
          </div>
        </div>
      </div>
    </div>
  );
}
