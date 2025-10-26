import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const pixelify = localFont({
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

const inter = localFont({
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

export const metadata: Metadata = {
  title: "FedeCodeLab | Frontend Developer",
  description:
    "Desarrollador Front-end enfocado en construir interfaces web funcionales, accesibles y de alta calidad. Combino conocimientos técnicos con atención al detalle para crear soluciones modernas y orientadas a la experiencia del usuario.",
  keywords: [
    "Frontend Developer",
    "Desarrollador Web",
    "FedeCodeLab",
    "Portafolio",
    "Web Developer",
  ],
  authors: [{ name: "Federico", url: "https://fedecodelab.vercel.app/" }],
  creator: "Federico Guzmán",
  robots: "index, follow",
  openGraph: {
    title: "FedeCodeLab | Frontend Developer",
    description:
      "Construyo interfaces web modernas, accesibles y orientadas a la experiencia del usuario.",
    url: "https://fedecodelab.vercel.app",
    siteName: "fedecodelab",
    // images: [
    //   {
    //     url: "https://tusitio.dev/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "FedeCodeLab – Frontend Portfolio",
    //   },
    // ],
    type: "website",
  },
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
