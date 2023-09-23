import { Button } from './Button';
import { closeIcon } from '../utils/icons';

export const Modal = ({ display, setDisplay, children }) => {
   return (
      <div
         className={`absolute inset-0 bg-primaryBlack/30 flex items-center justify-center flex-col text-primaryWhite ${
            !display && 'hidden'
         }`}
      >
         <div className='relative w-96 h-96 bg-primaryBlue rounded-md'>
            <Button
               onHandleFn={() => setDisplay((prev) => !prev)}
               variant='rounded'
               customClass='absolute top-2 right-2'
            >
               {closeIcon}
            </Button>
            {children}
         </div>
      </div>
   );
};
