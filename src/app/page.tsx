import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { ScrollThemeSection } from "@/components/motion/ScrollThemeSection";
import { HorizontalScroll } from "@/components/motion/HorizontalScroll";
import { TextRevealScrub } from "@/components/motion/TextRevealScrub";
import { ImagePanel } from "@/components/sections/ImagePanel";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import Link from "next/link";
import { HomeHero } from "@/components/sections/HomeHero";
import { MarqueeStrip } from "@/components/motion/MarqueeStrip";
import { TiltCard } from "@/components/motion/TiltCard";
import { CountUp } from "@/components/motion/CountUp";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { RippleButton } from "@/components/motion/RippleButton";
import { stories } from "@/lib/content/siteContent";
import { Heart, Leaf, GraduationCap, ArrowRight, ShieldCheck } from "lucide-react";

const pillarsDisplay = [
  {
    icon: <Heart className="h-6 w-6" />,
    label: "Healthcare & Sanitation",
    body: "CHV certification, WASH education, first aid, and maternal health training for women and youth.",
    href: "/programmes/healthcare",
    image: "/images/pillar-healthcare.png",
    bg: "bg-teal-50",
    iconColor: "text-[var(--primary)]",
    accent: "#0a5c60",
  },
  {
    icon: <Leaf className="h-6 w-6" />,
    label: "Agribusiness",
    body: "Climate-smart farming, cooperative formation, and buyer network linkages for rural economic resilience.",
    href: "/programmes/agribusiness",
    image: "/images/pillar-agribusiness.png",
    bg: "bg-amber-50",
    iconColor: "text-[var(--accent)]",
    accent: "#f0b033",
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    label: "STEM Scholarships",
    body: "Scholarships, mentorship, and career pathways for high-potential students from low-income households.",
    href: "/programmes/stem",
    image: "/images/pillar-stem.png",
    bg: "bg-red-50",
    iconColor: "text-[var(--coral)]",
    accent: "#e85a4a",
  },
];

