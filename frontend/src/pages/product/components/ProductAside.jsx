import { useContext, useRef } from 'react';
import { Button } from '../../../ui/Button';
import { Input } from '../../../ui/Input';
import { ShoppingCartContext } from '../../../context/shoppingCartContex';
import { currentSize, handleShoppingCartItems } from '../../../utils/helperFn';

export const ProductAside = ({ productsQuery, id }) => {
   const { storedValues, setStoredValues } = useContext(ShoppingCartContext);
   const inputRef = useRef();
   let productSize = useRef();

   // display proper text based on ls
   const lsItems = storedValues.find((lsItems) => lsItems._id === id);

   return (
      <>
         <div className='flex items-center justify-center w-4/5 flex-wrap gap-1'>
            {productsQuery.data?.sizesArr.map((size) => (
               <Button
                  key={size?._id}
                  onHandleFn={(e) => currentSize(e, productSize)}
                  variant='navLink'
                  customClass={!size?.available ? 'line-through pointer-events-none' : ''}
               >
                  {size?.size}
               </Button>
            ))}
         </div>
         <Input variant='primary' inputRef={inputRef} defValue={1} type='number' placeholder='e.g. 2' label='Amount' />
         <Button
            onHandleFn={() =>
               handleShoppingCartItems(
                  productsQuery.data,
                  lsItems,
                  productSize,
                  storedValues,
                  setStoredValues,
                  inputRef
               )
            }
            variant='primary'
         >
            {lsItems ? 'Remove from cart' : 'Add to cart'}
         </Button>
      </>
   );
};
