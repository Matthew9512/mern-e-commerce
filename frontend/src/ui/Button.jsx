export const Button = ({ children, variant, disabled, onHandleFn, customClass }) => {
   const mainStyle = `bg-primaryBlack text-primaryWhite flex justify-center items-center hover:bg-primaryBlack/90 active:bg-primaryBlack/90 border-primaryBlack/80  disabled:bg-secondaryWhite`;
   const styles = {
      primary: `${mainStyle} w-fit mx-auto rounded-2xl py-2 px-4`,
      secondary: `${mainStyle} rounded-2xl py-2 px-4`,
      rounded: `${mainStyle} h-6 w-6 rounded-full`,
      navLink: `bg-primaryWhite border border-primaryBlack text-primaryBlack flex justify-center items-center hover:bg-primaryBlack/90 hover:text-primaryWhite active:bg-primaryBlack/90 border-primaryBlack/80  disabled:bg-secondaryWhite w-fit mx-auto rounded-2xl py-2 px-4`,
   };

   return (
      <button
         onClick={onHandleFn}
         disabled={disabled}
         className={customClass ? `${customClass} ${styles[variant]}` : styles[variant]}
      >
         {children}
      </button>
   );
};
