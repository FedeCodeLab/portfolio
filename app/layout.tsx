import { metadata as siteMetadata } from "@/lib/metadata";
import { pixelify, inter } from "@/lib/fonts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${pixelify.variable} ${inter.variable} antialiased relative 
      min-h-screen bg-gradient-to-tl from-[30%] from-[#a6c5ee] via-[#b4cff3] to-[#dbeaff] 
      dark:from-[#020617] dark:via-[#10122a] dark:to-[#1a1b3d] bg-fixed`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
