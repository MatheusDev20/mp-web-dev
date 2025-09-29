"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export const CLF_CO2Badge = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div suppressHydrationWarning>
      {mounted && (
        <div
          data-iframe-width="400"
          data-iframe-height="270"
          data-share-badge-id="99910699-7e3b-4148-aea0-8ad6f2a7cdfb"
          data-share-badge-host="https://www.credly.com"
        />
      )}
      {/* Load Credly embed script after the page becomes interactive */}
      <Script
        id="credly-embed"
        src="https://cdn.credly.com/assets/utilities/embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
};
