import { metadata as siteMetadata } from "@/lib/metadata";
import { pixelify, inter } from "@/lib/fonts";
import { Navbar } from "@/_components/navbar";
import { Footer } from "@/_components/footer";
import "./globals.css";
import { FloatToggleTheme } from "@/_components/ui/FloatToggleTheme";

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
      min-h-screen  bg-[#dbeaff] dark:bg-[#020617] md:bg-transparent md:bg-gradient-to-tl md:from-[30%] md:from-[#a6c5ee] md:via-[#b4cff3] md:to-[#dbeaff] 
      md:dark:from-[#020617] md:dark:via-[#10122a] md:dark:to-[#1a1b3d] md:bg-fixed`}
      >
        <Navbar />
        {children}
        <Footer />
        <FloatToggleTheme />
      </body>
    </html>
  );
}
