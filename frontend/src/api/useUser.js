import { useQuery } from '@tanstack/react-query';
import { fetchData } from './fetchData';
import jwtDecode from 'jwt-decode';

export const useUsers = () => {
   const token = localStorage.getItem('access__token') || null;
   const { id } = jwtDecode(token);

   const usersQuery = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         return await fetchData({
            url: `/users/${id}`,
         });
      },
   });

   return usersQuery;
};
