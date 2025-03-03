import { useToggle } from "./useToggle";

export function ToggleSwitch() {
  const { toggle, value } = useToggle(false);
  return (
    <div>
      <h1>Current State: {value ? "True" : "False"}</h1>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
}
