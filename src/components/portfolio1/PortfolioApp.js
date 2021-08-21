import React from 'react'
// import {IconContext} from 'react-icons'
import styles from './css/style.css';
import { FaTwitter,FaFacebook,FaSith,FaTelegramPlane,FaLinkedinIn,FaInstagram,FaUser,FaEnvelope,FaElementor,FaBlogger,FaContao } from "react-icons/fa";

function PortfolioApp() {

return (
    <div className = "grid">

            <div className ="aboutme">
            <h1> Sumon Deo</h1>
                <h2>Junior Web Developer</h2>
            <p> I am experienced in Express & React frameworks to provide a 
                robust synopsis for high level overviews. Iterative approaches 
                to corporate strategy foster collaborative strategy foster collaborativethinking to further 
                the overall value proposition.</p>
                <a href="javascript:void(0)" className="button-portfolio"><FaEnvelope />  View Portfolio</a>
                <a href="#" className="button-resume"><FaElementor />  View Resume</a>  
            </div>

            <div className="img-main"><img src="/images/profile2.jpg" alt="Sumon Deo" /></div>

            <div className="blank"></div>

            <div className = "sidebar">
            <h2>Sumon Deo</h2>
            <div className="sidebar-img"><img src= 'images/profile.jpg' alt="Sumon Deo" /></div>
            <p>
            I am experienced in leveraging agile frameworks to provide a 
            robust synopsis for overviews.</p>
            <br />
            {/* <!-- social icon start --> */}
            <div className="social-icon">
                <a href="facebooklink" className="fa fa-twitter"><FaTwitter color ='blue' size = '1.3rem' /></a>
                <a href="#" className="fa fa-facebook"><FaFacebook color ='blue' /></a>
                <a href="#" className="fa fa-instagram"><FaInstagram /></a>
                <a href="#" className="fa fa-linkedin"><FaLinkedinIn /></a>
            </div>
            {/* <!-- social icon end --> */}

            <br />
            <hr />
                <div className="sidebar-nav">
                    <ul>
                        <li>
                            <a className='active' href="#about"><FaUser />  About Me</a>
                        </li>
                        <li>
                            <a href="#experience"><FaEnvelope />  Portfolio</a>
                        </li>
                        <li>
                            <a href="#portfolio"><FaSith />  Service</a>
                        </li>
                        <li>
                            <a href="#skills"><FaElementor />  Resume</a>
                        </li>
                        <li>
                            <a href="#awards"><FaBlogger />  Blog</a>
                        </li>
                        <li>
                            <a href="#contact"><FaContao />  Contact</a>
                        </li>
                    </ul>
                    <a href="#" className="button-hireme"><FaTelegramPlane /> Hire Me</a>  
                </div>
            </div>

        <div className="content1">
        <h1> what I do </h1>
        <p>
        I am experienced in Express & React frameworks to provide a 
        robust synopsis for high level overviews. frameworks to provide a 
        robust synopsis for high. </p>
        </div>

        <div className="content2" >
        <div className="logo"><img src="images/js.png" alt="Name" /></div>
        <h3>Vanilla JavaScript</h3>

        <p>
        I am experienced in  agile frameworks 
        robust synopsis for high level overviews. 
        to corporate strategy foster</p>
        </div>


        <div className="content3" >
        <div className="logo">
            <img src="images/ang3.png" alt="angular" />
        </div>
        <h3> Angular React vue </h3>
        <p>
        I am experienced in  agile frameworks 
        robust synopsis for high level overviews. 
        to corporate strategy foster</p>
        </div>

        <div className="content4" >
            <div className="logo">
                <img src="images/node.png" alt="node" />
            </div>
            <h3>Node js</h3>

            <p>
        I am experienced in  agile frameworks 
        robust synopsis for high level overviews. 
        to corporate strategy foster</p>
        </div>

        <div className="content5" >
            <div className="logo">
                <img src="images/python.jpg" alt="python" />
            </div>
            <h3>Python & Django</h3>
            <p>
            I am experienced in  agile frameworks 
            robust synopsis for high level overviews. 
            to corporate strategy foster</p>
        </div>
</div> 
    )
}

export default PortfolioApp 