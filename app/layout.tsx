import type { Metadata } from "next";
import { Hanken_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-hanken",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Navneet Sahu — Developer Portfolio",
  description:
    "Full Stack & Web3 Developer. B.Tech Chemical Engineering at IIT (ISM) Dhanbad. Building on Solana, Ethereum & the open web.",
  keywords: [
    "Navneet Sahu",
    "Web3",
    "Solana",
    "Full Stack Developer",
    "IIT ISM",
    "Portfolio",
  ],
  openGraph: {
    title: "Navneet Sahu — Developer Portfolio",
    description:
      "Full Stack & Web3 Developer building on Solana, Ethereum, and the open web.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${hanken.variable} ${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
