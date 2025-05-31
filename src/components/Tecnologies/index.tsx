"use client";

import UseVelocity from "./_components/UseVelocity";
import { ListLogos } from "./_components/ListLogos";

export default function Tecnologies() {
  return (
    <section className="overflow-visible flex flex-col gap-8 md:pt-16">
      <h2 className="heading-3 font-normal text-center text-neutral-800 dark:text-neutral-200">
        Stack
      </h2>
      <div className="flex flex-col gap-6">
        <UseVelocity baseVelocity={2}>
          <ListLogos start={0} end={7} animation="left" position="bottom-2" />
        </UseVelocity>
        <UseVelocity baseVelocity={-2}>
          <ListLogos start={7} end={14} animation="right" position="top-2" />
        </UseVelocity>
      </div>
    </section>
  );
}
