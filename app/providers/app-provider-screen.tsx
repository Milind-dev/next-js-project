"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LoadingScreen from "../components/loading-screen";

type Props = {
  children: React.ReactNode;
};

export default function AppLoaderProvider({ children }: Props) {
  const [loading, setIsLoading] = useState(true);
  const foxtrade = "Fox Trader";
  const delay = 100000;
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, delay);
  }, []);

  if (loading) {
    return (
      <>
        <div>
          <motion.h1
            className="text-[#c0de00] text-4xl font-bold tracking-[0.2em] flex justify-center mt-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {foxtrade.split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <LoadingScreen />;
        </div>
      </>
    );
  }
  return <> {children}</>;
}
