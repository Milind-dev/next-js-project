"use client";

import foxtradeicons from "../../public/foxtradeapp.png";
import { useState, useRef } from "react";
import VisionPage from "./vision-header/page";
import CompanyMarqueeLogo from "../components/companylogos/Company-logos-marquee";
import { CompanyDetails } from "../CompanyDetails/Company-details-Page";

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
      <div className=" mt-4 ml-0 flex items-center justify-between border border-yellow-200 p-4 ">
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
          GenAi Risks Fox Trades
        </h4>
        <h5 className="text-[#c7ffff] w-[40%] py-4 ">
          Find vulnerabilities in AI agents before users do. Delegate the mental
          burden of detecting AI failures to security experts.
        </h5>
        <button className="w-20% h-20% border border-yellow-100 py-3 px-3 rounded cursor-cell">
          Learn More{" "}
        </button>
        <p className="py-2 text-sm">Trusted by people AI Leader</p>
      </div>

      {/* <ImageScroller /> */}
      <CompanyMarqueeLogo />
      <CompanyDetails />
    </div>
  );
}
