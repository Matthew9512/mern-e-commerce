import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { fetchData } from './fetchData';
import { useNavigate } from 'react-router-dom';

// USERS //
export const useAdminUser = (page) => {
   const usersList = useQuery({
      queryKey: ['admin', `users`, page],
      queryFn: () =>
         fetchData(
            {
               url: `admin/users/page/${page}`,
            },
            true
         ),
   });

   return usersList;
};

export const useAdminUserDetails = (id, page) => {
   const usersDetails = useQuery({
      queryKey: ['admin', `users-details`, id, page],
      queryFn: () =>
         fetchData({
            url: `admin/users-details/page/${page}/${id}`,
         }),
   });

   return usersDetails;
};

export const useAdminDeleteUser = (page, setPage) => {
   const queryClient = useQueryClient();
   const deleteUser = useMutation({
      mutationFn: (id) =>
         fetchData({
            url: `/admin/delete-account`,
            method: 'DELETE',
            data: { id },
         }),

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
export const useAdminProducts = (page) => {
   const productsList = useQuery({
      queryKey: ['admin', `products`, page],
      queryFn: () =>
         fetchData({
            url: `admin/products/page/${page}`,
            // url: `/admin/products`,
         }),
   });

   return productsList;
};

export const useAdminNewProduct = () => {
   const queryClient = useQueryClient();
   const navigate = useNavigate();
   const createNewProduct = useMutation({
      mutationFn: (formData) =>
         fetchData({
            url: `admin/products/create`,
            method: 'POST',
            data: { formData },
         }),

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
         fetchData({
            url: `/admin/delete-product`,
            method: 'DELETE',
            data: { id },
         }),

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
         fetchData({
            url: `/admin/products/${id}/edit`,
            method: 'PUT',
            data: { formData },
         }),

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
export const useAdminOrders = (page) => {
   const ordersList = useQuery({
      queryKey: ['admin', 'orders', page],
      queryFn: () =>
         fetchData({
            url: `/admin/orders/page/${page}`,
         }),
   });

   return ordersList;
};
// ORDER

// STATISTICS
export const useAdminStatistics = () => {
   const statistics = useQuery({
      queryKey: ['admin', 'statistics'],
      queryFn: () =>
         fetchData({
            url: `/admin/statistics`,
         }),
   });

   return statistics;
};
// STATISTICS
