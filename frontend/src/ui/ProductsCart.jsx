import { Image } from "./Image";

export const ProductsCart = ({ product }) => {
  return (
    <div className="flex max-w-[16em] flex-col gap-4">
      <Image variant="primary" product={product} />
      <div className="flex flex-col gap-4">
        <p>{product?.title}</p>
        <p>{product?.price}</p>
        <p>{product?.description}</p>
      </div>
    </div>
  );
};
