"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Copy, Check, Terminal, ExternalLink } from "lucide-react";
import { TextScramble } from "@/components/text-scramble";
import { playTactileClick } from "@/components/audio-feedback";

export default function Home() {
  const [utcTime, setUtcTime] = useState<string>("00:00:00 UTC");
  const [copiedPgp, setCopiedPgp] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + " UTC");
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const copyPgp = () => {
    playTactileClick(1200, 0.02);
    navigator.clipboard.writeText("4A9F 82BC E120 90C4 88B1 F9A3 D071 2EE9 C001 0000");
    setCopiedPgp(true);
    setTimeout(() => setCopiedPgp(false), 2000);
  };

  return (
    <div className="relative min-h-screen bg-[#121316] text-[#E8E8E8] font-mono flex flex-col justify-between p-6 sm:p-10 lg:p-14 select-none selection:bg-[#FF3B00] selection:text-black">
      {/* Subtle architectural grid */}
      <div className="pointer-events-none fixed inset-0 brutalist-grid opacity-30 z-0" />

      {/* TOP SYSTEM BAR */}
      <header className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.08] pb-4 text-xs tracking-wider text-[#8E9099]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00FF66] animate-pulse" />
          <span className="font-semibold text-white">RBLD//FRM0</span>
          <span className="text-zinc-600">//</span>
          <span className="hidden sm:inline text-zinc-400">MOBILE ENGINEERING STUDIO</span>
        </div>

        <div className="flex items-center gap-4 text-[11px]">
          <span className="tabular-nums text-zinc-400">{utcTime}</span>
          <span className="border border-white/10 bg-white/[0.03] px-2 py-0.5 text-zinc-300">
            [LIVE BUILD 0.9.4]
          </span>
        </div>
      </header>

      {/* CENTER / HERO APEX */}
      <main className="relative z-10 my-auto py-12 sm:py-20 flex flex-col items-start max-w-4xl space-y-8">
        {/* Pronunciation & Status */}
        <div className="flex items-center gap-2 text-xs tracking-widest text-[#8E9099]">
          <span className="h-1 w-6 bg-[#FF3B00]" />
          <span>[REBUILD FROM ZERO]</span>
        </div>

        {/* Monolithic Title */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase font-display text-white">
          <TextScramble text="RBLD//FRM0" duration={600} />
        </h1>

        {/* Brutalist Slogan */}
        <p className="text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-zinc-200 font-display">
          FROM DUST TO GLASS.
        </p>

        {/* The Sole Released App: LIENORA */}
        <div className="pt-4 w-full max-w-xl">
          <div className="text-[11px] uppercase tracking-widest text-[#8E9099] mb-2 font-mono flex items-center justify-between">
            <span>RELEASED ARTIFACT // 01</span>
            <span className="text-[#00FF66]">● ACTIVE</span>
          </div>

          <a
            href="https://lienora.vercel.app"
            target="_blank"
            rel="noreferrer"
            onClick={() => playTactileClick(1000, 0.02)}
            className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 sm:p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all cursor-pointer"
          >
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight group-hover:text-[#FF3B00] transition-colors">
                  LIENORA
                </span>
                <span className="text-[10px] border border-white/10 px-1.5 py-0.5 text-zinc-400">
                  iOS COMPANION
                </span>
              </div>
              <p className="text-xs text-zinc-400 font-mono">
                A quiet space for everyday wellbeing. Guidance &amp; daily rituals.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-xs font-semibold text-white group-hover:text-[#FF3B00] transition-colors shrink-0">
              <span>EXPLORE</span>
              <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </main>

      {/* FOOTER / DISCREET TRANSMISSION */}
      <footer className="relative z-10 border-t border-white/[0.08] pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#8E9099] font-mono">
        <div className="flex items-center gap-3">
          <span>TRANSMIT:</span>
          <a
            href="mailto:lienora.daily@proton.me"
            className="text-zinc-300 hover:text-[#FF3B00] transition-colors underline"
          >
            lienora.daily@proton.me
          </a>
        </div>

        <button
          type="button"
          onClick={copyPgp}
          className="flex items-center gap-2 border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.06] hover:text-white px-2.5 py-1 text-zinc-400 transition-colors cursor-pointer"
          title="Click to copy PGP key fingerprint"
        >
          {copiedPgp ? <Check className="h-3 w-3 text-[#00FF66]" /> : <Copy className="h-3 w-3" />}
          <span>{copiedPgp ? "FINGERPRINT COPIED" : "PGP: 4A9F 82BC...0000"}</span>
        </button>

        <div className="text-zinc-500">
          LAT: 35°41&apos;N // LON: 139°41&apos;E
        </div>
      </footer>
    </div>
  );
}
