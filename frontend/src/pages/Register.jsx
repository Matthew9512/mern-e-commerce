import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { Input } from '../ui/Input';
import { LoadingButton } from '../ui/LoadingButton';
import { fetchData } from '../api/fetchData';
import { Form } from '../ui/Form';
import { LinkButton } from '../ui/LinkButton';

export const Register = () => {
   const [disabledBtn, setDisabledBtn] = useState(true);
   const formRef = useRef();

   const registerMutation = useMutation({
      mutationFn: async (e) => {
         e.preventDefault();
         return await fetchData({
            method: 'POST',
            url: '/users/register',
            data: {
               password: `${formRef.current.password.value}`,
               email: `${formRef.current.email.value}`,
               username: `${formRef.current.username.value}`,
            },
         });
      },
      onSuccess: (data) => toast.success(data?.message),
      onError: (err) => toast.error(err.message),
   });

   const verifyFrom = () => {
      if (
         !formRef.current.email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) ||
         formRef.current.password.value.length < 3 ||
         formRef.current.username.value.length < 3
      )
         return setDisabledBtn(true);
      setDisabledBtn(false);
   };

   return (
      <Section style='py-24 flex flex-col items-center justify-center flex-wrap'>
         <Form onHandleFn={verifyFrom} formRef={formRef} variant='default'>
            <Input label='username' type='text' placeholder='e.g. adam' variant='secondary' />
            {/* {error && <ErrorMessage>asdasdadadsasd</ErrorMessage>} */}
            <Input label='email' type='email' placeholder='e.g. adam@gmail.com' variant='secondary' />
            {/* {error && <ErrorMessage>asdasdadadsasd</ErrorMessage>} */}
            <Input label='password' type='password' placeholder='password' variant='secondary' />
            {/* {error && <ErrorMessage>asdasdadadsasd</ErrorMessage>} */}
            {registerMutation.isLoading ? (
               <LoadingButton />
            ) : (
               <Button onHandleFn={(e) => registerMutation.mutate(e)} variant='primary' disabled={disabledBtn}>
                  Register
               </Button>
            )}
         </Form>
         <LinkButton to='/login'>
            <p className='opacity-70'>
               Have an account?
               <span className='ml-2 underline'>Log in</span>
            </p>
         </LinkButton>
      </Section>
   );
};
