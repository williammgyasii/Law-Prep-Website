import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "LSAT study tips, strategies, and guides from LawPrep AI. Insights to help you prepare smarter and score higher.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
