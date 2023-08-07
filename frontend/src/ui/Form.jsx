export const Form = ({ children, onHandleFn, formRef, variant }) => {
   const mainStyle = 'mx-auto flex w-fit flex-col gap-6 rounded-md p-4 bg-secondaryWhite/50';

   const styles = {
      default: `${mainStyle}`,
   };

   return (
      <form onChange={onHandleFn} ref={formRef} className={styles[variant]}>
         {children}
      </form>
   );
};
