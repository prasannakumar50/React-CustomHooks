import { useState } from "react";

export function useCounter(init) {
  const [counter, setCounter] = useState(init);
  function increment() {
    setCounter((count) => count + 1);
  }

  function decrement() {
    setCounter((count) => count - 1);
  }

  function reset() {
    setCounter(init);
  }

  return { counter, increment, decrement, reset };
}
