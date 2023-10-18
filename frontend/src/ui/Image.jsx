function Image({ variant, customClass, ...props }) {
   const styles = {
      primary: 'object-cover group-hover:scale-105 duration-300 mix-blend-multiply',
      profile: 'rounded-full w-full h-full object-cover mix-blend-multiply',
   };

   return <img className={`${styles[variant]} ${customClass}`} {...props} loading='lazy' />;
}

export default Image;
