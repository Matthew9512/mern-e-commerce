function Button({ children, btnRef, variant, disabled, onHandleFn, customClass, dataType, ...props }) {
   const mainStyle = `bg-primaryBlack text-primaryWhite flex justify-center items-center hover:bg-primaryBlack/90 active:bg-primaryBlack/90 border-primaryBlack/80 disabled:bg-primaryBlack/30 disabled:cursor-not-allowed`;
   const styles = {
      primary: `${mainStyle} lg:w-fit mx-auto rounded-2xl py-2 px-4`,
      // w-min
      secondary: `${mainStyle} rounded-2xl py-2 px-4`,
      rounded: `${mainStyle} h-6 w-6 rounded-full`,
      navLink: `bg-primaryWhite border border-primaryBlack text-primaryBlack flex justify-center items-center hover:bg-primaryBlack/90 hover:text-primaryWhite active:bg-primaryBlack/90 border-primaryBlack/80 disabled:bg-secondaryWhite w-fit mx-auto rounded-2xl py-2 px-4`,
   };

   return (
      <button
         ref={btnRef}
         onClick={onHandleFn}
         disabled={disabled}
         className={customClass ? `${customClass} ${styles[variant]}` : styles[variant]}
         data-type={dataType}
         {...props}
      >
         {children}
      </button>
   );
}

export default Button;
