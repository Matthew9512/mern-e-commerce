import { userIcon } from '../../../utils/icons';

export const TestiminalCart = ({ style }) => {
   const styles = {
      first: 'lg:col-start-1 lg:row-span-3',
      second: 'lg:col-start-2',
      third: 'lg:col-start-3 lg:row-start-1 lg:row-span-3',
   };

   return (
      <div
         className={`w-full ${styles[style]} flex justify-center gap-4 rounded-md border-t border-primaryBlack/40 bg-secondaryWhite p-3`}
      >
         <div className='my-auto flex-none'>
            <p className='rounded-full p-2 border'>{userIcon}</p>
         </div>
         <div className='flex flex-col'>
            <p>lorem lorem</p>
            <p className='text-sm'>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, sit Lorem ipsum dolor sit amet,
               consectetur?
            </p>
         </div>
      </div>
   );
};
