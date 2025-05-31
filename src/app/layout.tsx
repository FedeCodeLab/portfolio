import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const pixelify = localFont({
  src: [
    {
      path: "../../public/fonts/PixelifySans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/PixelifySans-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/PixelifySans-Bold.ttf",
      weight: "600",
      style: "bold",
    },
    {
      path: "../../public/fonts/PixelifySans-SemiBold.ttf",
      weight: "700",
      style: "semibold",
    },
  ],
  variable: "--font-pixelifySans",
});

const inter = localFont({
  src: [
    {
      path: "../../public/fonts/Inter_18pt-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Inter_18pt-Regular.ttf",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/fonts/Inter_18pt-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/Inter_18pt-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/Inter_18pt-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "FedeCodeLab",
  description: "Junior Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${pixelify.variable} ${inter.variable} antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
