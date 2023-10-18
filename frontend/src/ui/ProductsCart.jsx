import Image from './Image';
import LinkButton from './LinkButton';
import SaleDiscount from './SaleDiscount';

function ProductsCart({ product }) {
   return (
      <div className='group h-[460px] flex max-w-[16em] flex-col'>
         <div className='relative flex h-60 items-center justify-center overflow-hidden'>
            {product?.sale && <SaleDiscount product={product} />}
            <Image variant='primary' src={product?.image} alt={product?.name} />
         </div>
         <div className='flex flex-col justify-center gap-4 text-lg'>
            <p className='font-semibold uppercase'>{product?.name}</p>
            <div className='flex justify-between'>
               <p className={`${product?.sale ? 'line-through opacity-60' : ''}`}>$ {product?.price}</p>
               {product?.sale && <p>$ {product?.price - (product?.price * product?.discount) / 100}</p>}
            </div>
            <p className='h-[78px] text-base line-clamp-3'>{product?.description}</p>
            <LinkButton variant='primary' to={`/product/${product?._id}`}>
               See more
            </LinkButton>
         </div>
      </div>
   );
}

export default ProductsCart;
