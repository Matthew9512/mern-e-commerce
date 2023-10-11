// import { useMemo } from 'react';
// import { Input } from '../../../ui/Input';
import { calendarIcon, userIcon } from '../../../utils/icons';
// import debounce from 'lodash.debounce';

export const Navbar = () => {
   const date = new Date();
   const browserLan = navigator.language;
   let options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
   };
   const dateFormat = new Intl.DateTimeFormat(browserLan, options).format(date);

   // const debounceFn = useMemo(
   //    () =>
   //       debounce((e) => {
   //          console.log(`hi`);
   //       }, 400),
   //    []
   // );

   return (
      <nav className='flex items-center justify-between py-11 lg:px-12 px-6 w-full'>
         <div className='flex items-center gap-2'>
            <span>{calendarIcon} </span>
            <p className='font-semibold first-letter:uppercase'>{dateFormat}</p>
         </div>
         <div className='flex items-center gap-4'>
            Welcome
            {/* <Input type='text' placeholder='search' variant='primary' onHandleFn={debounceFn} /> */}
            <span className='rounded-full border p-2'>{userIcon}</span>
         </div>
      </nav>
   );
};
