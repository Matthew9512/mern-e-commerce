import { useRef, useState } from 'react';
import LinkButton from '../../../ui/LinkButton';
import Button from '../../../ui/Button';
import { ConfirmModal } from '../../../ui/Modal';
import { useAdminDeleteUser } from '../../../api/useAdmin';
import { deleteIcon, eyeIcon } from '../../../utils/icons';

function TableUsersData({ fetchQuery, page, setPage }) {
   const [display, setDisplay] = useState(false);
   const deleteUser = useAdminDeleteUser(page, setPage);
   let usersID = useRef();

   return (
      <>
         <ConfirmModal display={display} setDisplay={setDisplay} fetchQuery={deleteUser} itemID={usersID} item='user' />
         {fetchQuery.map((user, i) => (
            <tr key={user?._id} className='tableRow hover:bg-secondaryWhite'>
               <td>{i + 1}</td>
               <td>{user?.username}</td>
               <td>{user?.email}</td>
               <td>{new Date(user?.createdAt).toLocaleDateString('en-GB')}</td>
               <td>{user?._id}</td>
               <td className='flex items-center justify-center h-16 w-min gap-6' id='action'>
                  <LinkButton to={`/admin/users-details/${user?._id}`} variant='primary' customClass='gap-2'>
                     {eyeIcon} View
                  </LinkButton>
                  <Button
                     onHandleFn={() => {
                        usersID.current = user?._id;
                        setDisplay((prev) => !prev);
                     }}
                     variant='primary'
                  >
                     {deleteIcon} Delete
                  </Button>
               </td>
            </tr>
         ))}
      </>
   );
}

export default TableUsersData;
