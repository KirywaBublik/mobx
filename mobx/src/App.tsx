
interface CounterProp {
  count: number;
  addCount: () => void;
  removeCount: () => void;
  reset: number;
}

const App = ({ count, addCount, removeCount, reset }: CounterProp) => {

  return (
    <>
      {count}
      <button onClick={() => addCount()}>+</button>
      <button onClick={() => removeCount()}>-</button>
      {reset}
    </>
  )
};
export default App;