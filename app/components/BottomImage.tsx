import React from "react";

const BottomImage = () => {
  return (
    <div
      id='hero'
      className={`absolute top-0 left-0 h-[calc(100vh-80px)] flex flex-col items-center `}>
      <img
        src='/media/images/groyne.jpg'
        className=' object-cover h-full w-full '
        id='hero-img'
        alt='High contrast black and white image of boscombe pier, taken on a long exposure.'
      />
    </div>
  );
};

export default BottomImage;
