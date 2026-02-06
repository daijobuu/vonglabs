"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const APP_STORE_URL =
  "https://apps.apple.com/fr/app/dailyzen-daily-mindful-quote/id6751102926";

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-violet-50 via-rose-50 to-stone-50 text-stone-800 transition-colors">
        {/* Decorative background */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />
          <motion.div
            className="absolute -top-32 -left-32 h-96 w-96 rounded-full blur-3xl bg-gradient-to-tr from-violet-300 via-rose-200 to-amber-200 opacity-30"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Header / Nav */}
        <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-stone-200">
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-500" />
              <span className="font-semibold tracking-tight">vong labs</span>
              <span className="ml-2 text-xs text-neutral-500">
                mobile wellness apps
              </span>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:py-28">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl font-semibold tracking-tight"
              >
                Minimal, modern mobile apps focused on wellbeing
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.05 }}
                className="mt-4 text-stone-600 max-w-prose"
              >
                Vong Labs crafts calm-first experiences. Lightweight interfaces,
                intentional motion, and content that helps you breathe, not
                doom-scroll.
              </motion.p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" variant="outline">
                  <a href="#portfolio" className="flex items-center gap-2">
                    <span>See portfolio</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              {/* Mocked phone frame / app preview */}
              <div className="mx-auto h-[540px] w-[270px] rounded-[2.2rem] border border-stone-200 bg-gradient-to-b from-stone-50 to-stone-100 shadow-2xl p-3">
                <div className="h-full rounded-[1.8rem] bg-white/60 overflow-hidden">
                  <div className="h-10" />
                  <div className="px-6">
                    <div className="h-8 w-28 rounded-full bg-stone-300/60 mb-6" />
                    <div className="space-y-3">
                      <div className="h-4 w-40 rounded bg-stone-300/60" />
                      <div className="h-4 w-48 rounded bg-stone-300/60" />
                      <div className="h-4 w-36 rounded bg-stone-300/60" />
                    </div>
                  </div>
                  <div className="mt-10 grid grid-cols-3 gap-3 px-6">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-xl bg-gradient-to-br from-violet-300/40 to-rose-300/40"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="mx-auto max-w-6xl px-4 pb-24">
          <div className="mb-8">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-stone-800">
              Portfolio
            </h2>
            <p className="mt-2 text-stone-600">
              A small batch studio. Fewer apps, higher intention.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>dailyzen</span>
                  <div className="flex gap-2">
                    <Badge variant="secondary">mindfulness</Badge>
                    <Badge>daily quote</Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="order-2 md:order-1">
                    <p className="text-sm text-stone-600">
                      Daily mindful quotes to center your thoughts and ease your
                      day. Save your favorite ones to revisit whenever you need
                      a calm reminder.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button asChild size="sm">
                        <a
                          href={APP_STORE_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Apple className="h-4 w-4" />
                          <span>App Store</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="flex items-center justify-center">
                      <div className="h-[420px] w-[210px] rounded-[2.2rem] border border-stone-200 bg-gradient-to-b from-stone-50 to-stone-100 shadow-xl p-3">
                        <div className="relative h-full rounded-[1.8rem] bg-white overflow-hidden">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 h-5 w-28 rounded-b-2xl bg-stone-300/60" />
                          <div className="h-full w-full rounded-[1.2rem] bg-gradient-to-tr from-violet-300/30 via-rose-300/25 to-amber-300/25" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>smokemon</span>
                  <div className="flex gap-2">
                    <Badge variant="outline">coming soon</Badge>
                    <Badge variant="secondary">quit smoking</Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="order-2 md:order-1">
                    <p className="text-sm text-stone-600">
                      An app to quit smoking by evolving your monster. Every
                      smoke-free day helps your companion grow stronger, turning
                      cravings into small, mindful quests.
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="flex items-center justify-center">
                      <div className="h-[420px] w-[210px] rounded-[2.2rem] border border-stone-200 bg-gradient-to-b from-stone-50 to-stone-100 shadow-xl p-3">
                        <div className="relative h-full rounded-[1.8rem] bg-white overflow-hidden">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 h-5 w-28 rounded-b-2xl bg-stone-300/60" />
                          <div className="h-full w-full rounded-[1.2rem] bg-gradient-to-tr from-violet-300/30 via-rose-300/25 to-amber-300/25" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-stone-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>sobermon</span>
                  <div className="flex gap-2">
                    <Badge variant="outline">coming soon</Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="order-2 md:order-1">
                    <p className="text-sm text-stone-600">
                      A calm companion for your sobriety journey. Reflective
                      prompts, mindful habits, and daily encouragement without
                      judgment.
                    </p>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="flex items-center justify-center">
                      <div className="h-[420px] w-[210px] rounded-[2.2rem] border border-stone-200 bg-gradient-to-b from-stone-50 to-stone-100 shadow-xl p-3">
                        <div className="relative h-full rounded-[1.8rem] bg-white overflow-hidden">
                          <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-2 h-5 w-28 rounded-b-2xl bg-stone-300/60" />
                          <div className="h-full w-full rounded-[1.2rem] bg-gradient-to-tr from-violet-300/30 via-rose-300/25 to-amber-300/25" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-stone-200">
          <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-neutral-500">
              © {new Date().getFullYear()} vong labs. made with balance and
              purpose.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
