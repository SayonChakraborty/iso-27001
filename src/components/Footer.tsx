import logoImg from "@/assets/cloudastra-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 py-7 px-[6%] flex items-center justify-between flex-wrap gap-4 relative z-5">
      <div className="flex items-center gap-6">
        <img src={logoImg} alt="Cloudastra Technologies" className="h-[60px] w-auto" />
        <div className="flex gap-5">
          {["Privacy", "Terms", "Security", "Contact"].map((l) => (
            <a key={l} href="#" className="text-foreground/30 no-underline text-[0.78rem] hover:text-foreground/70 transition-colors">{l}</a>
          ))}
        </div>
      </div>
      <p className="text-[0.73rem] text-foreground/20">© 2025 Cloudastra Technologies. All rights reserved.</p>
    </footer>
  );
}
