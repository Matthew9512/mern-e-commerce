import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { ShoppingCartContext } from '../../context/shoppingCartContex';
import Section from '../../ui/Section';
import Image from '../../ui/Image';
import Button from '../../ui/Button';
import LoadingButton from '../../ui/LoadingButton';
import { deleteIcon } from '../../utils/icons';
import { useMutationOrder } from '../../api/useProducts';
import { jwtDecodeToken } from '../../utils/axiosHelpers';
import Stripe from './components/Stripe';

/**
 * @todo stripe
 */

function Shop() {
   const { storedValues, setStoredValues } = useContext(ShoppingCartContext);
   const productsOrderMutation = useMutationOrder(storedValues, setStoredValues);

   const handleRemoveShoppingCartItem = (id) => {
      const filteredLs = storedValues.filter((product) => product._id !== id);
      setStoredValues(filteredLs);
   };

   const completeOrder = async () => {
      const decoded = jwtDecodeToken();
      if (!decoded) return toast.error(`Please log in to complete order`);

      productsOrderMutation.mutate();
   };

   return (
      <Section customClass='flex flex-wrap justify-center'>
         <article className='lg:w-1/2 md:w-3/5 w-full flex flex-col gap-4'>
            <p className='text-xl uppercase font-bold'>Your products:</p>
            {storedValues.length > 0 ? (
               storedValues.map((product) => (
                  <div key={product._id}>
                     <p className='uppercase font-semibold'>{product.name}</p>
                     <div className='flex lg:gap-10 gap-2 relative'>
                        <div className='w-40 h-40 flex justify-center items-center'>
                           <Image variant='primary' src={product.image} alt={product.name} />
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
                     </div>
                     <Button
                        onClick={() => handleRemoveShoppingCartItem(product._id)}
                        customClass='absolute top-2 right-2'
                     >
                        {deleteIcon}
                     </Button>
                  </div>
               ))
            ) : (
               <p className='uppercase text-center text-lg font-semibold'>No products in store</p>
            )}
            {productsOrderMutation.isLoading ? (
               <LoadingButton />
            ) : (
               <Button variant='primary' disabled={!storedValues.length} onClick={completeOrder}>
                  Order
               </Button>
            )}
         </article>
         <Stripe />
      </Section>
   );
}

export default Shop;
