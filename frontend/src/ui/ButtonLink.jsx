import { Link } from 'react-router-dom';
import { Button } from './Button';

export const ButtonLink = ({ children, to }) => {
   return (
      <Link to={to}>
         <Button variant='primary'>{children}</Button>
      </Link>
   );
};
