import Section from '../../../ui/Section';
import UsersNavbar from './/UsersNavbar';
import LoadingSpinner from '../../../ui/LoadingSpinner';
import { useUsers } from '../../../api/useUser';
import Image from '../../../ui/Image';

function OrderHistory() {
   const usersQuery = useUsers();

   return (
      <Section style='py-3 flex flex-col flex-wrap'>
         <UsersNavbar />
         {usersQuery.isLoading && <LoadingSpinner />}
         <div className='mx-auto'>
            {usersQuery.data?.orderHistory.length === 0 && <p className='py-4'>no order history yet</p>}
            {usersQuery.data?.orderHistory.map((product) => (
               <>
                  <p className='py-4 mt-6 uppercase font-bold'>{product?.name}</p>
                  <div key={product._id} className='flex justify-center items-center lg:gap-6 gap-2'>
                     <div className='w-20 h-20'>
                        <Image variant='profile' image={product?.image} alt={product?.name} />
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
}

export default OrderHistory;
