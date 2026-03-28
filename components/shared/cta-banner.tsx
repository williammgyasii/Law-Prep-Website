"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SIGNUP_URL } from "@/lib/constants";

interface CTABannerProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

export function CTABanner({
  title = "Ready to start your LSAT journey?",
  description = "Join thousands of future law students preparing smarter with AI-powered tools. Start free — no credit card required.",
  buttonText = "Get Started Free",
  buttonHref = SIGNUP_URL,
}: CTABannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-background border border-primary/20 px-6 py-16 text-center sm:px-16 sm:py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="relative z-10">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
          {description}
        </p>
        <div className="mt-8">
          <Button
            size="lg"
            className="h-12 gap-2 rounded-full px-8 text-base font-semibold"
            render={<a href={buttonHref} />}
          >
            {buttonText}
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
