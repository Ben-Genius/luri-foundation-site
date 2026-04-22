import Link from "next/link";
import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { RippleButton } from "@/components/motion/RippleButton";
import { programmePhases } from "@/lib/content/siteContent";
import { Heart, Leaf, GraduationCap, ArrowRight } from "lucide-react";

const programmes = [
  {
    icon: <Heart className="h-7 w-7" />,
    label: "Healthcare & Sanitation Training",
    slug: "healthcare",
    image: "/images/pillar-healthcare.png",
    color: "#0a5c60",
    bg: "bg-teal-50",
    iconBg: "bg-[var(--primary-light)]",
    iconColor: "text-[var(--primary)]",
    summary:
      "Community Health Volunteer certification, WASH education, first aid, and maternal health awareness — for women, girls, and youth aged 15–35.",
    participants: "Women & youth 15–35",
    outputs: "Medical kits · Hygiene kits · PPE · Reference manuals",
    outcome: "CHV certification + income pathway",
  },
  {
    icon: <Leaf className="h-7 w-7" />,
    label: "Agribusiness & Rural Economic Diversification",
    slug: "agribusiness",
    image: "/images/pillar-agribusiness.png",
    color: "#f0b033",
    bg: "bg-amber-50",
    iconBg: "bg-[var(--accent-light)]",
    iconColor: "text-[var(--accent)]",
    summary:
      "Climate-smart farming, post-harvest handling, value addition, cooperative formation, and buyer network linkages for smallholder farmers and rural youth.",
    participants: "Smallholder farmers · Rural youth",
    outputs: "Seed packs · Fertiliser · Tools · Irrigation equipment",
    outcome: "Agri-entrepreneur + market access",
  },
  {
    icon: <GraduationCap className="h-7 w-7" />,
    label: "STEM Education Scholarships",
    slug: "stem",
    image: "/images/pillar-stem.png",
    color: "#e85a4a",
    bg: "bg-red-50",
    iconBg: "bg-red-50",
    iconColor: "text-[var(--coral)]",
    summary:
      "Scholarships, mentorship, career counselling, internship facilitation, and innovation exposure for academically promising students from low-income households.",
    participants: "High-potential students · Low-income households",
    outputs: "Scholarship funds · Mentorship · Career pathways",
    outcome: "20 scholarships yr 1 → 100 by yr 3",
  },
];

export const metadata = {
  title: "Programmes — LURI Foundation",
  description: "Three integrated pillars: Healthcare training, Agribusiness, and STEM scholarships in Upper West Region, Ghana.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our programmes"
        title="Three pillars. One integrated model."
        description="Healthcare, agribusiness, and STEM are not separate silos — they are interconnected pathways to community resilience. Each programme is designed to assess, deliver, measure, and scale."
      />

      {/* ── Programme Cards ── */}
      <section className="section-pad bg-white">
        <div className="container-luri space-y-8">
          {programmes.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08} direction={i % 2 === 0 ? "left" : "right"}>
              <TiltCard>
                <div
                  className="grid gap-0 overflow-hidden rounded-2xl border border-[var(--primary)]/8 bg-white shadow-sm md:grid-cols-[280px_1fr]"
                  style={{ borderLeftColor: p.color, borderLeftWidth: "4px" }}
                >
                  {/* Image Section */}
                  <div className="relative h-48 w-full overflow-hidden md:h-auto">
                    <img
                      src={p.image}
                      alt={p.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                  </div>

                  {/* Content Section */}
                  <div className="flex items-start gap-5 p-7 md:p-8">
                    <div className={`flex-shrink-0 flex h-14 w-14 items-center justify-center rounded-xl ${p.iconBg} ${p.iconColor}`}>
                      {p.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className="text-xl font-extrabold text-[var(--ink)] mb-2 leading-snug"
                        style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                      >
                        {p.label}
                      </h3>
                      <p className="text-[var(--ink-600,#374151)] leading-relaxed mb-5 text-sm">{p.summary}</p>

                      <div className="grid gap-4 sm:grid-cols-3 text-xs">
                        <div>
                          <p className="font-bold uppercase tracking-wider text-[var(--primary)]/50 mb-1">Participants</p>
                          <p className="text-[var(--ink-600,#374151)]">{p.participants}</p>
                        </div>
                        <div>
                          <p className="font-bold uppercase tracking-wider text-[var(--primary)]/50 mb-1">What they receive</p>
                          <p className="text-[var(--ink-600,#374151)]">{p.outputs}</p>
                        </div>
                        <div>
                          <p className="font-bold uppercase tracking-wider text-[var(--primary)]/50 mb-1">Outcome</p>
                          <p className="text-[var(--ink-600,#374151)]">{p.outcome}</p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Link
                          href={`/programmes/${p.slug}`}
                          className="inline-flex items-center gap-1.5 text-sm font-bold transition-all hover:gap-3"
                          style={{ color: p.color }}
                        >
                          Full programme details <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Operating Model ── */}
      <section className="section-pad bg-[var(--cream-100,#f5f0e8)]">
        <div className="container-luri">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-3">How we work</p>
          </Reveal>
          <SplitHeading
            as="h2"
            text="From assessment to scale — five phases."
            className="mb-14 text-3xl font-extrabold text-[var(--ink)] md:text-5xl"
          />

          <div className="relative grid gap-5 sm:grid-cols-5">
            {programmePhases.map((phase, i) => (
              <Reveal key={phase.step} delay={i * 0.09}>
                <TiltCard className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-[var(--primary)]/8 bg-white p-5 text-center">
                    <p
                      className="text-3xl font-extrabold text-[var(--primary)]/20 mb-2"
                      style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                    >
                      {phase.step}
                    </p>
                    <h3
                      className="text-base font-bold text-[var(--ink)] mb-2"
                      style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                    >
                      {phase.title}
                    </h3>
                    <p className="text-xs text-[var(--ink-400,#6b7280)] leading-relaxed">{phase.body}</p>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Model Principles ── */}
      <section className="section-pad bg-[var(--primary-dark)] text-white">
        <div className="container-luri">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-3">Our approach</p>
          </Reveal>
          <SplitHeading
            as="h2"
            text="Non-cash inputs. Community ownership. Employer-linked pathways."
            className="mb-12 text-3xl font-extrabold text-white md:text-4xl"
          />

          <div className="grid gap-5 sm:grid-cols-3">
            {[
              {
                title: "No direct cash transfers",
                body: "All support goes into tools, materials, training, and scholarships — fully traceable, zero leakage.",
              },
              {
                title: "Community-owned delivery",
                body: "Programmes are co-designed with Community Advisory Committees and evaluated annually.",
              },
              {
                title: "Employer-linked pathways",
                body: "STEM graduates connect to mentors and employer networks. Agri-graduates link to buyer cooperatives.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.09}>
                <div className="rounded-2xl border border-white/12 bg-white/6 p-6">
                  <h3
                    className="mb-3 font-bold text-[var(--accent)]"
                    style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 pt-10 border-t border-white/8 flex flex-wrap gap-4">
              <RippleButton href="/get-involved/apply-training" variant="primary" size="md">
                Apply for training
              </RippleButton>
              <RippleButton href="/get-involved/apply-scholarship" variant="ghost" size="md">
                Apply for scholarship
              </RippleButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
