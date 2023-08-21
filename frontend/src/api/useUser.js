import { useMutation, useQuery } from '@tanstack/react-query';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-hot-toast';
import { fetchData } from './fetchData';

export const useUsers = () => {
   const token = JSON.parse(localStorage.getItem('access__token')) || null;
   const { id } = jwtDecode(token);

   const usersQuery = useQuery({
      queryKey: ['users'],
      queryFn: () =>
         fetchData({
            url: `/users/${id}`,
         }),
   });

   return usersQuery;
};

export const useMutateUser = (id) => {
   const usersMutation = useMutation({
      mutationFn: (formData) =>
         fetchData({
            url: `/users/register-data`,
            method: 'POST',
            data: {
               id: id,
               user: formData,
            },
         }),
   });

   return usersMutation;
};

export const useMutateDeleteUser = (id) => {
   const usersMutationDel = useMutation({
      mutationFn: () =>
         fetchData({
            url: `/users/delete-acc`,
            method: 'DELETE',
            data: {
               id: id,
            },
         }),

      onSuccess: (data) => toast.success(data?.message),
      onError: (err) => toast.error(err?.message),
   });

   return usersMutationDel;
};
