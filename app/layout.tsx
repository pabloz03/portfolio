import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import { Navigation } from "@/components/Navigation";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo Rodriguez — Senior Product Designer",
  description:
    "10+ years designing fintech, B2B SaaS, and 0→1 products. Based in Guatemala City.",
  openGraph: {
    title: "Pablo Rodriguez — Senior Product Designer",
    description:
      "Portfolio of Pablo Rodriguez, senior product designer specializing in fintech and B2B SaaS.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} scroll-smooth`}
    >
      <body className="bg-white text-black antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
