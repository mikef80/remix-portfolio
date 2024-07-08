import { TypeAnimation } from "react-type-animation";
import DownArrow from "../components/DownArrow";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

const Hero = () => {
  useEffect(() => {
    const onScroll = () => {
      const scrollLink = document.getElementById("scroll-link");

      if (window.scrollY !== 0) {
        scrollLink?.classList.add("hidden");
      } else {
        scrollLink?.classList.remove("hidden");
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    // HERO
    <div
      id='hero'
      className={`relative top-0 left-0 h-[calc(100vh-80px)] flex flex-col items-center `}>
      <img
        src='/media/images/groyne.jpg'
        className=' object-cover h-full w-full '
        id='hero-img'
        alt='High contrast black and white image of boscombe pier, taken on a long exposure.'
      />

      <h1 className='text-6xl text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-exclusion w-full text-center'>
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
          wrapper='span'
          speed={10}
          deletionSpeed={20}
          repeat={Infinity}
          style={{ color: "Aqua", opacity: "0.7" }}
        />
      </h1>

      <Link
        id='scroll-link'
        to='#about-content'
        className={`text-xl text-gray-100 absolute bottom-1 left-1/2 -translate-x-1/2 animate-bounce hidden`}>
        <DownArrow strokeWidth={2} stroke='#aaaaaa' />
      </Link>
    </div>
    // END HERO
  );
};

export default Hero;

/* ${
  window.scrollY !== 0 ? "hidden" : ""
} */
