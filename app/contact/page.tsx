"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section, SectionHeader } from "@/components/shared/section";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const infoCards = [
  {
    icon: Mail,
    title: "Email",
    body: (
      <a
        href="mailto:support@lawprep.io"
        className="text-base font-medium text-primary underline-offset-4 hover:underline"
      >
        support@lawprep.io
      </a>
    ),
  },
  {
    icon: Clock,
    title: "Response time",
    body: (
      <p className="text-base text-muted-foreground">
        We typically respond within 24 hours
      </p>
    ),
  },
  {
    icon: MessageSquare,
    title: "General inquiries",
    body: (
      <p className="text-base text-muted-foreground">
        For general inquiries, feature requests, or feedback
      </p>
    ),
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Section className="relative overflow-hidden pt-12 pb-10 sm:pt-16 sm:pb-14">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[520px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute top-32 right-0 h-[280px] w-[420px] rounded-full bg-purple-500/10 blur-[80px]" />
        </div>

        <SectionHeader
          tag="Contact"
          title="Get in Touch"
          description="Have a question, suggestion, or need help? We'd love to hear from you."
        />
      </Section>

      <Section className="pb-20 sm:pb-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <Card className="border-border/50 bg-card/50 py-0 shadow-none ring-1 ring-border/40">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6">
                  <h3 className="text-xl font-semibold tracking-tight">
                    Send us a message
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Fill out the form below and we&apos;ll get back to you as soon as we
                    can.
                  </p>
                </div>

                <form className="space-y-5" noValidate>
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">Subject</Label>
                    <Input
                      id="contact-subject"
                      name="subject"
                      type="text"
                      placeholder="What is this about?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      placeholder="Tell us more..."
                      className="min-h-[120px] resize-y"
                    />
                  </div>

                  <Button
                    type="button"
                    size="lg"
                    disabled
                    className="mt-2 w-full rounded-full font-semibold sm:w-auto sm:min-w-[180px]"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            className="flex flex-col gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
          >
            {infoCards.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} variants={fadeUp}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 24 }}
                  >
                    <Card className="h-full border-border/50 bg-card/50 py-0 shadow-none ring-1 ring-border/40 transition-colors hover:border-primary/25 hover:ring-primary/15">
                      <CardContent className="flex gap-4 p-6 sm:p-7">
                        <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/15">
                          <Icon className="size-6" strokeWidth={1.5} />
                        </div>
                        <div className="min-w-0 flex-1 pt-0.5">
                          <h3 className="text-lg font-semibold tracking-tight">
                            {item.title}
                          </h3>
                          <div className="mt-2">{item.body}</div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Section>
    </>
  );
}
