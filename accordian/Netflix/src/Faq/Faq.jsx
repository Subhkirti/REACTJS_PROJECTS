import './Faq.css'
import Faq_api from './Faq_api';
import Working from './Working';
function Faq(){
    return (
        <>
            <div id="main-content">
                <h1>Frequently Asked Questions</h1>
                {
                Faq_api.map((element) =>{
                        return (
                            <>
                                <Working  d={element} />
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Faq;