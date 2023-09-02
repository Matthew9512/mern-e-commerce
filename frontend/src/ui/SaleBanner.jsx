import { useEffect, useState } from 'react';

export const SaleBanner = () => {
   const [sale, setSale] = useState(false);

   useEffect(() => {
      const saleCookie = document.cookie;
      if (!saleCookie) return;

      setSale(saleCookie.split('=').at(1));
   }, []);

   return (
      <>
         {sale && (
            <div className='bg-secondaryWhite'>
               <p className='py-2 text-center'>Sale, now up to -{sale}%</p>
            </div>
         )}
      </>
   );
};
