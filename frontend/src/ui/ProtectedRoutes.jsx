import { Outlet, Navigate } from 'react-router-dom';

export const ProtectedRoutes = () => {
   const token = localStorage.getItem('access__token') || null;
   if (!token) return <Navigate to={'/'} />;

   return <Outlet />;
};
