export const SaleDiscount = ({ product }) => {
   return (
      <div className='absolute left-1 top-0 bg-secondaryWhite p-1 rounded-md border border-secondaryWhite/80'>
         -{product?.discount}%
      </div>
   );
};
