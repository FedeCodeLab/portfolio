"use client";

import UseVelocity from "./_components/UseVelocity";
import { ListLogos } from "./_components/ListLogos";

export default function Tecnologies() {
  return (
    <section className="overflow-visible flex flex-col gap-6">
      <UseVelocity baseVelocity={2}>
        <ListLogos start={0} end={7} animation="left" />
      </UseVelocity>
      <UseVelocity baseVelocity={-2}>
        <ListLogos start={7} end={14} animation="right" />
      </UseVelocity>
    </section>
  );
}
