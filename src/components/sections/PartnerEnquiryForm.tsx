"use client";

import { Reveal } from "@/components/motion/Reveal";
import { RippleButton } from "@/components/motion/RippleButton";

export function PartnerEnquiryForm() {
  return (
    <section className="section-pad bg-[var(--primary-dark)] text-white">
      <div className="container-luri max-w-2xl">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-3">Get in touch</p>
          <h2
            className="text-3xl font-extrabold text-white mb-3 md:text-4xl"
            style={{ fontFamily: "var(--font-display, 'Syne', sans-serif)", letterSpacing: "-0.03em" }}
          >
            Partner enquiry
          </h2>
          <p className="text-white/55 mb-8">
            Tell us about your organisation and how you&apos;d like to collaborate. We review all enquiries within 5 working days.
          </p>

          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                  Organisation name
                </label>
                <input
                  type="text"
                  className="input-base bg-white/10 border-white/20 text-white placeholder:text-white/30"
                  placeholder="Your organisation"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                  Contact name
                </label>
                <input
                  type="text"
                  className="input-base bg-white/10 border-white/20 text-white placeholder:text-white/30"
                  placeholder="Your name"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Email</label>
              <input
                type="email"
                className="input-base bg-white/10 border-white/20 text-white placeholder:text-white/30"
                placeholder="contact@organisation.org"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">
                Partnership type
              </label>
              <select className="input-base bg-white/10 border-white/20 text-white">
                <option value="" className="text-[var(--ink)]">Select a type</option>
                <option value="supply" className="text-[var(--ink)]">In-kind supply</option>
                <option value="expertise" className="text-[var(--ink)]">Technical expertise</option>
                <option value="fundraising" className="text-[var(--ink)]">Joint fundraising</option>
                <option value="advocacy" className="text-[var(--ink)]">Advocacy</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-white/50 mb-1.5 uppercase tracking-wider">Message</label>
              <textarea
                rows={4}
                className="input-base bg-white/10 border-white/20 text-white placeholder:text-white/30 resize-none"
                placeholder="Tell us about your organisation and proposed collaboration..."
              />
            </div>
            <RippleButton type="submit" variant="primary" size="lg">
              Send enquiry
            </RippleButton>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