const marqueeItems = [
  "Healthcare & Sanitation",
  "Agribusiness Training",
  "STEM Scholarships",
  "Upper West Region",
  "Community-First Governance",
  "Measurable Impact",
  "Kulfuo, Ghana",
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <HomeHero />

      {/* ── Marquee ── */}
      <div className="border-y border-[var(--primary)]/10 bg-[var(--cream-200,#ede6d8)] py-4">
        <MarqueeStrip
          items={marqueeItems}
          itemClassName="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/60"
        />
      </div>

      {/* ── Mission Statement ── */}
      <ScrollThemeSection theme="#ffffff">
        <section className="section-pad bg-transparent">
          <div className="container-luri max-w-4xl">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-5">Our mission</p>
            </Reveal>
            <TextRevealScrub
              text="To equip individuals and communities in underserved regions of Ghana with practical skills, scholarships, and inputs that enable them to achieve economic independence."
              className="text-[var(--ink)]"
            />
            <Reveal delay={0.3}>
              <div className="mt-10 flex items-center gap-5">
                <RippleButton href="/about" variant="secondary" size="md">
                  Our story
                </RippleButton>
                <Link
                  href="/impact"
                  className="group flex items-center gap-2 text-sm font-semibold text-[var(--primary)] hover:gap-3 transition-all"
                >
                  See our impact <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </ScrollThemeSection>

      {/* ── Three Pillars ── */}
      <ScrollThemeSection theme="#f5f0e8">
        <section className="section-pad bg-transparent">
          <div className="container-luri">
            <Reveal>
              <div className="section-label text-[var(--primary)]/50">
                <span className="ed-label">Three pillars</span>
              </div>
            </Reveal>
            <SplitHeading
              as="h2"
              text="Integrated programmes. Lasting outcomes."
              className="mb-12 text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-[var(--ink)]"
            />

            <div className="grid gap-5 md:grid-cols-3">
              {pillarsDisplay.map((p, i) => (
                <Reveal key={p.label} delay={i * 0.1}>
                  <Link href={p.href} className="h-full group block">
                    <article className="ed-card h-full">
                      <div className="relative aspect-[16/9] w-full overflow-hidden">
                        <img
                          src={p.image}
                          alt={p.label}
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <p className="ed-label mb-3" style={{ color: p.accent }}>
                          {p.bg.includes("teal") ? "Healthcare" : p.bg.includes("amber") ? "Agribusiness" : "STEM Education"}
                        </p>
                        <h3 className="ed-title text-[1.15rem] text-[var(--ink)] mb-2.5 leading-snug">
                          {p.label}
                        </h3>
                        <p className="flex-1 text-sm text-[var(--ink-400,#6b7280)] leading-relaxed">{p.body}</p>
                        <div className="ed-meta text-[var(--primary)]/40 mt-4">
                          <span>Explore programme</span>
                          <ArrowRight
                            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                            style={{ color: p.accent }}
                          />
                        </div>
                      </div>
                    </article>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollThemeSection>

      {/* ── Impact Numbers ── */}
      <section className="section-pad bg-white border-y border-gray-100">
        <div className="container-luri">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-3">Year 1 targets</p>
          </Reveal>
          <SplitHeading
            as="h2"
            text="Impact that's counted, published, and verified."
            className="mb-14 text-3xl font-extrabold text-[var(--ink)] md:text-5xl"
          />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: 150, suffix: "+", label: "Individuals trained" },
              { value: 20, suffix: "", label: "STEM scholarships" },
              { value: 60, suffix: "%", label: "Female beneficiaries" },
              { value: 2, suffix: "", label: "Communities with health networks" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.1} direction="up">
                <div className="flex flex-col gap-1">
                  <p
                    className="text-5xl font-bold text-[var(--primary)] md:text-6xl tracking-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <CountUp to={stat.value} suffix={stat.suffix} duration={2.2} />
                  </p>
                  <p className="text-sm text-[var(--ink-600)] leading-snug">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-12 pt-10 border-t border-[var(--primary)]/10 flex flex-wrap gap-4 items-center justify-between">
              <p className="text-[var(--ink-400)] text-sm max-w-sm">
                Independently evaluated. All KPIs published annually. Zero cash transfers.
              </p>
              <RippleButton href="/impact" variant="secondary" size="md">
                View full impact data
              </RippleButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Core Values ── */}
      <ScrollThemeSection theme="#0a5c60">
        <section className="section-pad bg-transparent text-white overflow-hidden relative">
          <div className="container-luri">
            <Reveal>
              <div className="section-label text-white/30">
                <span className="ed-label">Our foundation</span>
              </div>
            </Reveal>
            <SplitHeading
              as="h2"
              text="Values that drive every decision."
              className="mb-14 text-4xl font-extrabold text-white md:text-6xl"
            />

            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "People First", desc: "Every decision centres on the dignity, voice, and wellbeing of the communities we serve." },
                { title: "Integrity", desc: "We operate with transparency, accountability, and ethical stewardship in all activities." },
                { title: "Partnership", desc: "We believe in collaborative impact — working alongside local leaders and government." },
                { title: "Sustainability", desc: "We build systems that outlast project cycles and create generational change." },
                { title: "Equity", desc: "We prioritise the most marginalised — women, youth, and rural dwellers." },
                { title: "Excellence", desc: "We are committed to high-quality training, rigorous outcomes, and continuous learning." },
              ].map((v, i) => (
                <Reveal key={v.title} delay={i * 0.05}>
                  <div className="border-l border-white/10 pl-6">
                    <h3 className="ed-title text-xl mb-3 text-[var(--accent)]">{v.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed max-w-xs">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      </ScrollThemeSection>

      {/* ── Operating Model ── */}
      <section className="section-pad bg-white">
        <div className="container-luri">
          <Reveal>
            <div className="section-label text-[var(--primary)]/50">
              <span className="ed-label">How we work</span>
            </div>
          </Reveal>
          <SplitHeading
            as="h2"
            text="Assess. Design. Deliver. Measure. Scale."
            className="mb-16 text-4xl font-extrabold text-[var(--ink)] md:text-6xl"
          />

          <div className="grid gap-4 md:grid-cols-5">
            {[
              { step: "01", title: "Assess", desc: "Community needs, stakeholder mapping, asset inventory." },
              { step: "02", title: "Design", desc: "Co-design of training curricula, selection of trainers." },
              { step: "03", title: "Deliver", desc: "Skills training, scholarship disbursement, input provision." },
              { step: "04", title: "Measure", desc: "Outcome tracking, community feedback, impact reporting." },
              { step: "05", title: "Scale", desc: "Replicate successful models in new communities." },
            ].map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="relative h-full flex flex-col p-6 rounded-2xl bg-[var(--primary-light)]/50 border border-[var(--primary)]/5">
                  <span className="ed-num mb-4">{step.step}</span>
                  <h3 className="ed-title text-lg mb-2 text-[var(--primary)]">{step.title}</h3>
                  <p className="text-xs text-[var(--ink-600)] leading-relaxed">{step.desc}</p>
                  {i < 4 && (
                    <div className="absolute top-1/2 -right-2 hidden lg:block text-[var(--primary)]/20 text-xl font-bold">→</div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Project CURE Badge ── */}
      <section className="section-pad bg-[var(--cream-100,#f5f0e8)]">
        <div className="container-luri">
          <div className="grid gap-10 items-center md:grid-cols-2">
            <Reveal direction="left">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-4">Strategic partner</p>
                <h2
                  className="text-3xl font-bold text-[var(--ink)] md:text-5xl mb-5 tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Project CURE Partnership
                </h2>
                <p className="text-[var(--ink-600,#374151)] leading-relaxed mb-6">
                  The world&apos;s largest distributor of donated medical supplies. Our collaborative channel provides medical supplies,
                  technical expertise, and resource mobilisation to rural Ghana.
                </p>
                <RippleButton href="/partners" variant="secondary" size="md">
                  View partner framework
                </RippleButton>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.15}>
              <TiltCard>
                <div className="rounded-3xl border border-[var(--primary)]/10 bg-white p-12 flex flex-col items-center gap-6 text-center shadow-xl shadow-black/5">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-lg">
                    <ShieldCheck className="h-12 w-12" />
                  </div>
                  <div>
                    <h3
                      className="text-2xl font-bold text-[var(--ink)] mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      Medical Equity Channel
                    </h3>
                    <p className="text-sm text-[var(--ink-400,#6b7280)] max-w-xs mx-auto">
                      Access to global health expertise, training materials, and donated equipment.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[var(--primary)] bg-[var(--primary-light)] px-5 py-2.5 rounded-full">
                    <span className="h-2 w-2 rounded-full bg-[var(--primary)] animate-pulse" />
                    Operational MoU Active
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Community Stories — Horizontal Scroll ── */}
      <HorizontalScroll 
        title="Real people. Real outcomes." 
        subtitle="Community voices"
      >
        {stories.map((story) => (
          <div key={story.name} className="w-[85vw] md:w-[450px] flex-shrink-0">
            <ImagePanel
              src={story.image}
              title={story.name}
              body={story.quote}
              programme={story.programme}
              location={story.location}
              variant="story"
            />
          </div>
        ))}
      </HorizontalScroll>


      <NewsletterSection />
    </>
  );
}
