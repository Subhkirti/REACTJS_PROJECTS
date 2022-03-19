import Getstarted from './Get';
import React, { useState } from 'react';
import logo from './photos/logo.png';
import './Header.css';
function Header() {
    const [state, setstate] = useState("")
    const [data, setdata] = useState("")
    function email(e) {
        setstate(e.target.value)
    }
    function validity(){
        if (state.length === 0){
            setdata("Email is required.")
        }
        else{
           setdata(<Getstarted />)
        }
    }
    return (
        <>
            <div id="main">
                <div id="back-image"></div>
                <img src={logo} id="logo" alt="Logo" />
                <div id="buttons">
                    <button id="btn"><a href="https://www.netflix.com/in/login">Sign in</a></button>
                    <select id="langauge-btn">
                        <option>English</option>
                        <option>Hindi</option>
                    </select>
                </div>
                <div id="center">
                    <h1 id="first" className="head">Unlimited movies, TV shows and more.</h1>
                    <h2 id="second" className="head">Watch anywhere. Cancel anytime</h2>
                    <h3 id="third" className="head">Read to watch? enter your email to create or restatrt your membership.</h3>
                    <div className="for-wrap">
                        <input type="email" className="text" placeholder="Email address..." onChange={email} />
                        <div id="get-started" onClick={validity}>
                            Get Started
                        </div>
                    </div>
                    <h4 id="valid">{data}</h4>
                </div>
            </div>
        </>
    )
}
export default Header;