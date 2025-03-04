import { useEffect, useState } from "react";

export function useLocalStorage(key, inputValue = "") {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key) || inputValue;
    console.log("Stored Value..", storedValue);
    return storedValue !== null ? storedValue : inputValue;
  });

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem(key, value);
      //console.log("Updated Local Storage:", value);
    }
  }, [key, value]);

  return { value, setValue };
}
