import { PageIntro } from "@/components/sections/PageIntro";
import { SimpleForm } from "@/components/sections/SimpleForm";
import { GSAPReveal as Reveal } from "@/components/motion/GSAPReveal";
import { GraduationCap, BookOpen, UserCheck } from "lucide-react";

export const metadata = {
  title: "Apply for Scholarship — LURI Foundation",
  description: "Apply for STEM scholarship support with academic and household information. Supporting the next generation of leaders in Northern Ghana.",
};

export default function ApplyScholarshipPage() {
  return (
    <div className="pb-24 sm:pb-32">
      <PageIntro 
        title="Elevate your future." 
        description="Scholarships for academically promising students from low-income households in the Upper West Region. We support secondary and tertiary STEM pathways." 
      />
      
      <div className="container-luri">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          {/* Info Side */}
          <div className="lg:w-1/2 space-y-12">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--ink)] tracking-tight">
                Academic <span className="text-[var(--primary)] italic">Excellence.</span>
              </h2>
            </Reveal>

            <div className="grid gap-8">
              <Reveal direction="up" delay={0.1}>
                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-2xl bg-[var(--primary-light)] flex items-center justify-center text-[var(--primary)] shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Tuition Support</h4>
                    <p className="text-[var(--ink-600)] leading-relaxed">
                      Comprehensive coverage of tuition fees for accredited STEM programmes in secondary and tertiary institutions.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.2}>
                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Learning Materials</h4>
                    <p className="text-[var(--ink-600)] leading-relaxed">
                      Funding for textbooks, equipment, and laboratory supplies necessary for your specific field of study.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.3}>
                <div className="flex gap-5">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Mentorship</h4>
                    <p className="text-[var(--ink-600)] leading-relaxed">
                      Scholars are paired with industry professionals for career guidance and personal development throughout their studies.
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
                  <p className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-70 mb-1">Scholarship Application</p>
                  <h3 className="text-xl font-bold">Start your application</h3>
                </div>
                <SimpleForm formType="apply-scholarship" />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
}
