import { BrandProps } from "@/types/useVelocity";
import Image from "next/image";

export const Logo = ({ name, image }: BrandProps) => {
  return (
    <div className="relative flex justify-center items-center size-[120px] overflow-visible py-10">
      <Image
        src={image}
        height={100}
        width={100}
        alt={name}
        className="overflow-visible object-contain size-[100px]"
      />
    </div>
  );
};
