"use client";

type Props = {
  text: string;
  className?: string;
};

export default function RollingText({ text, className }: Props) {
  return (
    <span className={`inline-flex ${className}`}>
      {text.split("").map((char, index) => (
        <span
          key={index}
          className="relative inline-block h-[1em] overflow-hidden group"
          style={{ transitionDelay: `${index * 40}ms` }}
        >
          <span className="block transition-transform duration-500 group-hover:-translate-y-full">
            {char}
          </span>

          <span className="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full">
            {char}
          </span>
        </span>
      ))}
    </span>
  );
}
