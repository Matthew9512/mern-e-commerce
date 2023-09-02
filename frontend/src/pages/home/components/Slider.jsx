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
         className='transition'
         options={{
            autoplay: true,
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
            <div className='h-full w-full relative bg-primaryBlack/30'>
               <Image image='sliderImg3.jpg' variant='primary' customClass='w-full h-[815px]' />
               <div className='absolute lg:top-20 lg:right-20 bottom-10 left-10 flex flex-col gap-6 text-primaryWhite'>
                  <p className=' uppercase font-semibold tracking-widest text-2xl'>Lorem ipsum</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <Button variant='primary' onHandleFn={scrollToProducts} customClass='lg:mx-0 ml-0'>
                     See full offer
                  </Button>
               </div>
            </div>
         </SplideSlide>
         <SplideSlide>
            <div className='h-full w-full relative bg-primaryBlack/30'>
               <Image image='sliderImg2.jpg' variant='primary' customClass='w-full h-[815px]' />
               <div className='absolute lg:top-20 lg:right-20 top-10 left-10 flex flex-col items gap-6 text-primaryWhite'>
                  <p className=' uppercase font-semibold tracking-widest text-2xl'>Lorem ipsum</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                  <p>Lorem ipsum dolor sit amet.</p>
               </div>
            </div>
         </SplideSlide>
         <SplideSlide>
            <div className='h-full w-full relative bg-primaryBlack/30'>
               <Image image='sliderImg1.jpg' variant='primary' customClass='w-full h-[815px]' />
               <div className='absolute lg:top-20 lg:right-20 top-10 left-10 flex flex-col gap-6 text-primaryWhite'>
                  <p className=' uppercase font-semibold tracking-widest text-2xl'>Lorem ipsum</p>
                  <p className='lg:w-1/2 w-3/5'>
                     Lorem ipsum dolor sit amet consectetur adipisicing.
                     <br />
                     Lorem ipsum dolor sit amet.
                  </p>
               </div>
            </div>
         </SplideSlide>
      </Splide>
   );
};
