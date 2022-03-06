import React, { useState } from 'react';
import Dic from './Api'

const Secret = () => {
    const [state, setstate] = useState(Dic)
    const [data,setdata]=useState(false)
    return (
        <>{
            state.map((e) => {
                return (
                    <>
                        <div id="child">
                            <p id="icon" onClick={()=>setdata(!data)}>{data?'➖':'➕'}</p><h3>{e.name}</h3>
                        </div>
                        {data && <h4 id="ans">{e.answer}</h4>}
                    </>
                )
            }
            )
        }
        </>
    )
}
export default Secret;