import { useParams } from 'react-router-dom';
import { Section } from '../../ui/Section';
import { Image } from '../../ui/Image';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { useProducts } from '../../api/useProducts';
import { ProductAside } from './components/ProductAside';

/**
 * @todo context?!?!
 */

export const Product = () => {
   const { id } = useParams();
   const productsQuery = useProducts(`/products/${id}`);

   return (
      <Section style='py-24 flex flex-col items-center justify-center flex-wrap'>
         {productsQuery.isLoading && <LoadingSpinner />}
         {productsQuery.error && <p>{productsQuery.error.message}</p>}
         <article className='flex flex-col lg:flex-row justify-center items-center gap-8'>
            <div className='flex flex-col justify-center items-center lg:w-[400px] w-4/5'>
               {/* <div className='flex flex-col justify-center items-center lg:w-1/2 w-4/5'> */}
               <div className='h-96 w-80 overflow-hidden flex items-center justify-center'>
                  <Image variant='primary' product={productsQuery.data} />
               </div>
               <p className='text-center'>{productsQuery.data?.description}</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-8 lg:w-[400px] w-4/5'>
               {/* <div className='flex flex-col justify-center items-center gap-8 lg:w-1/2 w-4/5'> */}
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
               <ProductAside productsQuery={productsQuery} id={id} />
            </div>
         </article>
      </Section>
   );
};
// const currentSize = (e) => {
//    const click = e.target;
//    const childrenEle = [...e.target.parentElement.children];

//    // store choosen product size
//    const size = e.target.textContent;
//    productSize.current = size;

//    // add effect to clicked size btn
//    childrenEle.forEach((product) => product.classList.remove('activeSize'));
//    click.classList.add('activeSize');
// };

// const handleShoppingCartItems = (product) => {
//    // add to ls and shop
//    if (!lsItems) {
//       if (!productSize.current) return toast.error(`Please choose correct size`);
//       setStoredValues((prev) => [
//          ...prev,
//          { ...product, amount: +inputRef.current.value, size: productSize.current },
//       ]);
//       toast.success(`Product added to shopping cart`);
//    } else {
//       // remove from ls and shop
//       const filteredLs = storedValues.filter((lsItem) => lsItem !== lsItems);
//       setStoredValues(filteredLs);
//       toast.success(`Product removed from shopping cart`);
//    }
// };
