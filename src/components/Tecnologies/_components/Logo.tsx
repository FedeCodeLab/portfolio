import { BrandProps } from "@/types/useVelocity";
import Image from "next/image";

export const Logo = ({ name, image, position = "bottom-2" }: BrandProps) => {
  const positionClasses =
    position === "top-2"
      ? "top-2 -translate-y-full"
      : "bottom-2 translate-y-full";

  return (
    <div className="relative flex justify-center items-center size-[120px] py-10 group overflow-visible">
      <Image
        src={image}
        height={100}
        width={100}
        alt={name}
        className="object-contain size-[100px]"
      />
      <span
        className={`absolute ${positionClasses} px-2 py-1 text-xs font-semibold bg-emerald-800 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap`}
      >
        {name}
      </span>
    </div>
  );
};
