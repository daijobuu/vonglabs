// Lightweight Web Audio API synthesizer for tactile mechanical & terminal audio clicks
let audioCtx: AudioContext | null = null;
let audioEnabled = false;

export function setAudioEnabled(enabled: boolean) {
  audioEnabled = enabled;
  if (enabled && !audioCtx && typeof window !== "undefined") {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
}

export function isAudioEnabled(): boolean {
  return audioEnabled;
}

export function playTactileClick(freq = 1200, duration = 0.02, type: OscillatorType = "sine") {
  if (!audioEnabled || typeof window === "undefined") return;
  try {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    if (!audioCtx) return;

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + duration);

    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch {
    // Ignore audio failures if browser blocks
  }
}

export function playBeep(freq = 880, duration = 0.06) {
  playTactileClick(freq, duration, "square");
}
