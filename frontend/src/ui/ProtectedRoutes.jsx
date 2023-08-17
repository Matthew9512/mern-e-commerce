import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ProtectedRoutes = ({ children }) => {
   const navigate = useNavigate();
   const token = JSON.parse(localStorage.getItem('access__token')) || null;

   useEffect(() => {
      if (!token) return navigate('/');
   }, [token]);

   return children;
};
