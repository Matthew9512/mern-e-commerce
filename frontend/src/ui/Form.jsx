export const Form = ({ children, onHandleFn, onSubmitFn, formRef, variant }) => {
   const mainStyle = 'mx-auto flex lg:w-fit sm:w-3/5 w-full flex-col gap-8 rounded-md p-6 bg-secondaryWhite/50';

   const styles = {
      default: `${mainStyle}`,
   };

   return (
      <form onChange={onHandleFn} onSubmit={onSubmitFn} ref={formRef} className={styles[variant]}>
         <p className='text-center py-4 uppercase'>Dainese store</p>
         {children}
      </form>
   );
};
