import { Link } from 'react-router-dom';
import { Button } from './Button';

export const LinkButton = ({ children, to, variant }) => {
   return (
      <Link to={to}>
         <Button variant={variant}>{children}</Button>
      </Link>
   );
};
