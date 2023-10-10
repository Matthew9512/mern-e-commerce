// import { Navigate, Outlet } from 'react-router-dom';
// import { AsideMenu } from './AsideMenu';
// import { Navbar } from './Navbar';
// import { Footer } from '../../../ui/Footer';
// import jwtDecode from 'jwt-decode';

// export const AdminLayout = () => {
//    return (
//       // <section className='flex lg:flex-col flex-wrap'>
//       <section className='grid lg:grid-cols-[11rem_1fr] grid-cols-1 overflow-auto'>
//          <AsideMenu />
//          <article>
//             <Navbar />
//             <Outlet />
//          </article>
//          <Footer />
//       </section>
//    );
// };
// ===================
import { Navigate, Outlet } from 'react-router-dom';
import { AsideMenu } from './AsideMenu';
import { Navbar } from './Navbar';
import { Footer } from '../../../ui/Footer';
import jwtDecode from 'jwt-decode';

export const AdminLayout = () => {
   const token = localStorage.getItem('access__token') || null;
   if (!token) return <Navigate to={'/'} />;

   const { roles } = jwtDecode(token);

   return (
      <>
         {roles !== 'admin' ? (
            <Navigate to={'/'} />
         ) : (
            <section className='grid lg:grid-cols-[11rem_1fr] grid-cols-1 overflow-auto'>
               <AsideMenu />
               <article>
                  <Navbar />
                  <Outlet />
               </article>
               <Footer />
            </section>
         )}
      </>
   );
};
