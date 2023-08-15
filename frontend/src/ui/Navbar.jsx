import { useContext, useEffect, useRef, useState } from 'react';
import { NavbarItem } from './NavbarItem';
import { shoppingCartOutlineIcon, userIcon } from '../utils/icons';
import { ShoppingCartContext } from '../context/shoppingCartContex';
import { ShoppingCart } from './ShoppingCart';

/**
 * @todo update icon when user logs in
 */

export const Navbar = () => {
   const { storedValues } = useContext(ShoppingCartContext);
   const navBtn = useRef();
   const navRef = useRef();
   const [navbarVis, setNavbarVis] = useState(true);
   const [shoppingCartVis, setShoppingCartVis] = useState(true);
   const [isLogged, setIsLogged] = useState(() => {
      const token = localStorage.getItem('access__token') || null;
      if (token === null) return false;
      return true;
   });

   // toggle navbar visibility
   const toggleNavbar = (e) => {
      const click = e.target;
      if (navBtn.current.contains(click)) setNavbarVis((prev) => !prev);
      if (click.classList.contains('navbar__btn')) setNavbarVis(false);
   };

   // toggle nav menu vis when user clicks outside of nav menu when menu is vis
   useEffect(() => {
      if (!navbarVis) return;
      const handleOusideClick = (e) => {
         if (!navRef.current.contains(e.target)) setNavbarVis(false);
      };

      document.addEventListener('click', handleOusideClick);

      return () => document.removeEventListener('click', handleOusideClick);
   }, [navbarVis]);

   return (
      <>
         <nav
            ref={navRef}
            onClick={toggleNavbar}
            className='relative top-0 mx-auto flex h-[50px] w-full items-center justify-between p-8'
         >
            <ShoppingCart shoppingCartVis={shoppingCartVis} setShoppingCartVis={setShoppingCartVis} />
            <NavbarItem redirect='/'>logoIcon</NavbarItem>
            <input type='checkbox' id='navbar-check' className='hidden' />
            <div>
               <label ref={navBtn} htmlFor='navbar-check' className='md:flex md:flex-col md:hover:cursor-pointer'>
                  <span className='block h-[8px] w-[25px] border-t-4 hover:cursor-pointer sm:hidden'></span>
                  <span className='block h-[8px] w-[25px] border-t-4 hover:cursor-pointer sm:hidden'></span>
                  <span className='block h-[8px] w-[25px] border-t-4 hover:cursor-pointer sm:hidden'></span>
               </label>
            </div>
            <ul className={`navbar__items-wrapper ${navbarVis ? 'show' : 'hide'}`}>
               <NavbarItem redirect='offer'>Offer</NavbarItem>
               <NavbarItem redirect='about'>About</NavbarItem>
               <NavbarItem redirect={`${isLogged ? '/user' : '/login'}`}>{isLogged ? userIcon : 'Login'}</NavbarItem>
               <NavbarItem textSize='xl' onHandleFn={() => setShoppingCartVis(!shoppingCartVis)}>
                  <span className='absolute -right-4 -top-3 h-6 w-6 rounded-full bg-primaryBlue text-center text-base text-primaryWhite'>
                     {storedValues.length}
                  </span>
                  {shoppingCartOutlineIcon}
               </NavbarItem>
            </ul>
         </nav>
      </>
   );
};
