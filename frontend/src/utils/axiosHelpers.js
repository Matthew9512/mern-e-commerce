import jwtDecode from 'jwt-decode';
import { axiosCredentials, fetchData } from '../api/fetchData';

axiosCredentials.interceptors.request.use(
   async (config) => {
      const token = await getToken();
      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      } else {
         const newToken = await refreshAccessToken();
         console.log(newToken);
         config.headers.Authorization = `Bearer ${newToken}`;
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

export const getToken = () => {
   const token = JSON.parse(localStorage.getItem('access__token'));
   if (token) {
      const { exp } = jwtDecode(token);
      if (exp < Date.now() / 1000) {
         // Access token has expired
         removeToken();
         return null;
      }
   }
   return token;
};

export const removeToken = () => {
   localStorage.removeItem('access__token');
};

const refreshAccessToken = async () => {
   try {
      const res = await fetchData({
         url: `/users/refresh`,
         method: 'POST',
         withCredentials: true,
      });

      const newToken = await res.accessToken;
      localStorage.setItem('access__token', JSON.stringify(newToken));
      return newToken;
   } catch (error) {
      console.log(error);
   }
};
