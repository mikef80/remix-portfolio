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
        const distance = window.scrollY - (window.innerHeight - 100) * 0.97;

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
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100vw'
      height='200vw'
      fill='none'
      viewBox='0 0 500 2000'
      className='w-full object-cover squiggle'
      style={{
        strokeWidth: "1rem",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}>
      <path
        stroke='#f00'
        d='M206.5-40s-192 171.5 0 272.5S492 486 206.5 652s-261 368.5 0 484.5 201.5 386 0 490.5 0 429 0 429'
      />
    </svg>
    /* <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100vw'
      height='200vw'
      fill='none'
      viewBox='0 0 1000 2000'
      className='w-full object-cover squiggle'
      style={{
        stroke: "red",
        strokeWidth: "1rem",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}>
      <path
        stroke='#000'
        d='M-28 .5c233.545 55.883 169.5 591 350.5 662s419.5 121 524 24-60.927-362.458-225.5-371c-218.346-11.334-426.986 299.785-341.5 647 73 296.5-352.464 249.35-218 509 72.5 140 920.917-271.9 839-397-166-253.5-677 617.5-380.5 977'
      />
    </svg> */
    /* <svg
      xmlns='http://www.w3.org/2000/svg'
      width='100vw'
      height='200vw'
      fill='none'
      viewBox='0 0 1000 2000'
      className='w-full object-cover squiggle'
      style={{
        stroke: "red",
        strokeWidth: "1rem",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}>
      <path
        stroke='#000'
        d='M435.129 0c15.444 27.36 37.065 88.587 0 114.619-46.333 32.54-481.506-35.94-431.068 139.388 50.438 175.328 165.389 194.755 239.286 108.79 73.898-85.964 11.73-131.617-59.821-141.33-71.552-9.714-100.876 7.77-140.17 57.309C4.06 328.315 33.308 514.995 79.718 557.552c103.808 95.192 426.962-70.908 583.554-44.196 156.592 26.712 256.294 47.596 295.003 106.848 38.708 59.252 1.908 224.07-21.114 250.121-94.424 106.848-170.668 76.251-368.9 65.081-32.94-1.857-439.865 20.883-502.032-32.541-62.168-53.424-5.279-97.134 13.489-106.848 18.767-9.713 103.808-15.541 103.808 74.308 0 89.85-176.533 305.485-140.17 353.085 36.362 47.6 307.905 74.79 425.789-22.83 117.883-97.62 318.462-142.78 373.592-125.79 55.129 17 87.386 51.48 64.513 78.2-22.873 26.71-48.092 64.59-80.348 47.59-32.257-17-48.679-95.67 15.835-84.02 64.513 11.66 177.123 150.56 154.246 205.93-22.873 55.36-64.514 229.23-117.298 282.66-52.783 53.42-198.232 70.42-295.002 154.44-96.771 84.02-115.538 91.79-115.538 151.05V2000'
      />
    </svg> */
  );
};

export default Timeline;
