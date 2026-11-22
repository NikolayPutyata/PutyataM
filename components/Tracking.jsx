"use client";

import { useEffect } from "react";
import { captureAttribution, trackContactClicks } from "@/lib/lead-client";

export default function Tracking() {
  useEffect(() => {
    captureAttribution();
    return trackContactClicks();
  }, []);
  return null;
}
