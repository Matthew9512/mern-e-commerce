import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { Slider } from './components/Slider';
import { Section } from '../../ui/Section';
import { TestiminalCart } from './components/TestiminalCart';
import { Search } from './components/Search';
import { ProductsList } from './components/ProductsList';
import { useProducts } from '../../api/useProducts';
import { Pagination } from './components/Pagination';

export const Home = () => {
   const [searchParams] = useSearchParams();
   const [page, setPage] = useState(1);
   const [endpoint, setEndpoint] = useState(() => {
      let params = searchParams.get('category') || 'all';
      if (params !== 'all') return (params = `/products/category/${params}`);
      else return '/products';
   });

   const sortByParams = searchParams.get('sortBy') || 'all';

   const productsQuery = useProducts(endpoint, page);

   return (
      <>
         <Slider />
         <Section style='flex items-center justify-center flex-wrap' header='Filters'>
            <Search setEndpoint={setEndpoint} />
         </Section>
         <Section
            style='py-24 grid place-items-center grid-cols-[repeat(auto-fill,minmax(16em,1fr))]'
            header='Features List'
            border={true}
         >
            <ProductsList productsQuery={productsQuery} sortByParams={sortByParams} />
         </Section>
         <Pagination page={page} setPage={setPage} />
         <Section
            style='py-24 grid place-items-center grid-cols-1 lg:grid-cols-3'
            header='Users comments'
            border={true}
         >
            <TestiminalCart style='first' />
            <TestiminalCart style='second' />
            <TestiminalCart style='second' />
            <TestiminalCart style='third' />
         </Section>
      </>
   );
};
