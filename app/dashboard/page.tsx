"use client";

import foxtradeicons from "../../public/foxtradeapp.png";
import { useState, useRef } from "react";
import VisionPage from "./vision-header/page";
import CompanyMarqueeLogo from "../components/companylogos/Company-logos-marquee";
import { CompanyDetails } from "../CompanyDetails/Company-details-Page";
import Image from "next/image";
import Tradeimgicon from "../../public/logos/TradeIcon_dashboard.svg";
import Resources from "../dashboard/Resources/Page";
import Footer from "../Footer/page";
import YoutubeVideo from "../components/ui/YoutubeVideo";
import ScrambleText from "../components/ui/ScrambleText";

export default function Dashboard() {
  const [copied, setCopied] = useState(false);

  const [isopen, setIsopen] = useState<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const tabscoin = [
    {
      id: 1,
      name: "Platform",
      content: [
        "AI Trading Bot",
        "Trading Dashboard",
        "Portfolio Management",
        "Risk Management",
      ],
    },
    {
      id: 2,
      name: "Market",
      content: [
        "Cryptocurrency",
        "Forex Trading",
        "Stock Market",
        "Commodities",
      ],
    },
    {
      id: 3,
      name: "About",
      content: ["Documentation", "API Access", "Contact Support", "Community"],
    },
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

  const handleCopy = () => {
    navigator.clipboard.writeText("https://foxtrade.netlify.app/");
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
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
          <span className="text-[#05d939] text-6xl py-3  px-1">
            {/* Ai Trading Risks */}
            <ScrambleText
              text="Ai Trading Risks"
              // className="py-4 text-center text-md font-bold text-[#c7e6e4] tracking-wide"
            />
          </span>
        </h4>
        <p className="text-4xl font-bold"> Vulnerblity AI Handle</p>
        <h5 className="text-[#c7ffff] w-[70%] py-4 ">
          I Trading (AITrade) Risks are the potential dangers when using AI or
          automated algorithms to trade stocks, crypto, or forex. Even though AI
          can analyze large amounts of data quickly.
        </h5>

        <button className="w-20% h-20% border border-yellow-100 py-3 px-3 rounded cursor-cell mt-4">
          Learn More{" "}
        </button>
        {/*   <p className="py-4 text-center text-sm font-bold text-[#c7e6e4] tracking-wide ">
          Trusted by people AI Leader
        </p> */}
        <ScrambleText
          text="Trusted by people AI Leader"
          className="py-4 text-center text-md font-bold text-[#c7e6e4] tracking-wide"
        />
      </div>
      <CompanyMarqueeLogo />
      <div>
        <div className="flex items-center gap-3 bg-black/60 border border-gray-700 px-4 py-2 rounded-lg">
          <Image
            src={Tradeimgicon}
            alt="Trade Img Icon"
            width={1000}
            height={860}
            className="ml-[200px]"
          />
          <span className="text-gray-300 text-sm mr-10">
            https://foxtrade.netlify.app/
          </span>

          <button
            // onClick={() =>
            //   navigator.clipboard.writeText("https://foxtrade.netlify.app/")
            // }
            onClick={handleCopy}
            className="relative px-3 py-1 bg-[#40dedf] text-black rounded hover:bg-[#2ac6c7] hover:shadow-2xl "
          >
            copy
            {copied && (
              <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded">
                Copied!
              </span>
            )}
          </button>
        </div>
      </div>
      <CompanyDetails />
      <Resources />
      <div className="max-w-4xl mx-auto py-10">
        <YoutubeVideo videoId="u57EnkQaUTY" />
      </div>
      <Footer />
    </div>
  );
}
