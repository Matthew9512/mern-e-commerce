import { useQuery } from '@tanstack/react-query';
import { fetchData } from './fetchData';

export const useProducts = (endpoint, page, reqType = false) => {
   let _reqURL = reqType.current ? `products/page/${page}` : endpoint;

   const productsQuery = useQuery({
      queryKey: ['products', `${_reqURL}`],
      queryFn: () =>
         fetchData({
            url: _reqURL,
         }),
   });

   return productsQuery;
};
// import { useQuery } from '@tanstack/react-query';
// import { fetchData } from './fetchData';

// export const useProducts = (endpoint) => {
//    // export const useProducts = (endpoint, page) => {
//    // let _reqURL;
//    // if (page > 1) _reqURL = `products/page/${page}`;
//    // else _reqURL = endpoint;
//    // console.log(_reqURL);
//    const productsQuery = useQuery({
//       queryKey: ['products', `${endpoint}`],
//       queryFn: () =>
//          fetchData({
//             url: endpoint,
//          }),
//    });

//    return productsQuery;
// };
