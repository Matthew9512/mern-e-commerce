import { useLocation } from 'react-router-dom';
import LinkButton from '../../../ui/LinkButton';

function AsideItem({ title, icon, setDisplay }) {
   const { pathname } = useLocation();

   return (
      <LinkButton
         disabled={pathname === `/admin/${title}`}
         to={`/admin/${title}`}
         onHandleFn={() => setDisplay(false)}
         customClass={`hover:translate-x-3 flex w-36 py-2 px-3 m-2 items-center gap-2 rounded-md hover:text-primaryWhite hover:bg-primaryBlack transition-all ${
            pathname === `/admin/${title}` && 'bg-primaryBlack text-primaryWhite pointer-events-none'
         }`}
      >
         {icon} {title}
      </LinkButton>
   );
}

export default AsideItem;
