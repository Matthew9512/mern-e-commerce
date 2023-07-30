export const Button = ({ children, variant, disabled, onHandleFn }) => {
  const mainStyle = `bg-primaryBlue text-primaryWhite py-2 px-4 rounded-2xl hover:bg-primaryBlue/90 active:bg-primaryBlue/90 border border-bg-primaryBlue/90 disabled:bg-secondaryWhite`;
  const styles = {
    primary: `${mainStyle} w-fit mx-auto`,
    secondary: `${mainStyle}`,
  };

  return (
    <button
      onClick={onHandleFn}
      disabled={disabled}
      className={`${styles[variant]}`}
    >
      {children}
    </button>
  );
};
