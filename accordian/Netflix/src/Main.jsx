import React from 'react';
import Api from './Api';
import './Main.css'
function Main() {
    return (
        <>
            {
                Api.map((e) => {
                    return (
                        <div className="sec2-main">
                            <div id="one-side" >
                                <img src={e.img} id="tv"></img> 
                                {/* <video><source id="video" src={e.video}></source></video>                   */}
                            </div>
                            <div id="second-side">
                                <h1 class="same" id="heading">{e.head}</h1>
                                <h3 class="same" id="text">{e.text}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Main;