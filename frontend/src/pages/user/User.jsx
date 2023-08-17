import { useNavigate } from 'react-router-dom';
import { Section } from '../../ui/Section';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { UsersNavbar } from './components/UsersNavbar';
import { useUsers } from '../../api/useUser';
import { Button } from '../../ui/Button';

export const User = () => {
   const usersQuery = useUsers();
   const navigate = useNavigate();

   const logOut = () => {
      localStorage.removeItem('access__token');

      navigate('/');
   };

   return (
      <Section style='py-3 flex flex-col items-center justify-center flex-wrap'>
         <UsersNavbar />
         {usersQuery.isLoading && <LoadingSpinner />}
         {usersQuery.error && <p>asdasd</p>}
         {usersQuery.data ? (
            <>
               <div className='text-center'>
                  <p>username: {usersQuery.data?.username}</p>
                  <p>email: {usersQuery.data?.email}</p>
                  <p>joined: {new Date(usersQuery.data?.createdAt).toLocaleDateString('en-GB')}</p>
               </div>
               <Button variant='primary' onHandleFn={logOut}>
                  Log out
               </Button>
            </>
         ) : (
            <p>No user data</p>
         )}
      </Section>
   );
};
