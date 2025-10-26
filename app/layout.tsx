import { metadata as siteMetadata } from "@/lib/metadata";
import { NavbarContainer } from "@/components/Navbar";
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
    <html lang="es">
      <body
        className={`${pixelify.variable} ${inter.variable} antialiased relative bg-[#061932]`}
      >
        <NavbarContainer />
        {children}
        <Footer />
      </body>
    </html>
  );
}
