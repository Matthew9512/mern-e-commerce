import { filterBy } from '../../../api/filterBy';
import { ErrorMessage } from '../../../ui/ErrorMessage';
import { LoadingSpinner } from '../../../ui/LoadingSpinner';
import { ProductsCart } from '../../../ui/ProductsCart';

export const ProductsList = ({ productsQuery, sortByParams }) => {
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
      </>
   );
};
