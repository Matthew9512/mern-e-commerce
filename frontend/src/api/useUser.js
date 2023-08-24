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
         fetchData(
            {
               // url: 64e4fd341b993f757108c977, // ewa
               // url: `/users/64e3ad1c5aabeb46c0857e04`, // mm
               url: `/users/${id}`,
               withCredentials: true,
            },
            true
         ),

      retry: 1,
      useErrorBoundary: (err) => {
         toast.error(err?.message);
         // setTimeout(() => {
         //    window.location = '/';
         // }, 2000);
      },
   });

   return usersQuery;
};

export const useMutateUser = (id) => {
   const usersMutation = useMutation({
      mutationFn: (formData) =>
         fetchData(
            {
               url: `/users/register-data`,
               method: 'POST',
               data: {
                  id: id,
                  user: formData,
               },
            },
            true
         ),
   });

   return usersMutation;
};

export const useMutateDeleteUser = (id) => {
   const usersMutationDel = useMutation({
      mutationFn: () =>
         fetchData(
            {
               url: `/users/delete-acc`,
               method: 'DELETE',
               data: {
                  id: id,
               },
            },
            true
         ),

      onSuccess: (data) => toast.success(data?.message),
      onError: (err) => toast.error(err?.message),
   });

   return usersMutationDel;
};
