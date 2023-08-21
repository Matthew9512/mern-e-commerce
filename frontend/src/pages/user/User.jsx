import { useNavigate } from 'react-router-dom';
import { Section } from '../../ui/Section';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { UsersNavbar } from './components/UsersNavbar';
import { useMutateDeleteUser, useUsers } from '../../api/useUser';
import { Button } from '../../ui/Button';

export const User = () => {
   const usersQuery = useUsers();
   const navigate = useNavigate();
   const usersMutationDel = useMutateDeleteUser(usersQuery.data?._id);

   const logOut = () => {
      localStorage.removeItem('access__token');

      navigate('/');
   };

   const removeAcc = () => {
      usersMutationDel.mutate();
      localStorage.removeItem('access__token');

      navigate('/');
   };

   // items-center justify-center
   return (
      <Section style='py-3 flex flex-col  flex-wrap'>
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
               <Button variant='primary' onHandleFn={removeAcc}>
                  Delete account
               </Button>
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
