import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "From signup to test day in 5 simple steps. Learn how LawPrep AI helps you study smarter and ace the LSAT.",
};

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
