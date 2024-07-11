// https://codyhouse.co/gem/vertical-timeline/
// https://www.npmjs.com/package/react-vertical-timeline-component

import { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    const svg = document.querySelector("svg.squiggle");
    const path = svg?.querySelector("path");

    const scroll = () => {
      console.clear();
      if (path && svg) {
        const distance = window.scrollY - (window.innerHeight - 300);

        const totalDistance = svg.clientHeight - window.innerHeight;

        console.log("svg.clientHeight: " + svg.clientHeight);
        console.log("window.innerHeight: " + window.innerHeight);
        console.log("totalDistance: " + totalDistance);

        const percentage = distance / totalDistance;
        console.log("percentage: " + percentage);

        const pathLength = path.getTotalLength();
        console.log("pathLength: " + pathLength);

        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
        console.log("path.style.strokeDashoffset: " + path.style.strokeDashoffset);
      }
    };

    scroll();

    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    // THIS IS THE ONE
    <div className='relative bg-red-400'>
      <img
        src='/media/images/groyne.jpg'
        className=' object-cover h-[400vw] w-full object-left'
        
        alt='High contrast black and white image of boscombe pier, taken on a long exposure.'
      />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100vw'
        height='400vw'
        fill='none'
        viewBox='0 0 372 2000'
        className='w-full object-cover squiggle absolute top-0 left-0 bg-white mix-blend-lighten'
        style={{
          strokeWidth: "0.5rem",
          strokeLinecap: "round",
          strokeLinejoin: "round",
        }}>
        <path
          stroke='#000'
          d='M197.649-23s-184.142 165.527 0 263.009c184.143 97.483 273.817 244.671 0 404.89-273.816 160.218-250.319 355.661 0 467.621 250.32 111.96 193.254 372.56 0 473.42-193.253 100.86 0 414.06 0 414.06'
        />
      </svg>
    </div>
  );
};

export default Timeline;
