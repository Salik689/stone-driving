
import React from "react";

const LPlateScanner = () => {
  return (
    <svg
      width="320"
      height="320"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Subtle inner glow hint */}
        <linearGradient id="innerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,100,100,0.05)" />
          <stop offset="50%" stopColor="rgba(255,60,60,0.03)" />
          <stop offset="100%" stopColor="rgba(255,100,100,0.05)" />
        </linearGradient>

        {/* Glassy gradient for main line */}
        <linearGradient id="glassRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,140,140,0.9)" />
          <stop offset="50%" stopColor="rgba(255,40,40,0.85)" />
          <stop offset="100%" stopColor="rgba(255,140,140,0.9)" />
        </linearGradient>

        {/* Soft glow */}
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* Trailing shadow */}
        <linearGradient id="shadowRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255,80,80,0.2)" />
          <stop offset="100%" stopColor="rgba(255,80,80,0)" />
        </linearGradient>
      </defs>

      {/* Subtle inner hint */}
      <path
        d="M50 30 V170 H160 V135 H85 V30 Z"
        fill="url(#innerGlow)"
        stroke="none"
      />

      {/* Faint trailing shadow */}
      <path
        d="M50 30 V170 H160 V135 H85 V30 Z"
        fill="none"
        stroke="url(#shadowRed)"
        strokeWidth="4"
        strokeLinejoin="miter"
        strokeLinecap="round"
        strokeDasharray="120 800"
        strokeDashoffset="0"
        filter="url(#softGlow)"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-920"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* Main bright scanning line */}
      <path
        d="M50 30 V170 H160 V135 H85 V30 Z"
        fill="none"
        stroke="url(#glassRed)"
        strokeWidth="3"
        strokeLinejoin="miter"
        strokeLinecap="round"
        strokeDasharray="120 800"
        strokeDashoffset="0"
        filter="url(#softGlow)"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="0"
          to="-920"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

export default LPlateScanner;