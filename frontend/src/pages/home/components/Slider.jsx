import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
         <SplideSlide>
            <img src='/kangaroo.jpg' className='h-full w-full object-cover' />
         </SplideSlide>
         <SplideSlide>
            <img src='/cat.jpg' className='h-full w-full object-cover' />
         </SplideSlide>
         <SplideSlide>
            <img src='/mountain.jpg' className='h-full w-full object-cover' />
         </SplideSlide>
         <SplideSlide>
            <img src='/water.jpg' className='h-full w-full object-cover' />
         </SplideSlide>
      </Splide>
   );
};
