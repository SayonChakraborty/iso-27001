import ContactForm from "./ContactForm";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_440px] gap-16 items-center px-[6%] pt-[140px] pb-[90px] overflow-hidden">
      {/* Orbs */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsla(217,80%,53%,0.22),transparent_70%)] -top-[200px] -left-[120px] blur-[90px] pointer-events-none" style={{ animation: "floatA 14s ease-in-out infinite" }} />
      <div className="absolute w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,hsla(187,94%,43%,0.15),transparent_70%)] -bottom-[80px] -right-[80px] blur-[90px] pointer-events-none" style={{ animation: "floatB 18s ease-in-out infinite" }} />
      <div className="grid-bg" />

      {/* Left content */}
      <div className="relative z-5">
        <div className="inline-flex items-center gap-2.5 bg-accent/10 border border-accent/30 rounded-full py-1.5 px-4 text-[0.73rem] font-bold text-accent font-display tracking-[1.5px] uppercase mb-7 animate-fade-down">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
          ISO 27001 Compliance Platform for US Enterprises
        </div>

        <h1 className="font-display text-[clamp(2.4rem,4.2vw,3.6rem)] font-black leading-[1.08] tracking-[-2px] mb-5 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Achieve ISO 27001<br />
          <span className="gradient-text">10× Faster.</span><br />
          With Certainty.
        </h1>

        <p className="text-[1.05rem] text-foreground/60 max-w-[520px] leading-[1.8] mb-9 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Stop drowning in spreadsheets. Cloud Astra automates evidence collection, maps your controls, and guides your team from gap assessment to certification in weeks — not months.
        </p>

        <div className="flex gap-3.5 flex-wrap animate-fade-up" style={{ animationDelay: "0.45s" }}>
          <button className="gradient-btn text-foreground border-none py-3.5 px-7 rounded-lg font-display font-bold text-[0.9rem] cursor-pointer tracking-wide shadow-[0_8px_32px_hsla(217,80%,53%,0.4)] hover:-translate-y-[3px] hover:shadow-[0_14px_40px_hsla(217,80%,53%,0.55)] transition-all flex items-center gap-2">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 2.134L8 0l2.5 2.134L13 2l.732 2.866L16 6.5l-1.134 2.5L16 11.5l-2.268 1.634L13 16l-2.5-1.134L8 16l-2.5-1.134L3 16l-.732-2.866L0 11.5l1.134-2.5L0 6.5l2.268-1.634L3 2l2.5.134z"/></svg>
            Start Free Assessment
          </button>
          <button className="bg-transparent text-foreground/90 border border-foreground/20 py-3.5 px-6 rounded-lg font-display font-semibold text-[0.9rem] cursor-pointer hover:border-accent hover:text-accent hover:bg-accent/5 transition-all flex items-center gap-2">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 11.41a16 16 0 006.5 6.5l2.24-2.24a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68a2 2 0 011.72 2.02z"/></svg>
            Talk to an Expert
          </button>
        </div>

        <div className="flex gap-0 mt-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
          {[
            { val: "500+", lbl: "US Companies Certified" },
            { val: "3 Wks", lbl: "Avg. to Audit-Ready" },
            { val: "90%", lbl: "Less Manual Work" },
            { val: "98%", lbl: "First-Pass Rate" },
          ].map((m, i) => (
            <div key={i} className="px-6 first:pl-0 border-r border-foreground/10 last:border-r-0">
              <div className="font-display text-2xl font-black bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-transparent leading-none">{m.val}</div>
              <div className="text-[0.72rem] text-foreground/60 mt-1 font-medium">{m.lbl}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3.5 mt-7 animate-fade-up" style={{ animationDelay: "0.75s" }}>
          <div className="flex">
            {["MK", "SR", "AT", "JL"].map((initials, i) => (
              <div
                key={i}
                className="w-[30px] h-[30px] rounded-full border-2 border-navy-light -mr-2 flex items-center justify-center text-[0.62rem] font-bold font-display"
                style={{
                  background: ["hsl(217,80%,53%)", "hsl(187,94%,43%)", "hsl(38,95%,50%)", "hsl(0,84%,60%)"][i],
                }}
              >
                {initials}
              </div>
            ))}
          </div>
          <p className="text-[0.8rem] text-foreground/60 leading-snug">
            <strong className="text-foreground font-semibold">500+ security leaders</strong> across the US trust Cloud Astra<br />to automate their ISO 27001 journey.
          </p>
        </div>
      </div>

      {/* Right form */}
      <div id="form" className="relative z-5 animate-form-in">
        <ContactForm />
      </div>
    </section>
  );
}
