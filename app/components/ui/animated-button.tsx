"use client";

type AnimatedButtonProps = {
  text: string;
};

export default function AnimatedButton({ text }: AnimatedButtonProps) {
  return (
    <button className="group border border-white text-white rounded-full px-6 mr-6 py-3 tracking-widest shadow-lg transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)] hover:scale-105 cursor-cell">
      {text.split("").map((letter, index) => (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          {letter}
        </span>
      ))}
    </button>
  );
}
