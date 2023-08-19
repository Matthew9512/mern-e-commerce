import { Image } from './Image';
import { LinkButton } from './LinkButton';
import { SaleDiscount } from './SaleDiscount';

export const ProductsCart = ({ product }) => {
   return (
      <div className='group flex max-w-[16em] flex-col'>
         <div className='relative flex h-80 items-center justify-center overflow-hidden'>
            {product?.sale && <SaleDiscount product={product} />}
            <Image variant='primary' product={product} />
         </div>
         <div className='flex flex-col justify-center gap-4 text-lg'>
            <p className='font-semibold uppercase'>{product?.name}</p>
            <div className='flex justify-between'>
               <p className={`${product?.sale ? 'line-through opacity-60' : ''}`}>$ {product?.price}</p>
               {product?.sale && <p>$ {(+product?.price * product?.discount) / 100}</p>}
            </div>
            <p className='text-base line-clamp-3'>{product?.description}</p>
            <LinkButton variant='primary' to={`/product/${product?._id}`}>
               See more
            </LinkButton>
         </div>
      </div>
   );
};
