import { useRef, useState } from 'react';
import { Input } from '../../../ui/Input';
import { SearchSelect } from '../../../ui/SearchSelect';
import { categoryArr } from '../../../utils/constants';
import { useAdminSale } from '../../../api/useAdmin';
import { LoadingButton } from '../../../ui/LoadingButton';
import { Button } from '../../../ui/Button';

export const ManageSale = () => {
   const [disabled, setDisabled] = useState(false);
   const discountRef = useRef();
   const categoryRef = useRef();
   const sale = useAdminSale();

   const verifyInputs = () => {
      if (!discountRef.current.value || !categoryRef.current.value) return setDisabled(false);
      setDisabled(true);
   };

   const handleActiveSale = () => {
      const data = {
         discount: discountRef.current.value,
         category: categoryRef.current.value,
      };
      sale.mutate(data);

      discountRef.current.value = '';
      categoryRef.current.value = '';
   };

   return (
      // <div className='w-56 mx-auto'>
      //    <Input variant='primary' placeholder='% discount' inputRef={discountRef} />
      //    <SearchSelect options={categoryArr} label='choose category' placeholder='choose category' id='categoryRef' />
      //    <LoadingButton
      //       text='Active sale'
      //       loading={sale.isLoading}
      //       customClass='my-4'
      //       variant='primary'
      //       onHandleFn={handleSale}
      //    />
      // </div>
      <div className='w-56 mx-auto' onChange={verifyInputs}>
         <Input variant='primary' placeholder='% discount' inputRef={discountRef} />
         <SearchSelect
            options={categoryArr}
            label='choose category'
            placeholder='choose category'
            id='categoryRef'
            selectRef={categoryRef}
         />
         <div className='flex gap-2 h-24'>
            <Button variant='primary' customClass='my-4' onHandleFn={handleActiveSale} disabled={!disabled}>
               Active sale
            </Button>
            <Button variant='primary' customClass='my-4' onHandleFn={() => sale.mutate()}>
               Remove Sale
            </Button>
         </div>
      </div>
   );
};
