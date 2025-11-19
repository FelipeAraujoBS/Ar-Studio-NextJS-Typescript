import { HeroServices } from "@/components/services/HeroServices";
import { ServicesOverview } from "@/components/services/ServicesOverview";
import { CTAFinal } from "@/components/services/CTAFinal";

export const metadata = {
  title: "Serviços - A Group | Seu hub de soluções tecnológicas",
  description:
    "Conheça os Serviços de desenvolvimento web especializado oferecidos pela A Group",
};

export default function ServicesPage() {
  return (
    <main>
      <HeroServices />
      <ServicesOverview />
      <CTAFinal />
    </main>
  );
}
