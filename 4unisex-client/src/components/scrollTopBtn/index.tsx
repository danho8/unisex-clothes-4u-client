"use client";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./index.scss";
import { FaCircleArrowUp } from "react-icons/fa6";

const ScrollTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <FaCircleArrowUp
      onClick={scrollToTop}
      className={`scroll-top-btn ${isVisible ? "show" : "hide"}`}
    />
  );
};

export default ScrollTopBtn;
