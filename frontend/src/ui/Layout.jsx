import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SaleBanner } from './SaleBanner';

export const Layout = () => {
   return (
      <>
         <SaleBanner />
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
};
