import { Image } from './Image';
import { Button } from './Button';
import { closeIcon } from '../utils/icons';

export const ShoppingCartItem = ({ product, storedValues, setStoredValues }) => {
   const handleFilteredLs = (item) => {
      const lsItems = storedValues.filter((lsItem) => lsItem?._id !== item?._id);
      setStoredValues(lsItems);
   };

   return (
      <div key={product?._id} className='flex gap-4 pt-2 relative'>
         <div className='w-16 h-16'>
            <Image variant='profile' image={product?.image} alt={product?.name} />
         </div>
         <div className='flex flex-col'>
            <p className='font-semibold uppercase'>{product?.name}</p>
            <p>price: $ {product?.price}</p>
            <p className='opacity-80 text-sm'>amount: {product?.amount}</p>
            <p className='opacity-80 text-sm'>size: {product?.size}</p>
         </div>
         <Button variant='rounded' onHandleFn={() => handleFilteredLs(product)} customClass='absolute right-1 top-2'>
            {closeIcon}
         </Button>
      </div>
   );
};
