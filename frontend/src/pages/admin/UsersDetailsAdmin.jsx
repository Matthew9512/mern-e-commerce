import { useLocation, useParams } from 'react-router-dom';
import AdminSection from './components/AdminSection';
import Image from '../../ui/Image';
import { useAdminUserDetails } from '../../api/useAdmin';
import Table from './components/Table';
import { usePagination } from '../../api/usePagination';

function UsersDetailsAdmin() {
   const usersHeaders = ['', 'image', 'name', 'price', 'amount', 'product id', 'size', 'order date'];
   const sortProductsArr = ['name', 'price', 'date'];
   const { id } = useParams();
   const { page, onHandleReq } = usePagination();
   const location = useLocation();
   const usersDetails = useAdminUserDetails(id, page, location.search);

   return (
      <AdminSection
         fetchQuery={usersDetails}
         header='Users details'
         page={page}
         onHandleReq={onHandleReq}
         sortByList={sortProductsArr}
      >
         {usersDetails?.data?.orderHistory.length ? (
            <Table headers={usersHeaders}>
               {usersDetails?.data?.orderHistory.map((order, i) => (
                  <tr key={order?._id} className='tableRow hover:bg-secondaryWhite'>
                     <td className='p-4'>{i + 1}</td>
                     <td className='w-12 h-16'>
                        <Image variant='profile' image={order?.image} alt={order?.name} />
                     </td>
                     <td>{order?.name}</td>
                     <td>{order?.price}$</td>
                     <td>{order?.amount}</td>
                     <td>{order?.productID}</td>
                     <td>{order?.size}</td>
                     <td>{new Date(order?.orderDate).toLocaleDateString('en-GB')}</td>
                  </tr>
               ))}
            </Table>
         ) : (
            <div className='h-full flex items-center justify-center'>
               <p>Theres no order history for this user</p>
            </div>
         )}
      </AdminSection>
   );
}

export default UsersDetailsAdmin;
