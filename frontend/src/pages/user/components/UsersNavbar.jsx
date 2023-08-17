import { useLocation } from 'react-router-dom';
import { LinkButton } from '../../../ui/LinkButton';

export const UsersNavbar = () => {
   const { pathname } = useLocation();

   return (
      <div className='flex mx-auto gap-3'>
         <LinkButton to='/user' variant={pathname === '/user' ? 'primary' : 'navLink'}>
            My profile
         </LinkButton>
         <LinkButton to='/user/order-history' variant={pathname === '/user/order-history' ? 'primary' : 'navLink'}>
            Order history
         </LinkButton>
      </div>
   );
};