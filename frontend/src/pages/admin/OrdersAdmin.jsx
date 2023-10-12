import { useLocation } from 'react-router-dom';
import { useAdminOrders } from '../../api/useAdmin';
import { usePagination } from '../../api/usePagination';
import { AdminSection } from './components/AdminSection';
import { Table } from './components/Table';
import { TableOrdersData } from './components/TableOrdersData';

function OrdersAdmin() {
   const ordersHeaders = ['', 'image', 'username', 'product', 'amount', 'price', 'order id', 'date', 'status'];
   const sortOrdersArr = ['user', 'date', 'price'];
   const { page, setPage, onHandleReq } = usePagination();
   const location = useLocation();
   const ordersList = useAdminOrders(page, location.search);

   return (
      <AdminSection
         fetchQuery={ordersList}
         header='Orders'
         page={page}
         setPage={setPage}
         onHandleReq={onHandleReq}
         sortByList={sortOrdersArr}
      >
         {ordersList.data?.ordersList?.length ? (
            <Table headers={ordersHeaders}>
               <TableOrdersData fetchQuery={ordersList?.data?.ordersList} />
            </Table>
         ) : (
            <p>No orders data available</p>
         )}
      </AdminSection>
   );
}

export default OrdersAdmin;
