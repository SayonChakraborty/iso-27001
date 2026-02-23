import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-[200] px-[6%] h-[72px] flex items-center justify-between transition-all duration-400 ${
        scrolled
          ? "bg-background/95 backdrop-blur-[20px] border-b border-border"
          : ""
      }`}
    >
      <a href="#" className="flex items-center gap-3 no-underline text-foreground font-display font-extrabold text-[1.3rem] tracking-tight">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
          <circle cx="19" cy="19" r="17" stroke="url(#lg)" strokeWidth="2" />
          <path d="M13 19a6 6 0 0112 0" stroke="url(#lg)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="19" cy="14" r="2" fill="url(#lg)" />
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="38" y2="38">
              <stop stopColor="hsl(217,92%,60%)" />
              <stop offset="1" stopColor="hsl(187,94%,43%)" />
            </linearGradient>
          </defs>
        </svg>
        Cloud<span className="gradient-text"> Astra</span>
      </a>
      <div className="flex items-center gap-6">
        <a href="#how" className="text-foreground/60 text-sm no-underline font-medium hover:text-foreground transition-colors hidden sm:block">How It Works</a>
        <a href="#features" className="text-foreground/60 text-sm no-underline font-medium hover:text-foreground transition-colors hidden sm:block">Features</a>
        <button
          onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
          className="gradient-btn text-foreground border-none px-6 py-2.5 rounded-[7px] font-display font-bold text-[0.85rem] cursor-pointer tracking-wide shadow-[0_4px_24px_hsla(217,80%,53%,0.35)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_hsla(217,80%,53%,0.5)] transition-all"
        >
          Get Certified →
        </button>
      </div>
    </nav>
  );
}
