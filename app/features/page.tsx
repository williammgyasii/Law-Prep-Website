"use client";

import type React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Brain,
  PenTool,
  BookOpen,
  Library,
  Calendar,
  TrendingUp,
  BarChart3,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/shared/section";
import { CTABanner } from "@/components/shared/cta-banner";
import { FEATURES, SIGNUP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Target,
  Brain,
  PenTool,
  BookOpen,
  Library,
  Calendar,
  TrendingUp,
  BarChart3,
};

export default function FeaturesPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[520px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute top-32 right-0 h-[280px] w-[420px] rounded-full bg-primary/5 blur-[80px]" />
        </div>

        <SectionHeader
          tag="Features"
          title="Everything you need to master the LSAT"
          description="Practice with real PrepTest questions, study with AI that understands your materials, and track every step of your prep — from first drill to test day."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="h-12 gap-2 rounded-full px-8 text-base font-semibold"
            render={<a href={SIGNUP_URL} />}
          >
            Get Started Free
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </Section>

      {FEATURES.map((feature, index) => {
        const Icon = ICON_MAP[feature.icon] ?? Target;
        const textFirst = index % 2 === 0;

        const textBlock = (
          <motion.div
            initial={{ opacity: 0, x: textFirst ? -28 : 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className={cn("flex flex-col justify-center", !textFirst && "lg:order-2")}
          >
            <div className="mb-4 inline-flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/20">
              <Icon className="size-6" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              {feature.title}
            </h2>
            <p className="mt-2 text-lg font-medium text-primary/90 sm:text-xl">
              {feature.subtitle}
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {feature.description}
            </p>

            <motion.ul
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.07, delayChildren: 0.12 },
                },
              }}
              className="mt-8 space-y-3.5"
            >
              {feature.highlights.map((item) => (
                <motion.li
                  key={item}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="flex gap-3 text-sm sm:text-base"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-3.5" strokeWidth={2.5} />
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        );

        const visualBlock = (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: textFirst ? 28 : -28 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
            className={cn("relative flex min-h-[280px] items-center justify-center", !textFirst && "lg:order-1")}
          >
            <div
              className={cn(
                "relative flex aspect-[4/3] w-full max-w-lg items-center justify-center overflow-hidden rounded-2xl border border-border/50",
                "bg-gradient-to-br from-primary/20 via-primary/8 to-background",
                "shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset]"
              )}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,oklch(0.65_0.24_270_/0.25),transparent_55%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_80%,oklch(0.55_0.2_300_/0.12),transparent_50%)]" />
              <div className="absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:32px_32px]" />

              <motion.div
                aria-hidden
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 flex items-center justify-center"
              >
                <Icon className="size-16 text-primary/25 sm:size-20" />
              </motion.div>

              <div className="absolute -bottom-8 left-1/2 h-24 w-[70%] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
            </div>
          </motion.div>
        );

        return (
          <Section
            key={feature.id}
            className="border-t border-border/40 py-20 sm:py-24"
          >
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
              {textFirst ? (
                <>
                  {textBlock}
                  {visualBlock}
                </>
              ) : (
                <>
                  {visualBlock}
                  {textBlock}
                </>
              )}
            </div>
          </Section>
        );
      })}

      <Section className="py-20 sm:py-28">
        <CTABanner />
      </Section>
    </>
  );
}
