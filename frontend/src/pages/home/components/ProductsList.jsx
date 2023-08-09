import { useRef } from 'react';
import { filterBy } from '../../../api/filterBy';
import { ErrorMessage } from '../../../ui/ErrorMessage';
import { LoadingSpinner } from '../../../ui/LoadingSpinner';
import { ProductsCart } from '../../../ui/ProductsCart';
import { useInfitite } from '../../../hooks/useInfinite';

export const ProductsList = ({ productsQuery, sortByParams }) => {
   const observerTarget = useRef(null);
   useInfitite(observerTarget);

   // filtered data
   const filteredData = filterBy(sortByParams, productsQuery);

   return (
      <>
         {productsQuery.isLoading && <LoadingSpinner />}
         {productsQuery.error && <ErrorMessage>no products yet</ErrorMessage>}
         {productsQuery.data ? ( // length?!?!
            filteredData.map((product) => <ProductsCart key={product._id} product={product} />)
         ) : (
            <p>No data yet</p>
         )}
         <div ref={observerTarget} className=''></div>
      </>
   );
};
