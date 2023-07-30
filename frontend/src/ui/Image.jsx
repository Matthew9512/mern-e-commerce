export const Image = ({ variant, product }) => {
  const styles = {
    primary: "object-cover group-hover:scale-105 duration-300",
    profile: "rounded-full w-full h-full object-cover",
  };

  return (
    <img
      className={`${styles[variant]} `}
      src={product?.image || "/cat.jpg"}
      alt={product?.title}
    />
  );
};
