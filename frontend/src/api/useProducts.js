import { useMutation, useQuery } from '@tanstack/react-query';
import jwtDecode from 'jwt-decode';
import { fetchData } from './fetchData';
import { toast } from 'react-hot-toast';

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

export const useMutationOrder = () => {
   const productsOrderMutation = useMutation({
      mutationFn: (storedValues) => {
         const token = JSON.parse(localStorage.getItem('access__token'));
         const { id } = jwtDecode(token);

         const body = storedValues.map((product) => {
            return {
               productID: product?._id,
               name: product?.name,
               amount: product?.amount,
               price: product?.price,
               size: product?.size,
               image: product?.image,
            };
         });

         return fetchData(
            {
               url: `/users/buy`,
               method: 'POST',
               data: {
                  userID: id,
                  order: body,
               },
            },
            true
         );
      },
      // onSuccess: (data) => {
      //    toast.success(data?.message);
      //    setStoredValues([]);
      // },
      // onError: (err) => {
      //    toast.error(err?.message);
      // },
   });

   return productsOrderMutation;
};
// export const useMutationOrder = () => {
//    const productsOrderMutation = useMutation({
//       mutationFn: (storedValues) => {
//          const token = JSON.parse(localStorage.getItem('access__token'));
//          const { id } = jwtDecode(token);

//          return fetchData({
//             url: `/users/buy`,
//             method: 'POST',
//             data: {
//                userID: id,
//                order: storedValues.map((product) => {
//                   return {
//                      productID: product?._id,
//                      name: product?.name,
//                      amount: product?.amount,
//                      price: product?.price,
//                      size: product?.size,
//                      image: product?.image,
//                   };
//                }),
//             },
//          });
//       },
//    });

//    return productsOrderMutation;
// };
