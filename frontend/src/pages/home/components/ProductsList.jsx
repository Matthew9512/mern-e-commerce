import { useContext, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { filterBy } from '../../../api/filterBy';
import { ErrorMessage } from '../../../ui/ErrorMessage';
import { LoadingSpinner } from '../../../ui/LoadingSpinner';
import { ProductsCart } from '../../../ui/ProductsCart';
import { ShoppingCartContext } from '../../../context/shoppingCartContex';
import { useInfitite } from '../../../hooks/useInfinite';

export const ProductsList = ({ productsQuery, sortByParams }) => {
   const observerTarget = useRef(null);
   const { storedValues, setStoredValues } = useContext(ShoppingCartContext);
   useInfitite(observerTarget);

   const handleShoppingCartItems = (product) => {
      const lsItems = storedValues.find((lsItem) => lsItem?._id === product?._id);

      // add to ls and shop
      if (!lsItems) {
         setStoredValues((prev) => [...prev, product]);
         toast.success(`product added to shopping cart`);
      } else {
         // remove from ls and shop
         const filteredLs = storedValues.filter((lsItem) => lsItem !== lsItems);
         setStoredValues(filteredLs);
         toast.success(`product removed from shopping cart`);
      }
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
         <div ref={observerTarget} className=''></div>
      </>
   );
};
