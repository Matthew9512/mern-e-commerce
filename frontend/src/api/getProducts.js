import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: 'http://localhost:8000',
});

export const getProducts = async (endpoint) => {
   const res = await axiosInstance.get(endpoint);
   const data = await res.data;
   console.log(data);
   return data;
};
