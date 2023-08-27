import { toast } from 'react-hot-toast';

export const currentSize = (e, productSize, product, inputRef) => {
   const click = e.target;
   const childrenEle = [...e.target.parentElement.children];

   // store choosen product size
   const size = e.target.textContent;
   productSize.current = size;

   // add effect to clicked size btn
   childrenEle.forEach((product) => product.classList.remove('activeSize'));
   click.classList.add('activeSize');

   // reset input value and set max value
   inputRef.current.value = 1;
   inputRef.current.max = product.available;
};

export const handleShoppingCartItems = (product, lsItems, productSize, storedValues, setStoredValues, inputRef) => {
   // add to ls and shop
   if (!lsItems) {
      if (!productSize.current) return toast.error(`Please choose correct size`);
      setStoredValues((prev) => [...prev, { ...product, amount: +inputRef.current.value, size: productSize.current }]);
      toast.success(`Product added to shopping cart`);
   } else {
      // remove from ls and shop
      const filteredLs = storedValues.filter((lsItem) => lsItem !== lsItems);
      setStoredValues(filteredLs);
      toast.success(`Product removed from shopping cart`);
   }
};
