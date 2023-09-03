import { useSale } from '../api/useProducts';

export const SaleBanner = () => {
   const saleQuery = useSale();

   return (
      <>
         {saleQuery?.data?.sale && (
            <div className='bg-secondaryWhite'>
               <p className='py-2 text-center'>Sale, now up to -{saleQuery?.data?.sale}%</p>
            </div>
         )}
      </>
   );
};
