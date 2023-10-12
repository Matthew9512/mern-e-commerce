import { Section } from '../../ui/Section';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { UsersNavbar } from './components/UsersNavbar';
import { useMutateDeleteUser, useUsers } from '../../api/useUser';
import { Button } from '../../ui/Button';
import { LoadingButton } from '../../ui/LoadingButton';
import { ErrorMessage } from '../../ui/ErrorMessage';
import { removeToken } from '../../utils/axiosHelpers';

export const User = () => {
   const usersQuery = useUsers();
   const usersMutationDel = useMutateDeleteUser(usersQuery.data?._id);

   const logOut = () => {
      removeToken();
      window.location = '/';
   };

   const removeAcc = () => {
      usersMutationDel.mutate();
      removeToken();
      window.location = '/';
   };

   return (
      <Section style='py-3 flex flex-col  flex-wrap'>
         <UsersNavbar />
         {usersQuery.isLoading && <LoadingSpinner />}
         {/* {usersQuery.error && <ErrorMessage style='py-4'>{usersQuery.error?.message}</ErrorMessage>} */}
         {usersQuery.data ? (
            <>
               <div className='text-center'>
                  <p>username: {usersQuery.data?.username}</p>
                  <p>email: {usersQuery.data?.email}</p>
                  <p>joined: {new Date(usersQuery.data?.createdAt).toLocaleDateString('en-GB')}</p>
               </div>
               {usersMutationDel.isLoading ? (
                  <LoadingButton />
               ) : (
                  <Button variant='primary' onHandleFn={removeAcc}>
                     Delete account
                  </Button>
               )}
               <Button variant='primary' onHandleFn={logOut}>
                  Log out
               </Button>
            </>
         ) : (
            <p>No users data available</p>
         )}
      </Section>
   );
};
