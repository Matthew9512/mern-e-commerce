export const SearchSelect = ({ options, label, onHandleFn, category, id, placeholder }) => {
   return (
      <div className='flex flex-col shadow-sm'>
         <span>{label}</span>
         <select
            id={id}
            data-category={category}
            onClick={(e) => onHandleFn(e)}
            className='w-56 rounded-md px-4 py-2 outline-0'
         >
            <option className='text-primaryWhite' value='' disabled selected hidden>
               {placeholder}
            </option>
            {/* <option hidden value=''></option> */}
            {options.map((option, index) => (
               <option key={index} value={option}>
                  {option}
               </option>
            ))}
         </select>
      </div>
   );
};
