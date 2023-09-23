import { Input } from '../../../ui/Input';
import { calendarIcon, userIcon } from '../../../utils/icons';

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

   return (
      <nav className='bg-primaryGrey flex items-center justify-between py-12 px-12'>
         <div className='flex items-center gap-2'>
            <span>{calendarIcon} </span>
            <p className='font-semibold first-letter:uppercase'>{dateFormat}</p>
         </div>
         <div className='flex items-center gap-4'>
            <Input type='text' placeholder='search' variant='primary' />
            <span className='rounded-full border p-2'>{userIcon}</span>
         </div>
      </nav>
   );
};
