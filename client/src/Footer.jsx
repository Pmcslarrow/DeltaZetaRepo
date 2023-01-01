import { FaInstagram } from "react-icons/fa";

function FooterSection()
{
    return (
        <footer className="footer">
            <div className="footerContainer">
                <div className="row">
                    <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        <li><a href="/form">Form</a></li>
                        <li><a href="https://sigmachi.org/foundation/?form=lifeloyal&utm_campaign=csidonateredirect&utm_medium=web&utm_source=click">Donate</a></li>
                    </ul>
                    </div>

                    <div className="footer-col">
                    <h4>Pages</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/calendar">Calendar</a></li>
                        <li><a href="/login">Dashboard</a></li>
                    </ul>
                    </div>

                    <div className="footer-col">
                    <h4>follow us</h4>
                    <div className="social-links">
                        <a href="https://www.instagram.com/sigmachi_wu/?hl=en"><i><FaInstagram/></i></a>
                    </div>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default FooterSection