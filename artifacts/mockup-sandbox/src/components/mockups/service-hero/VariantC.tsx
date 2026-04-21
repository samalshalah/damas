import { Phone, Calendar, CheckCircle2, Wrench, Star } from "lucide-react";

export function VariantC() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="min-h-[640px] grid grid-cols-2">
        {/* Left — text */}
        <div className="flex flex-col justify-center px-14 py-16 bg-white">
          {/* Icon badge */}
          <div className="w-14 h-14 rounded-2xl bg-[#C41E3A] flex items-center justify-center mb-7 shadow-lg shadow-red-900/20">
            <Wrench className="w-7 h-7 text-white" />
          </div>

          {/* Tag */}
          <div className="text-[#C41E3A] text-xs font-bold uppercase tracking-[0.15em] mb-3">
            Auto Services · Northern Virginia
          </div>

          <h1 className="text-5xl font-extrabold text-[#111] leading-tight mb-4 tracking-tight">
            Brake<br />Repair &<br />Inspection
          </h1>

          <p className="text-zinc-500 text-base leading-relaxed mb-7 max-w-sm">
            From squeaky brakes to complete pad and rotor replacements —
            our certified technicians handle it all with speed and precision.
          </p>

          {/* Checklist */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-2.5 mb-8">
            {[
              "Pad replacement",
              "Rotor resurfacing",
              "Brake fluid flush",
              "Caliper inspection",
              "ABS diagnosis",
              "Emergency brake",
            ].map(item => (
              <div key={item} className="flex items-center gap-2 text-sm text-zinc-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C41E3A] shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3">
            <button className="bg-[#C41E3A] text-white font-bold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 hover:bg-[#a01830] transition-colors shadow-md shadow-red-900/20">
              <Calendar className="w-4 h-4" />
              Book Online
            </button>
            <button className="bg-[#f5f5f5] border border-zinc-200 text-zinc-700 font-semibold px-6 py-3.5 rounded-xl text-sm flex items-center gap-2 hover:bg-zinc-100 transition-colors">
              <Phone className="w-4 h-4" />
              Call
            </button>
          </div>
        </div>

        {/* Right — angled image */}
        <div className="relative overflow-hidden bg-[#f5f5f5]">
          {/* Clipped image with polygon */}
          <div
            className="absolute inset-0"
            style={{ clipPath: "polygon(10% 0, 100% 0, 100% 100%, 0% 100%)" }}
          >
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=900&q=80"
              alt="Brake service"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#C41E3A]/10" />
          </div>

          {/* Floating stats card */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-5 bg-white rounded-2xl shadow-2xl p-5 w-44">
            <div className="text-3xl font-black text-[#111] mb-0.5">4.3<span className="text-lg">★</span></div>
            <div className="text-xs text-zinc-500 mb-3 font-medium">Springfield Rating</div>
            <div className="flex gap-0.5 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-xs text-zinc-400">Based on 200+ reviews</div>
          </div>
        </div>
      </div>
    </div>
  );
}
