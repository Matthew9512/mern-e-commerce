export const Button = ({ children, variant }) => {
   const mainStyle = `bg-yellow-300 py-2 px-4 rounded-lg hover:bg-yellow-400 active:bg-yellow-400 border border-yellow-400`;
   const styles = {
      primary: `text-red-600`,
      secondary: `text-blue-600`,
   };

   return <button className={`${mainStyle} ${styles[variant]}`}>{children}</button>;
};
