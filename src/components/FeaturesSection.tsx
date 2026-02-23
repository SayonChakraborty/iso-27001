const features = [
  { title: "100+ Native Integrations", desc: "Connect AWS, Azure, GCP, Okta, GitHub, Slack, Jira, and more. Evidence is collected automatically, 24/7, mapped to every control.", tag: "Always On →", icon: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" },
  { title: "Pre-Built Policy Library", desc: "300+ auditor-vetted policy templates and SOPs — all mapped to ISO 27001:2022 Annex A, ready to customize and deploy.", tag: "Deploy in Hours →", icon: "M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" },
  { title: "Live Compliance Dashboard", desc: "Know your exact readiness score in real time. A live risk register and control health tracker your entire team can act on.", tag: "Real-Time →", icon: "M22 12h-4l-3 9L9 3l-3 9H2" },
  { title: "AI-Powered Risk Engine", desc: "Our AI identifies risks, recommends controls, and auto-generates your risk treatment plan — reviewed and ready to submit.", tag: "AI Assisted →", icon: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" },
  { title: "Vendor Risk Management", desc: "Automate third-party questionnaires, track vendor security posture, and maintain a complete supplier register — fully mapped.", tag: "Third-Party Ready →", icon: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75M9 7a4 4 0 100 8 4 4 0 000-8z" },
  { title: "Multi-Framework Support", desc: "ISO 27001, SOC 2, HIPAA, GDPR, NIST CSF — all on one platform. Evidence is automatically reused across frameworks.", tag: "One Platform →", icon: "M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2zM22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-navy-mid relative">
      <div className="py-24 px-[6%]">
        <div className="text-center reveal">
          <span className="inline-flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[2.5px] uppercase text-accent mb-3.5">
            Platform Features <span className="w-5 h-px bg-accent" />
          </span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] font-black leading-[1.12] tracking-tight mb-4">
            Built to Win Your Audit<br />— <span className="gradient-text">Every Time</span>
          </h2>
          <p className="text-foreground/60 text-base max-w-[560px] mx-auto leading-relaxed">
            A complete compliance operations platform built for modern US enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-14">
          {features.map((f, i) => (
            <div key={i} className={`reveal delay-${(i % 3) + 1} bg-gradient-to-br from-card/80 to-secondary/60 border border-primary/15 rounded-[18px] p-7 relative overflow-hidden hover:border-accent/35 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_rgba(0,0,0,0.4)] transition-all duration-300 group`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-[50px] h-[50px] rounded-[13px] mb-4 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-[13px] bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/25" />
                <svg width="22" height="22" fill="none" stroke="hsl(187,94%,43%)" strokeWidth="2" viewBox="0 0 24 24" className="relative z-[1]"><path d={f.icon} /></svg>
              </div>
              <h4 className="font-display font-bold text-[0.92rem] mb-2 relative">{f.title}</h4>
              <p className="text-[0.82rem] text-foreground/60 leading-relaxed relative">{f.desc}</p>
              <span className="inline-block mt-3 text-[0.67rem] font-bold tracking-[1px] font-display text-accent uppercase relative">{f.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
