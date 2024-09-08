import Content from "./Content";

const AboutMe = () => {
  return (
    <div id='about' className='scroll-mt-[5rem] text-gray-800 p-6'>
      <Content>
        <h1 className='text-3xl pb-4'>Hi, I'm Mike!</h1>
        <p className='pb-2'>
          I'm a software developer who loves dabbling with code, learning new things and
          exploring the ever-changing landscape of technology.
        </p>
        <p className='pb-2'>
          I've been coding for years, but only recently decided to turn it into a career,
          having spent 16 years in the NHS as a Paramedic. My downtime on shift was often spent
          learning to code, studying into the small hours!
        </p>
        <p className='pb-2'>
          After a couple of false starts, I decided to take the plunge and completed{" "}
          <a
            href='https://northcoders.com/our-courses/skills-bootcamp-in-software-development'
            target='_blank'
            className='underline'>
            Skills Bootcamp in Software Development
          </a>{" "}
          through Northcoders. It was a great opportunity to consolidate the learning I'd
          already undertaken, whilst also filling the gaps I had in my knowledge.
        </p>
        <p className='pb-2'>
          Following the bootcamp, I started work as a Junior Developer, where I am enjoying
          ample opportunities to explore other technologies such as PHP, WordPress and React
          Native.
        </p>
      </Content>
    </div>
  );
};

export default AboutMe;
