import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Home } from './pages/home/Home';
import { Layout } from './ui/Layout';
import { PageNotFound } from './pages/PageNotFound';
import { Login } from './pages/Login';
import { Register } from './pages/register/Register';
import { Product } from './pages/product/Product';
import { User } from './pages/user/User';
import { OrderHistory } from './pages/user/components/orderHistory';
import { ProtectedRoutes } from './ui/ProtectedRoutes';
import { Shop } from './pages/shop/Shop';
import { ServerDown } from './pages/ServerDown';
import { UsersPersonalData } from './pages/user/components/UsersPersonalData';

export const App = () => {
   return (
      <>
         <main className='text-slate-800 mx-auto min-h-screen max-w-screen-2xl bg-primaryWhite text-primaryBlack'>
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
                     {/* <Route
                        path='user'
                        element={
                           <ProtectedRoutes>
                              <User />
                           </ProtectedRoutes>
                        }
                     ></Route>
                     <Route
                        path='user/order-history'
                        element={
                           <ProtectedRoutes>
                              <OrderHistory />
                           </ProtectedRoutes>
                        }
                     ></Route> */}
                  </Route>
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
