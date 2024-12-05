import React, { useEffect, useMemo, useState } from "react";
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
  const memoizedHashCondition = useMemo(() => hashCondition, [hashCondition]);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Ensure active state is based on both pathname and hash
    console.count(label);
    console.log(location.hash, " <-- location.hash");
    console.log(memoizedHashCondition, " <-- memoizedHashCondition");

    setIsActive(location.hash === memoizedHashCondition);
  }, [location, memoizedHashCondition]);

  const activeLinkStyle = "underline underline-offset-4";
  const linkStyles =
    "hover:text-white block py-2 px-4 hover:bg-gray-700 rounded";

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    // console.log('1');

    closeMobileMenu(e); // Close mobile menu
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      // className={`${linkStyles} ${isActive ? activeLinkStyle : ""}`}
    >
      {label}
    </NavLink>
  );
};

export default RenderNavLink;
