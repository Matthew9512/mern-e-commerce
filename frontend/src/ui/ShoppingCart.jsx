import { useContext } from 'react';
import { ShoppingCartContext } from '../context/shoppingCartContex';
import { Button } from './Button';
import { ShoppingCartItem } from './ShoppingCartItem';
import { closeIcon } from '../utils/icons';

export const ShoppingCart = ({ shoppingCartVis, setShoppingCartVis }) => {
   const { storedValues, setStoredValues } = useContext(ShoppingCartContext);

   const totalPrice = storedValues.reduce((acc, product) => acc + product?.price * product?.amount, 0);

   return (
      <aside
         className={`w-96 h-screen overflow-hidden fixed right-0 bottom-0 z-50 bg-primaryGrey p-8 duration-500 ${
            shoppingCartVis ? 'translate-x-[100%]' : 'translate-x-0'
         } `}
      >
         <p className='text-center font-semibold tracking-wider text-lg uppercase'>My cart</p>
         <Button
            variant='rounded'
            customClass='absolute top-2 right-2'
            onHandleFn={() => setShoppingCartVis(!shoppingCartVis)}
         >
            {closeIcon}
         </Button>
         <article className='flex overflow-y-auto h-4/5 flex-col divide-y divide-primaryBlack/20 gap-4 py-16 '>
            {storedValues.map((product) => (
               <ShoppingCartItem
                  key={product?._id}
                  product={product}
                  storedValues={storedValues}
                  setStoredValues={setStoredValues}
               />
            ))}
         </article>
         <p className='py-4 text-center font-semibold'>total: $ {totalPrice}</p>
         <Button variant='primary'>Buy products</Button>
      </aside>
   );
};
