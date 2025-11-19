import { ContactHero } from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqContact } from "@/components/contact/FaqContact";

export default function page() {
  return (
    <div>
      <ContactHero />
      <ContactForm />
      <FaqContact />
    </div>
  );
}
