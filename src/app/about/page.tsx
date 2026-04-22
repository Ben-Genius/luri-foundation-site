import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { RippleButton } from "@/components/motion/RippleButton";
import { coreValues } from "@/lib/content/siteContent";

const orgChart = [
  { level: "Board of Trustees", role: "Governance & Oversight" },
  { level: "Executive Director", role: "Leadership & Strategy" },
  { level: "Programme Manager", role: "Operations & M&E" },
  { level: "Unit Leads", role: "Health · Agri · Education" },
];

const govPrinciples = [
  { title: "Transparency", body: "All financial and programmatic reports are publicly available." },
  { title: "Community Representation", body: "Community Advisory Committee has formal representation in programme decisions." },
  { title: "Partnership Management", body: "Formal MoUs govern all external relationships with clear roles and accountability." },
  { title: "Conflict of Interest", body: "Board members disclose any interests and recuse from conflicted decisions." },
];

export const metadata = {
  title: "About Us — LURI Foundation",
  description: "Our story, values, governance, and the team driving sustainable change in Upper West Region, Ghana.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About LURI Foundation"
        title="Built from the field. Accountable to the community."
        description="From Accra HQ to Kulfuo operations, every decision at LURI Foundation is grounded in community-first values, rigorous governance, and a clear theory of change."
        image="/images/hero-luri.png"
      />

      {/* ── Vision & Mission ── */}
      <section className="section-pad bg-white">
        <div className="container-luri grid gap-12 md:grid-cols-2">
          <Reveal direction="left">
            <div className="rounded-3xl border border-[var(--primary)]/10 bg-[var(--primary-light)]/30 p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)] mb-5">Vision Statement</p>
              <p className="text-[clamp(1.2rem,4vw,1.6rem)] font-bold text-[var(--ink)] leading-[1.3] italic mb-6">
                &ldquo;Empowering Communities through Sustainable Livelihood Initiatives.&rdquo;
              </p>
              <p className="text-sm text-[var(--ink-600)] leading-relaxed">
                LURI Foundation envisions a Ghana — and ultimately an Africa — where every individual, regardless of geography
                or socioeconomic background, has access to the skills, education, and resources needed to build a dignified and
                self-sustaining life.
              </p>
            </div>
          </Reveal>
          <Reveal direction="right">
            <div className="rounded-3xl border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-10">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)-dark] mb-5">Mission Statement</p>
              <p className="text-[clamp(1.2rem,4vw,1.6rem)] font-bold text-[var(--ink)] leading-[1.3] mb-6">
                Equipping underserved regions with practical skills, scholarships, and inputs.
              </p>
              <p className="text-sm text-[var(--ink-600)] leading-relaxed">
                To equip individuals and communities in underserved regions of Ghana with practical skills,
                scholarships, and inputs that enable them to achieve economic independence, improve health
                outcomes, and contribute meaningfully to local and national development.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="section-pad bg-[var(--cream-100,#f5f0e8)]">
        <div className="container-luri">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-3">What we stand for</p>
          </Reveal>
          <SplitHeading
            as="h2"
            text="Six values. Every decision."
            className="mb-12 text-3xl font-extrabold text-[var(--ink)] md:text-5xl"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07}>
                {/* Raygan editorial card: outline number + title + description + bottom rule */}
                <article className="ed-card h-full p-6 flex flex-col">
                  <span className="ed-num text-[var(--primary)] mb-2 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="ed-title text-base text-[var(--ink)] mb-2">{v.title}</h3>
                  <p className="flex-1 text-sm text-[var(--ink-400,#6b7280)] leading-relaxed">{v.body}</p>
                  <div className="ed-meta mt-4 text-[var(--primary)]/35">
                    <span className="ed-label">LURI Foundation</span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founding Story ── */}
      <section className="section-pad bg-white">
        <div className="container-luri max-w-3xl">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-5">Our story</p>
            <h2
              className="text-3xl font-extrabold text-[var(--ink)] mb-6 md:text-5xl tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              From a community gap to a structured programme.
            </h2>
            <div className="space-y-4 text-[var(--ink-600,#374151)] leading-relaxed">
              <p>
                LURI Foundation was founded to address a persistent gap in the Upper West Region: a wealth of human
                potential, constrained by lack of access to practical skills, agricultural inputs, and educational
                pathways.
              </p>
              <p>
                Operating from Accra with programme delivery in Kulfuo, LURI is structured around a three-pillar
                model that treats healthcare, agribusiness, and STEM education as interconnected parts of a single
                community development ecosystem.
              </p>
              <p>
                Every intervention is non-cash. Every outcome is measured. Every report is published.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Governance ── */}
      <section className="section-pad bg-[var(--primary-dark)] text-white">
        <div className="container-luri">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-3">How we&apos;re structured</p>
          </Reveal>
          <SplitHeading
            as="h2"
            text="Transparent governance. Community accountability."
            className="mb-12 text-3xl font-extrabold text-white md:text-5xl"
          />

          {/* Org chart */}
          <div className="mb-14">
            <div className="flex flex-col items-center gap-0">
              {orgChart.map((item, i) => (
                <Reveal key={item.level} delay={i * 0.08}>
                  <div className="flex flex-col items-center">
                    <div className="rounded-xl border border-white/15 bg-white/8 px-8 py-4 text-center">
                      <p className="font-bold text-white">{item.level}</p>
                      <p className="text-xs text-white/45 mt-0.5">{item.role}</p>
                    </div>
                    {i < orgChart.length - 1 && (
                      <div className="h-8 w-px bg-white/15" />
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Governance principles */}
          <div className="grid gap-5 sm:grid-cols-2">
            {govPrinciples.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.09}>
                <div className="rounded-2xl border border-white/12 bg-white/6 p-6">
                  <h3
                    className="mb-2 text-base font-bold text-[var(--accent)]"
                    style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-10 pt-10 border-t border-white/8 text-center">
              <p className="text-white/50 text-sm mb-6">
                All financial and programmatic reports are publicly available. We are built to be accountable.
              </p>
              <RippleButton href="/impact" variant="ghost" size="md">
                View our impact data
              </RippleButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
