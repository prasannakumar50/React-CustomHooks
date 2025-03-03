import { useCounter } from "./useCounter";

export function Counter() {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={increment} style={{ marginRight: "0.5rem" }}>
        Increment
      </button>
      <button onClick={decrement} style={{ marginRight: "0.5rem" }}>
        Decrement
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
