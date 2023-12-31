import { useLocation, useSearchParams } from 'react-router-dom';
import SearchSelect from '../../../ui/SearchSelect';
import { arrowDownIcon, arrowUpIcon } from '../../../utils/icons';
import LinkButton from '../../../ui/LinkButton';

function SortTable({ sortByList, fetchQuery }) {
   const [searchParams, setSearchParams] = useSearchParams();
   const location = useLocation();

   const sortBySelected = (e) => {
      const click = e.target;

      if (!click.value) return;

      searchParams.set('sortBy', click.value);
      setSearchParams(searchParams);
      // sort data
      fetchQuery();
   };

   const sortingOrder = (e) => {
      const click = e.target.parentElement || e.target;

      if (click.dataset.order === 'incr') searchParams.set('order', 'incr');
      if (click.dataset.order === 'decr') searchParams.set('order', 'decr');
      setSearchParams(searchParams);
      // sort data
      fetchQuery();
   };

   return (
      <>
         <div className='flex md:flex-row flex-col md:gap-4 gap-1 items-end mb-6'>
            {location.pathname === '/admin/products' ? (
               <LinkButton to={`${location.pathname}-new`} variant='primary'>
                  + Add new
               </LinkButton>
            ) : null}
            <div className='flex gap-2 items-end justify-center'>
               <SearchSelect
                  onChange={sortBySelected}
                  options={sortByList}
                  label='Sort by'
                  placeholder='Choose from list'
               />
               <div className='flex items-center justify-center pb-3'>
                  <p
                     onClick={sortingOrder}
                     data-order='incr'
                     className={`hover:cursor-pointer ${
                        location.search.includes('order=incr') ? 'pointer-events-none opacity-30' : ''
                     }`}
                  >
                     {arrowUpIcon}
                  </p>
                  <p
                     onClick={sortingOrder}
                     data-order='decr'
                     className={`hover:cursor-pointer ${
                        location.search.includes('order=decr') ? 'pointer-events-none opacity-30' : ''
                     }`}
                  >
                     {arrowDownIcon}
                  </p>
               </div>
            </div>
         </div>
      </>
   );
}

export default SortTable;
