import { logoIcon } from '../utils/icons';

export const Form = ({ children, onHandleFn, onSubmitFn, formRef, variant }) => {
   const mainStyle = 'mx-auto flex lg:w-fit sm:w-3/5 w-4/5 flex-col gap-10 rounded-md p-6 bg-secondaryWhite/50';

   const styles = {
      default: `${mainStyle}`,
   };

   return (
      <form onChange={onHandleFn} onSubmit={onSubmitFn} ref={formRef} className={styles[variant]}>
         <p className='text-center py-8 uppercase flex mx-auto gap-4'>{logoIcon}Dainese store</p>
         {children}
      </form>
   );
};
