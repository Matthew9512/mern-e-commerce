import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/home/Home';
import { Layout } from './ui/Layout';
import { PageNotFound } from './pages/PageNotFound';
import { Login } from './pages/Login';
import { Register } from './pages/register/Register';
import { Product } from './pages/product/Product';
import { User } from './pages/user/User';
import { OrderHistory } from './pages/user/components/OrderHistory';
import { ProtectedRoutes } from './ui/ProtectedRoutes';
import { Shop } from './pages/shop/Shop';
import { ServerDown } from './pages/ServerDown';
import { UsersPersonalData } from './pages/user/components/UsersPersonalData';
import { AdminLayout } from './pages/admin/components/AdminLayout';
import { DashboardAdmin } from './pages/admin/DashboardAdmin';
import { UsersAdmin } from './pages/admin/UsersAdmin';
import { ProductsAdmin } from './pages/admin/ProductsAdmin';
import { OrdersAdmin } from './pages/admin/OrdersAdmin';
import { UsersDetailsAdmin } from './pages/admin/UsersDetailsAdmin';
import { AddNewProduct } from './pages/admin/AddNewProduct';
import { EditProduct } from './pages/admin/EditProduct';

export const App = () => {
   return (
      <>
         <main className='text-slate-800 mx-auto min-h-screen max-w-screen-2xl relative overflow-hidden pb-16 bg-primaryWhite text-primaryBlack'>
            <BrowserRouter>
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
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { Suspense } from 'react';
// import { lazyLoad } from './utils/lazyLoad';
// import { LoadingSpinner } from './ui/LoadingSpinner';

// const AdminLayout = lazyLoad('../pages/admin/components/AdminLayout.jsx', 'AdminLayout');
// const DashboardAdmin = lazyLoad('../pages/admin/DashboardAdmin.jsx', 'DashboardAdmin');
// const UsersAdmin = lazyLoad('../pages/admin/UsersAdmin.jsx', 'UsersAdmin');
// const ProductsAdmin = lazyLoad('../pages/admin/ProductsAdmin.jsx', 'ProductsAdmin');
// const OrdersAdmin = lazyLoad('../pages/admin/OrdersAdmin.jsx', 'OrdersAdmin');
// const UsersDetailsAdmin = lazyLoad('../pages/admin/UsersDetailsAdmin.jsx', 'UsersDetailsAdmin');
// const AddNewProduct = lazyLoad('../pages/admin/AddNewProduct.jsx', 'AddNewProduct');
// const EditProduct = lazyLoad('../pages/admin/EditProduct.jsx', 'EditProduct');
// const Home = lazyLoad('../pages/home/Home.jsx', 'Home');
// const Layout = lazyLoad('../ui/Layout.jsx', 'Layout');
// const PageNotFound = lazyLoad('../pages/PageNotFound.jsx', 'PageNotFound');
// const Login = lazyLoad('../pages/Login.jsx', 'Login');
// const Register = lazyLoad('../pages/register/Register.jsx', 'Register');
// const Product = lazyLoad('../pages/product/Product.jsx', 'Product');
// const User = lazyLoad('../pages/user/User.jsx', 'User');
// const OrderHistory = lazyLoad('../pages/user/components/OrderHistory.jsx', 'OrderHistory');
// const ProtectedRoutes = lazyLoad('../ui/ProtectedRoutes.jsx', 'ProtectedRoutes');
// const Shop = lazyLoad('../pages/shop/Shop.jsx', 'Shop');
// const ServerDown = lazyLoad('../pages/ServerDown.jsx', 'ServerDown');
// const UsersPersonalData = lazyLoad('../pages/user/components/UsersPersonalData.jsx', 'UsersPersonalData');

// export const App = () => {
//    return (
//       <>
//          <main className='text-slate-800 mx-auto min-h-screen max-w-screen-2xl relative overflow-hidden pb-16 bg-primaryWhite text-primaryBlack'>
//             <BrowserRouter>
//                <Suspense fallback={<LoadingSpinner />}>
//                   <Routes>
//                      <Route element={<Layout />}>
//                         <Route index element={<Home />} />
//                         <Route path='login' element={<Login />} />
//                         <Route path='register' element={<Register />} />
//                         <Route path='product/:id' element={<Product />} />
//                         <Route path='shop' element={<Shop />} />
//                         <Route element={<ProtectedRoutes />}>
//                            <Route path='user' element={<User />} />
//                            <Route path='user/order-history' element={<OrderHistory />} />
//                            <Route path='user/users-data' element={<UsersPersonalData />} />
//                         </Route>
//                      </Route>
//                      {/* admin routes */}
//                      <Route element={<AdminLayout />}>
//                         <Route path='admin/dashboard' element={<DashboardAdmin />} />
//                         <Route path='admin/users' element={<UsersAdmin />} />
//                         <Route path='admin/users-details/:id' element={<UsersDetailsAdmin />} />
//                         <Route path='admin/products' element={<ProductsAdmin />} />
//                         <Route path='admin/products/:id/edit' element={<EditProduct />} />
//                         <Route path='admin/products-new' element={<AddNewProduct />} />
//                         <Route path='admin/orders' element={<OrdersAdmin />} />
//                      </Route>
//                      {/* admin routes */}
//                      <Route path='*' element={<PageNotFound />} />
//                      <Route path='server-down' element={<ServerDown />} />
//                   </Routes>
//                </Suspense>
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
