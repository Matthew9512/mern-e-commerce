import { useRef, useState } from 'react';
import { Button } from '../../ui/Button';
import { Section } from '../../ui/Section';
import { Input } from '../../ui/Input';
import { LoadingButton } from '../../ui/LoadingButton';
import { Form } from '../../ui/Form';
import { LinkButton } from '../../ui/LinkButton';
import { UsersDataForm } from './components/UsersDataForm';
import { useMutateRegister } from '../../api/useUser';

export const Register = () => {
   const [disabledBtn, setDisabledBtn] = useState(true);
   const [register, setRegister] = useState(false);
   const formRef = useRef();
   const registerMutation = useMutateRegister(setRegister);

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
         {!register ? (
            <>
               <Form onHandleFn={verifyFrom} formRef={formRef} variant='default'>
                  <Input label='username' type='text' placeholder='e.g. adam' variant='secondary' />
                  <Input label='email' type='email' placeholder='e.g. adam@gmail.com' variant='secondary' />
                  <Input label='password' type='password' placeholder='password' variant='secondary' />
                  {registerMutation.isLoading ? (
                     <LoadingButton />
                  ) : (
                     <Button
                        onHandleFn={(e) => registerMutation.mutate({ e, formRef })}
                        variant='primary'
                        disabled={disabledBtn}
                     >
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
            </>
         ) : (
            <UsersDataForm registerMutation={registerMutation} />
         )}
      </Section>
   );
};
