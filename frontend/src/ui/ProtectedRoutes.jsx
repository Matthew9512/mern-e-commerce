import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoutes() {
   const token = localStorage.getItem('access__token') || null;
   if (!token) return <Navigate to={'/'} />;

   return <Outlet />;
}

export default ProtectedRoutes;
