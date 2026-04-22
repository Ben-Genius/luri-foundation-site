import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/sections/SiteShell";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LURI Foundation — People · Partnership · Purpose",
  description:
    "Empowering communities in Upper West Region, Ghana through healthcare training, agribusiness, and STEM scholarships.",
  keywords: ["NGO Ghana", "Upper West Region", "healthcare training", "agribusiness", "STEM scholarships"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <SmoothScrollProvider>
          <SiteShell>{children}</SiteShell>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
