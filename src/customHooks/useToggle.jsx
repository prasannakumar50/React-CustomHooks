import { useState } from "react";

export function useToggle(init) {
  const [value, setValue] = useState(init);

  function toggle() {
    setValue((prev) => !prev);
  }

  return { value, toggle };
}
