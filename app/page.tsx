import { WorkExperience } from "../components/WorkExperience";
import { Portfolio } from "../components/Portfolio";
import Tecnologies from "../components/Tecnologies";
import { Timeline } from "../components/timeline";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />

      <Tecnologies />

      <WorkExperience />
      <Portfolio />
      <Timeline />
    </main>
  );
}
