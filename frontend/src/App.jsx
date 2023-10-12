// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { Home } from './pages/home/Home';
// import { Layout } from './ui/Layout';
// import { PageNotFound } from './pages/PageNotFound';
// import { Login } from './pages/Login';
// import { Register } from './pages/register/Register';
// import { Product } from './pages/product/Product';
// import { User } from './pages/user/User';
// import { OrderHistory } from './pages/user/components/OrderHistory';
// import { ProtectedRoutes } from './ui/ProtectedRoutes';
// import { Shop } from './pages/shop/Shop';
// import { ServerDown } from './pages/ServerDown';
// import { UsersPersonalData } from './pages/user/components/UsersPersonalData';
// import { AdminLayout } from './pages/admin/components/AdminLayout';
// import { DashboardAdmin } from './pages/admin/DashboardAdmin';
// import { UsersAdmin } from './pages/admin/UsersAdmin';
// import { ProductsAdmin } from './pages/admin/ProductsAdmin';
// import { OrdersAdmin } from './pages/admin/OrdersAdmin';
// import { UsersDetailsAdmin } from './pages/admin/UsersDetailsAdmin';
// import { AddNewProduct } from './pages/admin/AddNewProduct';
// import { EditProduct } from './pages/admin/EditProduct';

// export const App = () => {
//    return (
//       <>
//          <main className='text-slate-800 mx-auto min-h-screen max-w-screen-2xl relative overflow-hidden pb-16 bg-primaryWhite text-primaryBlack'>
//             <BrowserRouter>
//                <Routes>
//                   <Route element={<Layout />}>
//                      <Route index element={<Home />} />
//                      <Route path='login' element={<Login />} />
//                      <Route path='register' element={<Register />} />
//                      <Route path='product/:id' element={<Product />} />
//                      <Route path='shop' element={<Shop />} />
//                      <Route element={<ProtectedRoutes />}>
//                         <Route path='user' element={<User />} />
//                         <Route path='user/order-history' element={<OrderHistory />} />
//                         <Route path='user/users-data' element={<UsersPersonalData />} />
//                      </Route>
//                   </Route>
//                   {/* admin routes */}
//                   <Route element={<AdminLayout />}>
//                      <Route path='admin/dashboard' element={<DashboardAdmin />} />
//                      <Route path='admin/users' element={<UsersAdmin />} />
//                      <Route path='admin/users-details/:id' element={<UsersDetailsAdmin />} />
//                      <Route path='admin/products' element={<ProductsAdmin />} />
//                      <Route path='admin/products/:id/edit' element={<EditProduct />} />
//                      <Route path='admin/products-new' element={<AddNewProduct />} />
//                      <Route path='admin/orders' element={<OrdersAdmin />} />
//                   </Route>
//                   {/* admin routes */}
//                   <Route path='*' element={<PageNotFound />} />
//                   <Route path='server-down' element={<ServerDown />} />
//                </Routes>
//             </BrowserRouter>
//          </main>
//          <Toaster
//             toastOptions={{
//                success: {
//                   duration: 2500,
//                },
//             }}
//          />
//       </>
//    );
// };
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense, lazy } from 'react';
import { lazyLoad } from './utils/lazyLoad';
import { LoadingSpinner } from './ui/LoadingSpinner';

const { AdminLayout } = lazy(() => './pages/admin/components/AdminLayout');
const { DashboardAdmin } = lazy(() => './pages/admin/DashboardAdmin');
const { UsersAdmin } = lazy(() => './pages/admin/UsersAdmin');
const { ProductsAdmin } = lazy(() => './pages/admin/ProductsAdmin');
const { OrdersAdmin } = lazy(() => './pages/admin/OrdersAdmin');
const { UsersDetailsAdmin } = lazy(() => './pages/admin/UsersDetailsAdmin');
const { AddNewProduct } = lazy(() => './pages/admin/AddNewProduct');
const { EditProduct } = lazy(() => './pages/admin/EditProduct');
const { Home } = lazy(() => './pages/home/Home');
const { Layout } = lazy(() => './ui/Layout');
const { PageNotFound } = lazy(() => './pages/PageNotFound');
const { Login } = lazy(() => './pages/Login');
const { Register } = lazy(() => './pages/register/Register');
const { Product } = lazy(() => './pages/product/Product');
const { User } = lazy(() => './pages/user/User');
const { OrderHistory } = lazy(() => './pages/user/components/OrderHistory');
const { ProtectedRoutes } = lazy(() => './ui/ProtectedRoutes');
const { Shop } = lazy(() => './pages/shop/Shop');
const { ServerDown } = lazy(() => './pages/ServerDown');
const { UsersPersonalData } = lazy(() => './pages/user/components/UsersPersonalData');

export const App = () => {
   return (
      <>
         <main className='text-slate-800 mx-auto min-h-screen max-w-screen-2xl relative overflow-hidden pb-16 bg-primaryWhite text-primaryBlack'>
            <BrowserRouter>
               <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                     <Route element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path='login' element={<Login />} />
                        <Route path='register' element={<Register />} />
                        <Route path='product/:id' element={<Product />} />
                        <Route path='shop' element={<Shop />} />
                        <Route element={<ProtectedRoutes />}>
                           <Route path='user' element={<User />} />
                           <Route path='user/order-history' element={<OrderHistory />} />
                           <Route path='user/users-data' element={<UsersPersonalData />} />
                        </Route>
                     </Route>
                     {/* admin routes */}
                     <Route element={<AdminLayout />}>
                        <Route path='admin/dashboard' element={<DashboardAdmin />} />
                        <Route path='admin/users' element={<UsersAdmin />} />
                        <Route path='admin/users-details/:id' element={<UsersDetailsAdmin />} />
                        <Route path='admin/products' element={<ProductsAdmin />} />
                        <Route path='admin/products/:id/edit' element={<EditProduct />} />
                        <Route path='admin/products-new' element={<AddNewProduct />} />
                        <Route path='admin/orders' element={<OrdersAdmin />} />
                     </Route>
                     {/* admin routes */}
                     <Route path='*' element={<PageNotFound />} />
                     <Route path='server-down' element={<ServerDown />} />
                  </Routes>
               </Suspense>
            </BrowserRouter>
         </main>
         <Toaster
            toastOptions={{
               success: {
                  duration: 2500,
               },
            }}
         />
      </>
   );
};
