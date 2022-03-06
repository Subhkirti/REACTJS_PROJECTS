import React,{useState} from 'react';
function App() {
  const [state, setstate] = useState(0)
  var incre=()=>{
    setstate(state+1)
  }
  var decre=()=>{
    setstate(state-1)
  }
  return(
    <div id="main">
      <div id="child" >
        <h1>{state}</h1></div>
      <div id="btn">
        <button onClick={incre}>Increment</button>
        <button onClick={decre}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
