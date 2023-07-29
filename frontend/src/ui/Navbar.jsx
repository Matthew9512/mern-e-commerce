import { useEffect, useRef, useState } from "react";
import { NavbarItem } from "./NavbarItem";
import { shoppingCartIcon } from "../utils/icons";

export const Navbar = () => {
  const navBtn = useRef();
  const navRef = useRef();
  const [navbarVis, setNavbarVis] = useState(true);

  // toggle navbar visibility
  const toggleNavbar = (e) => {
    const click = e.target;
    if (navBtn.current.contains(click)) setNavbarVis((prev) => !prev);
    if (click.classList.contains("navbar__btn")) setNavbarVis(false);
  };

  // toggle nav menu vis when user clicks outside of nav menu when menu is vis
  useEffect(() => {
    if (!navbarVis) return;
    const handleOusideClick = (e) => {
      if (!navRef.current.contains(e.target)) setNavbarVis(false);
    };

    document.addEventListener("click", handleOusideClick);

    return () => document.removeEventListener("click", handleOusideClick);
  }, [navbarVis]);

  return (
    <nav
      ref={navRef}
      onClick={toggleNavbar}
      className="relative top-0 z-50 mx-auto flex h-[50px] w-full items-center justify-between bg-purple-500 p-8 text-purple-100"
    >
      <p className="text-lg">logoIcon</p>
      <input type="checkbox" id="navbar-check" className="hidden" />
      <div>
        <label
          ref={navBtn}
          htmlFor="navbar-check"
          className="md:flex md:flex-col md:hover:cursor-pointer"
        >
          <span className="block h-[8px] w-[25px] border-t-4 hover:cursor-pointer sm:hidden"></span>
          <span className="block h-[8px] w-[25px] border-t-4 hover:cursor-pointer sm:hidden"></span>
          <span className="block h-[8px] w-[25px] border-t-4 hover:cursor-pointer sm:hidden"></span>
        </label>
      </div>
      <ul className={`navbar__items-wrapper ${navbarVis ? "show" : "hide"}`}>
        <NavbarItem redirect="offer">Offer</NavbarItem>
        <NavbarItem redirect="about">About</NavbarItem>
        <NavbarItem redirect="contact">Contact</NavbarItem>
        <NavbarItem textSize="xl">
          <span className="absolute -right-4 -top-3 h-6 w-6 rounded-full bg-red-400 text-center text-base">
            1
          </span>
          {shoppingCartIcon}
        </NavbarItem>
      </ul>
    </nav>
  );
};
