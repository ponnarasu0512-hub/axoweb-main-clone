import React from "react";
import { motion } from "motion/react";

interface CircularTextProps {
  text: string;
  className?: string;
  size?: number;
  color?: string;
  id: string;
  icon?: React.ReactNode;
}

export const CircularText: React.FC<CircularTextProps> = ({
  text,
  className = "",
  size = 140,
  color = "fill-white",
  id,
  icon,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 100 100"
      >
        <defs>
          <path
            id={id}
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
            fill="none"
          />
        </defs>
        <g className="animate-spin-slow" style={{ transformOrigin: "50px 50px" }}>
          <text className={`text-[8px] uppercase font-mono font-medium tracking-[0.18em] ${color}`}>
            <textPath href={`#${id}`} startOffset="0%">
              {text}
            </textPath>
          </text>
        </g>
      </svg>
      {icon && (
        <div className="absolute inset-0 flex items-center justify-center">
          {icon}
        </div>
      )}
    </div>
  );
};
