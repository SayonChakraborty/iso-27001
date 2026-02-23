const testimonials = [
  {
    quote: "We passed our ISO 27001 audit on the first attempt — in just 7 weeks. Cloud Astra's automation saved us thousands of hours and at least $80K in consulting fees. Genuinely game-changing.",
    name: "Marcus Klein",
    role: "CISO · PayBridge Financial, New York, NY",
    initials: "MK",
    color: "hsl(217,80%,53%)",
  },
  {
    quote: "As a healthcare SaaS company, we needed ISO 27001 to close enterprise deals. Cloud Astra made the entire process clear, structured, and far faster than any consultant we'd spoken to.",
    name: "Sarah Rodriguez",
    role: "VP Engineering · NexusHealth, Austin, TX",
    initials: "SR",
    color: "hsl(187,94%,43%)",
  },
  {
    quote: "The real-time compliance dashboard alone is worth every dollar. We know our status at all times, stay aligned as a team, and our surveillance audits have become completely routine.",
    name: "Alex Thompson",
    role: "Head of Security · StackForge, San Francisco, CA",
    initials: "AT",
    color: "hsl(38,95%,50%)",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative">
      <div className="py-24 px-[6%]">
        <div className="text-center reveal">
          <span className="inline-flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[2.5px] uppercase text-accent mb-3.5">
            Customer Stories <span className="w-5 h-px bg-accent" />
          </span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] font-black leading-[1.12] tracking-tight mb-4">
            Trusted by Security Teams<br /><span className="gradient-text">Across the US</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
          {testimonials.map((t, i) => (
            <div key={i} className={`reveal delay-${i + 1} bg-gradient-to-br from-card/90 to-background/95 border border-primary/15 rounded-[20px] p-7 relative overflow-hidden hover:border-primary/30 hover:-translate-y-1 transition-all`}>
              <span className="absolute top-3 right-5 text-[6rem] leading-none text-primary/7 font-display font-black">"</span>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-gold">★</span>
                ))}
              </div>
              <blockquote className="text-[0.865rem] text-foreground/80 leading-relaxed mb-5 italic relative">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 border-t border-foreground/10 pt-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold font-display text-[0.78rem] shrink-0"
                  style={{ background: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-[0.875rem] font-display">{t.name}</div>
                  <div className="text-[0.72rem] text-foreground/60 mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
