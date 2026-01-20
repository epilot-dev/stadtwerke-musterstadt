import React from "react";
import svgPathsOld from "../../imports/svg-76k4j86d97";
import svgPathsNew from "../../imports/svg-c9erwtfqhn";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "dark", className = "" }: LogoProps) {
  // Use the old logo (with neon yellow accent) for dark variant (navbar)
  // Use the new logo (single color) for light variant (footer)
  
  if (variant === "light") {
    // Footer version - simple white logo
    return (
      <div className={`relative ${className}`}>
        <svg
          className="block w-full h-auto"
          fill="none"
          preserveAspectRatio="xMinYMid meet"
          viewBox="0 0 297.877 64.7334"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={svgPathsNew.p31c30a80} fill="#FFFFFF" />
        </svg>
      </div>
    );
  }

  // Navbar version - dark with neon yellow accent
  const mainColor = "#222222";
  const accentColor = "#DEFF03";

  return (
    <div className={`relative ${className}`}>
      <svg
        className="block w-full h-auto"
        fill="none"
        preserveAspectRatio="xMinYMid meet"
        viewBox="0 0 298.772 64.7334"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Union">
          <path d={svgPathsOld.pd92ae00} fill={mainColor} />
          <path 
            clipRule="evenodd" 
            d={svgPathsOld.p3ee1ba00} 
            fill={accentColor} 
            fillRule="evenodd" 
          />
        </g>
      </svg>
    </div>
  );
}