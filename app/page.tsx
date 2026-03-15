"use client";
import { motion } from "framer-motion";
import HomePage from "./dashboard/page";
export default function Homepage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <HomePage />
    </motion.div>
  );
}
