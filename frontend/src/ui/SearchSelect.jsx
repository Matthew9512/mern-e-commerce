function SearchSelect({ options, label, customClass, placeholder, selectRef, ...props }) {
   return (
      <div className='flex flex-col'>
         <span>{label}:</span>
         <select className={`w-56 rounded-md px-4 py-2 outline-0 shadow-md ${customClass}`} ref={selectRef} {...props}>
            <option className='' value='' disabled selected hidden>
               {placeholder}
            </option>
            {options.map((option, index) => (
               <option key={index} value={option}>
                  {option}
               </option>
            ))}
         </select>
      </div>
   );
}

export default SearchSelect;
