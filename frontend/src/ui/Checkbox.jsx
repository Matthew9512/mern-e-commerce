function Checkbox({ placeholder, label, ...props }) {
   return (
      <div className='flex items-center gap-4'>
         <label className='w-8' htmlFor={label}>
            {label}:
         </label>
         <input type='checkbox' label={label} {...props} className='h-6 w-6' />
         <input
            type='number'
            label={label}
            placeholder={placeholder}
            {...props}
            className='rounded-md px-4 py-2 outline-0 shadow-md w-full placeholder-primaryBlack disabled:cursor-not-allowed disabled:opacity-50'
         />
      </div>
   );
}

export default Checkbox;
