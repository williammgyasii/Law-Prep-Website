"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, LOGIN_URL, SIGNUP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={cn(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 shadow-sm backdrop-blur-xl border-b border-border/50"
            : "bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2.5" onClick={() => setMobileOpen(false)}>
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary">
              <Scale className="size-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold tracking-tight">
              LawPrep <span className="text-primary">AI</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" size="sm" render={<a href={LOGIN_URL} />}>
              Log in
            </Button>
            <Button
              size="sm"
              className="rounded-full px-5"
              render={<a href={SIGNUP_URL} />}
            >
              Get Started Free
            </Button>
          </div>

          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg lg:hidden"
          >
            <nav className="flex flex-col gap-2 px-6 pt-20">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-4 py-3 text-lg font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full justify-center"
                  render={<a href={LOGIN_URL} />}
                >
                  Log in
                </Button>
                <Button
                  size="lg"
                  className="w-full justify-center rounded-full"
                  render={<a href={SIGNUP_URL} />}
                >
                  Get Started Free
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
