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
  title: "Navneet Sahu — Full Stack & Web3 Developer",
  description:
    "Full stack and Web3 developer at IIT (ISM) Dhanbad. Building Sealed (private stablecoin payroll on Solana), Insure (parametric insurance on Solana) and Mand(ate), an ENS prize winner at HackMoney 2026.",
  keywords: [
    "Navneet Sahu",
    "Web3",
    "Solana",
    "Full Stack Developer",
    "IIT ISM",
    "Portfolio",
  ],
  openGraph: {
    title: "Navneet Sahu — Full Stack & Web3 Developer",
    description:
      "Solana programs, EVM contracts and the apps people use them through. Projects: Sealed, Insure, Mand(ate), FluxDEX.",
    type: "website",
    images: ["/profile.jpg"],
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
