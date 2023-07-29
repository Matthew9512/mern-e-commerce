export const Input = ({ variant, label, type, placeholder, onHandleFn }) => {
  const mainStyle = "rounded-md px-4 py-2 outline-0";
  const styles = {
    primary: `${mainStyle} w-56`,
    secondary: `${mainStyle} w-80`,
  };

  return (
    <div className="flex flex-col">
      <label htmlFor={label}>{label}</label>
      <input
        onChange={onHandleFn}
        className={styles[variant]}
        type={type || "text"}
        placeholder={placeholder}
        name={label}
        id={label}
      />
    </div>
  );
};
