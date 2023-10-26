function Input({ variant, label, inputRef, ...props }) {
   const mainStyle =
      'rounded-md px-4 py-2 outline-0 shadow-md placeholder-primaryBlack disabled:cursor-not-allowed disabled:opacity-50';
   const styles = {
      primary: `${mainStyle} lg:w-56 w-full`,
      secondary: `${mainStyle} lg:w-80 w-full`,
      upload: `file:bg-primaryBlack file:text-primaryWhite file:hover:bg-primaryBlack/90 file:active:bg-primaryBlack/90 file:border-primaryBlack/80 file:lg:w-fit file:mx-auto file:rounded-2xl file:py-2 file:px-4 file:mr-4 file:hover:cursor-pointer`,
   };

   return (
      <div className='flex flex-col'>
         {label && <label htmlFor={label}>{label}:</label>}
         <input ref={inputRef} className={styles[variant]} name={label} autoComplete='true' {...props} />
      </div>
   );
}

export default Input;
