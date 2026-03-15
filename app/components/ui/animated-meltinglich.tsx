"use client";

type AnimatedGlichProps = {
  text: string;
};

export default function AnimatedMeltingGlich({ text }: AnimatedGlichProps) {
  return (
    <h1 className="glitch text-4xl font-bold text-white relative">{text}</h1>
  );
}
