const logos = ["NEXUS", "HEALTHPAY", "BRIDGE", "STACKFORGE", "VAULTLOGIC", "CLOUDREX", "TRAKR.AI", "MERIDIAN"];

export default function LogoBar() {
  return (
    <div className="py-8 px-[6%] border-t border-foreground/5 border-b border-b-foreground/5 bg-secondary/50 relative z-5 overflow-hidden">
      <p className="text-center text-[0.7rem] font-bold tracking-[2px] uppercase text-foreground/30 mb-5 font-display">
        Trusted by 500+ US Companies Across Every Industry
      </p>
      <div className="relative w-full overflow-hidden mask-gradient">
        <div className="flex gap-16 animate-marquee w-max">
          {[...logos, ...logos, ...logos].map((n, i) => (
            <span key={`${n}-${i}`} className="font-display text-[0.95rem] font-extrabold tracking-[2px] text-foreground/90 whitespace-nowrap">
              {n}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
