import { NavLink } from "@remix-run/react";

const Navbar = () => {
  return (
    <nav className='navbar flex justify-between absolute top-0 left-0 w-screen bg-red-200 py-1 px-2'>
      <img src='https://via.placeholder.com/50' alt='' />
      <button>&#9776;</button>

      <ul className='flex items-center gap-10'>
        <li>
          <NavLink to='/'>
            {({ isActive, isPending }) => (
              <span className={isActive ? "active" : ""}>Home</span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        <li>
          <NavLink to='/projects'>Projects</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
