export const Button = ({ children, variant, disabled }) => {
  const mainStyle = `bg-yellow-300 py-2 px-4 rounded-lg hover:bg-yellow-400 active:bg-yellow-400 border border-yellow-400 disabled:bg-red-500`;
  const styles = {
    primary: `${mainStyle} text-red-600 w-fit mx-auto`,
    secondary: `${mainStyle} text-blue-600`,
  };

  return (
    <button disabled={disabled} className={`${styles[variant]}`}>
      {children}
    </button>
  );
};
