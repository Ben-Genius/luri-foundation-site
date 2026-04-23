import Image from "next/image";
import { ShieldCheck, Truck, BookOpen, Users, Globe, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { RippleButton } from "@/components/motion/RippleButton";
import { ScrollThemeSection } from "@/components/motion/ScrollThemeSection";
import { PartnerEnquiryForm } from "@/components/sections/PartnerEnquiryForm";

export const metadata = {
  title: "Partners — LURI Foundation",
  description:
    "Project CURE collaboration and partnership models for organisations aligned with LURI Foundation's mission.",
};

const partnershipTypes = [
  {
    icon: Truck,
    num: "01",
    title: "In-kind supply",
    body: "Medical supplies, agricultural inputs, tools, and equipment delivered directly to programme participants — fully traceable with zero cash leakage.",
    accent: "#0a5c60",
    accentRgb: "10,92,96",
  },
  {
    icon: BookOpen,
    num: "02",
    title: "Technical expertise",
    body: "Training facilitation, curriculum development, and knowledge transfer from sector specialists who work alongside community trainers.",
    accent: "#b69000",
    accentRgb: "182,144,0",
  },
  {
    icon: Users,
    num: "03",
    title: "Joint fundraising",
    body: "Co-designed grant applications and shared fundraising campaigns with aligned mission partners — expanding reach without duplicating effort.",
    accent: "#e85a4a",
    accentRgb: "232,90,74",
  },
  {
    icon: Globe,
    num: "04",
    title: "Advocacy",
    body: "Joint policy advocacy and community representation driving systemic change in healthcare access, agricultural policy, and STEM education in Ghana.",
    accent: "#0a5c60",
    accentRgb: "10,92,96",
  },
];

const moUFeatures = [
  "Defined roles and responsibilities for each party",
  "Shared accountability metrics and reporting schedules",
  "Community Advisory Committee oversight",
  "Annual independent evaluation of partnership outcomes",
  "Conflict of interest disclosure protocols",
];

const currentPartners = [
  { name: "Project C.U.R.E", category: "Medical Supply", status: "Active MoU" },
  { name: "Upper West Health Directorate", category: "Healthcare", status: "Active" },
  { name: "Kulfuo Advisory Committee", category: "Community", status: "Active" },
  { name: "Ghana Health Service", category: "Healthcare", status: "Active" },
  { name: "Regional Farmers Coop", category: "Agribusiness", status: "Active" },
  { name: "Ministry of Education", category: "STEM", status: "Active" },
];

export default function PartnersPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="pt-28 sm:pt-36 pb-16 overflow-hidden" style={{ backgroundColor: "#020d08" }}>
        <div className="max-w-[80%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-16">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/60 text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.10)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                  Partnerships
                </div>
              </Reveal>
              <SplitHeading
                as="h1"
                text="Built to last beyond project cycles."
                highlightWords={["last", "cycles."]}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight max-w-3xl"
              />
            </div>
            <Reveal direction="right" delay={0.15}>
              <p className="text-white/45 text-sm sm:text-base leading-relaxed max-w-xs md:text-right">
                Every LURI partnership is governed by a formal MoU — structured, accountable, and community-first.
              </p>
            </Reveal>
          </div>

          {/* Partner name strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {currentPartners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.06}>
                <div
                  className="rounded-lg px-4 py-4 flex flex-col gap-1"
                  style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <p className="text-white font-semibold text-xs leading-snug">{p.name}</p>
                  <p className="text-white/30 text-[0.55rem] uppercase tracking-widest">{p.category}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROJECT CURE SPOTLIGHT ══ */}
      <section className="section-pad bg-white">
        <div className="max-w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left — content */}
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                  style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  Featured Partner
                </div>
              </Reveal>
              <SplitHeading
                as="h2"
                text="Project C.U.R.E."
                highlightWords={["Project"]}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--ink)] tracking-tight mb-6"
              />
              <Reveal delay={0.15}>
                <p className="text-[var(--ink-600)] text-base leading-relaxed mb-4">
                  Project C.U.R.E. is the world&apos;s largest distributor of donated medical supplies,
                  operating in over 135 countries. Through this partnership, LURI gains access to
                  medical kits, hygiene supplies, PPE, and technical expertise that would otherwise
                  be out of reach for communities in the Upper West Region.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-[var(--ink-600)] text-base leading-relaxed mb-8">
                  Governed by a formal MoU with defined roles, accountability measures, and a shared
                  commitment to community-owned healthcare delivery.
                </p>
              </Reveal>
              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-4 text-white">
                  <a
                    href="https://www.projectcure.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--primary)] text-white text-sm font-semibold hover:bg-[var(--primary-dark)] transition-colors"
                  >
                    Visit Project C.U.R.E. <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <RippleButton href="/get-involved" variant="primary" size="md" textColor="white">
                    Partner with us
                  </RippleButton>
                </div>
              </Reveal>
            </div>

            {/* Right — feature card */}
            <Reveal direction="right" delay={0.1}>
              <div
                className="rounded-lg p-8 sm:p-10 h-full"
                style={{ backgroundColor: "#f5f5f4", border: "1px solid rgba(0,0,0,0.06)" }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-white flex-shrink-0 border border-black/5">
                    <Image
                      src="/images/partners/project-cure-logo.jpg"
                      alt="Project C.U.R.E. Logo"
                      fill
                      className="object-contain p-1"
                    />
                  </div>
                  <div>
                    <p className="font-extrabold text-[var(--ink)] text-xl tracking-tight">Project C.U.R.E.</p>
                    <p className="text-[var(--ink-600)] text-xs mt-0.5">World&apos;s largest medical supply distributor</p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-wider px-4 py-2 rounded-full w-fit mb-8"
                  style={{ backgroundColor: "rgba(0,80,53,0.08)", border: "1px solid rgba(0,80,53,0.15)", color: "var(--primary)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  Active MoU Partnership
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { val: "135+", label: "Countries served" },
                    { val: "Active", label: "Partnership status" },
                    { val: "MoU", label: "Governance structure" },
                    { val: "2024", label: "Partnership established" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-lg p-4"
                      style={{ backgroundColor: "rgba(0,80,53,0.06)", border: "1px solid rgba(0,80,53,0.08)" }}
                    >
                      <p className="font-extrabold text-[var(--primary)] text-xl">{stat.val}</p>
                      <p className="text-[var(--ink-600)] text-xs mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2.5">
                  {["Medical supply provision", "Technical expertise", "Resource mobilisation", "Advocacy support"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-[var(--ink-600)]">
                      <CheckCircle2 className="h-4 w-4 text-[var(--primary)] flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ PARTNERSHIP TYPES ══ */}
      <ScrollThemeSection theme="#005035">
        <section className="section-pad text-white" style={{ backgroundColor: "#005035" }}>
          <div className="max-w-[80%] mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-14">
              <div>
                <Reveal>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/70 text-[0.62rem] font-bold uppercase tracking-widest mb-5"
                    style={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.15)" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                    Partnership Models
                  </div>
                </Reveal>
                <SplitHeading
                  as="h2"
                  text="Four ways to partner with LURI."
                  highlightWords={["Four"]}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight max-w-xl"
                />
              </div>
              <Reveal delay={0.1}>
                <p className="text-white/55 text-sm leading-relaxed max-w-xs md:text-right">
                  Every partnership is structured, community-first, and governed by a formal MoU with public reporting.
                </p>
              </Reveal>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              {partnershipTypes.map((type, i) => {
                const Icon = type.icon;
                return (
                  <Reveal key={type.title} delay={i * 0.08}>
                    <div
                      className="rounded-lg p-7 h-full flex flex-col gap-5 group cursor-default transition-all duration-200 hover:border-opacity-30"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: `rgba(${type.accentRgb},0.2)`, color: type.accent }}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span
                          className="text-[0.62rem] font-bold uppercase tracking-widest"
                          style={{ color: "rgba(255,255,255,0.25)" }}
                        >
                          {type.num}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base mb-2 tracking-tight">{type.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{type.body}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      </ScrollThemeSection>

      {/* ══ MOU GOVERNANCE ══ */}
      <section className="section-pad bg-white">
        <div className="max-w-[80%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-5"
                  style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  Governance
                </div>
              </Reveal>
              <SplitHeading
                as="h2"
                text="Every partnership is formally governed."
                highlightWords={["formally", "governed."]}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--ink)] tracking-tight mb-6"
              />
              <Reveal delay={0.15}>
                <p className="text-[var(--ink-600)] text-base leading-relaxed mb-8">
                  All external relationships are governed by signed Memoranda of Understanding with
                  clear accountability structures, community oversight, and public reporting requirements.
                  We do not take informal or ad-hoc partnerships.
                </p>
              </Reveal>
              <div className="flex flex-col gap-3">
                {moUFeatures.map((item, i) => (
                  <Reveal key={i} delay={i * 0.06}>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                      <p className="text-[var(--ink-600)] text-sm">{item}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Visual card */}
            <Reveal direction="right" delay={0.1}>
              <div
                className="rounded-lg p-8 sm:p-10"
                style={{ backgroundColor: "var(--primary-dark)", color: "white" }}
              >
                <div className="w-6 h-6 rounded-t-full bg-[var(--accent)] mb-6" />
                <h3 className="text-xl font-extrabold text-white mb-3 tracking-tight">
                  Ready to partner?
                </h3>
                <p className="text-white/55 text-sm leading-relaxed mb-8">
                  Submit an enquiry below and our partnerships team will reach out within 5 business
                  days to discuss alignment, structure, and next steps.
                </p>

                <div className="flex flex-col gap-3 mb-8">
                  {["Aligned mission and community values", "Capacity for formal MoU governance", "Commitment to transparent reporting"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-white/60">
                      <span className="h-1.5 w-1.5 rounded-full flex-shrink-0 bg-[var(--accent)]" />
                      {item}
                    </div>
                  ))}
                </div>

                <RippleButton href="#enquiry" variant="primary" size="md" className="w-full justify-center">
                  Submit a partnership enquiry
                </RippleButton>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ ENQUIRY FORM ══ */}
      <div id="enquiry">
        <PartnerEnquiryForm />
      </div>
    </>
  );
}
