import { Image } from './Image';
import { Button } from './Button';
import { ButtonLink } from './ButtonLink';
import { shoppingCartFillIcon, shoppingCartOutlineIcon } from '../utils/icons';
import { SaleDiscount } from './SaleDiscount';

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
            {product?.sale && <SaleDiscount product={product} />}
            <Image variant='primary' product={product} />
         </div>
         <div className='flex flex-col justify-center gap-4 text-lg'>
            <p className='font-semibold uppercase'>{product?.name}</p>
            <div className='flex justify-between'>
               <p className={`${product?.sale ? 'line-through' : ''} opacity-60`}>$ {product?.price}</p>
               <p className='opacity-60'>{product?.sale && `$ ${(+product?.price * product?.discount) / 100}`}</p>
            </div>
            <p className='text-base'>{product?.description}</p>
            <ButtonLink to={`/product/${product?._id}`}>See more</ButtonLink>
         </div>
      </div>
   );
};
