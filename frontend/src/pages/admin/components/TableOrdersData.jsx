import Image from '../../../ui/Image';
import { checkIcon, falseIcon } from '../../../utils/icons';

function TableOrdersData({ fetchQuery }) {
   return (
      <>
         {fetchQuery.map((order, i) => (
            <tr key={order?._id} className='tableRow hover:bg-secondaryWhite'>
               <td className='p-4'>{i + 1}</td>
               <td className='w-12 h-16'>
                  <Image variant='profile' src={order?.image} alt={order?.name} />
               </td>
               <td>{order?.username}</td>
               <td>{order?.name}</td>
               <td>{order?.amount}</td>
               <td>{order?.price}$</td>
               <td>{order?._id}</td>
               <td>{new Date(order?.createdAt).toLocaleDateString('en-GB')}</td>
               <td>{order?.status ? checkIcon : falseIcon}</td>
            </tr>
         ))}
      </>
   );
}

export default TableOrdersData;
