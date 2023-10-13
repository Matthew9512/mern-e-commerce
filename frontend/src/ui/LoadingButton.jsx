import { loadingSpinnerIcon } from '../utils/icons';
import Button from './Button';

function LoadingButton() {
   return (
      <Button variant='primary'>
         {loadingSpinnerIcon} <span className='pl-3'>Loading...</span>
      </Button>
   );
}

export default LoadingButton;
