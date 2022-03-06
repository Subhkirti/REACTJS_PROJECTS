import React,{useState} from 'react'
const Todo = () => {
    const [state, setstate] = useState("")
    const [items,setitems]=useState([])

    const item=(event)=>{
      setstate(event.target.value)
    }
    
    const list_items=()=>{
      setitems((old)=>{
        return [...old,state]})
      setstate('')
    }

  return (<>
    <div className="main">
      <div className="heading">TODO LIST 📃</div>
      <div className="inp">
        <input type="text" placeholder="Add a item" value={state} onChange={item}></input><i onClick={list_items} id="plus" class="fa-solid fa-circle-plus"></i>
      </div>
      <ol className="My_list">
        {items.map((e)=>{
          return <li><i id="cross" class="fa-solid fa-circle-xmark"></i>{e}</li> 
        })}
      </ol>
    </div>
  </>)
}
export default Todo;