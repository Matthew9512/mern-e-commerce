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
         {productsQuery.error && <ErrorMessage>{productsQuery.error?.message}</ErrorMessage>}
         {productsQuery.data && filteredData.map((product) => <ProductsCart key={product._id} product={product} />)}
      </>
   );
};
