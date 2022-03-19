import {useState} from 'react'
function Working(props) {
    const [data,setdata]=useState(false)
    return (
        <>
            <div id="child">
                <p id="icon" onClick={() => setdata(!data)}>{data ? '➖' : '➕'}</p><h3>{props.d.name}</h3>
            </div>
            {data ? <h4 id="ans">{props.d.answer}</h4> : null}
        </>
    )
}
export default Working;