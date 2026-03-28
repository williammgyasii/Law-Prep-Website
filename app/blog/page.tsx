"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar as CalendarIcon, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Section,
  SectionHeader,
  StaggerContainer,
  StaggerItem,
} from "@/components/shared/section";
import { BLOG_POSTS } from "@/lib/constants";

function formatBlogDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <>
      <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16 lg:px-8">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 h-[480px] w-[min(100%,800px)] -translate-x-1/2 rounded-full bg-primary/12 blur-[110px]" />
          <div className="absolute bottom-0 right-[10%] h-[320px] w-[480px] rounded-full bg-primary/6 blur-[90px]" />
        </div>

        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionHeader
              tag="Blog"
              title="Insights & Strategies for LSAT Success"
              description="Expert study tips, section guides, and planning ideas — written to help you prep smarter, not harder."
            />
          </motion.div>
        </div>
      </section>

      <Section className="pb-20 sm:pb-28">
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {posts.map((post) => (
            <StaggerItem key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Card className="relative h-full overflow-hidden border border-transparent bg-card/80 py-0 shadow-none ring-1 ring-foreground/10 transition-all duration-300 ease-out hover:-translate-y-1 hover:ring-primary/40 hover:shadow-lg hover:shadow-primary/5">
                  <CardContent className="flex h-full flex-col gap-4 p-6 sm:p-7">
                    <Badge
                      variant="secondary"
                      className="w-fit border-primary/15 bg-primary/10 text-primary hover:bg-primary/15"
                    >
                      {post.tag}
                    </Badge>

                    <div className="flex flex-1 flex-col gap-3">
                      <h2 className="text-xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">
                        {post.title}
                      </h2>
                      <p className="line-clamp-3 flex-1 text-base leading-relaxed text-muted-foreground">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border/60 pt-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarIcon
                          className="size-4 shrink-0 text-primary/70"
                          aria-hidden
                        />
                        <time dateTime={post.date}>
                          {formatBlogDate(post.date)}
                        </time>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock
                          className="size-4 shrink-0 text-primary/70"
                          aria-hidden
                        />
                        {post.readingTime}
                      </span>
                    </div>

                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-transform duration-300 group-hover:gap-2">
                      Read article
                      <ArrowRight className="size-4" aria-hidden />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>
    </>
  );
}
