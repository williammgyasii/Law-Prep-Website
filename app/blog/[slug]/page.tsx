"use client";

import type React from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar as CalendarIcon, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { CTABanner } from "@/components/shared/cta-banner";
import { BLOG_POSTS } from "@/lib/constants";

function formatBlogDate(iso: string) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

function renderInline(text: string, keyPrefix: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong
          key={`${keyPrefix}-${i}`}
          className="font-semibold text-foreground"
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={`${keyPrefix}-${i}`}>{part}</span>;
  });
}

function parseBlogContent(markdown: string): React.ReactNode[] {
  const lines = markdown.trim().split("\n");
  const out: React.ReactNode[] = [];
  let paraBuf: string[] = [];
  let listBuf: string[] = [];

  const flushPara = () => {
    if (paraBuf.length === 0) return;
    const text = paraBuf.join(" ").replace(/\s+/g, " ").trim();
    paraBuf = [];
    if (!text) return;
    const idx = out.length;
    out.push(
      <p
        key={`p-${idx}`}
        className="text-lg leading-relaxed text-muted-foreground"
      >
        {renderInline(text, `p-${idx}`)}
      </p>
    );
  };

  const flushList = () => {
    if (listBuf.length === 0) return;
    const items = [...listBuf];
    listBuf = [];
    const idx = out.length;
    out.push(
      <ul
        key={`ul-${idx}`}
        className="my-6 list-disc space-y-2 pl-6 text-lg leading-relaxed text-muted-foreground marker:text-primary/70"
      >
        {items.map((item, i) => (
          <li key={i} className="pl-1">
            {renderInline(item.replace(/^-\s+/, ""), `li-${idx}-${i}`)}
          </li>
        ))}
      </ul>
    );
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === "") {
      flushList();
      flushPara();
      continue;
    }
    if (trimmed.startsWith("### ")) {
      flushList();
      flushPara();
      const idx = out.length;
      out.push(
        <h3
          key={`h3-${idx}`}
          className="mt-10 mb-3 text-xl font-semibold tracking-tight text-foreground first:mt-0 sm:text-2xl"
        >
          {renderInline(trimmed.slice(4), `h3-${idx}`)}
        </h3>
      );
      continue;
    }
    if (trimmed.startsWith("## ")) {
      flushList();
      flushPara();
      const idx = out.length;
      out.push(
        <h2
          key={`h2-${idx}`}
          className="mt-12 mb-4 text-2xl font-bold tracking-tight text-foreground first:mt-0 sm:text-3xl"
        >
          {renderInline(trimmed.slice(3), `h2-${idx}`)}
        </h2>
      );
      continue;
    }
    if (trimmed.startsWith("- ")) {
      flushPara();
      listBuf.push(trimmed);
      continue;
    }
    flushList();
    paraBuf.push(trimmed);
  }
  flushList();
  flushPara();
  return out;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug =
    typeof params.slug === "string"
      ? params.slug
      : Array.isArray(params.slug)
        ? params.slug[0]
        : "";

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <Section className="min-h-[60vh] pt-24 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-lg text-center"
        >
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Post not found
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            This article doesn&apos;t exist or may have been moved.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="mt-8 rounded-full px-8"
            render={<Link href="/blog" />}
          >
            <ArrowLeft className="size-4" />
            Back to Blog
          </Button>
        </motion.div>
      </Section>
    );
  }

  const body = parseBlogContent(post.content);

  return (
    <>
      <article>
        <section className="relative overflow-hidden px-4 pt-16 pb-10 sm:px-6 sm:pt-24 sm:pb-14 lg:px-8">
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-0 left-1/2 h-[420px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
          </div>

          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <Button
                variant="ghost"
                className="-ml-2 mb-8 gap-2 rounded-full text-muted-foreground hover:text-foreground"
                render={<Link href="/blog" />}
              >
                <ArrowLeft className="size-4" />
                Back to Blog
              </Button>

              <Badge
                variant="secondary"
                className="mb-6 border-primary/15 bg-primary/10 text-primary"
              >
                {post.tag}
              </Badge>

              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-base text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <CalendarIcon className="size-4 text-primary/70" aria-hidden />
                  <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="size-4 text-primary/70" aria-hidden />
                  {post.readingTime}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <Section className="pb-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-3xl"
          >
            <div className="space-y-4 [&>h2+p]:mt-0 [&>h3+p]:mt-0">
              {body}
            </div>
          </motion.div>
        </Section>
      </article>

      <Section className="pb-24 sm:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <CTABanner />
        </motion.div>
      </Section>
    </>
  );
}
