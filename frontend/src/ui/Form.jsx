export const Form = ({ children, onHandleFn, formRef, variant }) => {
   const mainStyle = 'mx-auto flex w-fit flex-col gap-8 rounded-md p-6 bg-secondaryWhite/50';

   const styles = {
      default: `${mainStyle}`,
   };

   return (
      <form onChange={onHandleFn} ref={formRef} className={styles[variant]}>
         <p className='text-center py-4 uppercase'>Dainese store</p>
         {children}
      </form>
   );
};
