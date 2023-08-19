import { useQuery } from '@tanstack/react-query';
import jwtDecode from 'jwt-decode';
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
