import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { resetScroll } from "@/lib/smooth-scroll";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    resetScroll();
  }, [pathname]);

  return null;
}
