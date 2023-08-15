import { NavLink } from 'react-router-dom';

export const NavbarItem = ({ children, redirect, textSize = 'base', onHandleFn }) => {
   //    const pathname = useLocation().pathname;
   {
      /* <NavLink to={pathname === '/' ? `#${redirect}` : redirect}> */
   }
   const mainStyle = `cursor-pointer relative border-none bg-transparent mx-4 transition-colors duration-400 z-10 sm:my-3`;

   return (
      <NavLink onClick={onHandleFn} to={redirect} className={`${mainStyle} text-${textSize} navbar__btn `}>
         <li className='list-none'>{children}</li>
      </NavLink>
   );
};
