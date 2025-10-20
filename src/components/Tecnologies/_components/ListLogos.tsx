import { ListLogosProps } from "@/types/useVelocity";
import logos from "@/services/logos.json";
import { Logo } from "./Logo";

export const ListLogos = ({ start, end, animation }: ListLogosProps) => {
  const logoss = logos.slice(start, end);

  return (
    <div
      className={`flex justify-center gap-[15px] pr-[15px] md:pr-[30px] md:gap-space-m animation-${animation}`}
    >
      {logoss.map((logo) => (
        <Logo key={logo.id} image={logo.image} name={logo.name} />
      ))}
    </div>
  );
};
