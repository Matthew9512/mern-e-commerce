import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { fetchData } from './fetchData';
import { removeToken, jwtDecodeToken } from '../utils/axiosHelpers';

// register user
export const useMutateRegister = (setRegister) => {
   const registerMutation = useMutation({
      mutationFn: async ({ e, formRef }) => {
         e.preventDefault();
         return await fetchData({
            method: 'POST',
            url: '/users/register',
            data: {
               password: `${formRef.current.password.value}`,
               email: `${formRef.current.email.value}`,
               username: `${formRef.current.username.value}`,
            },
         });
      },
      onSuccess: (data) => {
         setTimeout(() => {
            setRegister(true);
         }, 1000);
         toast.success(data?.message);
      },
      onError: (err) => toast.error(err.message),
   });

   return registerMutation;
};

// login user
export const useMutateLogin = () => {
   const navigate = useNavigate();

   const loginMutation = useMutation({
      mutationFn: async ({ e, formRef }) => {
         e.preventDefault();
         return await fetchData({
            method: 'POST',
            url: '/users/login',
            data: {
               password: `${formRef.current.password.value}`,
               email: `${formRef.current.email.value}`,
            },
         });
      },
      onSuccess: (data) => {
         localStorage.setItem('access__token', JSON.stringify(data?.accessToken));
         toast.success(data?.message);
         navigate('/');
      },
      onError: (err) => toast.error(err.message),
   });

   return loginMutation;
};

// get user
export const useUsers = () => {
   const usersQuery = useQuery({
      queryKey: ['users'],
      queryFn: () => {
         const decoded = jwtDecodeToken();
         return fetchData(
            {
               url: `/users/${decoded.id}`,
            },
            true
         );
      },
      refetchOnWindowFocus: false,
   });

   return usersQuery;
};

// post users personal data like name, adress...
export const useMutateUser = (id) => {
   const usersDataMutation = useMutation({
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

   return usersDataMutation;
};

// delete acc
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

      onSuccess: (data) => {
         removeToken();
         toast.success(data?.message);
      },
      onError: (err) => toast.error(err?.message),
   });

   return usersMutationDel;
};
