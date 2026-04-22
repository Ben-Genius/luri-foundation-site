"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Phone, Mail, Globe, Send } from "lucide-react";

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
    <section className="py-24 sm:py-32 bg-white overflow-hidden">
      <div className="container-luri">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Info */}
          <div className="flex flex-col justify-between lg:w-1/3">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary-light)] text-[var(--primary)] text-[0.65rem] font-bold uppercase tracking-wider mb-6">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--primary)] animate-pulse" />
                  Contact Us
                </div>
              </Reveal>
              
              <SplitHeading 
                text={title}
                as="h1"
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-[var(--ink)] mb-6 leading-[0.9] tracking-tighter"
              />
              
              <Reveal delay={0.2}>
                <p className="text-lg text-[var(--ink-600)] leading-relaxed max-w-md">
                  {description}
                </p>
              </Reveal>
            </div>

            <div className="mt-16 space-y-10">
              <Reveal direction="up" delay={0.3}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--ink-400)] mb-6">
                  Contact Details
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group cursor-default">
                    <div className="h-10 w-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] transition-transform group-hover:scale-110">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[var(--ink-400)] tracking-widest">Phone</p>
                      <p className="font-semibold text-[var(--ink)]">{phone}</p>
                    </div>
                  </div>

                  <a href={`mailto:${email}`} className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] transition-transform group-hover:scale-110">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[var(--ink-400)] tracking-widest">Email</p>
                      <p className="font-semibold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors">{email}</p>
                    </div>
                  </a>

                  <a href={web.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                    <div className="h-10 w-10 rounded-full bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] transition-transform group-hover:scale-110">
                      <Globe size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-[var(--ink-400)] tracking-widest">Web</p>
                      <p className="font-semibold text-[var(--ink)] group-hover:text-[var(--primary)] transition-colors">{web.label}</p>
                    </div>
                  </a>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="flex-1 lg:max-w-2xl">
            <Reveal direction="left" delay={0.1}>
              <div className="bg-[#faf9f6] p-8 sm:p-12 rounded-[2rem] border border-[var(--primary)]/5 shadow-2xl shadow-black/5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstname">First Name</Label>
                    <Input type="text" id="firstname" placeholder="Kofi" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input type="text" id="lastname" placeholder="Mensah" />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input type="email" id="email" placeholder="kofi@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input type="text" id="subject" placeholder="How can we help?" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea 
                      placeholder="Tell us about your interest in LURI Foundation..." 
                      id="message" 
                    />
                  </div>
                  
                  <Button className="w-full h-14 rounded-xl font-bold text-base gap-2 group">
                    Send Message
                    <Send size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};
