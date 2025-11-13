import { GoogleReCaptcha } from "@/_components/contact/GoogleReCaptcha";
import { metadata as siteMetadata } from "@/lib/metadata";
import { pixelify, inter } from "@/lib/fonts";
import { Navbar } from "@/_components/navbar";
import { Footer } from "@/_components/footer";
import { CertificateModal } from "@/_components/CertificateModal";
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
        className={`${pixelify.variable} ${inter.variable} antialiased relative min-h-screen`}
      >
        {/* Fondo fijo */}
        <div className="fixed inset-0 h-screen w-screen bg-[#F4F2EE] dark:bg-transparent dark:bg-gradient-to-br dark:from-[#0f1220] from-[30%] dark:via-slate-800 dark:to-[#0f1220] -z-10" />

        {/* Contenido */}
        <GoogleReCaptcha>
          <Navbar />
          {children}
          <Footer />
          <CertificateModal />
        </GoogleReCaptcha>
      </body>
    </html>
  );
}
