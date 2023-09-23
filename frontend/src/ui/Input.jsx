export const Input = ({
   variant,
   label,
   type,
   placeholder,
   onHandleFn,
   onKeyDownHandle,
   inputRef,
   defValue,
   disabled,
   id,
   max,
   min,
}) => {
   const mainStyle =
      'rounded-md px-4 py-2 outline-0 shadow-md placeholder-primaryBlack disabled:cursor-not-allowed disabled:opacity-50';
   const styles = {
      primary: `${mainStyle} lg:w-56 w-full`,
      secondary: `${mainStyle} lg:w-80 w-full`,
   };

   return (
      <div className='flex flex-col '>
         {label && <label htmlFor={label}>{label}:</label>}
         <input
            onKeyUp={onKeyDownHandle}
            onChange={onHandleFn}
            ref={inputRef}
            defaultValue={defValue || ''}
            className={styles[variant]}
            type={type || 'text'}
            placeholder={placeholder}
            name={label}
            id={id && id}
            max={max && max}
            min={min && min}
            disabled={disabled}
         />
      </div>
   );
};
