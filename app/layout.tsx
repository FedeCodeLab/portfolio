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
      min-h-screen bg-[#F6FAFF] dark:bg-[#0f1220]`}
      >
        <Navbar />
        {children}
        <Footer />
        <FloatToggleTheme />
      </body>
    </html>
  );
}
