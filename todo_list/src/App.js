import React,{useState} from 'react';
const Todo = () => {
    const [state, setstate] = useState("")
    const [items,setitems]=useState([])
    const item=(event)=>{
      setstate(event.target.value)
    }

    const close_all=()=>{
     setitems((old)=>{
     old.splice(state)
     return [...old]
     })
   }


    const list_items=()=>{
      setitems((old)=>{
        return [...old,state]})
      setstate('')
    }

    const del=(index)=>{
      setitems((old)=>{
          return old.filter((val,id)=>{
            return index!==id
          })
      })
     }
  return (<>
    <div className="main">
      <div className="heading">TODO LIST 📃</div>
      <div className="inp">
        <input type="text" placeholder="Add a item" value={state} onChange={item}></input><i id="plus" onClick={list_items} class="fa-solid fa-circle-plus"></i>
      </div>
      <ol className="My_list">
        {items.map((e,index)=>{
          return <li><i onClick={()=>del(index)} key={index} id="cross" class="fa-solid fa-circle-xmark"></i>{e}</li> 
        })}
      </ol>
      <button id="all" onClick={close_all}><i class="fa-solid fa-trash-can"></i>  <span class="tooltiptext">Close All!</span>
</button>
    </div>
  </>)
}
export default Todo;