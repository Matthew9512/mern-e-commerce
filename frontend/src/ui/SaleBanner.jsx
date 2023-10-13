import { useSale } from '../api/useProducts';

function SaleBanner() {
   const saleQuery = useSale();

   return (
      <>
         {saleQuery?.data?.sale && (
            <div className='bg-secondaryWhite'>
               <p className='py-2 text-center'>Sale, now up to -{saleQuery?.data?.discount}%</p>
            </div>
         )}
      </>
   );
}

export default SaleBanner;
