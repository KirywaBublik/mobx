import { useUnit } from "effector-react";
import { $store, decrementButtonPressed, incrementButtonPressed } from "./store";

const App = () => {

  const state = useUnit($store)

  return (
    <div>
      <button onClick={() => decrementButtonPressed()}>
        -1
      </button>
      <span>
        {state}
      </span>
      <button onClick={() => incrementButtonPressed()}>
        +1
      </button>
    </div>
  );
};

export default App;