import React from 'react'
import styles from './css/style.css'; 

function PortfolioApp() {

return (
    <div className = "grid">

            <div className ="main">
            <h2> Sumon Deo</h2>
                <h3>Junior Web Developer</h3>
            <p> I am experienced in leveraging agile frameworks to provide a 
                robust synopsis for high level overviews. Iterative approaches 
                to corporate strategy foster collaborative thinking to further 
                the overall value proposition.</p>
                <a href="#" className="button-portfolio"><i className="fa fa-user"></i>View Portfolio</a>
                <a href="#" className="button-resume"><i className="fa fa-paper-plane"></i>View Resume</a>  
            </div>

            <div className="img-main"><img src="img/profile2.jpg" alt="Name" /></div>

            <div className="blank"></div>

            <div className = "sidebar">
            <h3>Sumon
            <span className="text-primary">Deo</span>
            </h3>
            <div className="sidebar-img"><img src="img/profile.jpg" alt="Name" /></div>
            <p>
            I am experienced in leveraging agile frameworks to provide a 
            robust synopsis for high level overviews.</p>
            {/* <!-- social icon start --> */}
            <div className="social-icon">
                <a href="#" className="fa fa-twitter"></a>
                <a href="#" className="fa fa-linkedin"></a>
                <a href="#" className="fa fa-facebook"></a>
                <a href="#" className="fa fa-instagram"></a> 
            </div>
            {/* <!-- social icon end --> */}
                <div className="sidebar-nav">
                    <ul>
                        <li>
                            <a href="#about"><i className="fa fa-user"></i>About Me</a>
                        </li>
                        <li>
                            <a href="#experience"><i className="fa fa-user"></i>Portfolio</a>
                        </li>
                        <li>
                            <a href="#portfolio"><i className="fa fa-user"></i>Service</a>
                        </li>
                        <li>
                            <a href="#skills"><i className="fa fa-file"></i>Resume</a>
                        </li>
                        <li>
                            <a href="#awards"><i className="fa fa-user"></i>Blog</a>
                        </li>
                        <li>
                            <a href="#contact"><i className="fa fa-user"></i>Contact</a>
                        </li>
                    </ul>
                    <a href="#" className="button-hireme"><i className="fa fa-paper-plane"></i> Hire Me</a>  
                </div>
            </div>

        <div className="content1">
        <h1> what I do </h1>
        <p>
        I am experienced in leveraging agile frameworks to provide a 
        robust synopsis for high </p>
        </div>

        <div className="content2" >
        <div className="logo"><img src="img/js.png" alt="Name" /></div>
        <h3>Vanilla JavaScript</h3>

        <p>
        I am experienced in leveraging agile frameworks to provide a 
        robust synopsis for high level overviews. Iterative approaches 
        to corporate strategy foster</p>
        </div>


        <div className="content3" >
        <div className="logo">
            <img src="img/ang3.png" alt="angular" />
        </div>
        <h3> Angular React vue </h3>
        <p>
            I am experienced in leveraging agile frameworks to provide a 
            robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster</p>
        </div>

        <div className="content4" >
            <div className="logo">
                <img src="img/node.png" alt="node" />
            </div>
            <h3>Node js</h3>

            <p>
            I am experienced in leveraging agile frameworks to provide a 
            robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster</p>
        </div>

        <div className="content5" >
            <div className="logo">
                <img src="img/python.jpg" alt="python" />
            </div>
            <h3>Python & Django</h3>

            <p>
            I am experienced in leveraging agile frameworks to provide a 
            robust synopsis for high level overviews. Iterative approaches 
            to corporate strategy foster</p>
        </div>
</div> 
    )
}

export default PortfolioApp 