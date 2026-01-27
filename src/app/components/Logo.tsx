import svgPaths from '@/imports/svg-8pvz4ne47o';
import svgPathsWhite from '@/imports/svg-sygikcc049';
import { cn } from './ui/utils';

interface LogoProps {
  variant?: 'light' | 'dark' | 'netz';
  className?: string;
  withStripe?: boolean;
  stripeColor?: 'yellow' | 'blue';
}

export function Logo({
  variant = 'dark',
  className = '',
  withStripe = false,
  stripeColor = 'yellow',
}: LogoProps) {
  // Use the dark navbar logo (black text with yellow stripe)
  // Use the light footer logo (white text)
  // Use the netz logo (black text with blue stripe)

  if (variant === 'light') {
    // Footer version - white logo (same structure as navbar but white)
    return (
      <div className={cn('relative w-full mt-1', className)}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 294.643 74.527"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMid meet"
        >
          {/* 2PUNKT0 text - top section */}
          <path d={svgPathsWhite.p3f226800} fill="white" />
          <path d={svgPathsWhite.p397fc480} fill="white" />
          <path d={svgPathsWhite.p1432c700} fill="white" />
          <path d={svgPathsWhite.p275a9400} fill="white" />
          <path d={svgPathsWhite.pbec4b80} fill="white" />
          <path d={svgPathsWhite.p21c2df0} fill="white" />
          <path d={svgPathsWhite.p1a9e6900} fill="white" />

          {/* Stadtwerke Musterstadt text - bottom section */}
          <g transform="translate(0, 59.52)">
            <path d={svgPathsWhite.p2657d600} fill="white" />
            <path d={svgPathsWhite.p1c1d3a80} fill="white" />
            <path d={svgPathsWhite.p289ec380} fill="white" />
            <path d={svgPathsWhite.p8b433f2} fill="white" />
            <path d={svgPathsWhite.pb8c6d80} fill="white" />
            <path d={svgPathsWhite.p1d665400} fill="white" />
            <path d={svgPathsWhite.p25e6c820} fill="white" />
            <path d={svgPathsWhite.p210cd100} fill="white" />
            <path d={svgPathsWhite.p14fc7f80} fill="white" />
            <path d={svgPathsWhite.p59d5000} fill="white" />
            <path d={svgPathsWhite.pf03f080} fill="white" />
            <path d={svgPathsWhite.p8ac8e80} fill="white" />
            <path d={svgPathsWhite.p2a47b300} fill="white" />
            <path d={svgPathsWhite.p28d25380} fill="white" />
            <path d={svgPathsWhite.pdd47b00} fill="white" />
            <path d={svgPathsWhite.p3cdf6640} fill="white" />
            <path d={svgPathsWhite.p135efb00} fill="white" />
            <path d={svgPathsWhite.p7996900} fill="white" />
            <path d={svgPathsWhite.p12a9b020} fill="white" />
            <path d={svgPathsWhite.pd9a6430} fill="white" />
            <path d={svgPathsWhite.p13015500} fill="white" />
          </g>
        </svg>
      </div>
    );
  }

  if (variant === 'netz') {
    // Netz version - blue accent bar
    return (
      <div className={cn('relative w-full mt-1', className)}>
        <svg
          className="w-full h-auto"
          viewBox="0 0 224 64.7334"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMinYMid meet"
        >
          {/* Blue accent bar - middle section - RENDER FIRST (behind text) */}
          <rect x="0" y="19.95" width="224" height="18.06" fill="#63bef8" />

          {/* 2PUNKT0 text - top section */}
          <path d={svgPaths.pfa19000} fill="#222222" transform="translate(2, 0)" />
          <path d={svgPaths.p361af400} fill="#222222" transform="translate(2, 0)" />
          <path d={svgPaths.p11f69700} fill="#222222" transform="translate(2, 0)" />
          <path d={svgPaths.p271d4600} fill="#222222" transform="translate(2, 0)" />
          <path d={svgPaths.p39015e80} fill="#222222" transform="translate(2, 0)" />
          <path d={svgPaths.p1c819300} fill="#222222" transform="translate(2, 0)" />
          <path d={svgPaths.pa783b00} fill="#222222" transform="translate(2, 0)" />

          {/* Stadtwerke Musterstadt text - bottom section */}
          <path d={svgPaths.p39514280} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p278b6900} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p2ad66900} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p233f26c0} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p23d21680} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p3b38a3c0} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p3f80e180} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p3dc57c00} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.pccc9600} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p2b464f0} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p319bfb40} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p278a1000} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p3cbafaf0} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p22517800} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p1e15d4c0} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p1c816100} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p2e53e600} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p3b9f6100} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p33667c00} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.pb9b87f0} fill="#222222" transform="translate(2, 44.4)" />
          <path d={svgPaths.p27210680} fill="#222222" transform="translate(2, 44.4)" />
        </svg>
      </div>
    );
  }

  // Navbar version - new Figma logo with neon yellow accent
  // Original aspect ratio: 224 x 64.7334 (width x height) = 3.46:1

  return (
    <div className={cn('relative w-full mt-1', className)}>
      {/* Single stripe - always rendered, animates on color change */}
      {withStripe && (
        <div
          key={stripeColor}
          className="absolute top-[30.8%] left-0 w-full h-[27.9%] origin-bottom animate-stripe-grow"
          style={{
            backgroundColor: stripeColor === 'blue' ? '#63bef8' : '#deff03',
          }}
        />
      )}

      <svg
        className="w-full h-auto relative"
        viewBox="0 0 224 64.7334"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMid meet"
      >
        {/* 2PUNKT0 text - top section */}
        <path d={svgPaths.pfa19000} fill="#222222" transform="translate(2, 0)" />
        <path d={svgPaths.p361af400} fill="#222222" transform="translate(2, 0)" />
        <path d={svgPaths.p11f69700} fill="#222222" transform="translate(2, 0)" />
        <path d={svgPaths.p271d4600} fill="#222222" transform="translate(2, 0)" />
        <path d={svgPaths.p39015e80} fill="#222222" transform="translate(2, 0)" />
        <path d={svgPaths.p1c819300} fill="#222222" transform="translate(2, 0)" />
        <path d={svgPaths.pa783b00} fill="#222222" transform="translate(2, 0)" />

        {/* Stadtwerke Musterstadt text - bottom section */}
        <path d={svgPaths.p39514280} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p278b6900} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p2ad66900} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p233f26c0} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p23d21680} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p3b38a3c0} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p3f80e180} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p3dc57c00} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.pccc9600} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p2b464f0} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p319bfb40} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p278a1000} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p3cbafaf0} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p22517800} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p1e15d4c0} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p1c816100} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p2e53e600} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p3b9f6100} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p33667c00} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.pb9b87f0} fill="#222222" transform="translate(2, 44.4)" />
        <path d={svgPaths.p27210680} fill="#222222" transform="translate(2, 44.4)" />
      </svg>
    </div>
  );
}
