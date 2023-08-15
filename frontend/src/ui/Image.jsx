export const Image = ({ variant, product }) => {
   const styles = {
      primary: 'object-cover group-hover:scale-105 duration-300 mix-blend-multiply',
      profile: 'rounded-full w-full h-full object-cover mix-blend-multiply',
   };

   return (
      <img className={`${styles[variant]} `} src={product?.image || '/cat.jpg'} alt={product?.name} loading='lazy' />
   );
};
