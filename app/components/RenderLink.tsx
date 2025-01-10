import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
} from "@remix-run/react";
import { MouseEventHandler } from "react";



interface RenderLinkProps {
  to: string;
  label: string;
  hashCondition: string;
  
  closeMobileMenu: MouseEventHandler<HTMLAnchorElement>;
}

const RenderLink: React.FC<RenderLinkProps> = ({
  to = "/",
  label = "",
  hashCondition = "",
  closeMobileMenu,
}) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const activeLinkStyle = "underline underline-offset-4";
  const linkStyles =
    "hover:text-white block py-2 px-4 hover:bg-gray-700 rounded";

  useEffect(() => {
    if (hashCondition === location.hash ||location.hash === '' && hashCondition === '#') {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location]);

  const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
    closeMobileMenu(e); // Close mobile menu
  };

  return (
    <Link
      to={to}
      onClick={handleClick}
      className={`${linkStyles} ${isActive ? activeLinkStyle : ""}`}
    >
      {label}
    </Link>
  );
};

export default RenderLink;
