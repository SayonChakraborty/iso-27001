import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "We passed our ISO 27001 audit on the first attempt — in just 7 weeks. Cloud Astra's automation saved us thousands of hours and at least $80K in consulting fees. Genuinely game-changing.",
    name: "Marcus Klein",
    role: "CISO · PayBridge Financial, New York, NY",
    initials: "MK",
    color: "hsl(217,80%,53%)",
    company: "PayBridge Financial",
  },
  {
    quote: "As a healthcare SaaS company, we needed ISO 27001 to close enterprise deals. Cloud Astra made the entire process clear, structured, and far faster than any consultant we'd spoken to.",
    name: "Sarah Rodriguez",
    role: "VP Engineering · NexusHealth, Austin, TX",
    initials: "SR",
    color: "hsl(187,94%,43%)",
    company: "NexusHealth",
  },
  {
    quote: "The real-time compliance dashboard alone is worth every dollar. We know our status at all times, stay aligned as a team, and our surveillance audits have become completely routine.",
    name: "Alex Thompson",
    role: "Head of Security · StackForge, San Francisco, CA",
    initials: "AT",
    color: "hsl(38,95%,50%)",
    company: "StackForge",
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Background overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,hsla(217,80%,53%,0.08),transparent_60%)] blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,hsla(187,94%,43%,0.06),transparent_60%)] blur-[60px] pointer-events-none" />

      {/* Decorative lines */}
      <div className="absolute top-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent pointer-events-none" />
      <div className="absolute bottom-[20%] left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent pointer-events-none" />

      <div className="py-24 px-[6%] relative z-10">
        <div className="text-center reveal">
          <span className="inline-flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[2.5px] uppercase text-accent mb-3.5">
            Customer Stories <span className="w-5 h-px bg-accent" />
          </span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] font-black leading-[1.12] tracking-tight mb-4">
            Trusted by Security Teams<br /><span className="gradient-text">Across the US</span>
          </h2>
          <p className="text-foreground/50 text-[0.95rem] max-w-md mx-auto">
            See why 500+ companies chose Cloud Astra to accelerate their ISO 27001 journey.
          </p>
        </div>

        {/* Featured testimonial — large card */}
        <div className="mt-14 max-w-4xl mx-auto reveal">
          <div className="relative bg-gradient-to-br from-card/95 to-background/90 border border-primary/20 rounded-[24px] p-10 md:p-14 overflow-hidden">
            {/* Big quote mark */}
            <span className="absolute -top-2 -left-2 text-[12rem] leading-none text-primary/[0.06] font-display font-black select-none">"</span>
            {/* Glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-[radial-gradient(circle,hsla(217,80%,53%,0.12),transparent_70%)] blur-[40px] pointer-events-none" />

            <div className="relative z-10">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="transition-all duration-700"
                  style={{
                    display: active === i ? "block" : "none",
                    animation: active === i ? "fadeUp 0.6s ease both" : undefined,
                  }}
                >
                  <div className="flex gap-1 mb-5">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-gold text-lg">★</span>
                    ))}
                  </div>
                  <blockquote className="text-[1.15rem] md:text-[1.35rem] text-foreground/85 leading-relaxed font-medium italic mb-8">
                    "{t.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center font-extrabold font-display text-[0.85rem] shrink-0 shadow-lg"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <div className="font-bold text-[1rem] font-display">{t.name}</div>
                      <div className="text-[0.8rem] text-foreground/50 mt-0.5">{t.role}</div>
                    </div>
                    <div className="ml-auto hidden md:block">
                      <div className="bg-foreground/5 border border-foreground/10 rounded-lg px-4 py-2 text-[0.75rem] font-display font-bold text-foreground/60 tracking-wide">
                        {t.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex gap-2 justify-center mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    active === i
                      ? "bg-accent w-8"
                      : "bg-foreground/20 hover:bg-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Small testimonial cards below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`reveal delay-${i + 1} text-left bg-gradient-to-br from-card/80 to-background/90 border rounded-[16px] p-5 relative overflow-hidden transition-all duration-300 cursor-pointer ${
                active === i
                  ? "border-accent/40 shadow-[0_0_30px_hsla(187,94%,43%,0.1)]"
                  : "border-primary/10 hover:border-primary/25"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-extrabold font-display text-[0.65rem] shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-[0.8rem] font-display">{t.name}</div>
                  <div className="text-[0.65rem] text-foreground/50">{t.company}</div>
                </div>
              </div>
              <p className="text-[0.78rem] text-foreground/60 leading-relaxed line-clamp-2">
                "{t.quote}"
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
