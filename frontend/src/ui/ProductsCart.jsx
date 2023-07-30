import { Image } from "./Image";

export const ProductsCart = ({ product }) => {
  return (
    <div className="group flex max-w-[16em] flex-col mix-blend-multiply">
      <div className="flex h-80 items-center justify-center overflow-hidden">
        <Image variant="primary" product={product} />
      </div>
      <div className="flex flex-col justify-center gap-4 text-lg">
        <p className="font-semibold uppercase">{product?.name}</p>
        <p className="opacity-60">$ {product?.price}</p>
        <p className="text-base">{product?.description}</p>
      </div>
    </div>
  );
};
