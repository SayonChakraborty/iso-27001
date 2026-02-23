import { useState } from "react";

const faqs = [
  { q: "How long does it take to get ISO 27001 certified with Cloud Astra?", a: "Most of our US customers reach audit-ready status in 3–8 weeks, depending on their starting point and team capacity. Our platform automates the vast majority of the work, so you can move fast without cutting corners." },
  { q: "What does your pricing look like?", a: "We offer transparent, flat-rate annual subscriptions. No surprise consulting invoices. Your subscription includes the platform, a dedicated compliance expert, all policy templates, and full audit support." },
  { q: "Do we still need a consultant?", a: "No. Cloud Astra replaces the need for traditional consulting. Every customer gets a dedicated ISO 27001 certified compliance expert included in their subscription." },
  { q: "Which cloud providers and tools do you integrate with?", a: "We integrate with 100+ tools including AWS, Azure, GCP, GitHub, GitLab, Okta, Google Workspace, Slack, Jira, and many more. Evidence is collected automatically, 24/7." },
  { q: "Can Cloud Astra help with other frameworks besides ISO 27001?", a: "Absolutely. Our platform supports ISO 27001, SOC 2, HIPAA, GDPR, NIST CSF, and more — all on one platform. Evidence is automatically reused across frameworks." },
  { q: "What happens after we get certified?", a: "Cloud Astra provides continuous monitoring to keep you certified year-round. Our platform watches your environment 24/7 and alerts you to compliance drifts, making surveillance audits routine." },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative">
      <div className="py-24 px-[6%]">
        <div className="text-center reveal">
          <span className="inline-flex items-center gap-2 font-display text-[0.7rem] font-bold tracking-[2.5px] uppercase text-accent mb-3.5">
            FAQ <span className="w-5 h-px bg-accent" />
          </span>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.7rem)] font-black leading-[1.12] tracking-tight mb-4">
            Common <span className="gradient-text">Questions</span>
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto mt-12">
          {faqs.map((f, i) => (
            <div key={i} className="border-b border-foreground/10 overflow-hidden reveal">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full bg-transparent border-none text-foreground font-display font-semibold text-[0.9rem] text-left py-5 cursor-pointer flex justify-between items-center gap-5 hover:text-accent transition-colors"
              >
                {f.q}
                <span className={`w-7 h-7 shrink-0 rounded-full border flex items-center justify-center transition-all ${open === i ? "bg-accent/15 border-accent/40" : "border-foreground/20"}`}>
                  <svg
                    width="14" height="14" fill="none" stroke={open === i ? "hsl(187,94%,43%)" : "currentColor"} strokeWidth="2" viewBox="0 0 24 24"
                    className={`transition-transform ${open === i ? "rotate-45" : ""}`}
                  >
                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div className={`faq-body ${open === i ? "open" : ""}`}>
                <div className="faq-inner">
                  <p className="text-[0.875rem] text-foreground/60 leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
