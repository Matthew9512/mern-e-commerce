import Form from '../../ui/Form';
import Input from '../../ui/Input';
import Button from '../../ui/Button';
import LoadingButton from '../../ui/LoadingButton';
import Checkbox from '../../ui/Checkbox';
import { useAdminNewProduct } from '../../api/useAdmin';
import SearchSelect from '../../ui/SearchSelect';

function AddNewProduct() {
   const createNewProduct = useAdminNewProduct();
   const categoryArr = ['accessories', 'boots', 'gloves', 'helmets', 'jackets', 'leather-suits'];

   const handleNewProduct = (e) => {
      e.preventDefault();

      const form = new FormData(e.currentTarget);
      const formData = Object.fromEntries(form);

      createNewProduct.mutate(formData);
   };

   return (
      <Form variant='secondary' onSubmit={handleNewProduct}>
         <div className='flex md:flex-row flex-col gap-24'>
            <div className=' flex flex-col gap-6'>
               <Input label='name' type='text' placeholder='name' variant='secondary' />
               <Input label='price' type='text' placeholder='price' variant='secondary' />
               <Input label='image' type='text' placeholder='image' variant='secondary' />
               <label htmlFor='description'>product description:</label>
               <textarea
                  className='resize-none rounded-md px-4 py-2 outline-0 shadow-md placeholder-primaryBlack disabled:cursor-not-allowed disabled:opacity-50'
                  name='description'
                  id='description'
                  placeholder='description'
                  cols='30'
                  rows='5'
               ></textarea>
            </div>
            <div className='mx-auto flex flex-col gap-6'>
               <SearchSelect
                  label='category'
                  options={categoryArr}
                  customClass='w-full'
                  placeholder='select category'
                  name='category'
               />
               <span>Input amount of product to specific size:</span>
               <Checkbox label='XS' placeholder='prod. amount' name='XS' />
               <Checkbox label='S' placeholder='prod. amount' name='S' />
               <Checkbox label='M' placeholder='prod. amount' name='M' />
               <Checkbox label='L' placeholder='prod. amount' name='L' />
               <Checkbox label='XL' placeholder='prod. amount' name='XL' />
            </div>
         </div>
         {createNewProduct.isLoading ? <LoadingButton /> : <Button variant='primary'>Create</Button>}
      </Form>
   );
}

export default AddNewProduct;
