function Input({ variant, label, inputRef, ...props }) {
   const mainStyle =
      'rounded-md px-4 py-2 outline-0 shadow-md placeholder-primaryBlack disabled:cursor-not-allowed disabled:opacity-50';
   const styles = {
      primary: `${mainStyle} lg:w-56 w-full`,
      secondary: `${mainStyle} lg:w-80 w-full`,
   };

   return (
      <div className='flex flex-col '>
         {label && <label htmlFor={label}>{label}:</label>}
         <input ref={inputRef} className={styles[variant]} name={label} {...props} />
      </div>
   );
}

export default Input;
