export interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

export interface ListLogosProps {
  start: number;
  end: number;
  animation: "right" | "left";
  position?: "top-2" | "bottom-2";
}

export interface BrandProps {
  name: string;
  image: string;
  position?: "top-2" | "bottom-2";
}
