import { useLocalStorage } from "./useLocalStorage";

export function LocalStorageComponent() {
  const { value, setValue } = useLocalStorage("inputValue", "");

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Stored value: {value}</p>
    </div>
  );
}
