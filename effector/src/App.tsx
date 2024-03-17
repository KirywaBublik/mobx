import { useUnit } from "effector-react";
import { $store, textValue } from "./store";

const App = () => {

  const [text, textChange] = useUnit([$store, textValue])

  return (
    <>
      <input value={text}
        onChange={(e) => textChange(e.currentTarget.value)}
        type="text" />
      <p>
        {text}
      </p>
      <p>
        siae: {text.length}
      </p>
    </>
  );
};

export default App;