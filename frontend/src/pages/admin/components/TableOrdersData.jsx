import { Image } from '../../../ui/Image';
import { checkIcon, falseIcon } from '../../../utils/icons';

export const TableOrdersData = ({ fetchQuery }) => {
   return (
      <>
         {fetchQuery.map((order, i) => (
            <tr key={order?._id} className='tableRow hover:bg-secondaryWhite'>
               <td>{i + 1}</td>
               <td className='w-12 h-12'>
                  <Image variant='profile' image={order?.image} alt={order?.name} />
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
};
