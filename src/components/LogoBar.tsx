import groww from "@/assets/logos/groww.png";
import mastercard from "@/assets/logos/mastercard.png";
import leadcenter from "@/assets/logos/leadcenter.png";
import altcase from "@/assets/logos/altcase.png";
import mhp from "@/assets/logos/mhp.png";
import tompkins from "@/assets/logos/tompkins.png";
import politech from "@/assets/logos/politech.png";
import freecast from "@/assets/logos/freecast.png";

const logos = [
  { src: groww, alt: "Groww" },
  { src: mastercard, alt: "MasterCard" },
  { src: leadcenter, alt: "LeadCenter.AI" },
  { src: altcase, alt: "Altcase" },
  { src: mhp, alt: "MHP" },
  { src: tompkins, alt: "Tompkins Robotics" },
  { src: politech, alt: "Politech" },
  { src: freecast, alt: "FreeCast" },
];

export default function LogoBar() {
  return (
    <div className="py-8 px-[6%] border-t border-foreground/5 border-b border-b-foreground/5 bg-secondary/50 relative z-5 overflow-hidden">
      <p className="text-center text-[0.7rem] font-bold tracking-[2px] uppercase text-foreground/30 mb-5 font-display">
        Trusted by 500+ US Companies Across Every Industry
      </p>
      <div className="relative w-full overflow-hidden mask-gradient">
        <div className="flex items-center gap-16 animate-marquee w-max">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <img
              key={`${logo.alt}-${i}`}
              src={logo.src}
              alt={logo.alt}
              className="h-8 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
