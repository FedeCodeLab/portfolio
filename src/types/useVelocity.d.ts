export interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

export interface ListLogosProps {
  start: number;
  end: number;
  animation: "right" | "left";
}

export interface BrandProps {
  name: string;
  image: string;
}
