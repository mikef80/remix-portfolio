const Hero = () => {
  return (
    // HERO
    <div
      id='hero'
      className='relative top-0 left-0 h-[calc(100vh-64px-12px)] lg:h-[calc(100vh-72px-12px)] flex justify-center text-center p-4 lg:gap-6'>
      <img
        src='https://picsum.photos/1200'
        className='opacity-50 lg:opacity-100 object-contain h-full'
        id='hero-img'
      />

      <div className='self-center absolute lg:static'>
        <p className='pb-10'>Hi, I'm Mike</p>
        <h1 className='text-5xl text-gray-800'>Mike Francis is a wicked Dev!</h1>
      </div>
    </div>
    // END HERO
  );
};

export default Hero;
