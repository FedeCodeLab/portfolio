import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { WorkExperience } from "@/components/WorkExperience";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <WorkExperience />
      <Portfolio />
    </main>
  );
}
