import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Button } from '../../../ui/Button';
import { Image } from '../../../ui/Image';

export const Slider = () => {
   const scrollToProducts = () => {
      document.querySelector('#productsList').scrollIntoView({ behavior: 'smooth' });
   };

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
            <div className='h-full w-full relative'>
               <Image image='/b.jpg' variant='primary' customClass='w-full h-[815px]' />
               <div className='absolute top-20 right-20 flex flex-col gap-8 text-primaryWhite'>
                  <h2 className=' uppercase font-semibold tracking-widest text-lg'>Shop perks</h2>
                  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <Button variant='primary' onHandleFn={scrollToProducts} customClass='mx-0'>
                     See full offer
                  </Button>
               </div>
            </div>
         </SplideSlide>
         <SplideSlide>
            <div className='h-full w-full relative'>
               <Image image='/a.jpg' variant='primary' customClass='w-full h-[815px]' />
               <div className='absolute top-20 right-20 flex flex-col gap-8 text-primaryWhite'>
                  <h2 className=' uppercase font-semibold tracking-widest text-lg'>Shop perks</h2>
                  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <Button variant='primary' customClass='mx-0'>
                     See full offer
                  </Button>
               </div>
            </div>
         </SplideSlide>
         <SplideSlide>
            <div className='h-full w-full relative'>
               <Image image='/moto.jpg' variant='primary' customClass='w-full h-[815px]' />
               <div className='absolute top-20 right-20 flex flex-col gap-8 text-primaryWhite'>
                  <h2 className=' uppercase font-semibold tracking-widest text-lg'>Shop perks</h2>
                  <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <Button variant='primary' customClass='mx-0'>
                     See full offer
                  </Button>
               </div>
            </div>
         </SplideSlide>
      </Splide>
   );
};
