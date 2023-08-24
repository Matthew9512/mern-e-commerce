import { useParams } from 'react-router-dom';
import { Section } from '../../ui/Section';
import { Image } from '../../ui/Image';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { ErrorMessage } from '../../ui/ErrorMessage';
import { useProducts } from '../../api/useProducts';
import { ProductAside } from './components/ProductAside';

export const Product = () => {
   const { id } = useParams();
   const productsQuery = useProducts(`/products/${id}`);

   return (
      <Section style='py-24 flex flex-col items-center justify-center flex-wrap'>
         {productsQuery.isLoading && <LoadingSpinner />}
         {productsQuery.error && <ErrorMessage>{productsQuery.error.message}</ErrorMessage>}
         <article className='flex flex-col lg:flex-row justify-center items-center gap-8'>
            <div className='flex flex-col justify-center items-center lg:w-[400px] w-4/5'>
               <div className='lg:h-96 lg:w-80 h-68 w-60 overflow-hidden flex items-center justify-center'>
                  <Image variant='primary' image={productsQuery.data?.image} alt={productsQuery.data?.name} />
               </div>
               <p className='text-center'>{productsQuery.data?.description}</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-8 lg:w-[400px] w-4/5'>
               <p className='font-semibold uppercase'>{productsQuery.data?.name}</p>
               <div className='flex justify-around w-3/4'>
                  <p className={`${productsQuery.data?.sale ? 'line-through opacity-60' : ''}`}>
                     price: $ {productsQuery.data?.price}
                  </p>
                  {productsQuery.data?.sale && (
                     <p>price: $ {(+productsQuery.data?.price * productsQuery.data?.discount) / 100}</p>
                  )}
               </div>
               <ProductAside productsQuery={productsQuery} id={id} />
            </div>
         </article>
      </Section>
   );
};
