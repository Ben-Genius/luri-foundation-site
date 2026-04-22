import Link from "next/link";
import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { RippleButton } from "@/components/motion/RippleButton";
import { MarqueeStrip } from "@/components/motion/MarqueeStrip";
import { givingTiers, volunteerRoles } from "@/lib/content/siteContent";
import { Heart, Users, Sprout, GraduationCap, ArrowRight } from "lucide-react";

const pathways = [
  {
    icon: <Heart className="h-7 w-7" />,
    title: "Donate",
    subtitle: "Fund tools, training & scholarships",
    body: "Your contribution goes directly into seed packs, medical kits, and scholarship funds — traceable, accountable, zero cash.",
    href: "/get-involved/donate",
    color: "#0a5c60",
    bg: "bg-[var(--primary-light)]",
    iconColor: "text-[var(--primary)]",
    cta: "Donate now",
  },
  {
    icon: <Users className="h-7 w-7" />,
    title: "Volunteer",
    subtitle: "Contribute your skills",
    body: "Facilitate training, mentor STEM students, or support community liaison work. Remote and in-person roles available.",
    href: "/get-involved/volunteer",
    color: "#f0b033",
    bg: "bg-[var(--accent-light)]",
    iconColor: "text-[var(--accent)]",
    cta: "Apply to volunteer",
  },
  {
    icon: <Sprout className="h-7 w-7" />,
    title: "Apply for Training",
    subtitle: "Healthcare or agribusiness",
    body: "Free skills training with tools and certification. Open to women, youth, and smallholder farmers in Upper West Region.",
    href: "/get-involved/apply-training",
    color: "#e85a4a",
    bg: "bg-red-50",
    iconColor: "text-[var(--coral)]",
    cta: "Apply for training",
  },
  {
    icon: <GraduationCap className="h-7 w-7" />,
    title: "Apply for Scholarship",
    subtitle: "STEM education funding",
    body: "Scholarships for academically promising students from low-income households. Secondary and tertiary STEM pathways.",
    href: "/get-involved/apply-scholarship",
    color: "#0a5c60",
    bg: "bg-[var(--primary-light)]",
    iconColor: "text-[var(--primary)]",
    cta: "Apply for scholarship",
  },
];

const marqueeItems = ["Donate", "Volunteer", "Apply for Training", "Apply for Scholarship", "Make an Impact", "Join LURI"];

