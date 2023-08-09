import { useParams } from 'react-router-dom';
import { useContext, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { Section } from '../../ui/Section';
import { Input } from '../../ui/Input';
import { Image } from '../../ui/Image';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { Button } from '../../ui/Button';
import { useProducts } from '../../api/useProducts';
import { ShoppingCartContext } from '../../context/shoppingCartContex';
import { sizesArr } from '../../utils/constants';

/**
 * @todo context?!?!
 * @todo sizes
 */

export const Product = () => {
   const { storedValues, setStoredValues } = useContext(ShoppingCartContext);
   const { id } = useParams();
   const inputRef = useRef();
   const productsQuery = useProducts(`/products/${id}`);

   // display proper text based on ls
   const lsItems = storedValues.find((lsItems) => lsItems._id === id);

   // =============
   let productSize;
   const handleShoppingCartItems = (product) => {
      const lsItems = storedValues.find((lsItem) => lsItem?._id === product?._id);

      // add to ls and shop
      if (!lsItems) {
         setStoredValues((prev) => [...prev, { ...product, amount: +inputRef.current.value, size: productSize }]);
         toast.success(`Product added to shopping cart`);
      } else {
         // remove from ls and shop
         const filteredLs = storedValues.filter((lsItem) => lsItem !== lsItems);
         setStoredValues(filteredLs);
         toast.success(`Product removed from shopping cart`);
      }
   };

   // store choosen product size
   const storeSize = (e) => {
      const size = e.target.textContent;
      console.log(size);

      productSize = size;
   };

   console.log(productsQuery.data);

   console.log(productSize);
   // =============

   return (
      <Section variant='flexCol'>
         {productsQuery.isLoading && <LoadingSpinner />}
         {productsQuery.error && <p>{productsQuery.error.message}</p>}
         <article className='flex flex-col lg:flex-row justify-center items-center gap-8'>
            <div className='flex flex-col justify-center items-center gap-8 lg:w-1/2 w-4/5'>
               <div className='h-96 w-80'>
                  <Image variant='primary' product={productsQuery.data} />
               </div>
               <p className='text-center'>{productsQuery.data?.description}</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-8 lg:w-1/2 w-4/5'>
               <p className='font-semibold uppercase'>{productsQuery.data?.name}</p>
               <div className='flex justify-between'>
                  <p className={`${productsQuery.data?.sale ? 'line-through' : ''} opacity-60`}>
                     price: $ {productsQuery.data?.price}
                  </p>
                  <p className='opacity-60'>
                     {productsQuery.data?.sale &&
                        `price: $ ${(+productsQuery.data?.price * productsQuery.data?.discount) / 100}`}
                  </p>
               </div>
               <div onClick={storeSize} className='flex items-center justify-center w-4/5 flex-wrap gap-1'>
                  {sizesArr.map((size) => (
                     <Button key={size} variant='navLink'>
                        {size}
                        {/* {productsQuery.data?.size} */}
                     </Button>
                  ))}
               </div>
               <Input
                  variant='primary'
                  inputRef={inputRef}
                  defValue={1}
                  type='number'
                  placeholder='e.g. 2'
                  label='Amount'
               />
               <Button onHandleFn={() => handleShoppingCartItems(productsQuery.data)} variant='primary'>
                  {lsItems ? 'Remove from cart' : 'Add to cart'}
               </Button>
            </div>
         </article>
      </Section>
   );
};
