"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import { initGA, logPageView } from "../utils/analytics";

const AnalyticsWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    const trackingId = process.env.NEXT_PUBLIC_GA_TRACKING_ID || "";

    if (trackingId) {
      initGA(trackingId);
      logPageView();
    }
  }, []);

  useEffect(() => {
    logPageView();
  }, [pathname]);

  return <>{children}</>;
};

export default AnalyticsWrapper;
