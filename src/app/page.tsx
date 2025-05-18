"use client";

import { useRef } from "react";
import { useLenis } from "@/hooks/lenis";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import Tecnologies from "@/components/Tecnologies";
import { Timeline } from "@/components/timeline";
import { WorkExperience } from "@/components/WorkExperience";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  const experienceRef = useRef(null);
  const porfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const timelineRef = useRef(null);
  useLenis();
  return (
    <>
      <Navbar
        experienceRef={experienceRef}
        porfolioRef={porfolioRef}
        skillsRef={skillsRef}
        timelineRef={timelineRef}
      />

      <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-b from-green-800 from-0% to-60% to-neutral-900 -z-10 opacity-50" />
      <main className="relative z-10">
        <Hero />
        <div className="relative overflow-hidden" ref={skillsRef}>
          <Tecnologies />
        </div>
        <WorkExperience ref={experienceRef} />
        <Portfolio ref={porfolioRef} />
        <Timeline ref={timelineRef} />
      </main>
    </>
  );
}
