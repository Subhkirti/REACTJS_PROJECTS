import React,{useState} from 'react'
function App(){
  var [name,setname]=useState('')
  function Submit(e){
    setname(e.target.value) 
  }
  function kite(){
    alert("submitted!")
  }
  return (
    <>
    <form onSubmit={()=>kite()}>
    <center>
  <h1>Admission form</h1>
  <input placeholder="Your name..." value={name} onChange={Submit}></input><br /><br />
  <input type="password" placeholder="Your Password..."></input><br /><br />
  <select>
    <option>Select Your Education</option>
    <option>10th</option>
    <option>12th</option>
    <option>Graduate</option>
  </select>
  <br /><br />
  <input type="checkbox"></input><span> Accept Terms & conditions</span>
  <br /><br />
  <button type="submit" >Submit</button>
  </center>
  </form>
    </>
  );
}

export default App;
