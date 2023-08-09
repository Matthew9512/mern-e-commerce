import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { Slider } from './components/Slider';
import { Section } from '../../ui/Section';
import { TestiminalCart } from './components/TestiminalCart';
import { Search } from './components/Search';
import { ProductsList } from './components/ProductsList';
import { useProducts } from '../../api/useProducts';

export const Home = () => {
   const [searchParams] = useSearchParams();
   const [endpoint, setEndpoint] = useState(() => {
      let params = searchParams.get('category') || 'all';
      if (params !== 'all') return (params = `/products/category/${params}`);
      else return '/products';
   });
   console.log(endpoint);
   const sortByParams = searchParams.get('sortBy') || 'all';

   const productsQuery = useProducts(endpoint);

   // const productsQuery = useQuery({
   //    queryKey: ['products', `${endpoint}`],
   //    queryFn: () =>
   //       fetchData({
   //          url: endpoint,
   //       }),
   // });

   return (
      <>
         <Slider />
         <Section variant='flexRow' header='Filter'>
            <Search setEndpoint={setEndpoint} />
         </Section>
         <Section variant='gridAutoFit' header='Features List'>
            <ProductsList productsQuery={productsQuery} sortByParams={sortByParams} />
         </Section>
         <Section variant='gridCols' header='Users comments'>
            <TestiminalCart style='first' />
            <TestiminalCart style='second' />
            <TestiminalCart style='second' />
            <TestiminalCart style='third' />
         </Section>
      </>
   );
};
