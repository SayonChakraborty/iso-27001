import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Google Tag Manager Event
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "lead_form_submit",
      service: "ISO 27001 Certification",
      campaign: "cloudastra_iso_landing",
    });

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <div className="bg-[hsla(214,75%,10%,0.93)] border border-primary/25 rounded-3xl p-9 shadow-[0_40px_80px_rgba(0,0,0,0.6),var(--glow-blue)] backdrop-blur-[20px] relative overflow-hidden">
        {/* Top gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        {/* Decorative orb */}
        <div className="absolute -top-[120px] -right-[80px] w-[280px] h-[280px] rounded-full bg-[radial-gradient(circle,hsla(217,80%,53%,0.1),transparent_70%)] pointer-events-none" />

        <div className="inline-flex items-center gap-1.5 bg-green/15 border border-green/30 rounded-full py-1 px-3 text-[0.7rem] font-bold text-green font-display tracking-[1px] uppercase mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-green" />
          Free · No Commitment
        </div>

        <h3 className="font-display font-extrabold text-[1.25rem] tracking-tight leading-tight mb-1">Get ISO 27001 Certified with Cloud Astra</h3>
        <p className="text-sm text-foreground/60 mb-5">Fill out below — our expert will reach out within 24 hours.</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="flex items-center gap-1.5 text-[0.7rem] font-bold text-foreground/45 mb-1 tracking-wide uppercase">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                First Name
              </label>
              <input className="w-full py-2.5 px-3 bg-foreground/5 border border-foreground/10 rounded-[9px] text-foreground text-sm focus:outline-none focus:border-blue-el focus:bg-primary/10 focus:shadow-[0_0_0_3px_hsla(217,92%,60%,0.12)] transition-all placeholder:text-foreground/20" placeholder="John" />
            </div>
            <div>
              <label className="flex items-center gap-1.5 text-[0.7rem] font-bold text-foreground/45 mb-1 tracking-wide uppercase">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                Last Name
              </label>
              <input className="w-full py-2.5 px-3 bg-foreground/5 border border-foreground/10 rounded-[9px] text-foreground text-sm focus:outline-none focus:border-blue-el focus:bg-primary/10 focus:shadow-[0_0_0_3px_hsla(217,92%,60%,0.12)] transition-all placeholder:text-foreground/20" placeholder="Smith" />
            </div>
          </div>
          <div>
            <label className="flex items-center gap-1.5 text-[0.7rem] font-bold text-foreground/45 mb-1 tracking-wide uppercase">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
              Work Email
            </label>
            <input type="email" className="w-full py-2.5 px-3 bg-foreground/5 border border-foreground/10 rounded-[9px] text-foreground text-sm focus:outline-none focus:border-blue-el focus:bg-primary/10 focus:shadow-[0_0_0_3px_hsla(217,92%,60%,0.12)] transition-all placeholder:text-foreground/20" placeholder="john@company.com" required />
          </div>
          <div>
            <label className="flex items-center gap-1.5 text-[0.7rem] font-bold text-foreground/45 mb-1 tracking-wide uppercase">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.79 19.79 0 013.09 5.18 2 2 0 015.11 3h3a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11L8.09 11.41a16 16 0 006.5 6.5l2.24-2.24a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68a2 2 0 011.72 2.02z"/></svg>
              Phone Number
            </label>
            <input className="w-full py-2.5 px-3 bg-foreground/5 border border-foreground/10 rounded-[9px] text-foreground text-sm focus:outline-none focus:border-blue-el focus:bg-primary/10 focus:shadow-[0_0_0_3px_hsla(217,92%,60%,0.12)] transition-all placeholder:text-foreground/20" placeholder="+1 (555) 000-0000" />
          </div>
          <div>
            <label className="flex items-center gap-1.5 text-[0.7rem] font-bold text-foreground/45 mb-1 tracking-wide uppercase">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
              Company Name
            </label>
            <input className="w-full py-2.5 px-3 bg-foreground/5 border border-foreground/10 rounded-[9px] text-foreground text-sm focus:outline-none focus:border-blue-el focus:bg-primary/10 focus:shadow-[0_0_0_3px_hsla(217,92%,60%,0.12)] transition-all placeholder:text-foreground/20" placeholder="Your Company Inc." />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="flex items-center gap-1.5 text-[0.7rem] font-bold text-foreground/45 mb-1 tracking-wide uppercase">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                Company Size
              </label>
              <select className="w-full py-2.5 px-3 bg-foreground/5 border border-foreground/10 rounded-[9px] text-foreground text-sm focus:outline-none focus:border-blue-el focus:bg-primary/10 transition-all appearance-none">
                <option>Select size</option>
                <option>1–50 employees</option>
                <option>51–200 employees</option>
                <option>201–500 employees</option>
                <option>500–1,000 employees</option>
                <option>1,000+ employees</option>
              </select>
            </div>
            <div>
              <label className="flex items-center gap-1.5 text-[0.7rem] font-bold text-foreground/45 mb-1 tracking-wide uppercase">
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
                Industry
              </label>
              <select className="w-full py-2.5 px-3 bg-foreground/5 border border-foreground/10 rounded-[9px] text-foreground text-sm focus:outline-none focus:border-blue-el focus:bg-primary/10 transition-all appearance-none">
                <option>Select industry</option>
                <option>SaaS / Technology</option>
                <option>Healthcare / Healthtech</option>
                <option>Financial Services</option>
                <option>E-Commerce / Retail</option>
                <option>Government / Defense</option>
                <option>Manufacturing</option>
                <option>Education</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div>
            <label className="flex items-center gap-1.5 text-[0.7rem] font-bold text-foreground/45 mb-1 tracking-wide uppercase">
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              Certification Timeline
            </label>
            <select className="w-full py-2.5 px-3 bg-foreground/5 border border-foreground/10 rounded-[9px] text-foreground text-sm focus:outline-none focus:border-blue-el focus:bg-primary/10 transition-all appearance-none">
              <option>When do you need to be certified?</option>
              <option>ASAP — Within 3 months</option>
              <option>3–6 months</option>
              <option>6–12 months</option>
              <option>Just exploring options</option>
            </select>
          </div>
          <button type="submit" className="w-full py-4 mt-2 gradient-btn border-none rounded-[10px] text-foreground font-display font-extrabold text-[0.9rem] tracking-wide cursor-pointer shadow-[0_8px_30px_hsla(217,80%,53%,0.45)] hover:-translate-y-[3px] hover:shadow-[0_14px_40px_hsla(217,80%,53%,0.6)] transition-all flex items-center justify-center gap-2.5">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 2.134L8 0l2.5 2.134L13 2l.732 2.866L16 6.5l-1.134 2.5L16 11.5l-2.268 1.634L13 16l-2.5-1.134L8 16l-2.5-1.134L3 16l-.732-2.866L0 11.5l1.134-2.5L0 6.5l2.268-1.634L3 2l2.5.134z"/></svg>
            Get My Free Consultation
          </button>
        </form>

        <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-foreground/10">
          {[
            { icon: "🔒", label: "SSL Secured" },
            { icon: "🚫", label: "No Spam Ever" },
            { icon: "🛡️", label: "Data Protected" },
          ].map((t, i) => (
            <div key={i} className="flex items-center gap-1.5 text-[0.7rem] text-foreground/40">
              <span className="text-xs">{t.icon}</span>
              {t.label}
            </div>
          ))}
        </div>
      </div>

      {/* Toast */}
      {submitted && (
        <div className="fixed bottom-8 right-8 z-[2000] gradient-btn text-foreground py-4 px-5 rounded-xl font-display font-bold text-sm shadow-[0_16px_48px_hsla(160,84%,40%,0.45)] flex items-center gap-2.5 animate-fade-up" style={{ background: "linear-gradient(135deg, hsl(160,84%,40%), hsl(160,72%,50%))" }}>
          ✓ Request received! We'll contact you within 24 hours.
        </div>
      )}
    </>
  );
}
