import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarItem } from "./NavbarItem";

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
      logoIcon
      <input type="checkbox" id="navbar-check" className="hidden" />
      <div>
        <label
          ref={navBtn}
          htmlFor="navbar-check"
          className="md:flex md:flex-col md:hover:cursor-pointer"
        >
          <span className="block h-[8px] w-[25px] border-t-4 sm:hidden"></span>
          <span className="block h-[8px] w-[25px] border-t-4 sm:hidden"></span>
          <span className="block h-[8px] w-[25px] border-t-4 sm:hidden"></span>
        </label>
      </div>
      <ul className={`navbar__items-wrapper ${navbarVis ? "show" : "hide"}`}>
        <NavbarItem redirect="offer">Offer</NavbarItem>
        <NavbarItem redirect="about">About</NavbarItem>
        <NavbarItem redirect="contact">Contact</NavbarItem>
        <NavbarItem>
          <span className="absolute -right-3 -top-2 h-6 w-6 rounded-full bg-red-400 text-center">
            1
          </span>
          Shop
        </NavbarItem>
      </ul>
    </nav>
  );
};
{
  /* <li>
<a href={location === '/' ? '#oferta' : '/'}>
   <button className='navbar__btn'>Oferta</button>
</a>
</li>
<li>
<a href={location === '/' ? '#contact' : '/'}>
   <button className='navbar__btn'>Kontakt</button>
</a>
</li>
<li>
<a href={location === '/' ? '#oferta' : '/'}>
   <button className='navbar__btn'>O nas</button>
</a>
</li>
<Link
to={'/koszyk'}
className='indicator hover:cursor-pointer'
onClick={() => window.my_modal_1.showModal()}
>
shopIcon
<span className='indicator-item rounded-full h-6 w-6 badge'>length</span>
</Link> */
}
