"use client";

import React, { useEffect } from "react";
import PortfolioView from "@/components/PortfolioView";

export default function HomeRoute() {
  useEffect(() => {
    if (typeof window !== "undefined" && window.history.replaceState) {
      window.history.replaceState(null, "", "/");
    }
  }, []);

  return <PortfolioView initialSection="home" />;
}
