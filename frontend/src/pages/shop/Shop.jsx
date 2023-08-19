import jwtDecode from 'jwt-decode';
import { useMutation } from '@tanstack/react-query';
import { useContext } from 'react';
import { ShoppingCartContext } from '../../context/shoppingCartContex';
import { Section } from '../../ui/Section';
import { Image } from '../../ui/Image';
import { Button } from '../../ui/Button';
import { deleteIcon } from '../../utils/icons';
import { fetchData } from '../../api/fetchData';

/**
 * @todo stripe
 */

export const Shop = () => {
   const { storedValues, setStoredValues } = useContext(ShoppingCartContext);

   const handleRemoveShoppingCartItem = (id) => {
      const filteredLs = storedValues.filter((product) => product._id !== id);
      setStoredValues(filteredLs);
   };

   const token = JSON.parse(localStorage.getItem('access__token'));
   const { id } = jwtDecode(token);

   const order = useMutation({
      mutationFn: () =>
         fetchData({
            url: `/users/buy`,
            method: 'POST',
            data: {
               userID: id,
               order: storedValues.map((product) => {
                  return {
                     productID: product?._id,
                     name: product?.name,
                     amount: product?.amount,
                     price: product?.price,
                     size: product?.size,
                     image: product?.image,
                  };
               }),
            },
         }),

      onSuccess: () => setStoredValues([]),
   });

   return (
      <Section style='flex flex-wrap items-center justify-center'>
         <div className='lg:w-1/2 md:w-3/5 w-full'>
            {storedValues.length > 0 ? (
               storedValues.map((product) => (
                  <div key={product._id}>
                     <p className='uppercase font-semibold '>{product.name}</p>
                     <div className='flex gap-10  relative'>
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
                  </div>
               ))
            ) : (
               <p className='uppercase text-center'>No products in store</p>
            )}
         </div>
         <div className='md:w-2/5 w-full bg-primaryBlue'>
            STRIPE
            {/* <Button variant='primary' onHandleFn={move}> */}
            <Button variant='primary' onHandleFn={order.mutate}>
               Order
            </Button>
         </div>
      </Section>
   );
};
