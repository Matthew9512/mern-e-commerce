import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarItem } from './NavbarItem';
import { logoIcon, shoppingCartOutlineIcon, userIcon } from '../utils/icons';
import { ShoppingCartContext } from '../context/shoppingCartContex';
import { ShoppingCart } from './ShoppingCart';
import { Button } from './Button';

export const Navbar = () => {
   const { storedValues } = useContext(ShoppingCartContext);
   const [shoppingCartVis, setShoppingCartVis] = useState(true);
   const navigate = useNavigate();

   const onRedirect = () => {
      const token = localStorage.getItem('access__token') || null;

      if (!token) return navigate('/login');
      navigate('/user');
   };

   return (
      <nav className='relative mx-auto flex h-[50px] w-full items-center justify-between p-8'>
         <ShoppingCart shoppingCartVis={shoppingCartVis} setShoppingCartVis={setShoppingCartVis} />
         <NavbarItem redirect='/'>{logoIcon}</NavbarItem>
         <div className='flex'>
            <Button onHandleFn={onRedirect}>{userIcon}</Button>
            <NavbarItem customClass='text-lg' onHandleFn={() => setShoppingCartVis(!shoppingCartVis)}>
               <span className='absolute -right-4 -top-3 h-6 w-6 rounded-full bg-primaryBlue text-center text-base text-primaryWhite'>
                  {storedValues.length}
               </span>
               {shoppingCartOutlineIcon}
            </NavbarItem>
         </div>
      </nav>
   );
};
