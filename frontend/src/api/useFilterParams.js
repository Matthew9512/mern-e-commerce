import { useSearchParams } from 'react-router-dom';

export const useFilterParams = (setEndpoint) => {
   const [searchParams, setSearchParams] = useSearchParams();

   // clear all params
   const clearFilters = () => {
      setSearchParams(searchParams.set('', ''));
      setEndpoint(`/products`);
   };

   // handle filter params
   const handleSearchBy = (e) => {
      const click = e.target;

      if (!click.value) return;

      if (click.dataset.category === 'category') {
         searchParams.set('category', click.value);
         setEndpoint(`/products/category/${click.value}`);
         searchParams.delete('sortBy');
      } else searchParams.set('sortBy', click.value);

      setSearchParams(searchParams);
   };

   return { searchParams, setSearchParams, clearFilters, handleSearchBy };
};
