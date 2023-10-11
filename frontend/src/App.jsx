import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Suspense } from 'react';
import { lazyLoad } from './utils/lazyLoad';
import { LoadingSpinner } from './ui/LoadingSpinner';

const AdminLayout = lazyLoad('../pages/admin/components/AdminLayout.jsx', 'AdminLayout');
const DashboardAdmin = lazyLoad('../pages/admin/DashboardAdmin.jsx', 'DashboardAdmin');
const UsersAdmin = lazyLoad('../pages/admin/UsersAdmin.jsx', 'UsersAdmin');
const ProductsAdmin = lazyLoad('../pages/admin/ProductsAdmin.jsx', 'ProductsAdmin');
const OrdersAdmin = lazyLoad('../pages/admin/OrdersAdmin.jsx', 'OrdersAdmin');
const UsersDetailsAdmin = lazyLoad('../pages/admin/UsersDetailsAdmin.jsx', 'UsersDetailsAdmin');
const AddNewProduct = lazyLoad('../pages/admin/AddNewProduct.jsx', 'AddNewProduct');
const EditProduct = lazyLoad('../pages/admin/EditProduct.jsx', 'EditProduct');
const Home = lazyLoad('../pages/home/Home.jsx', 'Home');
const Layout = lazyLoad('../ui/Layout.jsx', 'Layout');
const PageNotFound = lazyLoad('../pages/PageNotFound.jsx', 'PageNotFound');
const Login = lazyLoad('../pages/Login.jsx', 'Login');
const Register = lazyLoad('../pages/register/Register.jsx', 'Register');
const Product = lazyLoad('../pages/product/Product.jsx', 'Product');
const User = lazyLoad('../pages/user/User.jsx', 'User');
const OrderHistory = lazyLoad('../pages/user/components/OrderHistory.jsx', 'OrderHistory');
const ProtectedRoutes = lazyLoad('../ui/ProtectedRoutes.jsx', 'ProtectedRoutes');
const Shop = lazyLoad('../pages/shop/Shop.jsx', 'Shop');
const ServerDown = lazyLoad('../pages/ServerDown.jsx', 'ServerDown');
const UsersPersonalData = lazyLoad('../pages/user/components/UsersPersonalData.jsx', 'UsersPersonalData');

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
