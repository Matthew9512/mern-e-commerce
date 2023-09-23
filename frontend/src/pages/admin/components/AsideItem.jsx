import { useLocation } from 'react-router-dom';
import { LinkButton } from '../../../ui/LinkButton';

export const AsideItem = ({ title, icon }) => {
   const { pathname } = useLocation();

   return (
      <LinkButton
         disabled={pathname === `/admin/${title}`}
         to={`/admin/${title}`}
         customClass={`flex w-36 py-2 px-3 m-2 items-center gap-2 rounded-md hover:text-primaryWhite hover:bg-primaryBlack/80 ${
            pathname === `/admin/${title}` && 'bg-primaryBlack text-primaryWhite'
         }`}
      >
         {icon} {title}
      </LinkButton>
   );
};
