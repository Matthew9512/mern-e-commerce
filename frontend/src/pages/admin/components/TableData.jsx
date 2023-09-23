import { useState } from 'react';
import { Button } from '../../../ui/Button';
import { LoadingButton } from '../../../ui/LoadingButton';
import { Modal } from '../../../ui/Modal';
import { useAdminDeleteUser } from '../../../api/useAdmin';

export const TableData = ({ usersList }) => {
   const [display, setDisplay] = useState(false);
   const [usersData, setUsersData] = useState(false);
   const deleteUser = useAdminDeleteUser();
   let modalData = [];

   const displayUser = (e, id) => {
      if (e.target.parentElement.id === 'action') return;
      console.log('users');

      setDisplay((prev) => !prev);
      setUsersData(() => (modalData = usersList.filter((user) => user?._id === id)));

      console.log(modalData);
      //   modal with more usersinfo
   };

   return (
      <>
         <Modal display={display} setDisplay={setDisplay}>
            <h1>{usersData?.at(0)?.email}</h1>
            {/* {usersData?.at(0)?.email} */}
         </Modal>
         {usersList.map((user, i) => (
            <tr
               onClick={(e) => displayUser(e, user?._id)}
               key={user?._id}
               className='tableRow hover:bg-secondaryWhite hover:cursor-pointer'
            >
               <td>{i + 1}</td>
               <td>{user?.username}</td>
               <td>{user?.email}</td>
               <td>{new Date(user?.createdAt).toLocaleDateString('en-GB')}</td>
               <td>{user?._id}</td>
               <td className='flex items-center justify-center h-16' id='action'>
                  {deleteUser.isLoading ? (
                     <LoadingButton />
                  ) : (
                     <Button onHandleFn={() => deleteUser.mutate(user?._id)} variant='primary'>
                        Delete
                     </Button>
                  )}
                  <Button variant='primary'>Block</Button>
               </td>
            </tr>
         ))}
      </>
   );
};
