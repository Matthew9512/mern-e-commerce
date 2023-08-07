import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { fetchData } from '../api/fetchData';
import { LoadingButton } from '../ui/LoadingButton';
import { Form } from '../ui/Form';

export const Login = () => {
   const [disabledBtn, setDisabledBtn] = useState(true);
   const formRef = useRef();
   const navigate = useNavigate();

   const loginMutation = useMutation({
      mutationFn: async (e) => {
         e.preventDefault();
         return await fetchData({
            method: 'POST',
            url: '/users/login',
            data: {
               password: `${formRef.current.password.value}`,
               email: `${formRef.current.email.value}`,
            },
         });
      },
      onSuccess: (data) => {
         localStorage.setItem('access__token', JSON.stringify(data?.accessToken));
         toast.success(data?.message);
         navigate('/');
      },
      onError: (err) => toast.error(err.message),
   });

   const verifyFrom = () => {
      if (!formRef.current.email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || formRef.current.password.value.length < 3)
         return setDisabledBtn(true);
      setDisabledBtn(false);
   };

   return (
      <Section variant='flexCol'>
         <Form onHandleFn={verifyFrom} formRef={formRef} variant='default'>
            <Input label='email' type='text' placeholder='e.g. adam@gmail.com' variant='secondary' />
            <Input label='password' type='password' placeholder='password' variant='secondary' />
            {loginMutation.isLoading ? (
               <LoadingButton />
            ) : (
               <Button onHandleFn={(e) => loginMutation.mutate(e)} variant='primary' disabled={disabledBtn}>
                  Login
               </Button>
            )}
         </Form>
         <Link to='/register'>
            <p className='opacity-70'>
               Don&apos;t have an account?
               <span className='ml-2 underline'>Sign Up</span>
            </p>
         </Link>
      </Section>
   );
};
