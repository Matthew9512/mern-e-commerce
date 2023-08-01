import { createContext, useEffect, useState } from "react";

export const ShoppingCartContext = createContext();

export const ShoppingCartContextProvider = ({ children }) => {
  const [storedValues, setStoredValues] = useState(() => {
    const lsItems = localStorage.getItem("moto__ecommerce");
    if (!lsItems) return [];

    return JSON.parse(lsItems);
  });

  useEffect(() => {
    localStorage.setItem("moto__ecommerce", JSON.stringify(storedValues));
  }, [storedValues, setStoredValues]);

  return (
    <ShoppingCartContext.Provider value={{ storedValues, setStoredValues }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};
