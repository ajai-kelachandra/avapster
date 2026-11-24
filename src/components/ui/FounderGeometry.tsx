import React from "react";

export const FounderGeometry: React.FC<{ className?: string }> = ({
  className = "",
}) => {
  return (
    <div
      className={`relative w-full aspect-[4/3] max-w-lg mx-auto select-none ${className}`}
      aria-label="Architectural geometric graphic representing the five founding minds of AVAPSTER"
      role="img"
    >
      <svg
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Subtle Architectural Drafting Gridlines */}
        <line x1="40" y1="40" x2="440" y2="40" stroke="#171717" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.25" />
        <line x1="40" y1="320" x2="440" y2="320" stroke="#171717" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.25" />
        <line x1="40" y1="40" x2="40" y2="320" stroke="#171717" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.25" />
        <line x1="440" y1="40" x2="440" y2="320" stroke="#171717" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.25" />

        {/* Diagonal Axis (Mind 01 / Vision) */}
        <line x1="80" y1="280" x2="360" y2="70" stroke="#171717" strokeWidth="2.5" />
        
        {/* Counter Diagonal (Mind 02 / Systems) */}
        <line x1="160" y1="70" x2="400" y2="280" stroke="#171717" strokeWidth="1.5" strokeDasharray="4 4" />

        {/* Structural Horizontal Beam (Mind 03 / Cloud) */}
        <rect x="80" y="190" width="320" height="2" fill="#171717" />
        
        {/* Five Rectangular Architectural Facets (Five Minds) */}
        {/* 01: Apex Director */}
        <rect x="340" y="50" width="38" height="38" fill="#E85B36" />
        
        {/* 02: Systems Block */}
        <rect x="140" y="170" width="40" height="40" fill="#171717" />
        
        {/* 03: Cloud Platform */}
        <rect x="260" y="170" width="40" height="40" fill="#D9D8D2" stroke="#171717" strokeWidth="1.5" />

        {/* 04: Intelligence Anchor */}
        <circle cx="100" cy="280" r="18" fill="#171717" />

        {/* 05: Human Interaction Circle */}
        <circle cx="380" cy="280" r="18" stroke="#E85B36" strokeWidth="3" fill="none" />

        {/* Intersecting Energy Nodes */}
        <circle cx="240" cy="190" r="4.5" fill="#E85B36" />
        
        {/* Subtle Drafting Annotations */}
        <text x="50" y="60" fill="#171717" font-family="'Space Grotesk', monospace" font-size="9" letter-spacing="2" opacity="0.6">
          GEO. REF // 05 MINDS
        </text>
        <text x="390" y="60" text-anchor="end" fill="#E85B36" font-family="'Space Grotesk', monospace" font-size="9" letter-spacing="1">
          N.01 APEX
        </text>
        <text x="50" y="310" fill="#737373" font-family="'Inter', sans-serif" font-size="8" letter-spacing="1.5">
          SCALE 1:1 / SYNTHESIS
        </text>
        <text x="430" y="310" text-anchor="end" fill="#737373" font-family="'Inter', sans-serif" font-size="8" letter-spacing="1.5">
          AVAPSTER
        </text>
      </svg>
    </div>
  );
};

