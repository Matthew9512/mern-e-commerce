import { Button } from '../../../ui/Button';
import { asideMenuObj } from '../../../utils/constants';
import { logoIcon } from '../../../utils/icons';
import { AsideItem } from './AsideItem';

export const AsideMenu = () => {
   return (
      <aside className='flex flex-col items-center justify-between w-44 pt-12 h-screen bg-primaryBlue'>
         <div className=''>
            <p className='flex justify-center items-center gap-2 mb-12 font-semibold'>{logoIcon} JustRide</p>
            <li className='list-none'>
               {asideMenuObj.map((item) => (
                  <AsideItem key={item.title} title={item.title} icon={item.icon} />
               ))}
            </li>
         </div>
         <Button variant='primary'>Log out</Button>
      </aside>
   );
};
