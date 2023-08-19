import { Section } from '../../../ui/Section';
import { UsersNavbar } from './/UsersNavbar';
import { LoadingSpinner } from '../../../ui/LoadingSpinner';
import { useUsers } from '../../../api/useUser';
import { Image } from '../../../ui/Image';

export const OrderHistory = () => {
   const usersQuery = useUsers();

   // let orderHis;
   // orderHis = usersQuery.data?.orderHistory || [];

   // const userHistory = useQueries({
   //    queries: orderHis.map((order) => {
   //       return {
   //          queryKey: ['user', order.productID],
   //          queryFn: () =>
   //             fetchData({
   //                url: `/products/${order.productID}`,
   //             }),
   //       };
   //    }),
   // });

   // console.log(userHistory);

   return (
      <Section style='py-3 flex flex-col flex-wrap'>
         <UsersNavbar />
         {usersQuery.isLoading && <LoadingSpinner />}
         <div className='mx-auto'>
            {usersQuery.data?.orderHistory.length === 0 && <p className='py-4'>no order history yet</p>}
            {usersQuery.data?.orderHistory.map((product) => (
               <>
                  <p className='py-4 mt-6'>{product?.name}</p>
                  <div key={product._id} className='flex justify-center items-center gap-6'>
                     <div className='w-20 h-20'>
                        <Image variant='profile' product={product} />
                     </div>
                     <p>price: ${product?.price}</p>
                     <p>amount: {product?.amount}</p>
                     <p>size: {product?.size}</p>
                     <p>order date: {new Date(product?.orderDate).toLocaleDateString('en-GB')}</p>
                  </div>
               </>
            ))}
         </div>
      </Section>
   );
};
