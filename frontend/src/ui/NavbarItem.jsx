import { NavLink } from "react-router-dom";

export const NavbarItem = ({ children, redirect, textSize }) => {
  //    const pathname = useLocation().pathname;
  {
    /* <NavLink to={pathname === '/' ? `#${redirect}` : redirect}> */
  }
  const mainStyle = `cursor-pointer relative border-none bg-transparent mx-4 transition-colors duration-400 z-10 sm:my-3`;

  return (
    <NavLink
      className={`${mainStyle} text-${textSize} navbar__btn `}
      to={redirect}
    >
      <li>{children}</li>
    </NavLink>
  );
};
