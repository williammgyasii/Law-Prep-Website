"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import {
  UserPlus,
  Layers,
  Target,
  TrendingUp,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/shared/section";
import { CTABanner } from "@/components/shared/cta-banner";
import { SIGNUP_URL, HOW_IT_WORKS_STEPS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const ICON_MAP: Record<string, ComponentType<{ className?: string }>> = {
  UserPlus,
  Layers,
  Target,
  TrendingUp,
  Award,
};

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-20 pb-16 sm:px-6 sm:pt-28 sm:pb-20 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[320px] w-[520px] rounded-full bg-primary/6 blur-[100px]" />
        </div>
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            tag="How It Works"
            title="From signup to test day in 5 steps"
            description="LawPrep AI walks you from your first login to a confident test day — structured modules, real PrepTest practice, analytics, and AI that adapts to how you learn."
          />
        </div>
      </section>

      {/* Timeline */}
      <Section className="pb-12 sm:pb-16 lg:pb-20">
        <div className="relative mx-auto max-w-5xl">
          {/* Continuous vertical connector */}
          <div
            className="pointer-events-none absolute top-0 bottom-0 left-7 z-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:left-1/2"
            aria-hidden
          />

          <div className="relative flex flex-col">
            {HOW_IT_WORKS_STEPS.map((item, index) => {
              const isOdd = item.step % 2 === 1;
              const Icon = ICON_MAP[item.icon] ?? UserPlus;
              const stepLabel = String(item.step).padStart(2, "0");

              return (
                <motion.article
                  key={item.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.55,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                  viewport={{ once: true, margin: "-60px" }}
                  className={cn(
                    "relative grid grid-cols-[3.5rem_1fr] gap-x-4 gap-y-4 pb-20 last:pb-0 lg:grid-cols-[1fr_5.5rem_1fr] lg:items-center lg:gap-x-0"
                  )}
                >
                  {/* Step node (circle: number + icon) */}
                  <div
                    className={cn(
                      "relative z-10 col-start-1 row-start-1 flex justify-center lg:col-start-2 lg:row-start-1"
                    )}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{
                        opacity: 1,
                        scale: 1,
                        transition: {
                          duration: 0.45,
                          delay: index * 0.1 + 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }}
                      viewport={{ once: true, margin: "-40px" }}
                      className="relative flex size-[4.5rem] flex-col items-center justify-center gap-0.5 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 ring-4 ring-primary/15"
                    >
                      <span className="font-mono text-lg font-bold leading-none tracking-tight">
                        {stepLabel}
                      </span>
                      <Icon className="size-4 opacity-90" aria-hidden />
                      <div
                        className="pointer-events-none absolute inset-0 rounded-full bg-primary opacity-40 blur-xl"
                        aria-hidden
                      />
                    </motion.div>
                  </div>

                  {/* Copy */}
                  <div
                    className={cn(
                      "col-start-2 row-start-1 min-w-0 lg:row-start-1",
                      isOdd
                        ? "lg:col-start-1 lg:pr-10 lg:text-right"
                        : "lg:col-start-3 lg:pl-10 lg:text-left"
                    )}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isOdd ? -16 : 16 }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                          duration: 0.5,
                          delay: index * 0.1 + 0.08,
                          ease: [0.22, 1, 0.36, 1],
                        },
                      }}
                      viewport={{ once: true, margin: "-50px" }}
                      className={cn(
                        "rounded-2xl border border-border/60 bg-card/40 p-6 backdrop-blur-sm transition-shadow duration-500 lg:bg-card/30",
                        "shadow-[0_0_0_1px_rgba(255,255,255,0.03)]",
                        "hover:border-primary/25 hover:shadow-[0_0_48px_-12px_var(--color-primary)]"
                      )}
                    >
                      <div
                        className={cn(
                          "mb-3 flex items-center gap-2",
                          isOdd ? "lg:justify-end" : "lg:justify-start"
                        )}
                      >
                        <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary/15 text-primary lg:hidden">
                          <Icon className="size-4" aria-hidden />
                        </span>
                        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="py-16 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/15 via-primary/5 to-background px-6 py-14 text-center sm:px-12 sm:py-16"
        >
          <div
            className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60"
            aria-hidden
          />
          <h2 className="relative z-10 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            Start step one today — it&apos;s free
          </h2>
          <p className="relative z-10 mx-auto mt-4 max-w-xl text-muted-foreground sm:text-lg">
            Create your account in seconds, explore modules and practice, and
            upgrade when you want unlimited AI and analytics. No credit card
            required to begin.
          </p>
          <div className="relative z-10 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="h-12 gap-2 rounded-full px-8 text-base font-semibold shadow-lg shadow-primary/20"
              render={<a href={SIGNUP_URL} />}
            >
              Create free account
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </motion.div>
      </Section>

      <Section className="pb-20 sm:pb-28">
        <CTABanner />
      </Section>
    </>
  );
}
