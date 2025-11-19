import { HeroPortfolio } from "@/components/portfolio/HeroPortfolio";
import { ProjectsGrid } from "@/components/portfolio/ProjectsGrid";

export default function page() {
  return (
    <div>
      <HeroPortfolio />
      <ProjectsGrid />
    </div>
  );
}
