import "./styles.css";
import { Counter } from "./customHooks/Counter";
import { ToggleSwitch } from "./customHooks/ToggleSwtich";
import { UserList } from "./customHooks/UserList";
import { LoggerComponent } from "./customHooks/LoggerComponent";

export default function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <ToggleSwitch />
      <hr />
      <UserList />
      <hr />
      <LoggerComponent />
    </div>
  );
}
