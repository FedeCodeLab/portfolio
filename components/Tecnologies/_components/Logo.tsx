import { BrandProps } from "../../../types/useVelocity";
import Image from "next/image";

export const Logo = ({ name, image }: BrandProps) => {
  return (
    <div className="relative rounded-[10px] flex flex-col justify-center gap-2 items-center size-[80px] md:size-[120px] p-10 overflow-visible">
      <div className="size-[60px] md:size-[80px]">
        <Image
          src={image}
          height={80}
          width={80}
          alt={name}
          className="object-contain size-[60px] md:size-[80px]"
        />
      </div>
      <span className="text-xs font-semibold">{name}</span>
    </div>
  );
};
