export const Image = ({ variant, product }) => {
  const styles = {
    primary: "h-80 object-cover",
    profile: "rounded-full w-full h-full object-cover",
  };
  // mix-blend-multiply

  return (
    <img
      className={`${styles[variant]}`}
      src={product?.img || "/cat.jpg"}
      alt={product?.title}
    />
  );
};
