import { useLocation, useSearchParams } from 'react-router-dom';
import { SearchSelect } from '../../../ui/SearchSelect';
import { arrowDownIcon, arrowUpIcon } from '../../../utils/icons';
import { LinkButton } from '../../../ui/LinkButton';

export const SortTable = ({ sortByList }) => {
   const [searchParams, setSearchParams] = useSearchParams();
   const location = useLocation();

   const sortBySelected = (e) => {
      const click = e.target;

      if (!click.value) return;

      searchParams.set('sortBy', click.value);
      setSearchParams(searchParams);
   };

   const sortingOrder = (e) => {
      const click = e.target.parentElement || e.target;

      if (click.dataset.order === 'incr') searchParams.set('order', 'incr');
      if (click.dataset.order === 'decr') searchParams.set('order', 'decr');
      setSearchParams(searchParams);
   };

   return (
      <>
         <div className='flex gap-4 items-end mb-6'>
            {location.pathname === '/admin/products' || location.pathname === '/admin/users' ? (
               <LinkButton to={`${location.pathname}-new`} variant='primary'>
                  + Add new
               </LinkButton>
            ) : null}
            <SearchSelect
               onHandleFn={sortBySelected}
               options={sortByList}
               label='Sort by'
               placeholder='Choose from list'
            />
            <div className='flex items-center justify-center pb-3'>
               <p onClick={sortingOrder} data-order='incr' className='hover:cursor-pointer'>
                  {arrowUpIcon}
               </p>
               <p onClick={sortingOrder} data-order='decr' className='hover:cursor-pointer'>
                  {arrowDownIcon}
               </p>
            </div>
         </div>
      </>
   );
};
