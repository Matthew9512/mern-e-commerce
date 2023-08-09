export const handleShoppingCartItems = (product, storedValues, setStoredValues, toast) => {
   const lsItems = storedValues.find((lsItem) => lsItem?._id === product?._id);

   // add to ls and shop
   if (!lsItems) {
      setStoredValues((prev) => [...prev, product]);
      toast.success(`product added to shopping cart`);
   } else {
      // remove from ls and shop
      const filteredLs = storedValues.filter((lsItem) => lsItem !== lsItems);
      setStoredValues(filteredLs);
      toast.success(`product removed from shopping cart`);
   }
};
