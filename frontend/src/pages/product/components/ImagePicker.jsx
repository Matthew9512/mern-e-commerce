import { useEffect, useState } from 'react';
import Image from '../../../ui/Image';

function ImagePicker({ productsQuery }) {
   const [currentImg, setCurrentImg] = useState(0);

   const changeImage = (e) => {
      const click = e.target;
      if (!click.dataset.img) return;

      setCurrentImg(click.dataset.img);
   };

   useEffect(() => {
      if (!productsQuery) return;

      setCurrentImg(productsQuery.at(0));
   }, [productsQuery]);

   return (
      <article className='w-[25em] flex justify-center items-center gap-4 bg-slate-500'>
         <div onClick={changeImage} className='flex flex-col justify-center flex-wrap gap-2 items-center pt-4 mr-2'>
            {productsQuery
               ? productsQuery.length > 1 &&
                 productsQuery.map((img, i) => (
                    <div key={i} className='w-[6em] h-[6em]'>
                       <Image
                          src={img}
                          data-img={img}
                          variant='primary'
                          customClass={currentImg === img ? 'opacity-20 cursor-not-allowed' : 'hover:cursor-pointer'}
                       />
                    </div>
                 ))
               : 'Products image no available'}
         </div>
         <div className='flex items-center justify-center w-[25em] h-[25em]'>
            <Image src={currentImg} variant='primary' alt='Products image' />
         </div>
      </article>
   );
}

export default ImagePicker;
// flex items-center flex-wrap
