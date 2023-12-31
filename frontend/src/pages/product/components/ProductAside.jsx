import { useContext, useRef } from 'react';
import Button from '../../../ui/Button';
import Input from '../../../ui/Input';
import { ShoppingCartContext } from '../../../context/shoppingCartContex';
import { currentSize, handleShoppingCartItems } from '../../../utils/helperFn';

function ProductAside({ productsQuery, id }) {
   const { storedValues, setStoredValues } = useContext(ShoppingCartContext);
   let inputRef = useRef();
   let productSize = useRef();

   // display proper text based on ls
   const lsItems = storedValues.find((lsItems) => lsItems._id === id);

   const productSizes = productsQuery.data?.sizesArr.every((product) => product.available === 0);

   // typed number bigger than max => reset value to max
   const checkTypedNumber = (e) => {
      if (+e.target.max < +e.target.value) e.target.value = e.target.max;
   };

   return (
      <>
         <div className='flex items-center justify-center w-4/5 flex-wrap gap-1'>
            {productSizes ? (
               <p>Product temporary unavailable</p>
            ) : (
               productsQuery.data?.sizesArr.map((size) => (
                  <Button
                     key={size?._id}
                     onClick={(e) => currentSize(e, productSize, size, inputRef)}
                     variant='navLink'
                     customClass={size?.available <= 0 ? 'line-through pointer-events-none opacity-50' : ''}
                  >
                     {size?.size}
                  </Button>
               ))
            )}
         </div>
         <div className='w-56'>
            <Input
               variant='primary'
               inputRef={inputRef}
               onKeyUp={checkTypedNumber}
               defaultValue={1}
               type='number'
               placeholder='e.g. 2'
               label='Amount'
               min={1}
               max={inputRef.current}
               disabled={productSizes}
            />
         </div>
         <Button
            onClick={() =>
               handleShoppingCartItems(
                  productsQuery.data,
                  lsItems,
                  productSize,
                  storedValues,
                  setStoredValues,
                  inputRef
               )
            }
            disabled={productSizes}
            variant='primary'
         >
            {lsItems ? 'Remove from cart' : 'Add to cart'}
         </Button>
      </>
   );
}

export default ProductAside;
