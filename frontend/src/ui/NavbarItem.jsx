import { NavLink } from 'react-router-dom';

export const NavbarItem = ({ children, customClass, redirect, onHandleFn, navRef }) => {
   const mainStyle = `cursor-pointer relative border-none bg-transparent mx-4 transition-colors duration-400 z-10 sm:my-3`;

   return (
      <NavLink onClick={onHandleFn} to={redirect} ref={navRef} className={`${mainStyle} ${customClass}`}>
         <li className='list-none'>{children}</li>
      </NavLink>
   );
};
