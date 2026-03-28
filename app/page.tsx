"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  Brain,
  PenTool,
  BookOpen,
  Check,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Section,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/section";
import { CTABanner } from "@/components/shared/cta-banner";
import { Counter } from "@/components/shared/counter";
import { SIGNUP_URL, PRICING_TIERS, STATS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const FEATURE_CARDS = [
  {
    icon: Target,
    title: "Real LSAT Practice",
    description:
      "Practice with questions from official PrepTests across all section types. Track your accuracy in real time.",
  },
  {
    icon: Brain,
    title: "AI Study Assistant",
    description:
      "Upload your materials and chat with AI about them. Get explanations, summaries, and quizzes generated instantly.",
  },
  {
    icon: PenTool,
    title: "Writing Simulator",
    description:
      "Practice the LSAT Writing section with official timing — 15 minutes prewriting, 35 minutes essay.",
  },
  {
    icon: BookOpen,
    title: "Structured Modules",
    description:
      "Follow curated study paths with lessons, resources, and progress tracking to keep you on pace.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-20 pb-24 sm:px-6 sm:pt-32 sm:pb-32 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-primary/8 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[600px] rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 gap-1.5 rounded-full px-4 py-1.5 text-sm"
              >
                <Sparkles className="size-3.5" />
                AI-Powered LSAT Prep Platform
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Master the LSAT{" "}
              <span className="bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                with AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            >
              Practice with real PrepTest questions, study with an AI assistant that
              knows your materials, simulate LSAT Writing, and track your progress —
              all in one platform built for serious test-takers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Button
                size="lg"
                className="h-12 gap-2 rounded-full px-8 text-base font-semibold"
                render={<a href={SIGNUP_URL} />}
              >
                Get Started Free
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-12 rounded-full px-8 text-base"
                render={<Link href="/how-it-works" />}
              >
                See How It Works
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 text-sm text-muted-foreground"
            >
              Free forever on Starter. No credit card required.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <Section className="py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-primary sm:text-4xl lg:text-5xl">
                <Counter value={stat.value} />
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Problem / Solution */}
      <Section className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-3 inline-block rounded-full bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive">
              The Problem
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              LSAT prep is expensive, fragmented, and one-size-fits-all
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Premium prep courses cost $1,000+. Free resources are scattered
                across dozens of websites. And none of them adapt to how you
                actually learn.
              </p>
              <p>
                You end up juggling multiple apps, spending money on content you
                don&apos;t need, and studying without any clear picture of where you
                actually stand.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              The Solution
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              One platform. Real questions. AI that learns with you.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                LawPrep AI puts everything you need in one place — official
                PrepTest practice, structured study modules, a writing simulator,
                and an AI assistant that works with your own study materials.
              </p>
              <p>
                Track your progress with detailed analytics, identify your weak
                areas, and let AI build a personalized study plan that fits your
                schedule. Start free and upgrade only when you need more.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Feature Highlights */}
      <Section className="py-20 sm:py-28">
        <SectionHeader
          tag="Features"
          title="Everything you need to ace the LSAT"
          description="From real practice questions to AI-powered study tools, LawPrep gives you a complete prep toolkit that adapts to your learning style."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {FEATURE_CARDS.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <Link href="/features">
                  <Card className="group h-full border-border/50 bg-card/50 p-0 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                    <CardContent className="p-6 sm:p-8">
                      <div className="mb-4 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                        <Icon className="size-6" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="mt-2 text-muted-foreground">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 rounded-full"
            render={<Link href="/features" />}
          >
            View All Features
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </Section>

      {/* Pricing Teaser */}
      <Section className="py-20 sm:py-28">
        <SectionHeader
          tag="Pricing"
          title="Plans for every stage of your prep"
          description="Start free and upgrade when you're ready. Every plan includes real LSAT practice questions from official PrepTests."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {PRICING_TIERS.map((tier) => (
            <StaggerItem key={tier.name}>
              <Card
                className={cn(
                  "relative h-full border-border/50 bg-card/50 p-0 transition-all duration-300 hover:-translate-y-1",
                  tier.highlighted &&
                    "border-primary/50 bg-primary/5 shadow-lg shadow-primary/10"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 right-6">
                    <Badge className="rounded-full px-3">
                      {tier.badge}
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl font-semibold">{tier.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">
                      ${tier.monthlyPrice}
                    </span>
                    {tier.monthlyPrice > 0 && (
                      <span className="text-muted-foreground">/mo</span>
                    )}
                  </div>
                  {tier.yearlyPrice > 0 && (
                    <p className="mt-1 text-sm text-muted-foreground">
                      or ${tier.yearlyPrice}/year (save{" "}
                      {Math.round(
                        (1 - tier.yearlyPrice / (tier.monthlyPrice * 12)) * 100
                      )}
                      %)
                    </p>
                  )}
                  <ul className="mt-6 space-y-2.5">
                    {tier.features.slice(0, 5).map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-sm"
                      >
                        <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button
                      variant={tier.highlighted ? "default" : "outline"}
                      className="w-full rounded-full"
                      render={<a href={SIGNUP_URL} />}
                    >
                      {tier.monthlyPrice === 0 ? "Get Started Free" : `Start with ${tier.name}`}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <Link
            href="/pricing"
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            Compare all plans in detail &rarr;
          </Link>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section className="py-20 sm:py-28">
        <CTABanner />
      </Section>
    </>
  );
}
