import { loadingSpinnerIcon } from '../utils/icons';
import { Button } from './Button';

export const LoadingButton = () => {
   return (
      <Button variant='primary'>
         {loadingSpinnerIcon} <span className='pl-3'>Loading...</span>
      </Button>
   );
};
