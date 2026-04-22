import Image from "next/image";
import { GraduationCap, BookOpen, Users, Briefcase, FlaskConical, CheckCircle2 } from "lucide-react";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { RippleButton } from "@/components/motion/RippleButton";
import { ScrollThemeSection } from "@/components/motion/ScrollThemeSection";

export const metadata = {
  title: "STEM Education Scholarships — LURI Foundation",
  description:
    "Scholarships, mentorship, and career pathways for academically promising students from low-income households in Upper West Region, Ghana.",
};

const benefits = [
  {
    icon: BookOpen,
    title: "Tuition Support",
    body: "Full or partial tuition coverage for secondary and tertiary STEM programmes — removing the single greatest barrier to education.",
    accent: "#e85a4a",
  },
  {
    icon: Users,
    title: "Mentorship Access",
    body: "Matched with STEM professionals and industry mentors who guide academic choices, career decisions, and personal development.",
    accent: "#b69000",
  },
  {
    icon: Briefcase,
    title: "Career Counselling",
    body: "Structured career counselling sessions, CV preparation, and interview coaching — building readiness beyond the classroom.",
    accent: "#0a5c60",
  },
  {
    icon: FlaskConical,
    title: "Internship Pathways",
    body: "Facilitated connections to internships and employer networks, bridging the gap between study and professional entry.",
    accent: "#e85a4a",
  },
];

const eligibility = [
  "Currently enrolled or accepted into a secondary or tertiary STEM programme",
  "From a low-income household in the Upper West Region of Ghana",
  "Demonstrated academic promise — strong grades or teacher recommendation",
  "Committed to community engagement during and after the scholarship",
  "Ghanaian national or long-term resident of the Upper West Region",
];

const trajectory = [
  { label: "Year 1 target", value: "20", sub: "Scholarships awarded" },
  { label: "Year 3 target", value: "100", sub: "Scholarships awarded" },
  { label: "Beneficiary profile", value: "60%", sub: "Female recipients" },
  { label: "Retention rate", value: "90%+", sub: "Programme completion" },
];

