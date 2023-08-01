import { Image } from './Image';
import { Button } from './Button';
import { shoppingCartFillIcon, shoppingCartOutlineIcon } from '../utils/icons';

export const ProductsCart = ({ product, handleShoppingCartItems, storedValues }) => {
   // display proper icon based on ls
   const lsItems = storedValues.find((lsItems) => lsItems._id === product._id);

   return (
      <div className='group flex max-w-[16em] flex-col'>
         <div className='relative flex h-80 items-center justify-center overflow-hidden'>
            <Button
               onHandleFn={() => handleShoppingCartItems(product)}
               customClass='absolute z-20 right-1 top-0 flex items-center justify-center rounded-full w-8 h-8 bg-primaryWhite'
            >
               {lsItems ? shoppingCartFillIcon : shoppingCartOutlineIcon}
            </Button>
            <Image variant='primary' product={product} />
         </div>
         <div className='flex flex-col justify-center gap-4 text-lg'>
            <p className='font-semibold uppercase'>{product?.name}</p>
            <p className='opacity-60'>$ {product?.price}</p>
            <p className='text-base'>{product?.description}</p>
         </div>
      </div>
   );
};
