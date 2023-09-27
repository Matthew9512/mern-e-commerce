import { Form } from '../../ui/Form';
import { Input } from '../../ui/Input';
import { LoadingButton } from '../../ui/LoadingButton';
import { Checkbox } from '../../ui/Checkbox';
import { useAdminEditProducts } from '../../api/useAdmin';
import { Button } from '../../ui/Button';

export const EditProduct = () => {
   const product = JSON.parse(sessionStorage.getItem('admin-edit'));
   const editProduct = useAdminEditProducts(product?._id);

   const handleNewProduct = (e) => {
      e.preventDefault();

      const form = new FormData(e.currentTarget);
      const formData = Object.fromEntries(form);

      editProduct.mutate(formData);
   };

   return (
      <>
         {product ? (
            <Form variant='secondary' onSubmitFn={handleNewProduct}>
               <div className='flex gap-24'>
                  <div className=' flex flex-col gap-6'>
                     <Input label='name' type='text' placeholder='name' variant='secondary' defValue={product.name} />
                     <Input
                        label='price'
                        type='text'
                        placeholder='price'
                        variant='secondary'
                        defValue={product.price}
                     />
                     <Input
                        label='image'
                        type='text'
                        placeholder='image'
                        variant='secondary'
                        defValue={product.image}
                     />
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
                        defValue={product.category}
                     />
                     <span>Input amount of product to specific size:</span>
                     {product.sizesArr.map((item) => (
                        <Checkbox
                           checked={item.available > 0}
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
            <p>product</p>
         )}
      </>
   );
};
