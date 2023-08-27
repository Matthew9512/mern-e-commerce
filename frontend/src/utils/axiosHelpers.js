import jwtDecode from 'jwt-decode';
import { axiosCredentials, fetchData } from '../api/fetchData';
import { Navigate } from 'react-router-dom';

axiosCredentials.interceptors.request.use(
   async (config) => {
      const token = await getToken();
      if (token) {
         config.headers.Authorization = `Bearer ${token}`;
      } else {
         const newToken = await refreshAccessToken();
         config.headers.Authorization = `Bearer ${newToken}`;
      }
      return config;
   },
   (error) => {
      return Promise.reject(error);
   }
);

export function getToken() {
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
}

export function removeToken() {
   localStorage.removeItem('access__token');
}

async function refreshAccessToken() {
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
}

export function jwtDecodeToken() {
   const token = JSON.parse(localStorage.getItem('access__token')) || null;
   let decoded;

   try {
      decoded = jwtDecode(token);
      console.log(decoded);
   } catch (error) {
      // window.location = '/';
      console.log(error.message);
   }

   return decoded;
}
