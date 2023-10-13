import { useSearchParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import Slider from './components/Slider';
import Section from '../../ui/Section';
import TestiminalCart from './components/TestiminalCart';
import Search from './components/Search';
import ProductsList from './components/ProductsList';
import { useProducts } from '../../api/useProducts';
import Pagination from './components/Pagination';

function Home() {
   const [searchParams, setSearchParams] = useSearchParams();
   const [page, setPage] = useState(1);
   let reqType = useRef(false);
   const [endpoint, setEndpoint] = useState(() => {
      let params = searchParams.get('category') || 'all';
      if (params !== 'all') return (params = `/products/category/${params}`);
      else return '/products';
   });

   const sortByParams = searchParams.get('sortBy') || 'all';

   const productsQuery = useProducts(endpoint, page, reqType);

   const onHandleReq = (e) => {
      const click = e.target;

      // set loading next page
      reqType.current = true;
      // clear search params
      setSearchParams(searchParams.set('', ''));

      if (click.dataset.type === 'prev') setPage((prev) => prev - 1);
      if (click.dataset.type === 'next') setPage((prev) => prev + 1);
   };

   return (
      <>
         <Slider />
         <Section style='flex items-center justify-center md:flex-row flex-col gap-8' header='Filters'>
            <Search setEndpoint={setEndpoint} setPage={setPage} reqType={reqType} />
         </Section>
         <Section
            id='productsList'
            style='py-24 grid place-items-center grid-cols-[repeat(auto-fill,minmax(16em,1fr))]'
            header='Features List'
            border={true}
         >
            <ProductsList productsQuery={productsQuery} sortByParams={sortByParams} />
         </Section>
         {productsQuery.data?.pagesAmount > 1 && (
            <Pagination page={page} onHandleReq={onHandleReq} fetchQuery={productsQuery} />
         )}
         <Section
            style='py-24 grid place-items-center grid-cols-1 lg:grid-cols-3'
            header='Users comments'
            border={true}
         >
            <TestiminalCart style='lg:col-start-1 lg:row-span-3' />
            <TestiminalCart style='lg:col-start-2' />
            <TestiminalCart style='lg:col-start-2' />
            <TestiminalCart style='lg:col-start-3 lg:row-start-1 lg:row-span-3' />
         </Section>
      </>
   );
}

export default Home;
