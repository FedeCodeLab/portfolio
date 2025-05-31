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
    <div className="bg-[#061932]">
      <Navbar
        experienceRef={experienceRef}
        porfolioRef={porfolioRef}
        skillsRef={skillsRef}
        timelineRef={timelineRef}
      />
      <main className="relative z-10">
        <Hero />
        <div className="relative overflow-hidden" ref={skillsRef}>
          <Tecnologies />
        </div>
        <WorkExperience ref={experienceRef} />
        <Portfolio ref={porfolioRef} />
        <Timeline ref={timelineRef} />
      </main>
    </div>
  );
}
