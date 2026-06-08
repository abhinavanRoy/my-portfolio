import { useEffect, useState } from "react";

export function useFirstVisit(pageKey) {
  const [isFirstVisit] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }

    return !window.sessionStorage.getItem(`visited_${pageKey}`);
  });

  useEffect(() => {
    if (typeof window === "undefined" || !isFirstVisit) {
      return;
    }

    window.sessionStorage.setItem(`visited_${pageKey}`, "true");
  }, [isFirstVisit, pageKey]);

  return isFirstVisit;
}
