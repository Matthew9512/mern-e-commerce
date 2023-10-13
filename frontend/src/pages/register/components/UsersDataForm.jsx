import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Form from '../../../ui/Form';
import Input from '../../../ui/Input';
import Button from '../../../ui/Button';
import LoadingButton from '../../../ui/LoadingButton';
import { useMutateUser } from '../../../api/useUser';

function UsersDataForm({ registerMutation }) {
   const usersDataMutation = useMutateUser(registerMutation.data.id);
   const navigate = useNavigate();

   const saveUsersData = (e) => {
      e.preventDefault();
      const form = new FormData(e.currentTarget);
      const formData = Object.fromEntries(form);

      usersDataMutation.mutate(formData, {
         onSuccess: (data) => {
            toast.success(data?.message);
            navigate('/');
         },
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
         {usersDataMutation.isLoading ? <LoadingButton /> : <Button variant='primary'>Save</Button>}
      </Form>
   );
}

export default UsersDataForm;
