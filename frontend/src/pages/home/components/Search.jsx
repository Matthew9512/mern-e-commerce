import debounce from 'lodash.debounce';
import { useMemo } from 'react';
import { Input } from '../../../ui/Input';
import { MultiRangeSlider } from '../../../ui/MultiRangeSlider';
import { SearchSelect } from '../../../ui/SearchSelect';
import { Button } from '../../../ui/Button';
import { categoryArr, sortArr } from '../../../utils/constants';
import { useFilterParams } from '../../../api/useFilterParams';
import { handleNameFilter } from '../../../api/filterBy';

export const Search = ({ setEndpoint, reqType, setPage }) => {
   const { searchParams, setSearchParams, clearFilters, handleSearchBy } = useFilterParams(
      setEndpoint,
      reqType,
      setPage
   );

   // debounce for search by name input
   const debounceFn = useMemo(
      () =>
         debounce((e) => {
            setSearchParams(searchParams.set('', ''));
            handleNameFilter(e, setEndpoint);
         }, 400),
      []
   );

   return (
      <>
         {searchParams?.size > 0 && (
            <Button variant='primary' customClass='lg:mx-0' onHandleFn={clearFilters}>
               Clear filters
            </Button>
         )}
         <SearchSelect
            id='searchSelect'
            onHandleFn={handleSearchBy}
            options={categoryArr}
            label='Search by category'
            category='category'
            placeholder='e.g. boots'
         />
         <SearchSelect
            id='searchSelect'
            onHandleFn={handleSearchBy}
            options={sortArr}
            label='Filter by'
            category='filter'
            placeholder='e.g. price-up'
         />
         <Input
            onHandleFn={debounceFn}
            type='text'
            label='Product name'
            placeholder='e.g. gloves'
            variant='primary'
            id='searchSelect'
         />
         {/* <MultiRangeSlider onHandleFn={handleSearchBy} min={0} max={3000} /> */}
      </>
   );
};
