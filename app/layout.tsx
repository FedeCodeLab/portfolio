import { GoogleReCaptcha } from "@/_components/contact/GoogleReCaptcha";
import { FloatToggleTheme } from "@/_components/ui/FloatToggleTheme";
import { metadata as siteMetadata } from "@/lib/metadata";
import { pixelify, inter } from "@/lib/fonts";
import { Navbar } from "@/_components/navbar";
import { Footer } from "@/_components/footer";
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
      min-h-screen  bg-[#F6FAFF] dark:bg-[#020617] dark:md:bg-transparent md:bg-gradient-to-tl md:from-[30%]
      md:dark:from-[#020617] md:dark:via-[#10122a] md:dark:to-[#1a1b3d] md:bg-fixed`}
      >
        <GoogleReCaptcha>
          <Navbar />
          {children}
          <Footer />
          <FloatToggleTheme />
        </GoogleReCaptcha>
      </body>
    </html>
  );
}
