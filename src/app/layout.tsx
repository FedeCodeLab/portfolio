import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GTWalsheimPro = localFont({
  src: [
    {
      path: "../../public/fonts/GT-Walsheim-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GT-Walsheim-Medium.ttf",
      weight: "500",
      style: "medium",
    },
  ],
  variable: "--font-gtWalsheimPro",
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
        className={`${geistSans.variable} ${geistMono.variable} ${GTWalsheimPro.variable} antialiased relative`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
