"use client";

import React from "react";
import { Reveal } from "@/components/motion/Reveal";
import { RippleButton } from "@/components/motion/RippleButton";
import { Phone, Mail, Globe, Send, User, MessageSquare, ArrowRight, MapPin } from "lucide-react";

interface ContactSectionProps {
  title?: string;
  description?: string;
  phone?: string;
  email?: string;
  web?: { label: string; url: string };
}

export const ContactSection = ({
  title = "Get in touch.",
  description = "Whether you're looking to partner, volunteer, or simply want to learn more about our work in Northern Ghana, our team is here to help.",
  phone = "+233 55 123 4567",
  email = "hello@lurifoundation.org",
  web = { label: "lurifoundation.org", url: "https://lurifoundation.org" },
}: ContactSectionProps) => {
  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-[90%] mx-auto">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-[0_32px_64px_-16px_rgba(0,80,53,0.12)] border border-[rgba(0,80,53,0.05)] flex flex-col lg:flex-row">

            {/* ── Left Column: Contact Info ── */}
            <div className="relative lg:w-[40%] bg-[var(--primary)] p-10 lg:p-14 text-white overflow-hidden flex flex-col justify-between">
              {/* Background Curve Accessory */}
              <div
                className="absolute top-0 right-0 h-full w-[120px] bg-white pointer-events-none hidden lg:block"
                style={{
                  borderRadius: "100% 0 0 100% / 50% 0 0 50%",
                  transform: "translateX(50%)"
                }}
              />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[0.6rem] font-bold uppercase tracking-wider mb-8">
                  <span className="h-1 w-1 rounded-full bg-[var(--accent)] animate-pulse" />
                  Connect with us
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-tight">
                  {title}
                </h2>
                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-12 max-w-xs">
                  {description}
                </p>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[var(--accent)]">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Phone</p>
                      <p className="font-semibold text-sm">{phone}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[var(--accent)]">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Email</p>
                      <p className="font-semibold text-sm">{email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center text-[var(--accent)]">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-white/40 tracking-widest">Location</p>
                      <p className="font-semibold text-sm text-white/90">Upper West Region, Ghana</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Blobs */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[var(--accent)] opacity-10 rounded-full blur-3xl" />
            </div>

            {/* ── Right Column: The Form ── */}
            <div className="lg:w-[60%] p-10 lg:p-14 bg-white">
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[var(--primary)] mb-2 font-display">Send a message</h3>
                <p className="text-[var(--ink-600)] text-sm">
                  Have a question or want to get involved? Fill out the form below.
                </p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--primary)]/50 ml-1">
                      First Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--ink-400)] transition-colors group-focus-within:text-[var(--primary)]" />
                      <input
                        type="text"
                        className="input-base !pl-11 !bg-[#f5f5f4] focus:!bg-white transition-all"
                        placeholder="Kofi"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--primary)]/50 ml-1">
                      Last Name
                    </label>
                    <div className="relative group">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--ink-400)] transition-colors group-focus-within:text-[var(--primary)]" />
                      <input
                        type="text"
                        className="input-base !pl-11 !bg-[#f5f5f4] focus:!bg-white transition-all"
                        placeholder="Mensah"
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
                      className="input-base !pl-11 !bg-[#f5f5f4] focus:!bg-white transition-all"
                      placeholder="kofi@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[0.65rem] font-bold uppercase tracking-wider text-[var(--primary)]/50 ml-1">
                    Subject
                  </label>
                  <div className="relative group">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--ink-400)] transition-colors group-focus-within:text-[var(--primary)]" />
                    <input
                      type="text"
                      className="input-base !pl-11 !bg-[#f5f5f4] focus:!bg-white transition-all"
                      placeholder="How can we help?"
                    />
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
                      className="input-base !pl-11 !bg-[#f5f5f4] focus:!bg-white transition-all resize-none"
                      placeholder="Tell us about your interest..."
                    />
                  </div>
                </div>

                <RippleButton type="submit" variant="primary" size="lg" className="w-full sm:w-auto !rounded-xl !px-10 mt-4 shadow-lg shadow-[var(--primary)]/10">
                  Send Message <Send className="ml-2 h-4 w-4" />
                </RippleButton>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
