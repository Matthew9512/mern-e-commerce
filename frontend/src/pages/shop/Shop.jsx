import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContex';
import { Section } from '../../ui/Section';
import { Image } from '../../ui/Image';
import { Button } from '../../ui/Button';
import { deleteIcon } from '../../utils/icons';

/**
 * @todo stripe
 */

export const Shop = () => {
   const { storedValues, setStoredValues } = useContext(ShoppingCartContext);

   const handleRemoveShoppingCartItem = (id) => {
      const filteredLs = storedValues.filter((product) => product._id !== id);
      setStoredValues(filteredLs);
   };

   return (
      <Section style='flex flex-wrap items-center justify-center'>
         <div className='lg:w-1/2 md:w-3/5 w-full'>
            {storedValues.map((product) => (
               <>
                  <p className='uppercase font-semibold '>{product.name}</p>
                  <div key={product._id} className='flex gap-10  relative'>
                     <div className='w-28 h-28 flex justify-center items-center'>
                        <Image variant='primary' product={product} />
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                        <p>price:</p>
                        <p>$ {product.price}</p>
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                        <p>amount:</p>
                        <p>{product.amount}</p>
                     </div>
                     <div className='flex flex-col items-center justify-center'>
                        <p>total:</p>
                        <p>$ {product.amount * product.price}</p>
                     </div>
                     <Button
                        onHandleFn={() => handleRemoveShoppingCartItem(product._id)}
                        customClass='absolute top-2 right-2'
                     >
                        {deleteIcon}
                     </Button>
                  </div>
               </>
            ))}
         </div>
         <span className='md:w-2/5 w-full bg-primaryBlue'>STRIPE</span>
      </Section>
   );
};
