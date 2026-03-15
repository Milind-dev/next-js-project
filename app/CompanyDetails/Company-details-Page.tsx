"use client";

import Image from "next/image";
import Tradedashdescrip from "./tradedashdesc/trade-dash-description";
import Turtleicon from "../../public/logos/turtleicon.png";
import { attackTypes } from "../data/attacktypes";
import { useRef } from "react";
import useInView from "../hooks/useInview";

export const CompanyDetails = () => {
  const { ref, isVisible } = useInView();
  return (
    <section className="bg-[#063c39] py-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center px-6">
        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl font-bold text-white leading-tight">
            Test your <span className="text-green-400">AI agents</span> to catch
            issues <i>before</i> they happen in production
          </h1>

          <p className="mt-6 text-teal-200 text-lg">
            AI agents are vulnerable to security attacks, posing risks to your
            data & reputation
          </p>

          <div className="mt-10 border-l-2 border-green-400 pl-6">
            {attackTypes.map((item, index) => (
              <Tradedashdescrip key={index} {...item} />
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          ref={ref}
          // className="relative flex justify-center"
          className={`relative flex justify-center transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-24 opacity-0"
          }`}
        >
          <Image
            src={Turtleicon}
            alt="AI Security Illustration"
            width={420}
            height={420}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};
