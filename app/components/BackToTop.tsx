import { Link } from "@remix-run/react";
import React, { useEffect, useRef, useState } from "react";

const BackToTop = () => {
  const [showLink, setShowLink] = useState(false);
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const backToTop = document.getElementById("back-to-top");

      const handleFade = () => {
        if (window.scrollY === 0) {
          setShowLink(false);
          setTimeout(() => {
            // backToTop.style.display = "none";
          }, 300);
        } else {
          setShowLink(true);
          setTimeout(() => {
            // backToTop.style.display = "block";
          }, 0);
        }
      };

      handleFade();
    });
  }, []);

  return (
    <Link
      id='back-to-top'
      to='#'
      className={`bg-white font-bold fixed left-[90%] top-[90%] -translate-x-1/2 p-2 border-2 rounded-md z-10 m-2 duration-300 transition-opacity ease-in-out ${
        !showLink ? "opacity-0" : "opacity-100"
      }`}>
      Back to top
    </Link>
  );
};

export default BackToTop;
