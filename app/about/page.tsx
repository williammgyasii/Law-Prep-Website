"use client";

import { motion } from "framer-motion";
import { Scale, Heart, Shield, Zap, BookOpen, Users } from "lucide-react";
import {
  Section,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/section";
import { CTABanner } from "@/components/shared/cta-banner";
import { Card, CardContent } from "@/components/ui/card";

const PROBLEM_POINTS = [
  "Premium LSAT prep courses often run $1,000–$3,000 or more — before books, tutoring, or add-ons.",
  "Study materials are fragmented across dozens of platforms, PDFs, and forums.",
  "Most tools don’t adapt to how you learn; you get the same path whether it fits or not.",
  "Students without those financial resources start at a real disadvantage.",
];

const VALUE_CARDS = [
  {
    icon: Heart,
    title: "Accessible",
    description:
      "Quality LSAT prep shouldn’t require a premium budget. Our Starter plan is free forever.",
  },
  {
    icon: Zap,
    title: "AI-Powered",
    description:
      "AI that works with your materials — upload your notes, textbooks, and study guides.",
  },
  {
    icon: Shield,
    title: "Authentic",
    description:
      "Real PrepTest questions, official LSAT Writing format, no shortcuts or gimmicks.",
  },
  {
    icon: BookOpen,
    title: "Respectful",
    description:
      "We don’t rehost copyrighted LSAC content. We help you organize and study your own materials.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-24 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[360px] w-[520px] rounded-full bg-primary/6 blur-[100px]" />
          <motion.div
            aria-hidden
            className="absolute top-24 left-[12%] text-primary/20"
            initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Scale className="size-16 sm:size-20" strokeWidth={1.25} />
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary"
            >
              <Scale className="size-3.5" />
              Our mission
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              We believe LSAT prep should be{" "}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                accessible to everyone
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.14 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              LawPrep AI exists to democratize LSAT preparation. We use AI to help you
              study smarter — not to replace the work, and not behind a four-figure paywall
              you can’t justify. If you’re serious about law school, you deserve tools that
              meet you where you are.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scaleX: 0.3 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto mt-10 h-px max-w-md origin-center bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            />
          </div>
        </div>
      </section>

      {/* The problem */}
      <Section className="py-16 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="mb-3 inline-block rounded-full bg-destructive/15 px-4 py-1.5 text-sm font-medium text-destructive">
              The problem we&apos;re solving
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Prep shouldn&apos;t be a luxury good
            </h2>
            <p className="mt-4 text-muted-foreground">
              The LSAT is hard enough without the industry around it making access unfair.
              Here&apos;s what we keep hearing from students — and what we&apos;re building
              against.
            </p>
          </motion.div>

          <StaggerContainer
            className="lg:col-span-7 space-y-4"
            staggerDelay={0.12}
          >
            {PROBLEM_POINTS.map((text, i) => (
              <StaggerItem key={i}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  className="rounded-2xl border border-border/60 bg-card/40 p-5 sm:p-6 backdrop-blur-sm"
                >
                  <p className="text-base leading-relaxed text-foreground/95">
                    {text}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Section>

      {/* Our approach */}
      <Section className="py-16 sm:py-24">
        <SectionHeader
          tag="Our approach"
          title="How we think about LSAT prep"
          description="We’re not trying to be the loudest brand in the room. We’re trying to be the one that respects your time, your budget, and the real exam you’re preparing for."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {VALUE_CARDS.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 22 }}
                >
                  <Card className="h-full border-border/50 bg-card/50 py-0 shadow-none ring-1 ring-border/40 transition-colors hover:border-primary/25 hover:ring-primary/15">
                    <CardContent className="p-6 sm:p-8">
                      <motion.div
                        initial={false}
                        whileHover={{ scale: 1.06, rotate: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 18 }}
                        className="mb-5 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary"
                      >
                        <Icon className="size-6" />
                      </motion.div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      {/* What makes us different */}
      <Section className="py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-background px-6 py-14 sm:px-12 sm:py-16 lg:px-16"
        >
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 size-56 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-block rounded-full bg-background/60 px-4 py-1.5 text-sm font-medium text-primary ring-1 ring-primary/20"
            >
              What makes us different
            </motion.span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Not another generic AI wrapper — and not a $2,000 course in disguise
            </h2>
            <div className="mt-6 space-y-4 text-lg text-muted-foreground">
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
              >
                LawPrep AI is a purpose-built study operating system: real LSAT practice,
                AI tools that work with your own materials, writing simulation that mirrors
                the official format, and progress analytics so you can see where you actually
                stand — in one place, instead of six tabs and a spreadsheet.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="font-medium text-foreground/90"
              >
                The AI doesn&apos;t replace studying. It amplifies it — explanations when
                you&apos;re stuck, structure when you&apos;re overwhelmed, and speed when
                you&apos;re reviewing.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Built for students */}
      <Section className="py-16 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex aspect-[4/3] max-h-[320px] items-center justify-center rounded-3xl border border-border/50 bg-card/30 lg:max-h-none"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/15 via-transparent to-transparent" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex size-28 items-center justify-center rounded-2xl bg-primary/15 text-primary ring-1 ring-primary/25"
            >
              <Users className="size-14" strokeWidth={1.25} />
            </motion.div>
          </motion.div>

          <div>
            <SectionHeader
              align="left"
              tag="Built for students"
              title="We started with the gap, not a pitch deck"
              description=""
              className="mb-0 lg:mb-0"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="mt-6 space-y-4 text-muted-foreground"
            >
              <p>
                We started because we saw strong LSAT students held back by expensive,
                fragmented prep — not because they lacked drive, but because the tools
                around the test weren&apos;t built for everyone.
              </p>
              <p>
                We&apos;re building the platform we wish existed when we were preparing:
                honest about what the product does, clear about limits, and focused on the
                work you have to put in to improve.
              </p>
              <p className="text-foreground/85">
                No fake team bios, no borrowed logos, no inflated testimonials. If
                something here doesn&apos;t match what you see in the product, we&apos;d
                rather you tell us than stay quiet.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-20 pt-8 sm:pb-28">
        <CTABanner
          title="See if LawPrep AI fits your prep"
          description="Start on the free Starter plan and explore real practice, writing simulation, and AI study tools. No credit card required — upgrade only if you need more."
        />
      </Section>
    </>
  );
}
