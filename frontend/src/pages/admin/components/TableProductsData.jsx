import { useRef, useState } from 'react';
import Image from '../../../ui/Image';
import { checkIcon, deleteIcon, editIcon, falseIcon } from '../../../utils/icons';
import LinkButton from '../../../ui/LinkButton';
import Button from '../../../ui/Button';
import { useAdminDeleteProducts } from '../../../api/useAdmin';
import { ConfirmModal } from '../../../ui/Modal';

function TableProductsData({ fetchQuery, page, setPage }) {
   const deleteProducts = useAdminDeleteProducts(page, setPage);
   const [display, setDisplay] = useState(false);
   const productsID = useRef();

   const setProduct = (id) => {
      const clickedProduct = fetchQuery.find((product) => product?._id === id);
      sessionStorage.setItem('admin-edit', JSON.stringify(clickedProduct));
   };

   return (
      <>
         <ConfirmModal
            display={display}
            setDisplay={setDisplay}
            fetchQuery={deleteProducts}
            itemID={productsID}
            item='product'
         />
         {fetchQuery.map((product, i) => (
            <tr key={product?._id} className='tableRow hover:bg-secondaryWhite'>
               <td>{i + 1}</td>
               <td className='w-12 h-16'>
                  <Image variant='profile' image={product?.image} alt={product?.name} />
               </td>
               <td>{product?.name}</td>
               <td>{product?.category}</td>
               <td>{product?.price}$</td>
               <td>{product?.discount}%</td>
               <td className=''>{product?.sale ? checkIcon : falseIcon}</td>
               <td className='flex items-center justify-center h-16 gap-6 w-min' id='action'>
                  <LinkButton
                     customClass='gap-2'
                     to={`/admin/products/${product?._id}/edit`}
                     variant='primary'
                     onHandleFn={() => setProduct(product?._id)}
                  >
                     {editIcon} Edit
                  </LinkButton>
                  <Button
                     onHandleFn={() => {
                        productsID.current = product?._id;
                        setDisplay((prev) => !prev);
                     }}
                     variant='primary'
                     customClass='gap-2'
                  >
                     {deleteIcon} Delete
                  </Button>
               </td>
            </tr>
         ))}
      </>
   );
}

export default TableProductsData;
