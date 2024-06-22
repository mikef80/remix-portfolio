import { TypeAnimation } from "react-type-animation";
import DownArrow from "../components/DownArrow";

const Hero = () => {
  

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
        />
      </h1>

      <button
        className='text-xl text-gray-100 absolute bottom-1 left-[45%] animate-bounce'
        onClick={() => console.count("scroll!")}>
        {/* &darr; */}
        <DownArrow strokeWidth={2} stroke="#aaaaaa" />
        {/* <DownArrow strokeWidth={2} stroke="#454545" /> */}
      </button>
    </div>
    // END HERO
  );
};

export default Hero;
