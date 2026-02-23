const items = [
  { title: "10× Faster Certification", desc: "Most US customers reach audit-ready in 3–8 weeks. The industry average without Cloud Astra is 9–18 months.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
  { title: "Dedicated Certified Experts", desc: "Every customer gets a dedicated ISO 27001 certified compliance expert — a real human, not a chatbot, always available.", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 7a4 4 0 100 8 4 4 0 000-8z" },
  { title: "Transparent, Flat Pricing", desc: "One predictable subscription. No surprise consulting invoices. Includes software, expert guidance, and full audit support.", icon: "M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" },
  { title: "Continuous Monitoring", desc: "Our platform watches your environment 24/7, alerting you to compliance drifts before any auditor or attacker notices them.", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { title: "Auditor Network Included", desc: "We partner with accredited certification bodies across the US. Your entire journey — gap to certificate — on one platform.", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" },
];

const chips = ["ISO 27001:2022", "SOC 2 Type II", "GDPR", "HIPAA", "NIST CSF", "CCPA", "PCI DSS"];

export default function WhyUsSection() {
  return (
    <section className="bg-navy-mid relative">
      <div className="py-24 px-[6%]">
        <div className="reveal">
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] font-black leading-[1.12] tracking-tight mb-4">
            The Only Compliance Platform<br />Built for <span className="gradient-text">US Enterprises</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center mt-14">
          <div className="flex flex-col gap-5">
            {items.map((w, i) => (
              <div key={i} className={`reveal delay-${(i % 4) + 1} flex gap-4 items-start p-4 rounded-[14px] border border-transparent hover:bg-primary/5 hover:border-primary/20 transition-all group`}>
                <div className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/25 group-hover:from-primary/30 group-hover:to-accent/20 group-hover:border-accent/40 group-hover:shadow-[0_0_20px_hsla(187,94%,43%,0.14)] transition-all">
                  <svg width="18" height="18" fill="none" stroke="hsl(187,94%,43%)" strokeWidth="2" viewBox="0 0 24 24"><path d={w.icon} /></svg>
                </div>
                <div>
                  <h4 className="font-display font-bold text-[0.9rem] mb-1">{w.title}</h4>
                  <p className="text-[0.81rem] text-foreground/60 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal delay-2 bg-gradient-to-br from-navy-light/95 to-secondary/98 border border-primary/25 rounded-[26px] p-12 text-center relative overflow-hidden shadow-[var(--glow-blue)]">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-bright to-accent to-transparent" />

            <div className="relative w-[120px] h-[120px] mx-auto mb-6 flex items-center justify-center">
              <svg className="absolute inset-0 w-[120px] h-[120px]" style={{ animation: "spin-slow 20s linear infinite" }} viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="56" stroke="url(#rg)" strokeWidth="1.5" strokeDasharray="6 6" />
                <defs><linearGradient id="rg"><stop stopColor="hsl(217,80%,53%)" /><stop offset="1" stopColor="hsl(187,94%,43%)" /></linearGradient></defs>
              </svg>
              <div className="w-[84px] h-[84px] gradient-btn rounded-full flex items-center justify-center shadow-[0_0_0_12px_hsla(217,80%,53%,0.1),0_0_0_24px_hsla(217,80%,53%,0.05)]">
                <svg width="36" height="36" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
              </div>
            </div>

            <h3 className="font-display text-xl font-black tracking-tight mb-2.5">ISO/IEC 27001:2022 Ready</h3>
            <p className="text-foreground/60 text-[0.865rem] leading-relaxed mb-6">
              Cloud Astra is fully mapped to the latest 2022 revision of ISO 27001, including all updated Annex A controls — ensuring your certification is future-proof and globally recognized.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {chips.map((c) => (
                <span key={c} className="bg-accent/10 border border-accent/25 rounded-full py-1 px-3 text-[0.7rem] font-bold font-display text-accent tracking-wide hover:bg-accent/20 hover:border-accent/50 transition-all cursor-default">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
