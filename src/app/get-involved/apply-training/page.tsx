import { PageIntro } from "@/components/sections/PageIntro";
import { SimpleForm } from "@/components/sections/SimpleForm";

export default function ApplyTrainingPage() {
  return (
    <div className="pb-12">
      <PageIntro title="Apply for Training" description="Submit your interest and programme selection for healthcare or agribusiness training tracks." />
      <div className="container-luri">
        <SimpleForm formType="apply-training" />
      </div>
    </div>
  );
}
