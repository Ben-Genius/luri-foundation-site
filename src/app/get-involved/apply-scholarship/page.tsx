import { PageIntro } from "@/components/sections/PageIntro";
import { SimpleForm } from "@/components/sections/SimpleForm";

export default function ApplyScholarshipPage() {
  return (
    <div className="pb-12">
      <PageIntro title="Apply for a Scholarship" description="Apply for STEM scholarship support with academic and household information." />
      <div className="container-luri">
        <SimpleForm formType="apply-scholarship" />
      </div>
    </div>
  );
}
