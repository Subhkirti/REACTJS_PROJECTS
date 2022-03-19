// import React from 'react'
import sig from "./photos/sig.jpg"
function Signin(){
    const imageStyle={
        width:'100%',
        height:'100%',
    }
    return (
        <>
            <img src={sig} className="img" style={imageStyle} alt="image render" />
        </>
    )
}
export default Signin;