export default function StemPage() {
  return (
    <>
      {/* ══ HERO ══ */}
      <section className="pt-28 sm:pt-36 pb-0 overflow-hidden" style={{ backgroundColor: "#020d08" }}>
        <div className="max-w-[95%] mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center pb-14 sm:pb-20">
            {/* Left */}
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/60 text-[0.62rem] font-bold uppercase tracking-widest mb-5 sm:mb-6"
                  style={{ backgroundColor: "rgba(232,90,74,0.08)", borderColor: "rgba(232,90,74,0.25)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#e85a4a] animate-pulse" />
                  Pillar 03 — STEM Education
                </div>
              </Reveal>

              <SplitHeading
                as="h1"
                text="Financial barriers should never extinguish scientific potential."
                highlightWords={["scientific", "potential."]}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6"
              />

              <Reveal delay={0.2}>
                <p className="text-white/50 text-base leading-relaxed mb-8 max-w-lg">
                  LURI's STEM scholarship programme invests in academically promising students
                  from low-income households — ensuring financial constraints never silence the
                  next generation of Ghanaian engineers, scientists, and innovators.
                </p>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="flex flex-wrap gap-4">
                  <RippleButton href="/get-involved/apply-scholarship" variant="coral" size="md">
                    Apply for a scholarship
                  </RippleButton>
                  <RippleButton href="/impact" variant="ghost" size="md">
                    See our impact data
                  </RippleButton>
                </div>
              </Reveal>
            </div>

            {/* Right — image with overlaid stat */}
            <Reveal direction="right" delay={0.15}>
              <div className="relative h-[380px] sm:h-[480px] rounded-2xl overflow-hidden group">
                <Image
                  src="/images/pillar-stem.png"
                  alt="STEM scholarship recipient"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Floating stat card */}
                <div
                  className="absolute bottom-6 left-6 right-6 rounded-xl p-5"
                  style={{ backgroundColor: "rgba(10,10,10,0.85)", backdropFilter: "blur(12px)", border: "1px solid rgba(232,90,74,0.2)" }}
                >
                  <p className="text-[0.58rem] font-bold uppercase tracking-widest text-white/35 mb-2">
                    Programme trajectory
                  </p>
                  <div className="flex items-end gap-6">
                    <div>
                      <span className="text-3xl font-extrabold text-[#e85a4a]">20</span>
                      <p className="text-white/50 text-xs mt-0.5">Year 1 scholars</p>
                    </div>
                    <div className="flex-1 h-px bg-white/10 mb-3" />
                    <div>
                      <span className="text-3xl font-extrabold text-white">100</span>
                      <p className="text-white/50 text-xs mt-0.5">By year 3</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ WHAT WE OFFER ══ */}
      <section className="section-pad bg-white">
        <div className="max-w-[95%] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 sm:mb-14">
            <div>
              <Reveal>
                <div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-5"
                  style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  Scholarship Benefits
                </div>
              </Reveal>
              <SplitHeading
                as="h2"
                text="More than tuition. A complete pathway."
                highlightWords={["complete", "pathway."]}
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--ink)] tracking-tight max-w-xl"
              />
            </div>
            <Reveal delay={0.1}>
              <p className="text-[var(--ink-600)] text-sm sm:text-base leading-relaxed max-w-xs md:text-right">
                Every scholar receives a structured support package covering tuition, mentorship, and professional development.
              </p>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <Reveal key={b.title} delay={i * 0.08}>
                  <div
                    className="rounded-2xl p-7 flex gap-5 h-full group hover:border-opacity-40 transition-all duration-200"
                    style={{ border: "1px solid rgba(0,0,0,0.06)", backgroundColor: "#fafaf9" }}
                  >
                    <div
                      className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: `${b.accent}14`, color: b.accent }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[var(--ink)] mb-2 tracking-tight">{b.title}</h3>
                      <p className="text-[var(--ink-600)] text-sm leading-relaxed">{b.body}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ ELIGIBILITY + SCALE ══ */}
      <ScrollThemeSection theme="#005035">
        <section className="section-pad text-white" style={{ backgroundColor: "#005035" }}>
          <div className="max-w-[95%] mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
              {/* Eligibility */}
              <div>
                <Reveal>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/60 text-[0.62rem] font-bold uppercase tracking-widest mb-5"
                    style={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.14)" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                    Who can apply
                  </div>
                </Reveal>
                <SplitHeading
                  as="h2"
                  text="Eligibility criteria."
                  className="text-3xl sm:text-4xl font-extrabold text-white mb-8 tracking-tight"
                />
                <div className="flex flex-col gap-4">
                  {eligibility.map((item, i) => (
                    <Reveal key={i} delay={i * 0.07}>
                      <div className="flex items-start gap-4">
                        <CheckCircle2
                          className="h-5 w-5 flex-shrink-0 mt-0.5"
                          style={{ color: "var(--accent)" }}
                        />
                        <p className="text-white/70 text-sm leading-relaxed">{item}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <Reveal delay={0.4}>
                  <div className="mt-10">
                    <RippleButton href="/get-involved/apply-scholarship" variant="primary" size="md">
                      Start your application →
                    </RippleButton>
                  </div>
                </Reveal>
              </div>

              {/* Scale stats */}
              <div>
                <Reveal>
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-white/60 text-[0.62rem] font-bold uppercase tracking-widest mb-5"
                    style={{ backgroundColor: "rgba(255,255,255,0.07)", borderColor: "rgba(255,255,255,0.14)" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
                    Programme scale
                  </div>
                </Reveal>
                <SplitHeading
                  as="h2"
                  text="Growing every year."
                  highlightWords={["Growing"]}
                  className="text-3xl sm:text-4xl font-extrabold text-white mb-8 tracking-tight"
                />
                <div className="grid grid-cols-2 gap-4">
                  {trajectory.map((item, i) => (
                    <Reveal key={item.label} delay={i * 0.09}>
                      <div
                        className="rounded-2xl p-6 flex flex-col gap-1"
                        style={{ backgroundColor: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                      >
                        <span className="text-4xl font-extrabold text-[var(--accent)] leading-none">{item.value}</span>
                        <p className="text-white text-sm font-semibold mt-1">{item.label}</p>
                        <p className="text-white/40 text-[0.65rem] uppercase tracking-wide">{item.sub}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollThemeSection>

      {/* ══ TESTIMONIAL ══ */}
      <section className="section-pad" style={{ backgroundColor: "#020d08" }}>
        <div className="max-w-[95%] mx-auto">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            {/* Quote */}
            <div className="lg:col-span-3">
              <Reveal>
                <GraduationCap className="h-8 w-8 mb-6" style={{ color: "var(--accent)" }} />
                <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug tracking-tight mb-8">
                  &ldquo;The scholarship gave me the chance to stay in school and study engineering.
                  I want to come back and{" "}
                  <span style={{ color: "var(--accent)" }}>build things for my community.</span>&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative">
                    <Image src="/images/story-mubarak.png" alt="Mubarak Sulemana" fill className="object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">Mubarak Sulemana</p>
                    <p className="text-white/40 text-xs mt-0.5">STEM Scholar · Upper West Region</p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Image */}
            <Reveal direction="right" delay={0.15} className="lg:col-span-2">
              <div className="relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/story-mubarak.png"
                  alt="Mubarak Sulemana"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <div
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[0.58rem] font-bold uppercase tracking-widest"
                    style={{ backgroundColor: "rgba(232,90,74,0.2)", border: "1px solid rgba(232,90,74,0.35)", color: "#e85a4a" }}
                  >
                    <span className="h-1 w-1 rounded-full bg-[#e85a4a]" />
                    STEM Scholarship
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="section-pad bg-white">
        <div className="max-w-[95%] mx-auto">
          <Reveal>
            <div
              className="rounded-2xl p-10 sm:p-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8"
              style={{ backgroundColor: "rgba(232,90,74,0.06)", border: "1px solid rgba(232,90,74,0.12)" }}
            >
              <div className="max-w-xl">
                <p className="text-[0.62rem] font-bold uppercase tracking-widest text-[#e85a4a] mb-4">
                  Applications open
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--ink)] tracking-tight mb-3">
                  Know an eligible student?
                </h2>
                <p className="text-[var(--ink-600)] text-sm leading-relaxed">
                  Applications are reviewed on a rolling basis. Students, teachers, and community
                  leaders can all submit referrals or direct applications.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <RippleButton href="/get-involved/apply-scholarship" variant="coral" size="lg">
                  Apply now
                </RippleButton>
                <RippleButton href="/get-involved/donate" variant="secondary" size="lg">
                  Fund a scholarship
                </RippleButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
