"use client";
import { useEffect, useState } from "react";

export default function HeroTitle() {
  const fullText = "Accelerate Your Driving Journey";
  const [displayedText, setDisplayedText] = useState("");
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) {
        clearInterval(interval);
        // Briefly emphasize "Accelerate"
        setHighlight(true);
        setTimeout(() => setHighlight(false), 500);
      }
    }, 100); // Adjust typing speed here
  }, []);

  return (
    <div className="w-full flex justify-center mt-12">
      <h1
        className={`text-4xl sm:text-5xl md:text-6xl font-bold ${
          highlight ? "scale-110 text-white transition-transform duration-300" : "text-white/90"
        }`}
      >
        {displayedText}
        <span className="border-r-2 border-orange-500 animate-pulse ml-1"></span>
      </h1>
    </div>
  );
}