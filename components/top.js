"use client";
import { useEffect, useRef, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const arrow = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (arrow.current) {
        setIsVisible(window.pageYOffset >= 200);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="overflow-hidden">
      <button
        aria-label="arrow"
        className={`fixed bottom-4 transition-all duration-500 transform ${
          isVisible ? "left-8" : "-left-full"
        } shadow-2xl shadow-black text-gray-500 bg-tertiary hover:bg-[#ececec] p-2 rounded`}
        onClick={scrollToTop}
        ref={arrow}
      >
        <FaArrowUp scale={50} />
      </button>
    </div>
  );
};

export default ScrollTop;
