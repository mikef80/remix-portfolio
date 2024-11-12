import { Link } from "@remix-run/react";

const SkipLink = () => {
  return (
    <Link
      to='#main'
      className='bg-white font-bold absolute left-1/2 -translate-x-1/2 p-2 border-2 rounded-md z-10 -translate-y-[150%] focus:translate-y-0 m-2 duration-300 hidden'>
      Skip to content
    </Link>
  );
};

export default SkipLink;
