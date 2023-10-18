import { useLocation } from 'react-router-dom';
import { useAdminUser } from '../../api/useAdmin';
import { usePagination } from '../../api/usePagination';
import Table from './components/Table';
import TableUsersData from './components/TableUsersData';
import AdminSection from './components/AdminSection';

function UsersAdmin() {
   const usersHeaders = ['', 'username', 'email', 'created', 'users id', 'actions'];
   const sortUsersArr = ['name', 'date'];
   const { page, setPage, onHandleReq } = usePagination();
   const location = useLocation();
   const usersList = useAdminUser(page, location.search);

   return (
      <AdminSection
         fetchQuery={usersList}
         header='Users'
         page={page}
         setPage={setPage}
         onHandleReq={onHandleReq}
         sortByList={sortUsersArr}
      >
         {usersList.data?.usersList?.length ? (
            <Table headers={usersHeaders}>
               <TableUsersData fetchQuery={usersList?.data?.usersList} page={page} setPage={setPage} />
            </Table>
         ) : (
            <div className='h-full flex items-center justify-center'>
               <p>No users data available</p>
            </div>
         )}
      </AdminSection>
   );
}

export default UsersAdmin;
