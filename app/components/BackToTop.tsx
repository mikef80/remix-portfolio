import { Link } from "@remix-run/react";
import { useEffect, useState, useCallback } from "react";
import UpArrow from "./UpArrow";

const BackToTop = () => {
  const [showLink, setShowLink] = useState(false);

  const handleFade = useCallback(() => {
    if (window.scrollY === 0) {
      setShowLink(false);
    } else {
      setShowLink(true);
    }
  }, []);

  useEffect(() => {
    handleFade();
    window.addEventListener("scroll", handleFade);
    return () => {
      window.removeEventListener("scroll", handleFade);
    };
  }, [handleFade]);

  return (
    <Link
      id="back-to-top"
      to="#"
      className={`border-gray-800 bg-white text-gray-800 fixed right-[10px] bottom-[10px] p-2 border-2 rounded-md z-10 m-2 transition-opacity ease-in-out duration-150 ${
        showLink
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <UpArrow width={15} height={15} strokeWidth={2} stroke="stroke-gray-800" />
    </Link>
  );
};

export default BackToTop;
