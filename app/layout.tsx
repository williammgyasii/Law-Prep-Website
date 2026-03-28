import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LawPrep AI — Master the LSAT with AI-Powered Prep",
    template: "%s | LawPrep AI",
  },
  description:
    "The AI-powered LSAT study platform. Practice with real PrepTest questions, study with AI, simulate LSAT Writing, and track your progress — all in one place.",
  openGraph: {
    title: "LawPrep AI — Master the LSAT with AI-Powered Prep",
    description:
      "The AI-powered LSAT study platform. Practice with real PrepTest questions, study with AI, simulate LSAT Writing, and track your progress.",
    siteName: "LawPrep AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("dark", "h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
