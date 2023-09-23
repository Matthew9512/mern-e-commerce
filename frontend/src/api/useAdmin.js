import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { fetchData } from './fetchData';

export const useAdminUser = () => {
   const usersList = useQuery({
      queryKey: ['admin', 'users'],
      queryFn: () =>
         fetchData({
            url: `/admin/users`,
         }),
   });

   return usersList;
};

export const useAdminDeleteUser = () => {
   const queryClient = useQueryClient();
   const deleteUser = useMutation({
      mutationFn: (id) =>
         fetchData({
            url: `/admin/delete-acc`,
            method: 'DELETE',
            data: {
               id: id,
            },
         }),

      onSuccess: (data) => {
         queryClient.invalidateQueries({ queryKey: ['admin', 'users'] });
         toast.success(data.message);
      },
      onError: (err) => {
         toast.error(err?.message);
      },
   });

   return deleteUser;
};
