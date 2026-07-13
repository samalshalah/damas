import { Phone, Calendar, ArrowRight, Clock } from "lucide-react";

export function VariantB() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] py-8 px-4 flex items-start justify-center">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-white min-h-[600px]">
        <div className="relative min-h-[600px] flex items-stretch">
          {/* Background image — right 60% */}
          <div className="absolute right-0 top-0 bottom-0 w-[60%] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1000&q=80"
              alt="Brake repair"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent" />
          </div>

          {/* Text overlapping */}
          <div className="relative z-10 w-[55%] flex flex-col justify-center px-12 py-16">
            <div className="inline-flex items-center gap-2 bg-[#C41E3A] text-white rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-7 w-fit shadow-lg shadow-red-900/20">
              Auto Services
            </div>

            <h1 className="text-[3.25rem] font-black text-[#111] leading-[1.05] tracking-tight mb-4">
              Expert<br />
              <span className="text-[#C41E3A]">Brake</span><br />
              Repair
            </h1>

            <p className="text-zinc-600 text-base leading-relaxed mb-7 max-w-sm">
              Full brake inspection and service. We'll have you stopping safely again —
              usually the same day.
            </p>

            <div className="flex gap-8 mb-8">
              {[
                { val: "20+", label: "Years Experience" },
                { val: "4.3★", label: "Chantilly Rating" },
                { val: "1hr", label: "Avg. Turnaround" },
              ].map(s => (
                <div key={s.label}>
                  <div className="text-xl font-black text-[#111]">{s.val}</div>
                  <div className="text-xs text-zinc-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button className="bg-[#C41E3A] text-white font-bold px-7 py-3.5 rounded-xl text-sm flex items-center gap-2 shadow-lg shadow-red-900/20 hover:bg-[#a01830] transition-colors">
                <Calendar className="w-4 h-4" />
                Book Appointment
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="text-[#111] font-bold flex items-center gap-2 text-sm hover:text-[#C41E3A] transition-colors">
                <div className="w-9 h-9 rounded-full border-2 border-zinc-200 flex items-center justify-center">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                Call Now
              </button>
            </div>

            <div className="flex items-center gap-3 mt-8 pt-6 border-t border-zinc-100">
              <Clock className="w-4 h-4 text-zinc-400" />
              <span className="text-xs text-zinc-500">25358 Pleasant Valley Rd #120, Chantilly, VA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
