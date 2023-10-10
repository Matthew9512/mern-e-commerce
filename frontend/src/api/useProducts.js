import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { fetchData } from './fetchData';
import { jwtDecodeToken } from '../utils/axiosHelpers';

export const useSale = () => {
   const saleQuery = useQuery({
      queryKey: ['products', `sale`],
      queryFn: () =>
         fetchData({
            url: `/products/sale`,
         }),
      refetchOnWindowFocus: false,
   });

   return saleQuery;
};

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

// send users order
export const useMutationOrder = (storedValues, setStoredValues) => {
   const productsOrderMutation = useMutation({
      mutationFn: () => {
         const decoded = jwtDecodeToken();

         // users order data
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
               url: `/users/payment-session`,
               method: 'POST',
               data: {
                  userID: decoded.id,
                  order: body,
               },
            },
            true
         );
      },
      onSuccess: (data) => {
         toast.success(data?.message);
         setStoredValues([]);
         setTimeout(() => {
            window.location = '/';
         }, 1200);
      },
      onError: (err) => {
         toast.error(err?.message);
      },
   });

   return productsOrderMutation;
};
