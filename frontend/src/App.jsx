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
import { AddNewUser } from './pages/admin/AddNewUser';
import { EditProduct } from './pages/admin/EditProduct';

/**
 * @todo admin protected routes!
 */

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
                        <Route path='user' element={<User />}></Route>
                        <Route path='user/order-history' element={<OrderHistory />}></Route>
                        <Route path='user/users-data' element={<UsersPersonalData />}></Route>
                     </Route>
                  </Route>
                  <Route path='*' element={<PageNotFound />} />
                  <Route path='server-down' element={<ServerDown />} />
                  {/*  */}
                  <Route element={<AdminLayout />}>
                     <Route path='admin/dashboard' element={<DashboardAdmin />} />
                     <Route path='admin/users' element={<UsersAdmin />} />
                     <Route path='admin/users-details/:id' element={<UsersDetailsAdmin />} />
                     <Route path='admin/products' element={<ProductsAdmin />} />
                     <Route path='admin/products/:id/edit' element={<EditProduct />} />
                     <Route path='admin/products-new' element={<AddNewProduct />} />
                     <Route path='admin/users-new' element={<AddNewUser />} />
                     <Route path='admin/orders' element={<OrdersAdmin />} />
                  </Route>
                  {/*  */}
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
