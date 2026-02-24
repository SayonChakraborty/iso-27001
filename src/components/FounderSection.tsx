import { useState, useEffect } from "react";
import founderImg from "@/assets/founder.png";

const founderQuotes = [
  {
    quote: "We built Cloud Astra because we saw brilliant teams burning months on compliance paperwork instead of building products. That had to change.",
    context: "On the mission",
  },
  {
    quote: "ISO 27001 shouldn't be a barrier to growth — it should be a competitive advantage. Our platform makes it exactly that.",
    context: "On compliance",
  },
  {
    quote: "Every enterprise we certify in under 6 weeks proves that automation and expertise together can do what neither can alone.",
    context: "On results",
  },
];

export default function FounderSection() {
  const [activeQuote, setActiveQuote] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActiveQuote((p) => (p + 1) % founderQuotes.length), 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden">
      {/* Distinct background — lighter contrast band */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(213,72%,6%)] via-[hsl(213,60%,8%)] to-[hsl(213,72%,6%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,hsla(217,80%,53%,0.06),transparent)] pointer-events-none" />

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t border-l border-accent/10 rounded-tl-[40px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b border-r border-accent/10 rounded-br-[40px] pointer-events-none" />

      <div className="relative z-10 py-20 px-[6%]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-center">
          {/* Founder image */}
          <div className="reveal flex justify-center md:justify-start">
            <div className="relative">
              <div className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] rounded-[28px] overflow-hidden border-2 border-accent/20 shadow-[0_0_60px_hsla(187,94%,43%,0.12)]">
                <img
                  src={founderImg}
                  alt="Founder of Cloud Astra"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-3 -right-3 bg-accent/90 text-background font-display font-black text-[0.65rem] tracking-wider uppercase px-3 py-1.5 rounded-lg shadow-lg">
                Founder
              </div>
              {/* Glow behind image */}
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl -z-10 pointer-events-none" />
            </div>
          </div>

          {/* Quote carousel */}
          <div className="reveal delay-1">
            <span className="inline-flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[2.5px] uppercase text-accent mb-4">
              From the Founder <span className="w-5 h-px bg-accent" />
            </span>

            <div className="relative min-h-[160px]">
              {founderQuotes.map((q, i) => (
                <div
                  key={i}
                  className="transition-all duration-700 absolute inset-0"
                  style={{
                    opacity: activeQuote === i ? 1 : 0,
                    transform: activeQuote === i ? "translateY(0)" : "translateY(16px)",
                    pointerEvents: activeQuote === i ? "auto" : "none",
                  }}
                >
                  <div className="text-[0.72rem] text-accent/70 font-display font-bold uppercase tracking-widest mb-3">
                    {q.context}
                  </div>
                  <blockquote className="text-[1.25rem] md:text-[1.5rem] text-foreground/90 leading-[1.45] font-display font-bold italic">
                    "{q.quote}"
                  </blockquote>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-foreground/10">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display font-black text-[1rem]">Rajesh Sharma</div>
                  <div className="text-foreground/50 text-[0.8rem]">Founder & CEO, Cloud Astra</div>
                </div>
                {/* Quote dots */}
                <div className="flex gap-2">
                  {founderQuotes.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveQuote(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeQuote === i
                          ? "bg-accent w-6"
                          : "bg-foreground/20 hover:bg-foreground/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
