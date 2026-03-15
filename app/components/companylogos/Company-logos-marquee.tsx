/* "use client";

import Image from "next/image";
import { logos } from "./logos";

export default function CompanyMarqueeLogo() {
  const duplicated = [...logos, ...logos];

  return (
    <section className="w-full py-16 overflow-hidden">
      <h2 className="text-center text-2xl font-semibold mb-10">
        Trusted by companies worldwide
      </h2>

      <div className="overflow-hidden whitespace-nowrap relative w-[70%] ml-[17%]">
        <div className="flex gap-16 animate-marquee hover:[animation-play-state:paused]">
          {duplicated.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={70}
              height={80}
              className="opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
 */

"use client";

import Image from "next/image";
import { logos } from "./logos";

export default function CompanyMarqueeLogo() {
  const duplicated = [...logos, ...logos];

  return (
    <section className="w-full py-16 overflow-hidden relative">
      {/* <h2 className="text-center text-2xl font-semibold mb-10">
        Trusted by companies worldwide
      </h2> */}

      <div className="relative overflow-hidden">
        {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />

        {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

        {/* MARQUEE */}
        <div className="flex ml-92 w-max gap-16 animate-marquee hover:[animation-play-state:paused]">
          {duplicated.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={30}
              height={30}
              className="opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
