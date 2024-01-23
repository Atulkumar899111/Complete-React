import { useState } from "react";

function App() {
  let [counter, setcounter] = useState(4);
  const increase = () => {
    setcounter(counter + 1);
  };
  const dec = () => {
    setcounter(counter - 1);
  };
  return (
    <>
      <h1 className="fs-3 text-center">{counter}</h1>
      <div class="col-2 mx-auto">
        <button className="btn btn-outline-success" onClick={increase}>
          Increase
        </button>
        <button className="btn btn-outline-secondary" onClick={dec}>
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
