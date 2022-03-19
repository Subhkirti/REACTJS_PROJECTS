import logo from './photos/logo.png'
import './Get.css'
function Getstarted() {
    return (
        <>

            <div id="inside-main">
                <div className="top">
                <img className="symbol" src={logo}></img>
                <h3 id="signin">Sign In</h3>
                </div>
                <hr></hr>
                <div className="center">
                    <h1>Welcome back! Joining Netflix is easy.</h1>
                    <h2>Enter your password and you will be watching in no time.</h2>
                    <h2>Email</h2>
                </div>
            </div>
            
        </>
    )
}
export default Getstarted;