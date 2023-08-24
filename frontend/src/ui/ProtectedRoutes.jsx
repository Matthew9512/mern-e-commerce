import { Outlet, Navigate } from 'react-router-dom';
import { getToken } from '../utils/axiosHelpers';

export const ProtectedRoutes = () => {
   const token = getToken();
   if (!token) return <Navigate to={'/'} />;
   console.log(`ko`);

   return <Outlet />;
};

// import { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// export const ProtectedRoutes = ({ children }) => {
//    const token = localStorage.getItem('access__token') || null;
//    const navigate = useNavigate();
//    console.log(children);
//    useEffect(() => {
//       if (!token) return navigate('/login');
//    }, [token]);

//    return children;
// };

// import { useEffect } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';

// export const ProtectedRoutes = () => {
//    const token = localStorage.getItem('access__token') || null;
//    const navigate = useNavigate();

//    useEffect(() => {
//       if (token === null) return navigate('/login');
//    }, [token]);

//    return <Outlet />;
// };
