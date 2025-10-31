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
      min-h-screen bg-[#F6FAFF] dark:bg-[#0f1220]`}
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
