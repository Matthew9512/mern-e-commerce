import { useQuery } from '@tanstack/react-query';
import { fetchData } from './fetchData';

export const useProducts = (endpoint) => {
   const productsQuery = useQuery({
      queryKey: ['products', `${endpoint}`],
      queryFn: () =>
         fetchData({
            url: endpoint,
         }),
   });

   return productsQuery;
};
