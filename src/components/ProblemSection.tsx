const problems = [
  { title: "Months of Manual Work", desc: "Teams waste 6–12 months filling spreadsheets, chasing evidence, and writing policies from scratch with no clear finish line." },
  { title: "Expensive Consultants", desc: "Traditional consulting costs $40K–$150K+ with no guarantee of passing. You pay regardless of the outcome." },
  { title: "Zero Visibility", desc: "You don't know your true compliance posture until an auditor tells you — and by then, costly non-conformities pile up fast." },
  { title: "Recertification Chaos", desc: "Annual surveillance audits catch teams completely off-guard, leading to emergency scrambles and missed renewals." },
];

const solutions = [
  "**Automated evidence collection** via 100+ native cloud integrations — zero manual screenshots, ever.",
  "**300+ auditor-approved policy templates** mapped to ISO 27001:2022 Annex A — deploy in hours, not weeks.",
  "**Real-time compliance dashboard** showing your exact readiness score at every moment — no more guesswork.",
  "**Dedicated ISO-certified compliance expert** guides you from gap assessment through audit close-out.",
  "**Continuous monitoring** keeps you certified year-round — surveillance audits become routine, not stressful.",
];

export default function ProblemSection() {
  return (
    <section className="bg-navy-mid relative">
      <div className="py-24 px-[6%]">
        <div className="reveal">
          <span className="flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[2.5px] uppercase text-accent mb-3.5">
            <span className="w-5 h-px bg-accent" />The Reality
          </span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] font-black leading-[1.12] tracking-tight mb-4">
            Why 60% of Companies Fail<br />Their First <span className="gradient-text">ISO Audit</span>
          </h2>
          <p className="text-foreground/60 text-base max-w-[560px] leading-relaxed">
            The traditional approach to ISO 27001 is broken. Here's why — and how Cloud Astra fixes every one of these problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-14">
          <div className="flex flex-col gap-3.5">
            {problems.map((p, i) => (
              <div key={i} className={`reveal delay-${i + 1} flex items-start gap-4 bg-destructive/5 border border-destructive/15 rounded-[14px] p-5 hover:border-destructive/30 hover:translate-x-1 transition-all`}>
                <div className="w-10 h-10 shrink-0 bg-destructive/10 border border-destructive/20 rounded-[10px] flex items-center justify-center">
                  <svg width="18" height="18" fill="none" stroke="hsl(0,84%,60%)" strokeWidth="2" viewBox="0 0 24 24">
                    {i === 0 && <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>}
                    {i === 1 && <><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></>}
                    {i === 2 && <><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>}
                    {i === 3 && <><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="9" y1="3" x2="9" y2="21"/></>}
                  </svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-[0.88rem] mb-1">{p.title}</h4>
                  <p className="text-[0.81rem] text-foreground/60 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal delay-2 bg-gradient-to-br from-navy-light/90 to-secondary/95 border border-border rounded-[22px] p-9 relative overflow-hidden">
            <div className="absolute -top-[60px] -right-[60px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,hsla(187,94%,43%,0.12),transparent_70%)]" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30 rounded-[11px] flex items-center justify-center">
                <svg width="20" height="20" fill="none" stroke="hsl(187,94%,43%)" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="font-display text-[1.05rem] font-extrabold">Cloud Astra Solves All of This</h3>
            </div>

            <div className="flex flex-col gap-3.5">
              {solutions.map((s, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-[22px] h-[22px] shrink-0 bg-green/15 border border-green/35 rounded-full flex items-center justify-center mt-0.5">
                    <svg width="12" height="12" fill="none" stroke="hsl(160,84%,40%)" strokeWidth="2.5" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <p className="text-[0.855rem] text-foreground/70 leading-relaxed" dangerouslySetInnerHTML={{ __html: s.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>') }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
