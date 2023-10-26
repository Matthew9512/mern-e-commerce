import Button from './Button';
import { closeIcon } from '../utils/icons';

export const Modal = ({ display, setDisplay, children }) => {
   return (
      <div
         className={`absolute inset-0 bg-secondaryWhite/20 backdrop-blur-sm flex items-center justify-center flex-col text-primaryWhite z-50 ${
            !display && 'hidden'
         }`}
      >
         <div className='relative w-[90%] min-h-[16em] max-h-[44em] p-2 bg-primaryGrey shadow-2xl text-primaryBlack rounded-md overflow-auto'>
            <Button onClick={() => setDisplay((prev) => !prev)} variant='rounded' customClass='absolute top-2 right-2'>
               {closeIcon}
            </Button>
            {children}
         </div>
      </div>
   );
};

export const ConfirmModal = ({ display, setDisplay, fetchQuery, itemID, item }) => {
   return (
      <div
         className={`absolute inset-0 bg-secondaryWhite/20 backdrop-blur-sm flex items-center justify-center flex-col text-primaryWhite z-50 ${
            !display && 'hidden'
         }`}
      >
         <div className='relative w-96 h-48 p-6 bg-primaryWhite text-primaryBlack shadow-2xl rounded-md overflow-auto flex gap-2 flex-col'>
            <p className='text-left font-semibold text-lg'>Delete {item}</p>
            <p className='text-left'>
               Are you sure that you want to delete this {item}? This action can&apos;t be undone?
            </p>
            <div className='absolute right-4 bottom-6 flex gap-4'>
               <Button variant='primary' onClick={() => setDisplay((prev) => !prev)}>
                  Cancel
               </Button>
               <Button
                  variant='primary'
                  onClick={() => {
                     fetchQuery.mutate(itemID.current);
                     setDisplay((prev) => !prev);
                  }}
               >
                  Remove
               </Button>
            </div>
         </div>
      </div>
   );
};

export default { Modal, ConfirmModal };
