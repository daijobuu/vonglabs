"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import yasumiHome from "./assets/yasumi.png";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Globe, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const YASUMI_URL = "https://yasumi.care";

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
              <div className="mx-auto max-w-md rounded-[2rem] border border-stone-200 bg-white/70 p-8 shadow-2xl backdrop-blur">
                <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-violet-100 via-rose-50 to-amber-50 p-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.9),transparent_45%)]" />
                  <div className="relative flex flex-col items-center text-center">
                    <div className="flex h-24 w-24 items-center justify-center rounded-[1.75rem] bg-white shadow-lg ring-1 ring-black/5">
                      <Sparkles className="h-10 w-10 text-violet-500" />
                    </div>
                    <p className="mt-6 text-3xl font-semibold tracking-tight text-stone-800">
                      vong labs
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-6 text-stone-600">
                      Digital products for everyday wellbeing, built with
                      clarity and intention.
                    </p>
                    <div className="mt-8 flex flex-wrap justify-center gap-2 text-xs font-medium text-stone-600">
                      <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-black/5">
                        wellness
                      </span>
                      <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-black/5">
                        mobile apps
                      </span>
                      <span className="rounded-full bg-white px-3 py-1.5 shadow-sm ring-1 ring-black/5">
                        calm-first
                      </span>
                    </div>
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
                  <span>yasumi</span>
                  <div className="flex gap-2">
                    <Badge variant="secondary">daily reminders</Badge>
                    <Badge>wellbeing</Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-5 md:grid-cols-2">
                  <div className="order-2 md:order-1">
                    <p className="text-sm text-stone-600">
                      Yasumi helps users stay grounded with thoughtful daily
                      reminders across mental health, nutrition, focus,
                      movement, sleep and recovery, energy, prevention, and
                      digital wellbeing.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Button asChild size="sm">
                        <a
                          href={YASUMI_URL}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2"
                        >
                          <Globe className="h-4 w-4" />
                          <span>visit website</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <div className="flex items-center justify-center">
                      <div className="h-[420px] w-[210px] rounded-[2.2rem] border border-stone-200 bg-gradient-to-b from-stone-50 to-stone-100 shadow-xl p-3">
                        <div className="relative h-full rounded-[1.8rem] overflow-hidden bg-white">
                          <div className="absolute top-0 left-1/2 mt-2 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-stone-300/60" />
                          <Image
                            src={yasumiHome}
                            alt="Yasumi app screenshots"
                            fill
                            className="object-cover object-top"
                            sizes="210px"
                          />
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
                  <span>quittox</span>
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
                      A quit-smoking companion designed around progress,
                      streaks, and daily support. Quittox turns smoke-free days
                      into visible momentum so the journey feels structured
                      instead of punishing.
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
