// import { loadingSpinnerIcon } from '../utils/icons';
// import { Button } from './Button';

// export const LoadingButton = ({ text, loading, variant, customClass, onHandleFn }) => {
//    return (
//       <>
//          {loading ? (
//             <Button variant={variant} customClass={customClass}>
//                {loadingSpinnerIcon} <span className='pl-3'>Loading...</span>
//             </Button>
//          ) : (
//             <Button variant={variant} customClass={customClass} onHandleFn={onHandleFn}>
//                {text}
//             </Button>
//          )}
//       </>
//    );
// };

import { loadingSpinnerIcon } from '../utils/icons';
import { Button } from './Button';

export const LoadingButton = () => {
   return (
      <Button variant='primary'>
         {loadingSpinnerIcon} <span className='pl-3'>Loading...</span>
      </Button>
   );
};
