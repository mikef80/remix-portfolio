import React, { useEffect } from "react";

const Timeline: React.FC = () => {
  useEffect(() => {
    const path = document.querySelector("#squiggle-path") as SVGPathElement | null;
    console.log(path);

    let pathLength: number;

    if (path) {
      pathLength = path.getTotalLength();
      path.style.strokeDasharray = pathLength + " " + pathLength;
      path.style.strokeDashoffset = `${pathLength}`;

      const scroll = () => {
        // What % down is it
        const scrollPercentage =
          (document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight - document.documentElement.clientHeight);

        // Length to offset the dashes
        const drawLength = pathLength * scrollPercentage;

        // Draw in reverse
        path.style.strokeDashoffset = `${pathLength - drawLength}`;
      };

      scroll();

      window.addEventListener("scroll", scroll);

      return () => {
        window.removeEventListener("scroll", scroll);
      };
    }
  }, []);

  return (
    <svg
      preserveAspectRatio='xMidYMax meet'
      fill='none'
      viewBox='0 0 372 2000'
      className='w-full object-cover squiggle'
      style={{
        strokeWidth: "5px",
        strokeLinecap: "round",
        strokeLinejoin: "round",
      }}>
      <path
        id='squiggle-path'
        stroke='#1f2937'
        d='M197.649-23s-184.142 165.527 0 263.009c184.143 97.483 273.817 244.671 0 404.89-273.816 160.218-250.319 355.661 0 467.621 250.32 111.96 193.254 372.56 0 473.42-193.253 100.86 0 414.06 0 414.06'
      />
    </svg>
  );
};

export default Timeline;
