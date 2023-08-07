import { Section } from '../../ui/Section';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { UsersNavbar } from './components/UsersNavbar';
import { useUsers } from '../../api/useUser';

export const User = () => {
   const usersQuery = useUsers();

   return (
      <Section variant='flexCol'>
         <UsersNavbar />
         {!usersQuery.data && <LoadingSpinner />}
         <div className='text-center'>
            <p>username: {usersQuery.data?.username}</p>
            <p>email: {usersQuery.data?.email}</p>
            <p>joined: {new Date(usersQuery.data?.createdAt).toLocaleDateString('en-GB')}</p>
         </div>
      </Section>
   );
};
