import axios from 'axios';

const axiosInstance = axios.create({
   baseURL: 'http://localhost:8000',
});

export const fetchData = async (options) => {
   try {
      const res = await axiosInstance.request(options);
      const data = await res.data;
      console.log(data);
      return data;
   } catch (error) {
      console.log(error);
      if (error.request.status === 0) return (window.location.href = '/server-down');
      throw new Error(error.response.data.message);
   }
};
