import { toast } from 'react-hot-toast';
import { Button } from '../ui/Button';

export const Home = () => {
   return (
      <>
         <Button variant='primary' onClick={() => toast.success('yeeeeeeey')}>
            success
         </Button>
         <Button variant='secondary' onClick={() => toast.error('yeeeeeeey')}>
            error
         </Button>
      </>
   );
};
