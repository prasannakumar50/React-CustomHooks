import { useState, useEffect } from "react";

export function useLogger(intitalValue, message = "Updated Value....") {
  const [value, setValue] = useState(intitalValue);

  //using useEffect
  useEffect(() => {
    console.log(`${message}, ${value}`);
  }, [value]);

  //   using normal function
  //     function valueHandler(e){
  //       setValue(e.target.value)
  //       console.log("Updated Value:", e.target.value);
  //     }
  //   return {value, setValue, valueHandler}

  return { value, setValue };
}
