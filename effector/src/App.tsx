import { useUnit } from "effector-react";
import { $store, add, del } from "./store";

const App = () => {

  const count = useUnit($store)
  return (
    <>
      {count}
      <button onClick={add}>Add</button>
      <button onClick={del}>Del</button>
    </>
  );
};

export default App;