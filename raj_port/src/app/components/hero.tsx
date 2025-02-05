"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./HeroStyles.css";

export default function Hero() {
  const [glitchText, setGlitchText] = useState("Raj Pratap Vidyarthi");

  useEffect(() => {
    // Optional dynamic glitch text effect (updates random characters briefly)
    const interval = setInterval(() => {
      setGlitchText((prev) => {
        return prev
          .split("")
          .map((char) => (Math.random() < 0.1 ? "#" : char))
          .join("");
      });
      setTimeout(() => setGlitchText("Raj Pratap Vidyarthi"), 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 bg-dark relative overflow-hidden">
      {/* Glitchy Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black opacity-75 mix-blend-multiply blur-3xl animate-pulse" />

      <div className="text-center relative z-10">
        {/* Glitching Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-6 glitch text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-purple-500 select-none"
          data-text={glitchText}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {glitchText}
        </motion.h1>

        {/* Subtitle with smooth animation */}
        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web3 Community Manager & Builder
        </motion.p>

        {/* CTA Button with hover and tap effects */}
        <motion.a
          href="#projects"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-xl hover:shadow-2xl inline-block transition-all duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          GM GM
        </motion.a>
      </div>
    </section>
  );
}
