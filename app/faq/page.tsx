"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { CTABanner } from "@/components/shared/cta-banner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_DATA } from "@/lib/constants";

export default function FAQPage() {
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
            tag="FAQ"
            title="Frequently Asked Questions"
            description="Everything you need to know about LawPrep AI."
          />
        </div>
      </section>

      {/* FAQ categories */}
      <Section className="pb-8 sm:pb-12">
        <div className="mx-auto max-w-3xl">
          {FAQ_DATA.map((group, categoryIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: categoryIndex * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-12 last:mb-0"
            >
              <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                {group.category}
              </h3>
              <Accordion
                multiple={false}
                className="flex flex-col gap-3"
              >
                {group.questions.map((item, qIndex) => {
                  const value = `${group.category}-${qIndex}`;
                  return (
                    <AccordionItem
                      key={value}
                      value={value}
                      className="rounded-2xl border border-border/50 bg-card/40 px-1 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/25 data-open:border-primary/30 data-open:bg-primary/[0.04] not-last:border-b-0"
                    >
                      <AccordionTrigger className="px-4 py-4 text-left text-base font-semibold leading-snug hover:no-underline sm:px-5 sm:py-5">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 sm:px-5 sm:pb-5">
                        <p className="text-base leading-relaxed text-muted-foreground">
                          {item.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Still have questions */}
      <Section className="py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl rounded-3xl border border-border/50 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent px-6 py-12 text-center sm:px-10 sm:py-14"
        >
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
            <MessageCircle className="size-6" strokeWidth={1.75} />
          </div>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Still have questions?
          </h2>
          <p className="mt-3 text-muted-foreground sm:text-lg">
            We&apos;re happy to help. Reach out and we&apos;ll get back to you
            as soon as we can.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-2 text-base font-semibold text-primary transition-colors hover:text-primary/90"
          >
            Contact us
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </motion.div>
      </Section>

      {/* CTA */}
      <Section className="pb-20 sm:pb-28">
        <CTABanner />
      </Section>
    </>
  );
}
