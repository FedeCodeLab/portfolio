import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import Tecnologies from "@/components/Tecnologies";
import Timeline from "@/components/timeline/Timeline";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-green-800 from-0% to-60% to-neutral-900 -z-10 opacity-50" />
      <main className="relative z-10">
        <Hero />
        <div className="relative overflow-hidden">
          <Tecnologies />
        </div>
        <WorkExperience />
        <Portfolio />
        <Timeline />
      </main>
    </>
  );
}
