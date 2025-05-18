import { Logo } from "./Logo";
import logos from "@/services/logos.json";
import { ListLogosProps } from "@/types/useVelocity";

export const ListLogos = ({
  start,
  end,
  animation,
  position = "bottom-2",
}: ListLogosProps) => {
  const logoss = logos.slice(start, end);

  return (
    <div
      className={`flex justify-center gap-[15px] pr-[15px] md:pr-[30px] md:gap-space-m animation-${animation}`}
    >
      {logoss.map((logo) => (
        <Logo
          key={logo.id}
          image={logo.image}
          name={logo.name}
          position={position}
        />
      ))}
    </div>
  );
};
