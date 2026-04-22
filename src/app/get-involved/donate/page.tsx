import { PageIntro } from "@/components/sections/PageIntro";
import { SimpleForm } from "@/components/sections/SimpleForm";

export default function DonatePage() {
  return (
    <div className="pb-12">
      <PageIntro title="Donate" description="Choose one-time or monthly support tiers tied to concrete community outcomes." />
      <div className="container-luri">
        <SimpleForm formType="donate" />
      </div>
    </div>
  );
}
