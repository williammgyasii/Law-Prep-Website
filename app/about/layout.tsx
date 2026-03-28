import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "LawPrep AI is on a mission to make quality LSAT prep accessible to everyone through AI-powered study tools.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
