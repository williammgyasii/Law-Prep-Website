import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore LawPrep AI's complete LSAT prep toolkit — practice engine, AI study assistant, writing simulator, study modules, learning hub, and more.",
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
