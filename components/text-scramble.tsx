"use client";

import React, { useEffect, useState, useRef } from "react";
import { playTactileClick } from "./audio-feedback";

const GLYPHS = "01_//[]{}<>*#$%=+~-!?:;XYZKR";

interface TextScrambleProps {
  text: string;
  className?: string;
  triggerOnHover?: boolean;
  duration?: number;
  as?: React.ElementType;
}

export function TextScramble({
  text,
  className = "",
  triggerOnHover = true,
  duration = 600,
  as: Component = "span",
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text);
  const isScramblingRef = useRef(false);

  const scramble = () => {
    if (isScramblingRef.current) return;
    isScramblingRef.current = true;
    playTactileClick(1800, 0.015);

    const length = text.length;
    const startTime = Date.now();
    const intervalTime = 30;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const revealedCount = Math.floor(progress * length);

      let scrambled = "";
      for (let i = 0; i < length; i++) {
        if (text[i] === " " || text[i] === "/" || text[i] === ":") {
          scrambled += text[i];
        } else if (i < revealedCount) {
          scrambled += text[i];
        } else {
          scrambled += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        }
      }

      setDisplayText(scrambled);

      if (progress >= 1) {
        clearInterval(timer);
        setDisplayText(text);
        isScramblingRef.current = false;
      }
    }, intervalTime);
  };

  useEffect(() => {
    setDisplayText(text);
  }, [text]);

  return (
    <Component
      className={`cursor-default select-none transition-colors ${className}`}
      onMouseEnter={triggerOnHover ? scramble : undefined}
    >
      {displayText}
    </Component>
  );
}
