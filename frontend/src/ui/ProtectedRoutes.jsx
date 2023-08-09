import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoutes = ({ children }) => {
   const navigate = useNavigate();
   const token = JSON.parse(localStorage.getItem('access__token')) || null;

   useEffect(() => {
      console.log(token);
      if (token === null) return navigate('/');
   }, [token]);

   return children;
};
