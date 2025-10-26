import localFont from "next/font/local";

export const pixelify = localFont({
  src: [
    {
      path: "../public/fonts/PixelifySans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PixelifySans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/PixelifySans-Bold.ttf",
      weight: "600",
      style: "bold",
    },
    {
      path: "../public/fonts/PixelifySans-SemiBold.ttf",
      weight: "700",
      style: "semibold",
    },
  ],
  variable: "--font-pixelifySans",
});

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter_18pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../public/fonts/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../public/fonts/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-inter",
});
