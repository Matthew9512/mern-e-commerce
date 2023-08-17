import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Button } from '../../../ui/Button';

export const Slider = () => {
   return (
      <Splide
         options={{
            // autoplay: true,
            interval: 3000,
            type: 'loop',
            height: '70vh',
            width: '100%',
            perPage: 1,
            pagination: false,
         }}
         aria-label='React Splide'
      >
         <SplideSlide className='bg-[url(/kangaroo.jpg)] bg-center bg-no-repeat bg-cover text-primaryWhite'>
            <h2>Active Sale hurry up dont miss a chance</h2>
         </SplideSlide>
         <SplideSlide>
            {/* <div className='h-full w-full bg-no-repeat bg-center bg-cover bg-[url("../../../../public/kangaroo.jpg")] relative'>
               <div className='absolute bottom-20 right-20 flex flex-col gap-4'>
                  <h2 className='text-primaryWhite'>Shop perks</h2>
                  <p className='text-primaryWhite'>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, iste.
                  </p>
                  <Button variant='primary'>See full offer</Button>
               </div>
            </div> */}
         </SplideSlide>
      </Splide>
   );
};
