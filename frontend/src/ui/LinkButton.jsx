import { Link } from 'react-router-dom';
import Button from './Button';

function LinkButton({ children, customClass, to, variant, disabled, onHandleFn }) {
   return (
      <Link to={to}>
         <Button disabled={disabled} customClass={customClass} variant={variant} onHandleFn={onHandleFn}>
            {children}
         </Button>
      </Link>
   );
}

export default LinkButton;
