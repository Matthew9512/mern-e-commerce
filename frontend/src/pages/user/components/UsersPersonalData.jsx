import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useMutateUser, useUsers } from '../../../api/useUser';
import { Section } from '../../../ui/Section';
import { LoadingSpinner } from '../../../ui/LoadingSpinner';
import { Form } from '../../../ui/Form';
import { Input } from '../../../ui/Input';
import { UsersNavbar } from './UsersNavbar';
import { Button } from '../../../ui/Button';
import { LoadingButton } from '../../../ui/LoadingButton';

export const UsersPersonalData = () => {
   const [edit, setEdit] = useState(false);
   const usersQuery = useUsers();
   const usersMutation = useMutateUser(usersQuery.data?._id);

   const handlePersonalDataForm = (e) => {
      e.preventDefault();

      if (!edit) return setEdit(true);

      const form = new FormData(e.currentTarget);
      const formData = Object.fromEntries(form);

      usersMutation.mutate(formData, {
         onSuccess: (data) => {
            toast.success(data?.message);
            setEdit(false);
         },
         onError: (err) => toast.error(err?.message),
      });
   };

   return (
      <Section style='py-3 flex flex-col flex-wrap'>
         <UsersNavbar />
         {usersQuery.isLoading && <LoadingSpinner />}
         {!usersQuery.data ? (
            <p>asd</p>
         ) : (
            <Form onSubmitFn={handlePersonalDataForm} variant='default'>
               {Object.entries(usersQuery.data.usersData).map(([key, value]) => (
                  <Input key={key} type='text' variant='secondary' disabled={!edit} label={key} defValue={value} />
               ))}
               <div className='flex gap-2 mx-auto'>
                  {usersMutation.isLoading ? (
                     <LoadingButton />
                  ) : (
                     <Button variant='primary'>{!edit ? 'Edit' : 'Save'}</Button>
                  )}
                  {edit && (
                     <Button onHandleFn={() => setEdit(false)} variant='primary'>
                        Cancel
                     </Button>
                  )}
               </div>
            </Form>
         )}
      </Section>
   );
};
