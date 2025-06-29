"use client";

import { useEffect } from "react";
import showToast from "./UsedShadcn/UseToast";

function NetworkWatcher() {
  useEffect(() => {
    const handleOffline = () => {
      showToast({
        title: "You’re Offline",
        description:
          "You’ve lost internet connection. Some features may not work.",
      }).warning();
    };

    const handleOnline = () => {
      showToast({
        title: "You’re Online",
        description: "You’ve regained internet connection.",
      }).success();
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    if (!navigator.onLine) handleOffline();

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return null;
}

export default NetworkWatcher;
