import React,{useState} from 'react';
import { SiBookstack } from "react-icons/si";
import { AiOutlineBulb } from "react-icons/ai";
function App(){
  var [data,setdata]=useState('Take a note.....')
  var [d,setd]=useState('')
  function update(){
    setdata("Title.....")
    setd("Title...")
  }
  return (
    <>
      <section id="main">
        <div id="nav-bar">
          <p id="icon">
            <SiBookstack />Keep Dairy
          </p>
        </div>
        <div id="main-container">
          <input id="msg-box" onClick={update} placeholder={data}></input>
          {/* <p>{d}</p> */}
        </div>
        <div id="center">
          <AiOutlineBulb />
          <p>Notes you add appear here.....</p>
        </div>

      </section>
    </>
  );
}
export default App;
