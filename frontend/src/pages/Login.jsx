import { useRef, useState } from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { LoadingButton } from '../ui/LoadingButton';
import { Form } from '../ui/Form';
import { LinkButton } from '../ui/LinkButton';
import { useMutateLogin } from '../api/useUser';

export const Login = () => {
   const [disabledBtn, setDisabledBtn] = useState(true);
   const formRef = useRef();
   const loginMutation = useMutateLogin();

   const verifyFrom = () => {
      if (!formRef.current.email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || formRef.current.password.value.length < 3)
         return setDisabledBtn(true);
      setDisabledBtn(false);
   };

   return (
      <Section style='py-24 flex flex-col items-center justify-center flex-wrap'>
         <Form onHandleFn={verifyFrom} formRef={formRef} variant='default'>
            <Input label='email' type='text' placeholder='e.g. adam@gmail.com' variant='secondary' />
            <Input label='password' type='password' placeholder='password' variant='secondary' />
            {loginMutation.isLoading ? (
               <LoadingButton />
            ) : (
               <Button
                  onHandleFn={(e) => loginMutation.mutate({ e, formRef })}
                  variant='primary'
                  disabled={disabledBtn}
               >
                  Login
               </Button>
            )}
         </Form>
         <LinkButton to='/register'>
            <p className='opacity-70'>
               Don&apos;t have an account?
               <span className='ml-2 underline'>Sign Up</span>
            </p>
         </LinkButton>
      </Section>
   );
};
