import { useEffect, useState } from "react";

export const useLocalStorage = (lsKey, initialValue) => {
  const [storedValues, setStoredValues] = useState(() => {
    const lsItems = localStorage.getItem(lsKey);
    if (!lsItems) return initialValue;

    return JSON.parse(lsItems);
  });

  useEffect(() => {
    if (!initialValue) return;
    localStorage.setItem(lsKey, JSON.stringify(storedValues));
  }, [lsKey, storedValues, setStoredValues]);

  return { storedValues, setStoredValues };
};
