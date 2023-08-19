import { Link } from 'react-router-dom';
import { Button } from './Button';

export const LinkButton = ({ children, customClass, to, variant, disabled }) => {
   return (
      <Link to={to}>
         <Button disabled={disabled} customClass={customClass} variant={variant}>
            {children}
         </Button>
      </Link>
   );
};
