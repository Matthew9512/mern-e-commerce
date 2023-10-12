import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { SaleBanner } from './SaleBanner';

function Layout() {
   return (
      <>
         <SaleBanner />
         <Navbar />
         <Outlet />
         <Footer />
      </>
   );
}

export default Layout;
