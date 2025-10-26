"use client";

import { useRefsStore } from "@/store/useRefsStore";
import { Navbar } from "./Navbar";

export const NavbarContainer = () => {
  const { experienceRef, portfolioRef, skillsRef, timelineRef } =
    useRefsStore();
  return (
    <div>
      <Navbar
        experienceRef={experienceRef}
        porfolioRef={portfolioRef}
        skillsRef={skillsRef}
        timelineRef={timelineRef}
      />
    </div>
  );
};
