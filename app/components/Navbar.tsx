import { Link } from "@remix-run/react";
import { MouseEventHandler, useEffect, useState } from "react";
import RenderNavLink from "./RenderNavLink";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setShowMobileMenu(false);
  };

  // Add window resize event listener
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

  // Add scroll event listeners
  useEffect(() => {
    const navLinksMob = document.getElementById("nav-links-mob");
    const menuBar = document.getElementById("navbar");

    const menuBorder = () => {
      if (!navLinksMob || !menuBar) return;

      const isScrolled = window.scrollY > 0;
      const isMenuVisible = !navLinksMob.classList.contains("hidden");

      if (!isScrolled && isMenuVisible) {
        menuBar.classList.add("shadow-lg", "text-gray-800");
        menuBar.classList.remove("bg-white", "text-white");
      } else if (!isScrolled) {
        menuBar.classList.remove("shadow-lg", "bg-white");
      } else {
        menuBar.classList.add("bg-white", "text-gray-800", "shadow-lg");
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

  // Define navLinks
  const navLinks = [
    { to: "/", label: "Home", hashCondition: "#" },
    { to: "#about", label: "About", hashCondition: "#about" },
    { to: "#tech", label: "Tech", hashCondition: "#tech" },
    { to: "#projects", label: "Projects", hashCondition: "#projects" },
    // { to: "#", label: "Contact", hashCondition: "#contact" },
  ];

  const renderNavLinks = (closeMenuHandler: MouseEventHandler) => {
    return navLinks.map((link) => (
      <li key={link.label}>
        <RenderNavLink
          to={link.to}
          label={link.label}
          hashCondition={link.hashCondition}
          closeMobileMenu={closeMenuHandler}
        />
      </li>
    ));
  };

  return (
    <nav
      className="px-4 z-10 fixed w-full top-0 left-0 transition ease-in-out duration-300 text-gray-800"
      id="navbar"
    >
      <div className="container h-20 mx-auto flex justify-between items-center">
        <div className="text-4xl font-bold font-raleway">
          <Link
            to="/"
            onClick={(e) => {
              if (window.location.hash) {
                e.preventDefault();
                window.history.pushState({}, "", "/");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
          >
            Mike Francis
          </Link>
        </div>
        <div className="block lg:hidden">
          <button
            id="menu-button"
            className="focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
        <ul
          id="nav-links"
          className="lg:flex lg:items-center lg:space-x-8 hidden"
        >
          {renderNavLinks(closeMobileMenu)}
        </ul>
      </div>
      <ul
        id="nav-links-mob"
        className={`px-4 pb-4 ${!showMobileMenu && "hidden"}`}
      >
        {renderNavLinks(closeMobileMenu)}
      </ul>
    </nav>
  );
};

export default Navbar;
