import { Section } from '../../../ui/Section';
import { UsersNavbar } from './/UsersNavbar';
import { LoadingSpinner } from '../../../ui/LoadingSpinner';
import { useUsers } from '../../../api/useUser';

export const OrderHistory = () => {
   const usersQuery = useUsers();

   return (
      <Section variant='flexCol'>
         <UsersNavbar />
         {!usersQuery.data && <LoadingSpinner />}
         {usersQuery.data?.orderHistory.length > 0 ? <p>order history</p> : <p>no order history yet</p>}
      </Section>
   );
};
