import { NavLink, Link, useLocation, Path } from "@remix-run/react";
import { useEffect, useState } from "react";
import RenderNavLink from "./RenderNavLink";

const Navbar = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width > 1024) {
        setShowMobileMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const navLinksMob = document.getElementById("nav-links-mob");
    const menuBar = document.getElementById("navbar");

    const menuBorder = () => {
      if (!navLinksMob || !menuBar) return;

      const isScrolled = window.scrollY > 0;
      const isMenuVisible = !navLinksMob.classList.contains("hidden");

      if (!isScrolled && isMenuVisible) {
        menuBar.classList.add("shadow-lg", "bg-white", "text-gray-800");
        menuBar.classList.remove("bg-gray-800", "text-white");
      } else if (!isScrolled) {
        menuBar.classList.add("bg-white", "text-gray-800");
        menuBar.classList.remove("shadow-lg", "bg-gray-800", "text-white");
      } else {
        menuBar.classList.add("shadow-lg", "bg-gray-800", "text-white");
        menuBar.classList.remove("bg-white", "text-gray-800");
      }
    };

    menuBorder();
    window.addEventListener("scroll", menuBorder);
    window.addEventListener("click", menuBorder);

    return () => {
      window.removeEventListener("scroll", menuBorder);
      window.removeEventListener("click", menuBorder);
    };
  }, []);

  /* const activeLinkStyle = "underline underline-offset-4";
  const linkStyles = "hover:text-white block py-2 px-4 hover:bg-gray-700 rounded"; */

  /* const RenderNavLink = (to = "/", label: String, hashCondition = "") => (
    <NavLink
      to={to}
      onClick={closeMobileMenu}
      className={({ isActive }) =>
        `${isActive && location.hash === hashCondition ? activeLinkStyle : ""} ${linkStyles}`
      }>
      {label}
    </NavLink>
  ); */

  return (
    <nav
      className='px-4 z-10 bg-white fixed w-full top-0 left-0 transition ease-in-out duration-300'
      id='navbar'>
      <div className='container h-20 mx-auto flex justify-between items-center'>
        <div className='text-4xl font-bold font-raleway'>
          <Link to='/'>Mike Francis</Link>
        </div>
        <div className='block lg:hidden'>
          <button id='menu-button' className='focus:outline-none' onClick={toggleMobileMenu}>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </button>
        </div>
        <ul id='nav-links' className='lg:flex lg:items-center lg:space-x-8 hidden'>
          <li>
            <RenderNavLink
              to=''
              label='Home'
              hashCondition=''
              closeMobileMenu={closeMobileMenu}
            />
          </li>
          <li>
            <RenderNavLink
              to='/#about-content'
              label='About'
              hashCondition='#about-content'
              closeMobileMenu={closeMobileMenu}
            />
          </li>
          <li>
            <RenderNavLink
              to='#'
              label='Services'
              hashCondition='#services'
              closeMobileMenu={closeMobileMenu}
            />
          </li>
          <li>
            <RenderNavLink
              to='#'
              label='Contact'
              hashCondition='#contact'
              closeMobileMenu={closeMobileMenu}
            />
          </li>
        </ul>
      </div>
      <ul id='nav-links-mob' className={`px-4 pb-4 ${!showMobileMenu && "hidden"}`}>
        <li>
          <RenderNavLink
            to=''
            label='Home'
            hashCondition=''
            closeMobileMenu={closeMobileMenu}
          />
        </li>
        <li>
          <RenderNavLink
            to='/#about-content'
            label='About'
            hashCondition='#about-content'
            closeMobileMenu={closeMobileMenu}
          />
        </li>
        <li>
          <RenderNavLink
            to='#'
            label='Services'
            hashCondition='#services'
            closeMobileMenu={closeMobileMenu}
          />
        </li>
        <li>
          <RenderNavLink
            to='#'
            label='Contact'
            hashCondition='#contact'
            closeMobileMenu={closeMobileMenu}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
