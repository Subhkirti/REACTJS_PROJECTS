import './Footer.css'
function Footer() {
    return (
        <>
            <div id="footer">
                <h3>Questions? Call 000-800-040-1843 </h3>

                <div id="content">
                    <ul id="column1">
                        <li><a href="https://help.netflix.com/en/node/412FAQ">FAQ</a></li>
                        <li><a href="https://ir.netflix.net/ir-overview/profile/default.aspx">Investors Relations</a></li>
                        <li><a href="https://help.netflix.com/legal/privacy">Privacy</a></li>
                        <li>Speed Post</li>
                    </ul>
                    <ul id="column2">
                        <li><a href="https://help.netflix.com/en/">Help cneters</a></li>
                        <li><a href="https://jobs.netflix.com/">Jobs</a></li>
                        <li><a href="#">Cookie Preferences</a></li>
                        <li><a href="https://help.netflix.com/legal/notices">Legal Notices</a></li>
                    </ul>
                    <ul id="column3">
                        <li><a href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount">Account</a></li>
                        <li><a href="https://devices.netflix.com/en/">Ways to watch</a></li>
                        <li><a href="">Corporate Information</a></li>
                        <li><a href="https://www.netflix.com/in/browse/genre/839338">Only on Netflix</a></li>
                    </ul>
                    <ul id="column4">
                        <li><a href="https://media.netflix.com/en/">Media centers</a></li>
                        <li><a href="https://help.netflix.com/legal/termsofuse">Terms of use</a></li>
                        <li><a href="https://help.netflix.com/en/contactus">Contact Us</a></li>
                    </ul>
                </div>
                   <select id="lan-btn"> 
                       <option>English</option>
                       <option>Hindi</option>

                    </select>
                    <p>Netflix India</p>
            </div>
        </>
    )
}
export default Footer;