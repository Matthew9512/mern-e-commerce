import axios from 'axios';
import { useRef } from 'react';

export const Register = () => {
   const usernameRef = useRef();
   const passwordRef = useRef();
   const emailRef = useRef();

   const login = (e) => {
      e.preventDefault();

      const fe = async () => {
         const res = await axios.post('http://localhost:8000/users/register', {
            data: {
               username: usernameRef.current.value,
               password: passwordRef.current.value,
               email: emailRef.current.value,
            },
         });
         const data = await res.data;
         console.log(data);
      };
      fe();
   };

   return (
      <form className='flex flex-col w-[20em] p-4 gap-3 bg-slate-600'>
         <input ref={usernameRef} type='text' placeholder='name' name='username' />
         <input ref={passwordRef} type='text' placeholder='pass' name='password' />
         <input ref={emailRef} type='text' placeholder='email' name='email' />
         <button type='submit' onClick={login}>
            Send
         </button>
      </form>
   );
};
