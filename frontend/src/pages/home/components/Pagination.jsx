import { Button } from '../../../ui/Button';

export const Pagination = ({ page, setPage }) => {
   return (
      <div className='flex items-center justify-center gap-12 mb-8'>
         <Button onHandleFn={() => setPage((prev) => prev - 1)} variant='secondary'>
            prev
         </Button>
         <p>{page}/10</p>
         <Button onHandleFn={() => setPage((prev) => prev + 1)} variant='secondary'>
            next
         </Button>
      </div>
   );
};
