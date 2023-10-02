import { useAdminOrders } from '../../api/useAdmin';
import { usePagination } from '../../api/usePagination';
import { AdminSection } from './components/AdminSection';
import { Table } from './components/Table';
import { TableOrdersData } from './components/TableOrdersData';

export const OrdersAdmin = () => {
   const ordersHeaders = ['', 'image', 'username', 'product', 'amount', 'price', 'order id', 'date', 'status'];
   const sortOrdersArr = ['username', 'date', 'price', 'created'];
   const { page, setPage, onHandleReq } = usePagination();
   const ordersList = useAdminOrders(page);

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
};
