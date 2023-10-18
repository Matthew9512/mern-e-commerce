import Button from '../../../ui/Button';

function Pagination({ page, onHandleReq, fetchQuery }) {
   return (
      <div className='flex items-center justify-center gap-12 my-8'>
         <Button onClick={(e) => onHandleReq(e)} data-type='prev' disabled={page === 1} variant='secondary'>
            prev
         </Button>
         <p>
            {page}/{fetchQuery.data?.pagesAmount}
         </p>
         <Button
            onClick={(e) => onHandleReq(e)}
            data-type='next'
            disabled={page === fetchQuery.data?.pagesAmount}
            variant='secondary'
         >
            next
         </Button>
      </div>
   );
}

export default Pagination;
