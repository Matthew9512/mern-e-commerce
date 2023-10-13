function Image({ variant, image, alt, customClass }) {
   const styles = {
      primary: 'object-cover group-hover:scale-105 duration-300 mix-blend-multiply',
      profile: 'rounded-full w-full h-full object-cover mix-blend-multiply',
   };

   return <img className={`${styles[variant]} ${customClass}`} src={image} alt={alt} loading='lazy' />;
}

export default Image;
