import { toast } from 'react-hot-toast';
import { Form } from '../../../ui/Form';
import { Input } from '../../../ui/Input';
import { Button } from '../../../ui/Button';
import { useMutateUser } from '../../../api/useUser';
import { LoadingButton } from '../../../ui/LoadingButton';

export const UsersDataForm = ({ registerMutation }) => {
   const usersMutation = useMutateUser(registerMutation.data.id);

   const saveUsersData = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const formData = Object.fromEntries(form);

      usersMutation.mutate(formData, {
         onSuccess: (data) => toast.success(data?.message),
         onError: (err) => toast.error(err?.message),
      });
   };

   return (
      <Form onSubmitFn={saveUsersData} variant='default'>
         <Input label='name' type='text' placeholder='e.g. adam' variant='secondary' />
         <Input label='surname' type='text' placeholder='e.g. kowalski' variant='secondary' />
         <Input label='adress' type='text' placeholder='e.g. wierzbowa 4' variant='secondary' />
         <Input label='city' type='text' placeholder='e.g. adam' variant='secondary' />
         <Input label='zipcode' type='text' placeholder='e.g. 58-578' variant='secondary' />
         {usersMutation.isLoading ? <LoadingButton /> : <Button variant='primary'>Save</Button>}
      </Form>
   );
};
