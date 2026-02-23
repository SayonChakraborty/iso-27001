const logos = ["NEXUS", "HEALTHPAY", "BRIDGE", "STACKFORGE", "VAULTLOGIC", "CLOUDREX", "TRAKR.AI", "MERIDIAN"];

export default function LogoBar() {
  return (
    <div className="py-8 px-[6%] border-t border-foreground/5 border-b border-b-foreground/5 bg-secondary/50 relative z-5">
      <p className="text-center text-[0.7rem] font-bold tracking-[2px] uppercase text-foreground/30 mb-5 font-display">
        Trusted by 500+ US Companies Across Every Industry
      </p>
      <div className="flex items-center justify-center gap-12 flex-wrap">
        {logos.map((n) => (
          <span key={n} className="font-display text-[0.82rem] font-extrabold tracking-[1.5px] text-foreground/20 hover:text-foreground/50 transition-colors cursor-default">
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}
