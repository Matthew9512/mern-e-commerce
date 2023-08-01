import { useContext } from 'react';
import { filterBy } from '../../../api/filterBy';
import { ErrorMessage } from '../../../ui/ErrorMessage';
import { LoadingSpinner } from '../../../ui/LoadingSpinner';
import { ProductsCart } from '../../../ui/ProductsCart';
import { ShoppingCartContext } from '../../../context/shoppingCartContex';

export const ProductsList = ({ productsQuery, sortByParams }) => {
   const { storedValues, setStoredValues } = useContext(ShoppingCartContext);

   const handleShoppingCartItems = (product) => {
      const lsItems = storedValues.find((lsItem) => lsItem?._id === product?._id);
      if (!lsItems) return setStoredValues((prev) => [...prev, product]);

      const filteredLs = storedValues.filter((lsItem) => lsItem !== lsItems);
      setStoredValues(filteredLs);
   };

   if (productsQuery.isLoading) return <LoadingSpinner />;

   // filtered data
   const filteredData = filterBy(sortByParams, productsQuery);

   return (
      <>
         {productsQuery.isLoading && <LoadingSpinner />}
         {productsQuery.error && <ErrorMessage>no products yet</ErrorMessage>}
         {productsQuery.data ? ( // length?!?!
            filteredData.map((product) => (
               <ProductsCart
                  key={product._id}
                  product={product}
                  handleShoppingCartItems={handleShoppingCartItems}
                  storedValues={storedValues}
               />
            ))
         ) : (
            <p>No data yet</p>
         )}
      </>
   );
};
