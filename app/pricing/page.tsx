"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";
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
import { PRICING_TIERS, SIGNUP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type BillingPeriod = "monthly" | "yearly";

const COMPARISON_FEATURES = [
  {
    label: "Practice Questions",
    values: ["10/day", "Unlimited", "Unlimited"] as const,
  },
  {
    label: "Study Modules",
    values: ["2", "All", "All"] as const,
  },
  {
    label: "Writing Prompts",
    values: ["3", "8", "Unlimited"] as const,
  },
  {
    label: "Document Uploads",
    values: ["3", "25", "Unlimited"] as const,
  },
  {
    label: "AI Messages/Doc",
    values: ["5", "50", "Unlimited"] as const,
  },
  {
    label: "AI Explanations",
    values: [false, true, true] as const,
  },
  {
    label: "PrepTest Filtering",
    values: [false, true, true] as const,
  },
  {
    label: "Detailed Analytics",
    values: [false, true, true] as const,
  },
  {
    label: "AI Study Plans",
    values: [false, false, true] as const,
  },
  {
    label: "Export Results",
    values: [false, false, true] as const,
  },
] as const;

const PRICING_FAQ = [
  {
    q: "Is the Starter plan really free?",
    a: "Yes. Starter is free forever with no credit card required. You get daily practice limits and core features so you can evaluate LawPrep before upgrading.",
  },
  {
    q: "How does yearly billing save money?",
    a: "Yearly plans bill once per year at a lower effective monthly rate than paying month-to-month. You keep the same features — you’re just rewarded for committing to your prep timeline.",
  },
  {
    q: "Can I change plans later?",
    a: "You can upgrade or downgrade anytime from your account. Upgrades take effect immediately; downgrades follow your billing cycle so you keep access you’ve already paid for.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept major credit and debit cards through our secure payment processor. All transactions are encrypted.",
  },
] as const;

function yearlySavingsPercent(
  monthly: number,
  yearly: number
): number | null {
  if (monthly <= 0 || yearly <= 0) return null;
  return Math.round((1 - yearly / (monthly * 12)) * 100);
}

function ComparisonCell({
  value,
  className,
}: {
  value: boolean | string;
  className?: string;
}) {
  if (typeof value === "boolean") {
    return (
      <div
        className={cn(
          "flex justify-center",
          className
        )}
      >
        {value ? (
          <Check className="size-5 text-primary" aria-label="Included" />
        ) : (
          <X
            className="size-5 text-muted-foreground/40"
            aria-label="Not included"
          />
        )}
      </div>
    );
  }
  return (
    <span
      className={cn(
        "block text-center text-sm font-medium tabular-nums",
        className
      )}
    >
      {value}
    </span>
  );
}

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingPeriod>("monthly");

  const maxYearlySave = Math.max(
    ...PRICING_TIERS.map((t) => {
      const p = yearlySavingsPercent(t.monthlyPrice, t.yearlyPrice);
      return p ?? 0;
    })
  );

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-20 pb-12 sm:px-6 sm:pt-28 sm:pb-16 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[520px] w-[880px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute right-0 top-1/3 h-[320px] w-[480px] rounded-full bg-primary/6 blur-[100px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <SectionHeader
            tag="Pricing"
            title="Simple, transparent pricing"
            description="Start free on Starter and upgrade when you need unlimited practice, AI explanations, and advanced analytics. No surprises — pick monthly or yearly billing anytime."
          />

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative inline-flex min-w-[min(100%,280px)] items-center rounded-full border border-border/60 bg-muted/40 p-1 shadow-inner backdrop-blur-sm sm:min-w-[320px]">
              <div className="relative flex w-full">
                <motion.div
                  className="absolute inset-y-0 w-1/2 rounded-full bg-primary shadow-md shadow-primary/25"
                  layout
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 32,
                  }}
                  style={{
                    left: billing === "monthly" ? "0%" : "50%",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setBilling("monthly")}
                  className={cn(
                    "relative z-10 flex flex-1 items-center justify-center rounded-full px-4 py-2.5 text-sm font-semibold transition-colors",
                    billing === "monthly"
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  Monthly
                </button>
                <button
                  type="button"
                  onClick={() => setBilling("yearly")}
                  className={cn(
                    "relative z-10 flex flex-1 flex-wrap items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-sm font-semibold transition-colors sm:gap-2",
                    billing === "yearly"
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span>Yearly</span>
                  {maxYearlySave > 0 && (
                    <Badge
                      variant="secondary"
                      className={cn(
                        "rounded-full px-2 py-0 text-[10px] font-bold uppercase tracking-wide",
                        billing === "yearly"
                          ? "border border-primary-foreground/20 bg-primary-foreground/15 text-primary-foreground"
                          : "border-primary/20 bg-primary/15 text-primary"
                      )}
                    >
                      Save {maxYearlySave}%
                    </Badge>
                  )}
                </button>
              </div>
            </div>
            <p className="text-center text-sm text-muted-foreground">
              Yearly billing is billed once per year. Prices shown before tax.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing cards */}
      <Section className="pb-16 sm:pb-24">
        <StaggerContainer className="grid gap-6 lg:grid-cols-3 lg:gap-8">
          {PRICING_TIERS.map((tier) => {
            const price =
              billing === "monthly" ? tier.monthlyPrice : tier.yearlyPrice;
            const periodLabel = billing === "monthly" ? "/mo" : "/yr";
            const savePct = yearlySavingsPercent(
              tier.monthlyPrice,
              tier.yearlyPrice
            );

            return (
              <StaggerItem key={tier.name}>
                <Card
                  className={cn(
                    "relative h-full border-border/50 bg-card/50 p-0 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/25",
                    tier.highlighted &&
                      "border-primary/50 bg-primary/5 shadow-lg shadow-primary/15 ring-1 ring-primary/20"
                  )}
                >
                  {tier.highlighted && (
                    <div className="absolute -top-3 right-6 z-10">
                      <Badge className="rounded-full px-3 shadow-md">
                        {tier.badge}
                      </Badge>
                    </div>
                  )}
                  <CardContent className="flex flex-col p-6 sm:p-8">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-xl font-semibold">{tier.name}</h3>
                      {!tier.highlighted && tier.badge && (
                        <Badge
                          variant="secondary"
                          className="rounded-full text-xs font-medium"
                        >
                          {tier.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tier.description}
                    </p>

                    <div className="mt-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold tracking-tight">
                          {price === 0 ? (
                            "$0"
                          ) : (
                            <>
                              $
                              <motion.span
                                key={`${tier.name}-${billing}`}
                                initial={{ opacity: 0, y: 8 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25 }}
                              >
                                {price}
                              </motion.span>
                            </>
                          )}
                        </span>
                        <span className="text-muted-foreground">
                          {price === 0 ? "" : periodLabel}
                        </span>
                      </div>
                      {billing === "yearly" &&
                        tier.monthlyPrice > 0 &&
                        savePct != null && (
                          <p className="mt-1 text-xs text-primary/90">
                            Save {savePct}% vs paying monthly
                          </p>
                        )}
                    </div>

                    <ul className="mt-8 flex-1 space-y-2.5">
                      {tier.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-sm"
                        >
                          <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                          <span>{f}</span>
                        </li>
                      ))}
                      {tier.excluded.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-sm text-muted-foreground"
                        >
                          <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/50" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8">
                      <Button
                        size="lg"
                        variant={tier.highlighted ? "default" : "outline"}
                        className="h-11 w-full gap-2 rounded-full font-semibold"
                        render={<a href={SIGNUP_URL} />}
                      >
                        {tier.monthlyPrice === 0
                          ? "Get Started Free"
                          : `Start with ${tier.name}`}
                        <ArrowRight className="size-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Section>

      {/* Comparison matrix */}
      <Section className="py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <SectionHeader
            tag="Compare"
            title="Feature comparison"
            description="See exactly what’s included at each tier. Numbers and limits match what you get in the product."
          />
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="hidden overflow-x-auto rounded-2xl border border-border/60 bg-card/30 shadow-sm lg:block"
        >
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-border/60 bg-muted/30">
                <th className="sticky left-0 z-20 bg-muted/95 px-5 py-4 text-left font-semibold backdrop-blur-sm">
                  Feature
                </th>
                {PRICING_TIERS.map((tier) => (
                  <th
                    key={tier.name}
                    className={cn(
                      "px-4 py-4 text-center font-semibold",
                      tier.highlighted && "bg-primary/10 text-primary"
                    )}
                  >
                    {tier.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_FEATURES.map((row, idx) => (
                <tr
                  key={row.label}
                  className={cn(
                    "border-b border-border/40 transition-colors hover:bg-muted/20",
                    idx === COMPARISON_FEATURES.length - 1 && "border-0"
                  )}
                >
                  <td className="sticky left-0 z-10 bg-background/95 px-5 py-3.5 font-medium backdrop-blur-sm">
                    {row.label}
                  </td>
                  {row.values.map((cell, i) => (
                    <td
                      key={i}
                      className={cn(
                        "px-4 py-3.5",
                        PRICING_TIERS[i]?.highlighted && "bg-primary/[0.04]"
                      )}
                    >
                      <ComparisonCell value={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <div className="grid gap-6 lg:hidden">
          {PRICING_TIERS.map((tier, tierIdx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-24px" }}
              transition={{ duration: 0.45, delay: tierIdx * 0.08 }}
            >
              <Card
                className={cn(
                  "border-border/50 bg-card/50",
                  tier.highlighted &&
                    "border-primary/40 bg-primary/5 shadow-md shadow-primary/10"
                )}
              >
                <CardContent className="space-y-4 p-5">
                  <div className="flex items-center justify-between gap-2 border-b border-border/50 pb-3">
                    <h3 className="text-lg font-semibold">{tier.name}</h3>
                    {tier.highlighted && (
                      <Badge className="rounded-full">{tier.badge}</Badge>
                    )}
                  </div>
                  <ul className="space-y-3">
                    {COMPARISON_FEATURES.map((row) => (
                      <li
                        key={row.label}
                        className="flex items-center justify-between gap-3 text-sm"
                      >
                        <span className="text-muted-foreground">
                          {row.label}
                        </span>
                        <div className="shrink-0">
                          <ComparisonCell
                            value={row.values[tierIdx]!}
                            className="justify-end"
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="py-16 sm:py-24">
        <SectionHeader
          tag="FAQ"
          title="Pricing questions"
          description="Quick answers about plans, billing, and what you get at each tier."
        />
        <div className="mx-auto max-w-3xl space-y-4">
          {PRICING_FAQ.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <Card className="border-border/50 bg-card/40 p-0 transition-colors hover:border-primary/20">
                <CardContent className="space-y-2 p-5 sm:p-6">
                  <p className="font-medium leading-snug">{item.q}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-20 sm:pb-28">
        <CTABanner
          title="Ready to prep smarter?"
          description="Create your free account in minutes. Upgrade when you want unlimited practice and full AI features."
        />
      </Section>
    </>
  );
}
