"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { RippleButton } from "@/components/motion/RippleButton";
import { Heart, Shield, Plus, Activity, GraduationCapIcon, Projector, NetworkIcon } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// Four partnership channels, exactly as described in the LURI Foundation Framework (§2, p.4)
const channels = [
  {
    label: "Medical Supply Provision",
    desc: "Donated equipment and supplies directly supporting healthcare and sanitation training activities.",
  },
  {
    label: "Technical Expertise",
    desc: "Access to global health programme expertise, training materials, and international best practices.",
  },
  {
    label: "Resource Mobilisation",
    desc: "Joint fundraising and grant applications leveraging both organisations' networks.",
  },
  {
    label: "Advocacy",
    desc: "Collaborative voice on health equity and rural development in Ghana and West Africa.",
  },
];

const stats = [
  { val: "180+", label: "Countries Served" },
  { val: "300M+", label: "Lives Reached" },
  { val: "Active", label: "MoU Status" },
];

export function PartnerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const blobRef = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const icon1Ref = useRef<HTMLDivElement>(null);
  const icon2Ref = useRef<HTMLDivElement>(null);
  const icon3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const base = { trigger: section, start: "top bottom", end: "bottom top", scrub: 1.2 };

    const ctx = gsap.context(() => {
      gsap.to(blobRef.current, { y: -120, ease: "none", scrollTrigger: base });
      gsap.to(blob2Ref.current, { y: -60, x: 30, ease: "none", scrollTrigger: base });
      gsap.to(leftRef.current, { y: -45, ease: "none", scrollTrigger: base });
      gsap.to(cardRef.current, { y: -85, ease: "none", scrollTrigger: base });
      gsap.to(icon1Ref.current, { y: -180, rotate: 45, ease: "none", scrollTrigger: base });
      gsap.to(icon2Ref.current, { y: -140, rotate: -30, ease: "none", scrollTrigger: base });
      gsap.to(icon3Ref.current, { y: -200, rotate: 15, ease: "none", scrollTrigger: base });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative section-pad overflow-hidden"
      style={{ backgroundColor: "#f7f4ef" }}
    >
      {/* Background parallax blobs */}
      <div
        ref={blobRef}
        className="pointer-events-none absolute -top-40 -right-40 w-[560px] h-[560px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(0,80,53,0.08) 0%, transparent 70%)" }}
      />
      <div
        ref={blob2Ref}
        className="pointer-events-none absolute -bottom-24 -left-24 w-[420px] h-[420px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(182,144,0,0.07) 0%, transparent 70%)" }}
      />

      {/* Floating parallax icons */}
      <div ref={icon1Ref} className="hidden lg:block absolute top-[15%] left-[5%] opacity-[0.04] text-[var(--primary)] pointer-events-none">
        <GraduationCapIcon size={120} strokeWidth={1.5} />
      </div>
      <div ref={icon2Ref} className="hidden lg:block absolute bottom-[20%] right-[10%] opacity-[0.03] text-[var(--accent)] pointer-events-none">
        <Projector size={160} strokeWidth={1} />
      </div>
      <div ref={icon3Ref} className="hidden lg:block absolute top-[40%] left-[45%] opacity-[0.05] text-[var(--primary)] pointer-events-none">
        <NetworkIcon size={80} strokeWidth={2} />
      </div>
      <div className="hidden lg:block absolute bottom-[10%] left-[20%] opacity-[0.03] text-[var(--primary)] animate-pulse pointer-events-none">
        <Activity size={40} strokeWidth={2} />
      </div>

      <div className="max-w-[90rem] mx-auto relative z-10">
        <div className="grid gap-16 lg:gap-24 items-center lg:grid-cols-[1fr_460px]">

          {/* ── Left: Text ── */}
          <div ref={leftRef}>
            <Reveal>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[var(--primary)] text-[0.62rem] font-bold uppercase tracking-widest mb-8"
                style={{ backgroundColor: "rgba(0,80,53,0.05)", borderColor: "rgba(0,80,53,0.12)" }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                Strategic Partnership
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2
                className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.0] mb-6"
                style={{ fontFamily: "var(--font-display)", color: "var(--primary)" }}
              >
                Project{" "}
                <span style={{ color: "var(--accent)" }}>CURE.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed mb-10 max-w-[660px]" style={{ color: "var(--ink-600)" }}>
                One of the world&apos;s largest distributors of donated medical supplies and
                equipment. The partnership with LURI Foundation creates a powerful channel for
                healthcare delivery and capacity-building across the Upper West Region, Ghana.
              </p>
            </Reveal>

            {/* Stats — Project CURE's global reach */}
            <Reveal delay={0.15}>
              <div className="flex flex-wrap gap-8 mb-10">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div
                      className="text-3xl font-extrabold tracking-tight leading-none mb-1"
                      style={{ color: "var(--primary)" }}
                    >
                      {s.val}
                    </div>
                    <div
                      className="text-[0.6rem] font-bold uppercase tracking-widest"
                      style={{ color: "var(--ink-400)" }}
                    >
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <RippleButton href="/partners" variant="secondary" size="lg" textColor="white">
                View partner framework
              </RippleButton>
            </Reveal>
          </div>

          {/* ── Right: Partnership card ── */}
          <div ref={cardRef}>
            <Reveal direction="right" delay={0.12}>
              <div
                className="rounded-[2rem] bg-white relative overflow-hidden"
                style={{ border: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 24px 64px rgba(0,0,0,0.06)" }}
              >
                {/* Inner arc decoration */}
                <div
                  className="pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full border-[28px]"
                  style={{ borderColor: "rgba(0,80,53,0.05)" }}
                />

                <div className="p-9">
                  {/* Status pill */}
                  <div
                    className="inline-flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-8"
                    style={{ backgroundColor: "rgba(0,80,53,0.07)", color: "var(--primary)" }}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                    Operational MoU Active
                  </div>

                  <div
                    className="text-[0.58rem] font-bold uppercase tracking-widest mb-2"
                    style={{ color: "var(--ink-400)" }}
                  >
                    Partnership Channels
                  </div>
                  <h3
                    className="text-xl font-bold leading-snug mb-8"
                    style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
                  >
                    Four channels.<br />One shared mission.
                  </h3>

                  {/* Four channels from the framework */}
                  <div className="space-y-4">
                    {channels.map((ch, i) => (
                      <div
                        key={ch.label}
                        className="flex items-start gap-4 pb-4"
                        style={{
                          borderBottom: i < channels.length - 1 ? "1px solid rgba(0,0,0,0.06)" : "none",
                        }}
                      >
                        {/* Channel number */}
                        <div
                          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                          style={{ backgroundColor: "rgba(0,80,53,0.08)" }}
                        >
                          <span
                            className="text-[0.6rem] font-bold"
                            style={{ color: "var(--primary)" }}
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                        </div>
                        <div>
                          <div
                            className="text-sm font-bold mb-1 leading-snug"
                            style={{ color: "var(--ink)" }}
                          >
                            {ch.label}
                          </div>
                          <p className="text-xs leading-relaxed" style={{ color: "var(--ink-600)" }}>
                            {ch.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom accent bar */}
                <div
                  className="h-1 w-full"
                  style={{ background: "linear-gradient(90deg, var(--primary) 0%, #0a8060 60%, transparent 100%)" }}
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
