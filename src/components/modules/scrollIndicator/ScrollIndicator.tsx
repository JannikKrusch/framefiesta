import React, { useEffect, useState } from "react";
import "./ScrollIndicator.css";

export function ScrollIndicator(): JSX.Element {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    function updateScrollWidth() {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollWidth(scrolled);
    }

    function updateNavbarHeight() {
      const navbar = document.querySelector(".custom-navbar");
      if (navbar) {
        setNavbarHeight(navbar.clientHeight);
      }
    }

    window.addEventListener("scroll", updateScrollWidth);
    window.addEventListener("resize", updateNavbarHeight);

    updateNavbarHeight();
    updateScrollWidth();

    return () => {
      window.removeEventListener("scroll", updateScrollWidth);
      window.removeEventListener("resize", updateNavbarHeight);
    };
  }, []);

  const indicatorStyle = {
    width: `${scrollWidth}%`,
    top: `${navbarHeight}px`,
  };

  return <div style={indicatorStyle} className="scroll-indicator"></div>;
}
