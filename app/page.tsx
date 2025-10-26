import { WorkExperience } from "@/_components/workExperience";
import { Portfolio } from "@/_components/portfolio";
import Tecnologies from "@/_components/tecnologies";
import { Timeline } from "@/_components/timeline";
import { Hero } from "@/_components/hero";

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
