import { NavLink, useLocation } from "@remix-run/react";
import { MouseEventHandler } from "react";

const RenderNavLink = ({
  to = "/",
  label = "",
  hashCondition = "",
  closeMobileMenu,
}: {
  to: string;
  label: string;
  hashCondition: string;
  closeMobileMenu: MouseEventHandler;
}) => {
  const location = useLocation();
  const activeLinkStyle = "underline underline-offset-4";
  const linkStyles = "hover:text-white block py-2 px-4 hover:bg-gray-700 rounded";

  return (
    <NavLink
      to={to}
      onClick={closeMobileMenu}
      className={({ isActive }) =>
        `${isActive && location.hash === hashCondition ? activeLinkStyle : ""} ${linkStyles}`
      }>
      {label}
    </NavLink>
  );
};

export default RenderNavLink;
