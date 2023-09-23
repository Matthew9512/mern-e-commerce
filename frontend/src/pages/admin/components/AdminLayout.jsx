import { Outlet } from 'react-router-dom';
import { AsideMenu } from './AsideMenu';
import { Navbar } from './Navbar';
import { Footer } from '../../../ui/Footer';

export const AdminLayout = () => {
   return (
      <section className='grid grid-cols-[11rem_1fr]'>
         <AsideMenu />
         <article>
            <Navbar />
            <Outlet />
         </article>
         <Footer />
      </section>
   );
};
