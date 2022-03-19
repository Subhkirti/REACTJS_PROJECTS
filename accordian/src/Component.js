import React from 'react';
import Dic from './Api'
import Working from './working';
const Secret = () => {
    return (
        <>
        {
            Dic.map((e)=>
            {
                return (
                    <>
                        <Working d={e}/>
                    </>
                )
            }
            )
        }
        </>
    )
}
export default Secret;