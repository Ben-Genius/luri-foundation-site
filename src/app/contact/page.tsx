import { ContactSection } from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact Us — LURI Foundation",
  description: "Get in touch with LURI Foundation. We are available for questions, feedback, or collaboration opportunities.",
};

export default function ContactPage() {
  return (
    <main className="pt-20">
      <ContactSection />
    </main>
  );
}
