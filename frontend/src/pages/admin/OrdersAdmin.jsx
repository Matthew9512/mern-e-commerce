import { useAdminOrders } from '../../api/useAdmin';
import { usePagination } from '../../api/usePagination';
import { AdminSection } from './components/AdminSection';
import { Table } from './components/Table';

export const OrdersAdmin = () => {
   const ordersHeaders = ['', 'image', 'username', 'product', 'price', 'product id', 'status'];
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
         {ordersList.data?.productsList?.length ? (
            <Table headers={ordersHeaders} usersList={ordersList?.data?.productsList}>
               {/* <TableProductsData fetchQuery={productsList?.data?.productsList} page={page} setPage={setPage} /> */}
            </Table>
         ) : (
            <p>No products data available</p>
         )}
      </AdminSection>
   );
};
