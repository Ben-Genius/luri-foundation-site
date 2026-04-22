import { PageIntro } from "@/components/sections/PageIntro";
import { SimpleForm } from "@/components/sections/SimpleForm";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { Users, Microscope, Languages } from "lucide-react";

export const metadata = {
  title: "Volunteer — LURI Foundation",
  description: "Share facilitation, liaison, training, or mentorship skills with LURI communities in the Upper West Region, Ghana.",
};

export default function VolunteerPage() {
  return (
    <div className="pb-24 sm:pb-32">
      <PageIntro 
        title="Serve with us." 
        description="We are looking for dedicated professionals and community leaders to support our mission in Northern Ghana through training and mentorship." 
      />
      
      <div className="container-luri">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Info Side */}
          <div className="lg:w-1/2 space-y-12">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight">
                Your skills. <span className="text-[var(--primary)] italic">Their future.</span>
              </h2>
            </Reveal>

            <div className="grid gap-8">
              <Reveal direction="up" delay={0.1}>
                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-2xl bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Community Liaison</h4>
                    <p className="text-[var(--ink-600)] leading-relaxed">
                      Bridge the gap between LURI and community leaders, ensuring our programmes are culturally aligned and effective.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                    <Microscope size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Technical Training</h4>
                    <p className="text-[var(--ink-600)] leading-relaxed">
                      Lead workshops in sustainable agribusiness or support clinical training for rural healthcare assistants.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <Languages size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">STEM Mentorship</h4>
                    <p className="text-[var(--ink-600)] leading-relaxed">
                      Provide career guidance to our scholarship recipients, helping them navigate tertiary education and the job market.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full lg:w-[480px] lg:sticky lg:top-32">
            <Reveal direction="left" delay={0.2}>
              <div className="space-y-6">
                <div className="bg-[var(--primary)] text-white p-6 rounded-[2rem] mb-[-2rem] relative z-10 mx-6 shadow-xl">
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-70 mb-1">Volunteer Application</p>
                  <h3 className="text-xl font-bold">Register your interest</h3>
                </div>
                <SimpleForm formType="volunteer" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
}
