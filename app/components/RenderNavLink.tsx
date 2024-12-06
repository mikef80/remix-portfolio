import React, { useEffect, useState } from "react";
import { Link, useLocation } from "@remix-run/react";
import { MouseEventHandler } from "react";

interface RenderNavLinkProps {
  to: string;
  label: string;
  hashCondition: string;
  closeMobileMenu: MouseEventHandler<HTMLAnchorElement>;
}

const RenderNavLink: React.FC<RenderNavLinkProps> = ({
  to = "/",
  label = "",
  hashCondition = "",
  closeMobileMenu,
}) => {
  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Ensure active state is based on both pathname and hash
    setIsActive(location.hash === hashCondition);
  }, [location, hashCondition]);

  const activeLinkStyle = "underline underline-offset-4";
  const linkStyles = "hover:text-white block py-2 px-4 hover:bg-gray-700 rounded";

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    console.log('1');
    
    // Handle special case for Home link
    if (to === "/" && location.hash) {
      console.log('2');
      e.preventDefault(); // Prevent default navigation
      window.history.pushState({}, "", "/"); // Remove hash from URL
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
    }
    closeMobileMenu(e); // Close mobile menu
  };


  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`${linkStyles} ${isActive ? activeLinkStyle : ""}`}>
      {label}
    </Link>
  );
};

export default RenderNavLink;
