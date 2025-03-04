import { useEffect, useState } from "react";

export function useLocalStorage(item, inputValue = null) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem("value") || inputValue;
    console.log("Stored Value..", storedValue);
    return storedValue;
  });

  useEffect(() => {
    if (value !== null) {
      localStorage.setItem(item, value);
      console.log("Updated Local Storage:", value);
    }
  }, [item, value]);

  return { value, setValue };
}

