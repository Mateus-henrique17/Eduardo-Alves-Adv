import { AboutSection } from "./AboutSection.jsx";
import { ExpertiseSection } from "./ExpertiseSection.jsx";
import { SectionDivider } from "../../components/SectionDivider/SectionDivider.jsx";
import { HeroSection } from "./HeroSection.jsx";

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ExpertiseSection />
      <SectionDivider variant="solid" spacing="small" />
      <AboutSection />
    </div>
  );
};
