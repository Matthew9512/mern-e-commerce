import { NavLink } from 'react-router-dom';

function NavbarItem({ children, customClass, redirect, navRef, ...props }) {
   const mainStyle = `cursor-pointer relative border-none bg-transparent mx-4 transition-colors duration-400 z-10 sm:my-3`;

   return (
      <NavLink to={redirect} ref={navRef} {...props} className={`${mainStyle} ${customClass}`}>
         <li className='list-none'>{children}</li>
      </NavLink>
   );
}

export default NavbarItem;
