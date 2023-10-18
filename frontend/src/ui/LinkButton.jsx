import { Link } from 'react-router-dom';
import Button from './Button';

function LinkButton({ children, customClass, to, variant, disabled, ...props }) {
   return (
      <Link to={to}>
         <Button disabled={disabled} customClass={customClass} variant={variant} {...props}>
            {children}
         </Button>
      </Link>
   );
}

export default LinkButton;
