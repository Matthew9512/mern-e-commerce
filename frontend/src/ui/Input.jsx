export const Input = ({
   variant,
   label,
   type,
   placeholder,
   onHandleFn,
   inputRef,
   defValue,
   disabled,
   id,
   max,
   min,
}) => {
   const mainStyle = 'rounded-md px-4 py-2 outline-0';
   const styles = {
      primary: `${mainStyle} lg:w-56 w-full`,
      secondary: `${mainStyle} lg:w-80 w-full`,
   };

   return (
      <div className='flex flex-col shadow-sm'>
         <label htmlFor={label}>{label}</label>
         <input
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
