import { TypeAnimation } from "react-type-animation";
import DownArrow from "../components/DownArrow";
import { Link } from "@remix-run/react";
import { useEffect, useState, useCallback } from "react";

const Hero = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleFade = useCallback(() => {
    if (window.scrollY !== 0) {
      setShowArrow(false);
    } else {
      setShowArrow(true);
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
    // HERO
    <div
      id="hero"
      className={`relative top-0 left-0 h-screen flex flex-col items-center `}
    >
      <img
        src="/media/images/groyne.webp"
        // can't decide whether i want the fade in here or not
        className={`object-cover h-full w-full
          ${
            false &&
            "[mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_99%,rgba(0,0,0,0)_100%)]"
          }
        `}
        id="hero-img"
        alt="High contrast black and white image of boscombe pier, taken on a long exposure."
      />

      <section className="text-6xl text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion w-full text-center">
        I am{" "}
        <TypeAnimation
          sequence={[
            "Mike",
            2000,
            "a developer",
            2000,
            "a creative",
            2000,
            "passionate",
            2000,
            "driven",
            2000,
            "ambitious",
            2000,
          ]}
          wrapper="span"
          speed={10}
          deletionSpeed={20}
          repeat={Infinity}
          // style={{ color: "#FFFF00B3" }}
          style={{ color: "#00FFFFB3" }}
        />
      </section>

      <Link
        id="scroll-link"
        to="#about"
        className={`text-xl text-gray-100 absolute bottom-1 left-1/2 -translate-x-1/2 animate-bounce transition-opacity ease-in-out duration-300 ${
          showArrow
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-label="Scroll to content"
      >
        <DownArrow width={20} height={20} strokeWidth={2} stroke="#aaaaaa" />
      </Link>
    </div>
    // END HERO
  );
};

export default Hero;
