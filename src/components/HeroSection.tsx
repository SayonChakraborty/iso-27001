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
          Get ISO 27001 compliant<br />
          in <span className="gradient-text">&lt; 6 weeks</span>
        </h1>

        <p className="text-[1.05rem] text-foreground/60 max-w-[520px] leading-[1.8] mb-9 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Streamline your ISO security certification with Cloud Astra's smartGRC platform and expert support.
        </p>

        <div className="flex gap-6 flex-wrap mb-9 animate-fade-up" style={{ animationDelay: "0.35s" }}>
          {["Audit-ready in less than 6 weeks", "Manual effort reduced by 70%", "Guaranteed error-free reporting"].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-[0.88rem] text-foreground/80">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              {item}
            </div>
          ))}
        </div>

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

        <div className="flex items-center gap-6 flex-wrap mt-7 animate-fade-up" style={{ animationDelay: "0.75s" }}>
          {/* Trustpilot */}
          <div className="flex items-center gap-2.5 bg-card/60 border border-primary/15 rounded-lg px-4 py-2.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.09 6.26H21l-5.55 4.03 2.09 6.44L12 14.69l-5.55 4.04 2.09-6.44L3 8.26h6.91L12 2z" fill="hsl(160,84%,40%)"/></svg>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(4)].map((_, i) => <span key={i} className="text-[hsl(160,84%,40%)] text-[0.75rem]">★</span>)}
                <span className="text-[hsl(160,84%,40%)]/60 text-[0.75rem]">★</span>
              </div>
              <div className="text-[0.68rem] text-foreground/50 font-medium mt-0.5">
                <strong className="text-foreground/80">4.5/5</strong> on Trustpilot
              </div>
            </div>
          </div>
          {/* Google */}
          <div className="flex items-center gap-2.5 bg-card/60 border border-primary/15 rounded-lg px-4 py-2.5">
            <svg width="18" height="18" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
            <div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => <span key={i} className="text-gold text-[0.75rem]">★</span>)}
              </div>
              <div className="text-[0.68rem] text-foreground/50 font-medium mt-0.5">
                <strong className="text-foreground/80">5/5</strong> on Google
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right form */}
      <div id="form" className="relative z-5 animate-form-in">
        <ContactForm />
      </div>
    </section>
  );
}