export const metadata = {
  title: "Get Involved — LURI Foundation",
  description: "Donate, volunteer, apply for training or STEM scholarships with LURI Foundation in Upper West Region, Ghana.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageIntro
        eyebrow="Get involved"
        title="Four ways to make a difference."
        description="Whether you give, serve, learn, or apply — there is a place for you in LURI Foundation's community. Every form of support is traced to a real outcome."
      />

      {/* Marquee */}
      <div className="border-y border-[var(--primary)]/10 bg-[var(--cream-200,#ede6d8)] py-3">
        <MarqueeStrip
          items={marqueeItems}
          itemClassName="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50"
        />
      </div>

      {/* ── Four pathways ── */}
      <section className="section-pad bg-white">
        <div className="container-luri grid gap-6 md:grid-cols-2">
          {pathways.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <TiltCard className="h-full">
                <Link
                  href={p.href}
                  className="group flex h-full flex-col rounded-2xl border border-[var(--primary)]/8 bg-white p-7 hover:shadow-xl hover:shadow-[var(--primary)]/8 transition-shadow"
                  style={{ borderTopColor: p.color, borderTopWidth: "3px" }}
                >
                  <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${p.bg} ${p.iconColor}`}>
                    {p.icon}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: p.color }}>
                    {p.subtitle}
                  </p>
                  <h3
                    className="text-2xl font-extrabold text-[var(--ink)] mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="flex-1 text-sm text-[var(--ink-400,#6b7280)] leading-relaxed mb-6">{p.body}</p>
                  <span
                    className="inline-flex items-center gap-2 text-sm font-bold transition-all group-hover:gap-3"
                    style={{ color: p.color }}
                  >
                    {p.cta} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Giving Tiers ── */}
      <section className="section-pad bg-[var(--cream-100,#f5f0e8)]">
        <div className="container-luri">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-3">Your gift in action</p>
          </Reveal>
          <SplitHeading
            as="h2"
            text="Every amount. A real outcome."
            className="mb-12 text-3xl font-extrabold text-[var(--ink)] md:text-5xl"
          />

          <div className="grid gap-5 md:grid-cols-3">
            {givingTiers.map((tier, i) => (
              <Reveal key={tier.label} delay={i * 0.1}>
                <TiltCard className="h-full">
                  <div
                    className={`relative flex h-full flex-col rounded-2xl border bg-white p-7 ${
                      tier.featured
                        ? "border-[var(--accent)] shadow-xl shadow-[var(--accent)]/15"
                        : "border-[var(--primary)]/8"
                    }`}
                  >
                    {tier.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 pill bg-[var(--accent)] text-[var(--ink)] text-[10px] shadow">
                        Most popular
                      </span>
                    )}
                    <p className="text-3xl mb-4">{tier.icon}</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <p
                        className="text-2xl font-extrabold text-[var(--ink)]"
                        style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                      >
                        {tier.amount}
                      </p>
                      <p className="text-sm text-[var(--ink-400,#6b7280)]">{tier.usd}</p>
                    </div>
                    <p
                      className="text-base font-bold text-[var(--primary)] mb-3"
                      style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                    >
                      {tier.label}
                    </p>
                    <p className="flex-1 text-sm text-[var(--ink-400,#6b7280)] leading-relaxed mb-6">{tier.body}</p>
                    <RippleButton
                      href="/get-involved/donate"
                      variant={tier.featured ? "primary" : "secondary"}
                      size="md"
                      className="w-full justify-center"
                    >
                      Give {tier.amount}
                    </RippleButton>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="mt-6 text-center text-sm text-[var(--ink-400,#6b7280)]">
              LURI does not distribute cash. All support funds tools, materials, training, and scholarships.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Volunteer Roles ── */}
      <section className="section-pad bg-[var(--primary-dark)] text-white">
        <div className="container-luri">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-3">Volunteer</p>
          </Reveal>
          <SplitHeading
            as="h2"
            text="Contribute your skills. Shape communities."
            className="mb-12 text-3xl font-extrabold text-white md:text-5xl"
          />

          <div className="grid gap-5 sm:grid-cols-2">
            {volunteerRoles.map((role, i) => (
              <Reveal key={role.title} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/12 bg-white/6 p-6">
                  <h3
                    className="font-bold text-[var(--accent)] mb-2"
                    style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                  >
                    {role.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{role.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.35}>
            <div className="mt-10 pt-10 border-t border-white/8 flex flex-wrap gap-4">
              <RippleButton href="/get-involved/volunteer" variant="primary" size="md">
                Apply to volunteer
              </RippleButton>
              <RippleButton href="/get-involved/apply-training" variant="ghost" size="md">
                Apply for training
              </RippleButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Community note ── */}
      <section className="section-pad bg-white">
        <div className="container-luri max-w-2xl text-center mx-auto">
          <Reveal>
            <h2
              className="text-3xl font-extrabold text-[var(--ink)] mb-4"
              style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)", letterSpacing: "-0.03em" }}
            >
              For community members in Upper West Region
            </h2>
            <p className="text-[var(--ink-600,#374151)] leading-relaxed mb-7">
              Training is free. Inputs are provided. You leave with skills, a certificate, and connections to buyers and
              employers. Applications are open — no fees, no barriers.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <RippleButton href="/get-involved/apply-training" variant="secondary" size="md">
                Apply for training
              </RippleButton>
              <RippleButton href="/get-involved/apply-scholarship" variant="secondary" size="md">
                Apply for scholarship
              </RippleButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
