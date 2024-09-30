import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "@remix-run/react";
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

  return (
    <NavLink
      to={to}
      onClick={closeMobileMenu}
      className={`${linkStyles} ${isActive ? activeLinkStyle : ""}`}>
      {label}
    </NavLink>
  );
};

export default RenderNavLink;
