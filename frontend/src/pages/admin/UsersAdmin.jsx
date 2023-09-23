import { useAdminUser } from '../../api/useAdmin';
import { LoadingSpinner } from '../../ui/LoadingSpinner';
import { ErrorMessage } from '../../ui/ErrorMessage';
import { Table } from './components/Table';
import { TableData } from './components/TableData';

export const UsersAdmin = () => {
   const usersHeaders = ['', 'Username', 'Email', 'Created', 'Users Id', 'Actions'];
   const usersList = useAdminUser();

   return (
      <article className='p-12'>
         <p className='uppercase font-semibold text-lg tracking-widest'>Users</p>
         {usersList.isLoading && <LoadingSpinner />}
         {usersList.error && <ErrorMessage />}
         {usersList.data?.length ? (
            <Table headers={usersHeaders} usersList={usersList.data}>
               <TableData usersList={usersList.data} />
            </Table>
         ) : (
            <p>No users yet</p>
         )}
      </article>
   );
};
