import { PageIntro } from "@/components/sections/PageIntro";
import { SimpleForm } from "@/components/sections/SimpleForm";

export default function VolunteerPage() {
  return (
    <div className="pb-12">
      <PageIntro title="Volunteer" description="Share facilitation, liaison, training, or mentorship skills with LURI communities." />
      <div className="container-luri">
        <SimpleForm formType="volunteer" />
      </div>
    </div>
  );
}
