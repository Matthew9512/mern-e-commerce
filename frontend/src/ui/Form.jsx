import { logoIcon } from '../utils/icons';

function Form({ children, formRef, variant, ...props }) {
   const mainStyle = 'mx-auto flex lg:w-fit sm:w-3/5 w-4/5 flex-col gap-10 rounded-md p-6 bg-secondaryWhite/50';

   const styles = {
      default: `${mainStyle}`,
      secondary: `mx-auto w-4/5 rounded-md p-6 gap-8 flex flex-col justify-center items-center`,
   };

   return (
      <form ref={formRef} className={styles[variant]} {...props}>
         <p className='text-center py-8 flex mx-auto gap-4'>{logoIcon}JustRide</p>
         {children}
      </form>
   );
}

export default Form;
