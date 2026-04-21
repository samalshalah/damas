import { Phone, Calendar, ArrowRight, Star, Clock } from "lucide-react";

export function VariantB() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative min-h-[640px] flex items-stretch">
        {/* Background image — right 60% */}
        <div className="absolute right-0 top-0 bottom-0 w-[60%] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1000&q=80"
            alt="Brake repair"
            className="w-full h-full object-cover"
          />
          {/* Gradient fade to white on left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
        </div>

        {/* Text — overlapping the image */}
        <div className="relative z-10 w-[55%] flex flex-col justify-center px-16 py-20">
          {/* Category pill */}
          <div className="inline-flex items-center gap-2 bg-[#C41E3A] text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-8 w-fit shadow-lg shadow-red-900/20">
            Auto Services
          </div>

          <h1 className="text-[3.75rem] font-black text-[#111] leading-[1.05] tracking-tight mb-5">
            Expert<br />
            <span className="text-[#C41E3A]">Brake</span><br />
            Repair
          </h1>

          <p className="text-zinc-600 text-lg leading-relaxed mb-8 max-w-sm">
            Full brake inspection and service. We'll have you stopping safely again —
            usually the same day.
          </p>

          {/* Stats row */}
          <div className="flex gap-8 mb-10">
            {[
              { val: "20+", label: "Years Experience" },
              { val: "4.3★", label: "Springfield Rating" },
              { val: "1hr", label: "Avg. Turnaround" },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl font-black text-[#111]">{s.val}</div>
                <div className="text-xs text-zinc-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="flex items-center gap-4">
            <button className="bg-[#C41E3A] text-white font-bold px-8 py-4 rounded-2xl text-sm flex items-center gap-2.5 shadow-xl shadow-red-900/25 hover:bg-[#a01830] transition-colors">
              <Calendar className="w-4 h-4" />
              Book Appointment
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="text-[#111] font-bold flex items-center gap-2 text-sm hover:text-[#C41E3A] transition-colors">
              <div className="w-10 h-10 rounded-full border-2 border-zinc-200 flex items-center justify-center">
                <Phone className="w-4 h-4" />
              </div>
              Call Now
            </button>
          </div>

          {/* Trust strip */}
          <div className="flex items-center gap-3 mt-10 pt-6 border-t border-zinc-100">
            <Clock className="w-4 h-4 text-zinc-400" />
            <span className="text-xs text-zinc-500">Mon–Fri 8am–6pm · Sat 8am–4pm · Walk-ins welcome</span>
          </div>
        </div>
      </div>
    </div>
  );
}
