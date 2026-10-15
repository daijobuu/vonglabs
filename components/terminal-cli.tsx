"use client";

import React, { useState, useRef, useEffect } from "react";
import { playTactileClick, playBeep } from "./audio-feedback";
import { Terminal, CornerDownLeft, Shield, Cpu, Radio, Hash } from "lucide-react";

interface HistoryEntry {
  command: string;
  output: React.ReactNode;
  time: string;
}

const INITIAL_LOGS: HistoryEntry[] = [
  {
    command: "rbld --init",
    output: (
      <div className="space-y-1 text-xs">
        <p className="text-zinc-400">RBLD//FRM0 SECURE SHELL [v0.9.4-PROD]</p>
        <p className="text-zinc-500">TYPE <span className="text-[#FF3B00] font-bold">help</span> FOR SYSTEM DIRECTIVES OR SELECT A COMMAND TAG BELOW.</p>
        <p className="text-[#00FF66]">[KERNEL BOOT VERIFIED // AIR-GAP INTEGRITY OK]</p>
      </div>
    ),
    time: "00:00:01",
  },
];

export function TerminalCli({ accent = "#FF3B00" }: { accent?: string }) {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<HistoryEntry[]>(INITIAL_LOGS);
  const [cmdIndex, setCmdIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>(["rbld --init"]);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const executeCommand = (cmdToRun: string) => {
    const trimmed = cmdToRun.trim();
    if (!trimmed) return;

    playBeep(980, 0.03);
    const cmdLower = trimmed.toLowerCase();
    const timeStr = new Date().toISOString().substring(11, 19);

    let output: React.ReactNode = null;

    switch (cmdLower) {
      case "help":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-zinc-400 font-bold mb-1">AVAILABLE SYSTEM DIRECTIVES:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
              <div><span className="text-[#FF3B00] font-mono">status</span> : System telemetry &amp; node state</div>
              <div><span className="text-[#FF3B00] font-mono">deployments</span> : Active mobile artifacts</div>
              <div><span className="text-[#FF3B00] font-mono">specs</span> : Engineering capabilities matrix</div>
              <div><span className="text-[#FF3B00] font-mono">whoami</span> : Client session clearance</div>
              <div><span className="text-[#FF3B00] font-mono">pgp</span> : Export cryptographic fingerprint</div>
              <div><span className="text-[#FF3B00] font-mono">ping</span> : Test routing latency to edge</div>
              <div><span className="text-[#FF3B00] font-mono">contact</span> : Transmission protocols</div>
              <div><span className="text-[#FF3B00] font-mono">clear</span> : Purge terminal output</div>
            </div>
          </div>
        );
        break;

      case "status":
        output = (
          <div className="space-y-1 text-xs text-zinc-300 border-l-2 border-[#00FF66] pl-2">
            <p className="text-[#00FF66] font-bold">NODE: OPERATIONAL // ZERO COMPROMISE</p>
            <p>BUILD: 0.9.4-STABLE (TURBOPACK/OPTIMIZED)</p>
            <p>UPTIME: 99.998% // CLIENT ARCH: ARM64-DARWIN</p>
            <p>FRAME BUFFER: SUB-16MS REFRESH [120Hz CERTIFIED]</p>
            <p>TELEMETRY VENDORS DETECTED: 0 [ENFORCED AIR-GAP]</p>
          </div>
        );
        break;

      case "deployments":
      case "projects":
        output = (
          <div className="space-y-2 text-xs text-zinc-300">
            <p className="font-bold text-white">[ACTIVE AND STAGED ARTIFACTS]</p>
            <div className="border border-zinc-800 p-2 space-y-1 bg-zinc-950/60">
              <p className="text-[#00FF66] font-bold">01 // YASUMI [LIVE]</p>
              <p className="text-zinc-400">Autonomous biological reset &amp; somatic rhythm regulation. Zero retention traps.</p>
              <a href="https://yasumi.care" target="_blank" rel="noreferrer" className="text-xs text-[#FF3B00] underline">
                &gt; https://yasumi.care
              </a>
            </div>
            <div className="border border-zinc-800 p-2 space-y-1 bg-zinc-950/60">
              <p className="text-amber-400 font-bold">02 // QUITTOX [STAGED]</p>
              <p className="text-zinc-400">Neurochemical habit disruption framework. Dopamine latency degradation tracker.</p>
            </div>
            <div className="border border-zinc-800 p-2 space-y-1 bg-zinc-950/60">
              <p className="text-zinc-400 font-bold">03 // NULL//VECTOR [STEALTH PROTOCOL]</p>
              <p className="text-zinc-400">Encrypted Bluetooth Low Energy mesh topology for local-first peer transactions.</p>
            </div>
          </div>
        );
        break;

      case "specs":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-[#FF3B00] font-bold">CORE ENGINEERING SPECIFICATIONS:</p>
            <p>• LOW-LEVEL MOBILE: Swift, Kotlin, Rust, Metal, Vulkan.</p>
            <p>• PRIVACY-FIRST: Enclave-backed cryptography, local SQLite, 0 third-party trackers.</p>
            <p>• PERFORMANCE: Sub-16ms touch-to-photon latency targets, zero stutter animations.</p>
            <p>• HARDWARE INTERSECT: BLE beacons, ambient sensor fusion, camera neural models.</p>
          </div>
        );
        break;

      case "whoami":
        output = (
          <div className="space-y-1 text-xs text-zinc-400">
            <p>SESSION_ID: <span className="text-white">ANONYMOUS_RECON_{Math.random().toString(36).substring(2, 8).toUpperCase()}</span></p>
            <p>CLEARANCE: <span className="text-[#00FF66]">PUBLIC GUEST [READ-ONLY HUD]</span></p>
            <p>CIPHER SUITE: TLS_CHACHA20_POLY1305_SHA256</p>
          </div>
        );
        break;

      case "pgp":
        output = (
          <div className="space-y-1 text-xs font-mono text-zinc-400 bg-zinc-950 p-2 border border-zinc-800">
            <p className="text-zinc-500">-----BEGIN PGP PUBLIC KEY FINGERPRINT-----</p>
            <p className="text-white">4A9F 82BC E120 90C4 88B1 F9A3 D071 2EE9 C001 0000</p>
            <p className="text-zinc-500">-----END PGP PUBLIC KEY FINGERPRINT-----</p>
            <p className="text-[#00FF66] text-[10px]">VERIFIED FOR COMM TRANSMISSIONS ONLY</p>
          </div>
        );
        break;

      case "ping":
        output = (
          <div className="space-y-1 text-xs font-mono text-zinc-300">
            <p>PING edge.rbldfrm0.io (139.162.44.12): 56 data bytes</p>
            <p>64 bytes from 139.162.44.12: icmp_seq=0 ttl=57 time=11.4 ms</p>
            <p>64 bytes from 139.162.44.12: icmp_seq=1 ttl=57 time=12.1 ms</p>
            <p>64 bytes from 139.162.44.12: icmp_seq=2 ttl=57 time=11.8 ms</p>
            <p className="text-[#00FF66]">--- 0% packet loss, min/avg/max = 11.4/11.7/12.1 ms ---</p>
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-[#FF3B00] font-bold">SECURE TRANSMISSION COORDINATES:</p>
            <p>PRIMARY: <a href="mailto:contact@rbldfrm0.io" className="text-white underline">contact@rbldfrm0.io</a></p>
            <p>BACKUP ROUTE: <a href="mailto:niko@vonglabs.com" className="text-white underline">niko@vonglabs.com</a></p>
            <p className="text-zinc-500">INCLUDE PGP SIGNATURE FOR SENSITIVE ENGINEERING COMMISSIONS.</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInputVal("");
        return;

      default:
        output = (
          <p className="text-xs text-red-400">
            COMMAND NOT RECOGNIZED: &quot;{trimmed}&quot;. TYPE <span className="underline cursor-pointer" onClick={() => executeCommand("help")}>help</span> FOR LIST OF COMMANDS.
          </p>
        );
        break;
    }

    setHistory((prev) => [
      ...prev,
      {
        command: trimmed,
        output,
        time: timeStr,
      },
    ]);
    setCommandHistory((prev) => [trimmed, ...prev]);
    setCmdIndex(-1);
    setInputVal("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    playTactileClick(1400, 0.008);
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdIndex + 1 < commandHistory.length) {
        const nextIndex = cmdIndex + 1;
        setCmdIndex(nextIndex);
        setInputVal(commandHistory[nextIndex] || "");
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdIndex > 0) {
        const prevIndex = cmdIndex - 1;
        setCmdIndex(prevIndex);
        setInputVal(commandHistory[prevIndex] || "");
      } else if (cmdIndex === 0) {
        setCmdIndex(-1);
        setInputVal("");
      }
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="border border-zinc-800 bg-[#0C0C0C] font-mono text-zinc-200 shadow-2xl relative overflow-hidden">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between border-b border-zinc-800 bg-[#141414] px-3 py-2 text-xs">
        <div className="flex items-center gap-2">
          <Terminal className="h-3.5 w-3.5 text-[#FF3B00]" />
          <span className="font-bold tracking-wider text-zinc-300">RBLD//DIAGNOSTIC_SHELL</span>
          <span className="text-[10px] text-zinc-500 font-normal">[TTY_01: ONLINE]</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-zinc-400">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00FF66] animate-pulse"></span>
          <span>LIVE SESSION</span>
        </div>
      </div>

      {/* Suggested Quick Directive Badges */}
      <div className="flex flex-wrap items-center gap-1.5 border-b border-zinc-800/80 bg-zinc-950/60 px-3 py-1.5 text-[11px]">
        <span className="text-zinc-500 font-semibold mr-1">RUN:</span>
        {["help", "status", "deployments", "specs", "pgp", "ping", "clear"].map((cmd) => (
          <button
            key={cmd}
            type="button"
            onClick={() => executeCommand(cmd)}
            className="border border-zinc-800 bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-700 hover:text-white px-2 py-0.5 text-zinc-300 transition-colors uppercase cursor-pointer"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal Output Body */}
      <div className="p-4 space-y-3 max-h-[340px] overflow-y-auto text-xs font-mono select-text">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-zinc-600 text-[10px]">{item.time}</span>
              <span className="text-[#FF3B00] font-semibold">rbld@zero:~$</span>
              <span className="text-white font-medium">{item.command}</span>
            </div>
            <div className="pl-6">{item.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Terminal Input Line */}
      <form onSubmit={handleSubmit} className="border-t border-zinc-800 bg-zinc-950 px-3 py-2 flex items-center gap-2">
        <span className="text-[#FF3B00] font-semibold text-xs shrink-0">rbld@zero:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="type directive (e.g. 'status', 'help')..."
          className="w-full bg-transparent text-xs text-white placeholder-zinc-600 focus:outline-none font-mono"
          autoComplete="off"
          spellCheck="false"
        />
        <button
          type="submit"
          className="text-zinc-500 hover:text-[#FF3B00] transition-colors p-1"
          title="Send Command"
        >
          <CornerDownLeft className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
}
