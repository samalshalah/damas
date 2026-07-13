import { Phone, Calendar, Shield, Clock, Star, ArrowUpRight } from "lucide-react";

export function VariantD() {
  return (
    <div className="min-h-screen bg-[#f8f8f8] py-8 px-4 flex items-start justify-center">
      <div className="w-full max-w-6xl rounded-2xl overflow-hidden shadow-2xl bg-[#0f0f0f] min-h-[600px]">
        <div className="relative min-h-[600px] flex items-stretch">
          {/* Full-bleed bg image right side */}
          <div className="absolute right-0 top-0 bottom-0 w-[50%]">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80"
              alt="Brake repair"
              className="w-full h-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#0f0f0f]/40 to-[#0f0f0f]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
          </div>

          {/* Vertical red accent */}
          <div className="absolute left-[48%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#C41E3A] to-transparent opacity-40" />

          {/* Content */}
          <div className="relative z-10 w-[52%] flex flex-col justify-center px-14 py-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-[#C41E3A]" />
              <span className="text-[#C41E3A] text-xs font-bold uppercase tracking-[0.2em]">Auto Services</span>
            </div>

            <h1 className="text-[3.75rem] font-black text-white leading-[0.95] tracking-tight mb-5">
              BRAKE<br />
              <span className="text-[#C41E3A]">REPAIR</span><br />
              <span className="text-zinc-600 text-3xl">& SERVICE</span>
            </h1>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8 max-w-sm">
              Full brake inspection and repair by ASE-certified technicians.
              Service available at Damas Auto Repair in Chantilly, VA.
            </p>

            <div className="flex gap-5 mb-8">
              {[
                { icon: Shield, label: "Certified" },
                { icon: Clock, label: "Same-Day" },
                { icon: Star, label: "4.3★ Rated" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#C41E3A]" />
                  </div>
                  <span className="text-xs text-zinc-500 font-medium">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-3 max-w-xs">
              <button className="w-full bg-[#C41E3A] text-white font-bold py-3.5 px-5 rounded-xl text-sm flex items-center justify-between group hover:bg-[#a01830] transition-colors">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Book Appointment Online
                </span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <button className="w-full bg-white/5 border border-white/10 text-white font-semibold py-3.5 px-5 rounded-xl text-sm flex items-center justify-between hover:bg-white/10 transition-colors">
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Get Directions
                </span>
                <span className="text-xs text-zinc-500">Chantilly</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
