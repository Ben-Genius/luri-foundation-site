"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RippleButton } from "@/components/motion/RippleButton";
import { Building2, User, Mail, Users, MessageSquare, ArrowRight } from "lucide-react";

export function PartnerEnquiryForm() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-[80%] mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_32px_64px_-16px_rgba(0,80,53,0.12)] border border-[rgba(0,80,53,0.05)] flex flex-col lg:flex-row">

            {/* ── Left Column: Brand & Context ── */}
            <div className="relative lg:w-[42%] bg-[var(--primary)] p-10 lg:p-14 text-white overflow-hidden flex flex-col justify-between min-h-[320px]">
              {/* Background Curve Accessory */}
              <div
                className="absolute top-0 right-0 h-full w-[120px] bg-white pointer-events-none hidden lg:block"
                style={{
                  borderRadius: "100% 0 0 100% / 50% 0 0 50%",
                  transform: "translateX(50%)"
                }}
              />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-[1.1] tracking-tight">
                  Build the <br />
                  <span className="text-[var(--accent)]">future </span>
                  with us.
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-8 max-w-xs">
                  We believe in the power of shared expertise. Join our network of strategic partners to fuel sustainable change in Ghana&apos;s underserved communities.
                </p>
              </div>

              <div className="relative z-10">
                <RippleButton
                  href="/impact"
                  variant="ghost"
                  className="!border-white/20 !text-white hover:!bg-white/10 rounded-full"
                >
                  See our impact <ArrowRight className="ml-2 h-4 w-4" />
                </RippleButton>
              </div>

              {/* Decorative Blobs */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--accent)] opacity-10 rounded-full blur-3xl" />
            </div>

            {/* ── Right Column: The Form ── */}
            <div className="lg:w-[58%] p-10 lg:p-14 bg-white">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-2">Partner enquiry</h3>
                <p className="text-[var(--ink-600)] text-sm">
                  Tell us about your organisation. We review all enquiries within 5 working days.
                </p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--primary)]/50 ml-1">
                      Organisation
                    </label>
                    <div className="relative group">
                      <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--ink-400)] transition-colors group-focus-within:text-[var(--primary)]" />
                      <input
                        type="text"
                        className="input-base !pl-11 !bg-[var(--cream-50)] !border-transparent focus:!border-[var(--primary)]/20 focus:!bg-white transition-all"
                        placeholder="Organisation name"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--primary)]/50 ml-1">
                      Contact Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--ink-400)] transition-colors group-focus-within:text-[var(--primary)]" />
                      <input
                        type="text"
                        className="input-base !pl-11 !bg-[var(--cream-50)] !border-transparent focus:!border-[var(--primary)]/20 focus:!bg-white transition-all"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--primary)]/50 ml-1">
                    Email Address
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--ink-400)] transition-colors group-focus-within:text-[var(--primary)]" />
                    <input
                      type="email"
                      className="input-base !pl-11 !bg-[var(--cream-50)] !border-transparent focus:!border-[var(--primary)]/20 focus:!bg-white transition-all"
                      placeholder="contact@organisation.org"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--primary)]/50 ml-1">
                    Partnership Type
                  </label>
                  <div className="relative group">
                    <Users className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--ink-400)] transition-colors group-focus-within:text-[var(--primary)]" />
                    <select className="input-base !pl-11 !bg-[var(--cream-50)] !border-transparent focus:!border-[var(--primary)]/20 focus:!bg-white transition-all appearance-none cursor-pointer">
                      <option value="">Select a type</option>
                      <option value="supply">In-kind supply</option>
                      <option value="expertise">Technical expertise</option>
                      <option value="fundraising">Joint fundraising</option>
                      <option value="advocacy">Advocacy</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--primary)]/50 ml-1">
                    Your Message
                  </label>
                  <div className="relative group">
                    <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-[var(--ink-400)] transition-colors group-focus-within:text-[var(--primary)]" />
                    <textarea
                      rows={4}
                      className="input-base !pl-11 !bg-[var(--cream-50)] !border-transparent focus:!border-[var(--primary)]/20 focus:!bg-white transition-all resize-none"
                      placeholder="How would you like to collaborate?"
                    />
                  </div>
                </div>

                <RippleButton type="submit" variant="primary" size="lg" className="w-full sm:w-auto !rounded-xl !px-10 mt-4 shadow-lg shadow-[var(--primary)]/10">
                  Send enquiry
                </RippleButton>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
