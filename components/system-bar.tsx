"use client";

import React, { useEffect, useState } from "react";
import { setAudioEnabled, isAudioEnabled, playTactileClick } from "./audio-feedback";
import { Volume2, VolumeX, ShieldAlert, Cpu } from "lucide-react";

interface SystemBarProps {
  accentColor: string;
  onToggleAccent: () => void;
}

export function SystemBar({ accentColor, onToggleAccent }: SystemBarProps) {
  const [utcTime, setUtcTime] = useState<string>("00:00:00 UTC");
  const [latency, setLatency] = useState<number>(12);
  const [audioOn, setAudioOn] = useState<boolean>(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setUtcTime(
        now.toUTCString().slice(17, 25) +
          "." +
          String(Math.floor(now.getMilliseconds() / 100)) +
          " UTC"
      );
    }, 100);

    const latencyTimer = setInterval(() => {
      setLatency(10 + Math.floor(Math.random() * 5));
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(latencyTimer);
    };
  }, []);

  const toggleSound = () => {
    const next = !audioOn;
    setAudioOn(next);
    setAudioEnabled(next);
    if (next) {
      setTimeout(() => playTactileClick(1200, 0.03), 50);
    }
  };

  const isGreen = accentColor === "#00FF66";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-[#080808]/90 backdrop-blur-md font-mono text-[11px] sm:text-xs">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-3 py-2 sm:px-6">
        {/* Left Telemetry */}
        <div className="flex items-center gap-2 text-zinc-400 overflow-hidden whitespace-nowrap">
          <span className="inline-block h-2 w-2 rounded-full bg-[#00FF66] animate-pulse" />
          <span className="font-semibold text-zinc-200">SYS_STATUS:</span>
          <span className="text-[#00FF66]">RUNNING</span>
          <span className="text-zinc-600">//</span>
          <span className="hidden xs:inline text-zinc-400">LATENCY:</span>
          <span className="hidden xs:inline text-zinc-200">{latency}ms</span>
          <span className="text-zinc-600">//</span>
          <span className="text-zinc-400">LOC:</span>
          <span className="bg-zinc-900 px-1 py-0.5 text-zinc-300 border border-zinc-800">[REDACTED]</span>
        </div>

        {/* Center / Navigation Links */}
        <nav className="hidden lg:flex items-center gap-4 text-zinc-400 tracking-wider">
          <a
            href="#specs"
            onClick={() => playTactileClick(900, 0.01)}
            className="hover:text-white transition-colors"
          >
            [01_SPECS]
          </a>
          <a
            href="#artifacts"
            onClick={() => playTactileClick(900, 0.01)}
            className="hover:text-white transition-colors"
          >
            [02_ARTIFACTS]
          </a>
          <a
            href="#terminal"
            onClick={() => playTactileClick(900, 0.01)}
            className="hover:text-white transition-colors"
          >
            [03_SHELL]
          </a>
          <a
            href="#transmit"
            onClick={() => playTactileClick(900, 0.01)}
            className="hover:text-white transition-colors"
          >
            [04_TRANSMIT]
          </a>
        </nav>

        {/* Right Controls & UTC Clock */}
        <div className="flex items-center gap-3">
          {/* UTC Clock */}
          <div className="flex items-center gap-1.5 text-zinc-300">
            <span className="text-[#FF3B00] animate-cursor">●</span>
            <span className="tracking-widest font-mono tabular-nums">{utcTime}</span>
          </div>

          {/* Status Pill */}
          <span className="hidden sm:inline-block border border-zinc-800 bg-[#141414] px-2 py-0.5 text-[10px] text-zinc-300 font-semibold tracking-wider">
            [LIVE BUILD 0.9.4]
          </span>

          {/* Audio Feedback Toggle */}
          <button
            type="button"
            onClick={toggleSound}
            title={audioOn ? "Audio: Active" : "Audio: Muted"}
            className={`flex items-center gap-1 border px-2 py-0.5 text-[10px] transition-colors cursor-pointer ${
              audioOn
                ? "border-[#00FF66] bg-[#00FF66]/10 text-[#00FF66]"
                : "border-zinc-800 bg-zinc-900 text-zinc-400 hover:text-white"
            }`}
          >
            {audioOn ? <Volume2 className="h-3 w-3" /> : <VolumeX className="h-3 w-3" />}
            <span className="hidden md:inline">{audioOn ? "AUDIO: ON" : "AUDIO: OFF"}</span>
          </button>

          {/* Accent Color Switch */}
          <button
            type="button"
            onClick={() => {
              playTactileClick(1600, 0.015);
              onToggleAccent();
            }}
            title="Toggle Hazard / Phosphor Accent"
            className="flex items-center gap-1 border border-zinc-800 bg-zinc-900 px-2 py-0.5 text-[10px] text-zinc-300 hover:border-zinc-600 transition-colors cursor-pointer"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: accentColor }}
            />
            <span className="hidden sm:inline">{isGreen ? "PHOSPHOR" : "HAZARD"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
