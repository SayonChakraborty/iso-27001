import logoImg from "@/assets/cloudastra-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 py-10 px-[6%] relative z-5">
      <div className="flex flex-wrap gap-10 justify-between items-start">
        {/* Logo & Links */}
        <div className="flex flex-col gap-4">
          <img src={logoImg} alt="Cloudastra Technologies" className="h-[60px] w-auto" />
          <div className="flex gap-5">
            {["Privacy", "Terms", "Security", "Contact"].map((l) => (
              <a key={l} href="#" className="text-foreground/30 no-underline text-[0.78rem] hover:text-foreground/70 transition-colors">{l}</a>
            ))}
          </div>
        </div>

        {/* US Branch */}
        <div className="flex flex-col gap-1.5 text-sm text-foreground/60">
          <div className="flex items-center gap-2 font-display font-bold text-foreground/90 text-[0.9rem] mb-1">
            <span className="text-lg">🇺🇸</span>
            US Branch
          </div>
          <p className="text-[0.82rem] leading-relaxed text-foreground/50">
            264 W 40th St suite 503,<br />
            New York, NY 10018 United States
          </p>
          <a href="tel:+16313493602" className="text-[0.82rem] text-foreground/50 no-underline hover:text-accent transition-colors">+1 (631) 349-3602</a>
          <a href="mailto:contact@cloudastra.co" className="text-[0.82rem] text-foreground/50 no-underline hover:text-accent transition-colors">contact@cloudastra.co</a>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-foreground/5">
        <p className="text-[0.73rem] text-foreground/20">© 2025 Cloudastra Technologies. All rights reserved.</p>
      </div>
    </footer>
  );
}
