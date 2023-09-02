import { Button } from '../../../ui/Button';

export const Pagination = ({ page, onHandleReq, productsQuery }) => {
   return (
      <div className='flex items-center justify-center gap-12 my-8'>
         <Button onHandleFn={(e) => onHandleReq(e)} dataType='prev' disabled={page === 1} variant='secondary'>
            prev
         </Button>
         <p>
            {page}/{productsQuery.data?.pagesAmount}
         </p>
         <Button
            onHandleFn={(e) => onHandleReq(e)}
            dataType='next'
            disabled={page === productsQuery.data?.pagesAmount}
            variant='secondary'
         >
            next
         </Button>
      </div>
   );
};
