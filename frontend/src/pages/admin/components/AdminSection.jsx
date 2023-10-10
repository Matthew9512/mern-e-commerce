import { LoadingSpinner } from '../../../ui/LoadingSpinner';
import { ErrorMessage } from '../../../ui/ErrorMessage';
import { Pagination } from '../../home/components/Pagination';
import { SortTable } from './SortTable';

export const AdminSection = ({ fetchQuery, header, page, onHandleReq, sortByList, children }) => {
   return (
      <article className='lg:px-12 lg:py-4 px-6 py-2'>
         <div className='flex justify-between items-center'>
            <p className='uppercase font-semibold text-lg tracking-widest'>{header}</p>
            <SortTable sortByList={sortByList} fetchQuery={fetchQuery.refetch} />
         </div>
         {fetchQuery.isLoading && <LoadingSpinner />}
         {fetchQuery.error && <ErrorMessage />}
         {children}
         {fetchQuery.data?.pagesAmount > 1 && (
            <Pagination page={page} onHandleReq={onHandleReq} fetchQuery={fetchQuery} />
         )}
      </article>
   );
};
