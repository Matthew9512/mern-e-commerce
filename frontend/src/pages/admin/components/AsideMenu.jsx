import { Button } from '../../../ui/Button';
import { asideMenuObj } from '../../../utils/constants';
import { logoIcon, menuIcon } from '../../../utils/icons';
import { AsideItem } from './AsideItem';
import { LinkButton } from '../../../ui/LinkButton';
import { useState } from 'react';

export const AsideMenu = () => {
   const [display, setDisplay] = useState(false);

   return (
      <div>
         <div
            onClick={() => setDisplay((prev) => !prev)}
            className='lg:hidden block fixed top-4 left-4 z-50 w-min hover:cursor-pointer'
         >
            {menuIcon}
         </div>
         <aside
            className={`lg:flex lg:translate-x-0 duration-300 -translate-x-full fixed flex-col items-center justify-between w-44 pt-12 h-screen z-20 lg:bg-primaryWhite bg-secondaryWhite/100 ${
               display ? 'translate-x-0' : ''
            }`}
         >
            <div>
               <LinkButton to='/' customClass='flex justify-center items-center gap-2 mb-12 font-semibold mx-auto'>
                  {logoIcon} JustRide
               </LinkButton>
               <li className='list-none'>
                  {asideMenuObj.map((item) => (
                     <AsideItem key={item.title} title={item.title} icon={item.icon} />
                  ))}
               </li>
            </div>
            <Button variant='primary'>Log out</Button>
         </aside>
      </div>
   );
};
// import { Button } from '../../../ui/Button';
// import { asideMenuObj } from '../../../utils/constants';
// import { logoIcon } from '../../../utils/icons';
// import { AsideItem } from './AsideItem';
// import { LinkButton } from '../../../ui/LinkButton';

// export const AsideMenu = () => {
//    return (
//       <aside className='flex flex-col items-center justify-between w-44 pt-12 h-screen'>
//          <div>
//             <LinkButton to='/' customClass='flex justify-center items-center gap-2 mb-12 font-semibold mx-auto'>
//                {logoIcon} JustRide
//             </LinkButton>
//             <li className='list-none'>
//                {asideMenuObj.map((item) => (
//                   <AsideItem key={item.title} title={item.title} icon={item.icon} />
//                ))}
//             </li>
//          </div>
//          <Button variant='primary'>Log out</Button>
//       </aside>
//    );
// };
