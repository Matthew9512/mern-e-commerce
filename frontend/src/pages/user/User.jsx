import Section from '../../ui/Section';
import LoadingSpinner from '../../ui/LoadingSpinner';
import UsersNavbar from './components/UsersNavbar';
import { useMutateDeleteUser, useMutateLogOut, useUsers } from '../../api/useUser';
import Button from '../../ui/Button';
import LoadingButton from '../../ui/LoadingButton';
import ErrorMessage from '../../ui/ErrorMessage';

function User() {
   const usersQuery = useUsers();
   const usersMutationDel = useMutateDeleteUser();
   const usersMutationLogOut = useMutateLogOut();

   return (
      <Section customClass='py-3 flex flex-col flex-wrap'>
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
                  <Button variant='primary' onClick={() => usersMutationDel.mutate(usersQuery.data?._id)}>
                     Delete account
                  </Button>
               )}
               <Button variant='primary' onClick={() => usersMutationLogOut.mutate()}>
                  Log out
               </Button>
            </>
         ) : (
            <p>No users data available</p>
         )}
      </Section>
   );
}

export default User;
