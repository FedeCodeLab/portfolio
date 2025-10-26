import type { Metadata } from "next";

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
    //     url: "https://fedecodelab.vercel.app/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "FedeCodeLab – Frontend Portfolio",
    //   },
    // ],
    type: "website",
  },
  alternates: {
    canonical: "https://fedecodelab.vercel.app/",
  },
};
