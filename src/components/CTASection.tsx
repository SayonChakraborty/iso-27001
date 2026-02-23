export default function CTASection() {
  return (
    <section className="py-28 px-[6%] text-center relative bg-gradient-to-b from-navy-mid to-background">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[radial-gradient(ellipse,hsla(217,80%,53%,0.15),transparent_70%)] pointer-events-none" />

      <h2 className="font-display text-[clamp(1.9rem,3.5vw,2.9rem)] font-black tracking-tight mb-4 relative reveal">
        Ready to Get <span className="gradient-text">ISO 27001 Certified?</span>
      </h2>
      <p className="text-foreground/60 mb-10 relative max-w-[480px] mx-auto leading-relaxed reveal delay-1">
        Join 500+ US companies that chose the faster, smarter path to compliance. Start with a free gap assessment — no credit card, no commitment.
      </p>
      <div className="flex gap-4 justify-center relative flex-wrap reveal delay-2">
        <button
          onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
          className="gradient-btn text-foreground border-none py-3.5 px-7 rounded-lg font-display font-bold text-[0.9rem] cursor-pointer shadow-[0_8px_32px_hsla(217,80%,53%,0.4)] hover:-translate-y-[3px] hover:shadow-[0_14px_40px_hsla(217,80%,53%,0.55)] transition-all flex items-center gap-2"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 2.134L8 0l2.5 2.134L13 2l.732 2.866L16 6.5l-1.134 2.5L16 11.5l-2.268 1.634L13 16l-2.5-1.134L8 16l-2.5-1.134L3 16l-.732-2.866L0 11.5l1.134-2.5L0 6.5l2.268-1.634L3 2l2.5.134z"/></svg>
          Start Free Assessment
        </button>
        <button className="bg-transparent text-foreground/90 border border-foreground/20 py-3.5 px-6 rounded-lg font-display font-semibold text-[0.9rem] cursor-pointer hover:border-accent hover:text-accent hover:bg-accent/5 transition-all flex items-center gap-2">
          Schedule a Demo
        </button>
      </div>
      <p className="mt-4 text-[0.72rem] text-foreground/30 relative reveal delay-3">No credit card · No commitment · Setup in 5 minutes</p>
    </section>
  );
}
