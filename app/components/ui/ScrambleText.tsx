"use client";

import { useEffect, useState } from "react";

type ScrambleTextProps = {
  text: string;
  className?: string;
};

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function ScrambleText({ text, className }: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);

  useEffect(() => {
    let iteration = 0;

    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return letters[Math.floor(Math.random() * 26)];
          })
          .join(""),
      );

      iteration += 1 / 3;

      if (iteration >= text.length) {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [text]);

  return <p className={className}>{displayText}</p>;
}
