import { metadata as siteMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/Navbar";
import { pixelify, inter } from "@/lib/fonts";
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
        className={`${pixelify.variable} ${inter.variable} antialiased relative bg-white dark:bg-[#061932]`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
