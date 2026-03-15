"use client";

import foxtradeicons from "../../public/foxtradeapp.png";
import { useState, useRef } from "react";
import VisionPage from "./vision-header/page";
import CompanyMarqueeLogo from "../components/companylogos/Company-logos-marquee";
import { CompanyDetails } from "../CompanyDetails/Company-details-Page";
import Image from "next/image";
import Tradeimgicon from "../../public/logos/TradeIcon_dashboard.svg";

export default function Dashboard() {
  const [isopen, setIsopen] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const tabscoin = [
    { id: 1, name: "Platform", content: ["India", "Australia", "New York"] },
    { id: 2, name: "Market", content: ["Crypto", "Stocks", "Forex"] },
    { id: 3, name: "About", content: ["Company", "Team", "Contact"] },
  ];

  const handleEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsopen(index);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsopen(null);
    }, 150);
  };

  return (
    <div className="min-h-screen">
      <div className="w-[90%] ml-22 mt-9 ml-0 flex items-center justify-between p-1  shadow-xl rounded-xl sticky top-0 z-50 bg-[#0b4a47]">
        <VisionPage
          foxtradeicons={foxtradeicons}
          tabscoin={tabscoin}
          handleEnter={handleEnter}
          handleLeave={handleLeave}
          isopen={isopen}
        />
      </div>

      <div className="mt-10  flex flex-col items-center text-center  w-full">
        <h4 className="text-xl font-bold text-[yellow]">
          <span className="text-[#05d939] text-4xl">GenAi Risks</span>
        </h4>
        <p className="text-2xl "> Trading Views</p>
        <h5 className="text-[#c7ffff] w-[70%] py-4 ">
          Find vulnerabilities in AI agents before users do. Delegate the mental
          burden of detecting AI failures to security experts.
        </h5>

        <button className="w-20% h-20% border border-yellow-100 py-3 px-3 rounded cursor-cell mt-4">
          Learn More{" "}
        </button>
        <p className="py-4 text-center text-sm font-bold text-[#c7e6e4] tracking-wide ">
          Trusted by people AI Leader
        </p>
      </div>
      <CompanyMarqueeLogo />
      <div>
        <Image
          src={Tradeimgicon}
          alt="Trade Img Icon"
          width={1000}
          height={860}
          className="ml-[200px]"
        />
      </div>
      <CompanyDetails />
    </div>
  );
}
