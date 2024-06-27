/* import { NavLink, Link, useLocation } from "@remix-run/react";
import { useEffect, useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  // add resize event listener
  useEffect(() => {
    const handleResize = (e: Event) => {
      const { target } = e;
      if (target) {
        const width = (target as Window).screen.width;
        if (width > 1024) {
          setShowMobileMenu(false);
        }
      }
    };

    window.addEventListener("resize", (e) => handleResize(e));

    return () => {
      window.removeEventListener("resize", (e) => handleResize(e));
    };
  }, []);

  // add menuBorder event listener
  useEffect(() => {
    const navLinksMob = document.getElementById("nav-links-mob");
    const menuBar = document.getElementById("navbar");

    function menuBorder() {
      if (!navLinksMob || !menuBar) return;

      if (!window.scrollY && !navLinksMob.classList.contains("hidden")) {
        menuBar.classList.add("shadow-lg");
        menuBar.classList.remove("bg-gray-800", "text-white");
        menuBar.classList.add("bg-white", "text-gray-800");
      } else if (!window.scrollY) {
        menuBar.classList.remove("shadow-lg");
        menuBar.classList.remove("bg-gray-800", "text-white");
        menuBar.classList.add("bg-white", "text-gray-800");
      } else {
        menuBar.classList.add("shadow-lg");
        menuBar.classList.add("bg-gray-800", "text-white");
        menuBar.classList.remove("bg-white", "text-gray-800");
      }
    }

    menuBorder();
    window.addEventListener("scroll", () => menuBorder());
    window.addEventListener("click", () => menuBorder());

    return () => {
      window.removeEventListener("scroll", () => menuBorder());
      window.removeEventListener("click", () => menuBorder());
    };
  }, []);

  const activeLinkStyle = "underline underline-offset-4";
  const linkStyles = "hover:text-white block py-2 px-4 hover:bg-gray-700 rounded";

  return (
    <nav
      className='px-4 z-10 bg-white fixed w-full top-[0] left-0 transition ease-in-out duration-300'
      id='navbar'>
      <div className='container h-20 mx-auto flex justify-between items-center'>
        <div className='text-4xl font-bold font-raleway'>
          <Link to='/'>Mike Francis</Link>
        </div>
        <div className='block lg:hidden'>
          <button id='menu-button' className='focus:outline-none'>
            <svg
              onClick={() => toggleMobileMenu()}
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
            <NavLink
              to='/'
              className={({ isActive }) =>
                `${isActive && location.hash === "" ? activeLinkStyle : ""} 
                ${linkStyles}`
              }>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/#about-content'
              className={({ isActive }) =>
                `${isActive && location.hash === "#about-content" ? activeLinkStyle : ""} 
                ${linkStyles}`
              }>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to='#'
              className={({ isActive }) =>
                `${isActive && location.hash === "#services" ? activeLinkStyle : ""} 
                ${linkStyles}`
              }>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to='#'
              className={({ isActive }) =>
                `${isActive && location.hash === "#contact" ? activeLinkStyle : ""} 
                ${linkStyles}`
              }>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      <ul
        id='nav-links-mob'
        className={`px-4 pb-4 ${showMobileMenu === false ? "hidden" : ""}`}>
        <li>
          <NavLink
            onClick={() => toggleMobileMenu()}
            to='/'
            className={({ isActive }) =>
              `${isActive && location.hash === "" ? activeLinkStyle : ""} 
                ${linkStyles}`
            }>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => toggleMobileMenu()}
            to='/#about-content'
            className={({ isActive }) =>
              `${isActive && location.hash === "#about-content" ? activeLinkStyle : ""} 
                ${linkStyles}`
            }>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => toggleMobileMenu()}
            to='#'
            className={({ isActive }) =>
              `${isActive && location.hash === "#services" ? activeLinkStyle : ""} 
                ${linkStyles}`
            }>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => toggleMobileMenu()}
            to='#'
            className={({ isActive }) =>
              `${isActive && location.hash === "#contact" ? activeLinkStyle : ""} 
                ${linkStyles}`
            }>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
 */

import { NavLink, Link, useLocation, Path } from "@remix-run/react";
import { useEffect, useState } from "react";

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

  const activeLinkStyle = "underline underline-offset-4";
  const linkStyles = "hover:text-white block py-2 px-4 hover:bg-gray-700 rounded";

  const renderNavLink = (to = "/", label: String, hashCondition = "") => (
    <NavLink
      to={to}
      onClick={closeMobileMenu}
      className={({ isActive }) =>
        `${isActive && location.hash === hashCondition ? activeLinkStyle : ""} ${linkStyles}`
      }>
      {label}
    </NavLink>
  );

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
          <li>{renderNavLink("/", "Home")}</li>
          <li>{renderNavLink("/#about-content", "About", "#about-content")}</li>
          <li>{renderNavLink("#", "Services", "#services")}</li>
          <li>{renderNavLink("#", "Contact", "#contact")}</li>
        </ul>
      </div>
      <ul id='nav-links-mob' className={`px-4 pb-4 ${!showMobileMenu && "hidden"}`}>
        <li>{renderNavLink("/", "Home")}</li>
        <li>{renderNavLink("/#about-content", "About", "#about-content")}</li>
        <li>{renderNavLink("#", "Services", "#services")}</li>
        <li>{renderNavLink("#", "Contact", "#contact")}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
