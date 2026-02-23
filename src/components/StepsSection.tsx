const steps = [
  { num: 1, title: "Gap Assessment", desc: "Connect your tools. We instantly identify every gap against ISO 27001:2022 and generate a prioritized remediation roadmap.", icon: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" },
  { num: 2, title: "Policy & Controls", desc: "Apply pre-built, auditor-approved policies in one click. Customize your control environment in hours — not weeks.", icon: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" },
  { num: 3, title: "Evidence Automation", desc: "AWS, Azure, GCP, GitHub, Okta, Slack — evidence flows in automatically, mapped to every control requirement.", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { num: 4, title: "Audit & Certification", desc: "We connect you with accredited CBs and support you through every stage of the audit until you hold your certificate.", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 7a4 4 0 100 8 4 4 0 000-8z" },
];

export default function StepsSection() {
  return (
    <section id="how" className="relative">
      <div className="py-24 px-[6%]">
        <div className="text-center reveal">
          <span className="inline-flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[2.5px] uppercase text-accent mb-3.5">
            Process <span className="w-5 h-px bg-accent" />
          </span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] font-black leading-[1.12] tracking-tight mb-4">
            From Gap to Certified in<br /><span className="gradient-text">4 Clear Steps</span>
          </h2>
          <p className="text-foreground/60 text-base max-w-[560px] mx-auto leading-relaxed">
            A structured, automated journey — every milestone tracked, every requirement met.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0.5 mt-14 relative">
          <div className="hidden xl:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent z-0" />
          {steps.map((s, i) => (
            <div key={i} className={`reveal delay-${i + 1} bg-secondary/60 border border-primary/15 rounded-[18px] p-7 relative z-[1] text-center mx-1 hover:border-primary/55 hover:bg-navy-light/90 hover:-translate-y-2 hover:shadow-[0_24px_48px_rgba(0,0,0,0.4),var(--glow-blue)] transition-all duration-300 group`}>
              <div className="relative inline-flex mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/30 flex items-center justify-center mx-auto group-hover:from-primary/30 group-hover:to-accent/20 group-hover:border-accent group-hover:shadow-[0_0_24px_hsla(187,94%,43%,0.22)] transition-all">
                  <svg width="24" height="24" fill="none" stroke="hsl(187,94%,43%)" strokeWidth="2" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                </div>
                <span className="absolute -top-2 -right-2 w-[22px] h-[22px] gradient-btn rounded-full flex items-center justify-center text-[0.62rem] font-extrabold font-display">{s.num}</span>
              </div>
              <h4 className="font-display font-bold text-[0.92rem] mb-2">{s.title}</h4>
              <p className="text-[0.79rem] text-foreground/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
