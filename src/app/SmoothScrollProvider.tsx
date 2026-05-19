"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.08, 
        duration: 1.2, 
        smoothWheel: true, 
        wheelMultiplier: 1.0,
        touchMultiplier: 1.5,
        infinite: false
      }}
    >
      {children}
    </ReactLenis>
  );
}
