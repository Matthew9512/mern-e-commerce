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

const AdminLayout = lazy(() => import('./pages/admin/components/AdminLayout.jsx'));
const DashboardAdmin = lazy(() => import('./pages/admin/DashboardAdmin.jsx'));
const UsersAdmin = lazy(() => import('./pages/admin/UsersAdmin.jsx'));
const ProductsAdmin = lazy(() => import('./pages/admin/ProductsAdmin.jsx'));
const OrdersAdmin = lazy(() => import('./pages/admin/OrdersAdmin.jsx'));
const UsersDetailsAdmin = lazy(() => import('./pages/admin/UsersDetailsAdmin.jsx'));
const AddNewProduct = lazy(() => import('./pages/admin/AddNewProduct.jsx'));
const EditProduct = lazy(() => import('./pages/admin/EditProduct.jsx'));
const Home = lazy(() => import('./pages/home/Home.jsx'));
const Layout = lazy(() => import('./ui/Layout.jsx'));
const PageNotFound = lazy(() => import('./pages/PageNotFound.jsx'));
const Login = lazy(() => import('./pages/Login.jsx'));
const Register = lazy(() => import('./pages/register/Register.jsx'));
const Product = lazy(() => import('./pages/product/Product.jsx'));
const User = lazy(() => import('./pages/user/User.jsx'));
const OrderHistory = lazy(() => import('./pages/user/components/OrderHistory.jsx'));
const ProtectedRoutes = lazy(() => import('./ui/ProtectedRoutes.jsx'));
const Shop = lazy(() => import('./pages/shop/Shop.jsx'));
const ServerDown = lazy(() => import('./pages/ServerDown.jsx'));
const UsersPersonalData = lazy(() => import('./pages/user/components/UsersPersonalData.jsx'));

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
