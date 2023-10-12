import { useLocation } from 'react-router-dom';
import { useAdminProducts } from '../../api/useAdmin';
import { Table } from './components/Table';
import { TableProductsData } from './components/TableProductsData';
import { AdminSection } from './components/AdminSection';
import { usePagination } from '../../api/usePagination';

export const ProductsAdmin = () => {
   const productsHeaders = ['', 'image', 'name', 'category', 'price', 'discount', 'sale', 'actions'];
   const sortProductsArr = ['name', 'price', 'sale', 'discount'];
   const { page, setPage, onHandleReq } = usePagination();
   const location = useLocation();
   const productsList = useAdminProducts(page, location.search);

   return (
      <AdminSection
         fetchQuery={productsList}
         header='Products'
         page={page}
         setPage={setPage}
         onHandleReq={onHandleReq}
         sortByList={sortProductsArr}
      >
         {productsList.data?.productsList?.length ? (
            <Table headers={productsHeaders}>
               <TableProductsData fetchQuery={productsList?.data?.productsList} page={page} setPage={setPage} />
            </Table>
         ) : (
            <p>No products data available</p>
         )}
      </AdminSection>
   );
};
