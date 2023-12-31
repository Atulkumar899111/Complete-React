import { useState } from "react";

function App(){
  let [counter,setcounter] = useState(4);
  const increase = ()=>{
    setcounter(counter+1)
  }
  const dec = ()=>{
    setcounter(counter-1)
  }
  return <><h1>{counter}</h1> 
  <button onClick={increase}>Increase</button>
  <button onClick={dec}>Decrement</button>
  </>
}

export default App;