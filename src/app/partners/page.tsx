import { PageIntro } from "@/components/sections/PageIntro";
import { Reveal } from "@/components/motion/Reveal";
import { TiltCard } from "@/components/motion/TiltCard";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { RippleButton } from "@/components/motion/RippleButton";
import { PartnerEnquiryForm } from "@/components/sections/PartnerEnquiryForm";
import { ShieldCheck, Truck, BookOpen, Users, Globe } from "lucide-react";

const partnershipTypes = [
  {
    icon: <Truck className="h-5 w-5" />,
    title: "In-kind supply",
    body: "Medical supplies, agricultural inputs, tools, and equipment delivered directly to programme participants.",
  },
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: "Technical expertise",
    body: "Training facilitation, curriculum development, and knowledge transfer from sector specialists.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Joint fundraising",
    body: "Co-designed grant applications and shared fundraising campaigns with aligned mission partners.",
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: "Advocacy",
    body: "Joint policy advocacy and community representation for systemic change in the Upper West Region.",
  },
];

export const metadata = {
  title: "Partners — LURI Foundation",
  description: "Project CURE collaboration and partnership models for organisations aligned with LURI Foundation's mission.",
};

export default function PartnersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Our partnerships"
        title="Built to last beyond project cycles."
        description="LURI operates with formal MoUs, community advisory committees, and public reporting. Every partner relationship is structured, accountable, and community-first."
      />

      {/* ── Project CURE Spotlight ── */}
      <section className="section-pad bg-white">
        <div className="container-luri">
          <div className="grid gap-12 items-center md:grid-cols-2">
            <Reveal direction="left">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-4">Featured partner</p>
                <h2
                  className="text-3xl font-extrabold text-[var(--ink)] mb-5 md:text-4xl"
                  style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)", letterSpacing: "-0.03em" }}
                >
                  Project CURE
                </h2>
                <p className="text-[var(--ink-600,#374151)] leading-relaxed mb-4">
                  Project CURE is the world&apos;s largest distributor of donated medical supplies, operating in over 135
                  countries. Through this partnership, LURI gains access to medical kits, hygiene supplies, PPE, and
                  technical expertise that would otherwise be out of reach for communities in the Upper West Region.
                </p>
                <p className="text-[var(--ink-600,#374151)] leading-relaxed mb-7">
                  The partnership is governed by a formal MoU with defined roles, accountability measures, and a
                  shared commitment to community-owned healthcare delivery.
                </p>
                <div className="flex flex-wrap gap-3">
                  <RippleButton href="https://www.projectcure.org" variant="secondary" size="md">
                    Visit Project CURE ↗
                  </RippleButton>
                  <RippleButton href="/get-involved" variant="ghost" size="md">
                    Partner with us
                  </RippleButton>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <TiltCard>
                <div className="rounded-2xl border-2 border-[var(--primary)]/10 bg-[var(--cream-100,#f5f0e8)] p-10">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--primary)] text-white mb-6">
                    <ShieldCheck className="h-10 w-10" />
                  </div>
                  <h3
                    className="text-2xl font-extrabold text-[var(--ink)] mb-2"
                    style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                  >
                    Project CURE
                  </h3>
                  <p className="text-sm text-[var(--ink-400,#6b7280)] mb-6 leading-relaxed">
                    World&apos;s largest distributor of donated medical supplies · Operating in 135+ countries
                  </p>
                  <div className="space-y-3">
                    {["Medical supply provision", "Technical expertise", "Resource mobilisation", "Advocacy support"].map(
                      (item) => (
                        <div key={item} className="flex items-center gap-3 text-sm text-[var(--ink-600,#374151)]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] flex-shrink-0" />
                          {item}
                        </div>
                      ),
                    )}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--primary)] bg-[var(--primary-light)] px-4 py-2 rounded-full w-fit">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                    Active MoU partnership
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Partnership types ── */}
      <section className="section-pad bg-[var(--cream-100,#f5f0e8)]">
        <div className="container-luri">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]/50 mb-3">Partnership models</p>
          </Reveal>
          <SplitHeading
            as="h2"
            text="Four ways to partner with LURI."
            className="mb-12 text-3xl font-extrabold text-[var(--ink)] md:text-5xl"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {partnershipTypes.map((type, i) => (
              <Reveal key={type.title} delay={i * 0.08}>
                <TiltCard className="h-full">
                  <div className="flex h-full gap-5 rounded-2xl border border-[var(--primary)]/8 bg-white p-6">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--primary-light)] text-[var(--primary)]">
                      {type.icon}
                    </div>
                    <div>
                      <h3
                        className="font-bold text-[var(--ink)] mb-2"
                        style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)" }}
                      >
                        {type.title}
                      </h3>
                      <p className="text-sm text-[var(--ink-400,#6b7280)] leading-relaxed">{type.body}</p>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PartnerEnquiryForm />
    </>
  );
}
