import { useRef, useState } from 'react';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import LoadingButton from '../../ui/LoadingButton';
import Checkbox from '../../ui/Checkbox';
import { useAdminEditProducts, useAdminProductsImg } from '../../api/useAdmin';
import Button from '../../ui/Button';
import UploadFile from './components/UploadFile';
import Image from '../../ui/Image';
import { ConfirmModal } from '../../ui/Modal';
import { closeIcon } from '../../utils/icons';

function EditProduct() {
   const product = JSON.parse(sessionStorage.getItem('admin-edit'));
   const [uploadedImgArr, setUploadedImgArr] = useState([]);
   const editProduct = useAdminEditProducts(product?._id, setUploadedImgArr, product);
   const [display, setDisplay] = useState(false);
   const productsID = useRef();
   const imageID = useRef();
   const updateProductsImg = useAdminProductsImg(imageID, product);

   const handleNewProduct = (e) => {
      e.preventDefault();

      const form = new FormData(e.currentTarget);
      const formData = Object.fromEntries(form);

      // push new links to product saved in session storage
      product.image.push(...uploadedImgArr);

      editProduct.mutate({ formData, uploadedImgArr: product.image });
   };

   const removeImg = (e, link) => {
      e.preventDefault();
      productsID.current = product?._id;
      imageID.current = link;
      setDisplay((prev) => !prev);
   };

   return (
      <>
         <ConfirmModal
            display={display}
            setDisplay={setDisplay}
            fetchQuery={updateProductsImg}
            itemID={productsID}
            item='image'
         />
         {product ? (
            <Form variant='secondary' onSubmit={handleNewProduct}>
               <div className='flex flex-col lg:flex-row lg:gap-24 gap-8'>
                  <div className='flex flex-col gap-6'>
                     <Input
                        label='name'
                        type='text'
                        placeholder='name'
                        variant='secondary'
                        defaultValue={product.name}
                     />
                     <Input
                        label='price'
                        type='text'
                        placeholder='price'
                        variant='secondary'
                        defaultValue={product.price}
                     />
                     <UploadFile uploadedImgArr={uploadedImgArr} setUploadedImgArr={setUploadedImgArr} />
                     {product.image.map((link) => (
                        <div
                           id='image-wrapper'
                           key={link}
                           className='flex items-center bg-primaryGrey/30 border border-primaryGrey rounded-md p-2 relative'
                        >
                           <div className='w-16 h-16 flex items-center mr-4'>
                              <Image src={link} variant='primary' />
                           </div>
                           <span>Curently uploaded image</span>
                           <Button
                              customClass='absolute top-2 right-2'
                              variant='rounded'
                              onClick={(e) => removeImg(e, link)}
                           >
                              {closeIcon}
                           </Button>
                        </div>
                     ))}
                     <label htmlFor='description'>product description:</label>
                     <textarea
                        className='resize-none rounded-md px-4 py-2 outline-0 shadow-md placeholder-primaryBlack disabled:cursor-not-allowed disabled:opacity-50'
                        name='description'
                        id='description'
                        placeholder='description'
                        cols='30'
                        rows='5'
                        defaultValue={product.description}
                     ></textarea>
                  </div>
                  <div className='mx-auto flex flex-col gap-6'>
                     <Input
                        label='category'
                        type='text'
                        placeholder='image'
                        variant='secondary'
                        defaultValue={product.category}
                     />
                     <span>Input amount of product to specific size:</span>
                     {product.sizesArr.map((item) => (
                        <Checkbox
                           defaultChecked={item.available > 0}
                           key={item?._id}
                           label={item.size}
                           placeholder='prod. amount'
                           name={item.size}
                           defaultValue={item.available}
                        />
                     ))}
                  </div>
               </div>
               {editProduct.isLoading ? <LoadingButton /> : <Button variant='primary'>Edit</Button>}
            </Form>
         ) : (
            <p>Product data unavailable</p>
         )}
      </>
   );
}

export default EditProduct;
