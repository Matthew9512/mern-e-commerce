import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { fetchData } from './fetchData';

export const useAdminSale = () => {
   const sale = useMutation({
      mutationFn: (data) =>
         fetchData(
            {
               url: `admin/manage-sale`,
               method: 'POST',
               data,
            },
            true
         ),

      onSuccess: (data) => toast.success(data.message),
   });

   return sale;
};

export const useAdminUser = (page, queryParams) => {
   const usersList = useQuery({
      queryKey: ['admin', `users`, page, queryParams],
      queryFn: () => {
         let url;

         if (!queryParams) url = `/page/${page}`;
         if (queryParams) url = `/page/${page}/q${queryParams}`;
         return fetchData(
            {
               url: `admin/users${url}`,
            },
            true
         );
      },
   });

   return usersList;
};

export const useAdminUserDetails = (id, page, queryParams) => {
   const usersDetails = useQuery({
      queryKey: ['admin', `users-details`, id, page, queryParams],
      queryFn: () => {
         let url;

         if (!queryParams) url = `/page/${page}/${id}`;
         if (queryParams) url = `/page/${page}/${id}/q${queryParams}`;
         return fetchData(
            {
               url: `admin/users-details${url}`,
            },
            true
         );
      },
   });

   return usersDetails;
};

export const useAdminDeleteUser = (page, setPage) => {
   const queryClient = useQueryClient();
   const deleteUser = useMutation({
      mutationFn: (id) =>
         fetchData(
            {
               url: `/admin/delete-account`,
               method: 'DELETE',
               data: { id },
            },
            true
         ),

      onSuccess: (data) => {
         toast.success(data?.message);
         queryClient.invalidateQueries({ queryKey: ['admin', 'users'] });
         if (page === 1) return;
         else setPage((prev) => prev - 1);
      },
      onError: (err) => {
         toast.error(err?.message);
      },
   });

   return deleteUser;
};
// USERS //

// PRODUCTS //
export const useAdminProducts = (page, queryParams) => {
   const productsList = useQuery({
      queryKey: ['admin', `products`, page, queryParams],
      queryFn: () => {
         let url;

         if (!queryParams) url = `/page/${page}`;
         if (queryParams) url = `/page/${page}/q${queryParams}`;
         return fetchData(
            {
               url: `admin/products${url}`,
            },
            true
         );
      },
   });

   return productsList;
};

export const useAdminNewProduct = () => {
   const queryClient = useQueryClient();
   const navigate = useNavigate();
   const createNewProduct = useMutation({
      mutationFn: (formData) =>
         fetchData(
            {
               url: `admin/products/create`,
               method: 'POST',
               data: { formData },
            },
            true
         ),

      onSuccess: (data) => {
         queryClient.invalidateQueries({ queryKey: ['admin', 'products'] });
         toast.success(data?.message);
         navigate(-1);
      },
      onError: (err) => toast.error(err?.message),
   });

   return createNewProduct;
};

export const useAdminDeleteProducts = (page, setPage) => {
   const queryClient = useQueryClient();
   const deleteProducts = useMutation({
      mutationFn: (id) =>
         fetchData(
            {
               url: `/admin/delete-product`,
               method: 'DELETE',
               data: { id },
            },
            true
         ),

      onSuccess: (data) => {
         toast.success(data?.message);
         queryClient.invalidateQueries({ queryKey: ['admin', 'products'] });
         if (page === 1) return;
         // else setPage((prev) => prev - 1);
      },
      onError: (err) => {
         toast.error(err?.message);
      },
   });

   return deleteProducts;
};

export const useAdminEditProducts = (id) => {
   const queryClient = useQueryClient();
   const navigate = useNavigate();
   const editProduct = useMutation({
      mutationFn: (formData) =>
         fetchData(
            {
               url: `/admin/products/${id}/edit`,
               method: 'PUT',
               data: { formData },
            },
            true
         ),

      onSuccess: (data) => {
         toast.success(data?.message);
         queryClient.invalidateQueries({ queryKey: ['admin', 'products'] });
         navigate(-1);
      },
      onError: (err) => {
         toast.error(err?.message);
      },
   });

   return editProduct;
};
// PRODUCTS //

// ORDER
export const useAdminOrders = (page, queryParams) => {
   const ordersList = useQuery({
      queryKey: ['admin', 'orders', page, queryParams],
      queryFn: () => {
         let url;

         if (!queryParams) url = `/page/${page}`;
         if (queryParams) url = `/page/${page}/q${queryParams}`;
         return fetchData(
            {
               url: `/admin/orders${url}`,
            },
            true
         );
      },
   });

   return ordersList;
};
// ORDER

// STATISTICS
export const useAdminStatistics = () => {
   const statistics = useQuery({
      queryKey: ['admin', 'statistics'],
      queryFn: () =>
         fetchData(
            {
               url: `/admin/statistics`,
            },
            true
         ),
   });

   return statistics;
};
// STATISTICS
