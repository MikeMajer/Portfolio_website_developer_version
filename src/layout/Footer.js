import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footerWrapper">
            <div className="social">
                <a href="https://github.com/MikeMajer/"><i className="fab fa-github"></i></a>
                <a href="https://codepen.io/Code_Mike/"><i className="fab fa-codepen"></i></a>
                <a href="https://www.linkedin.com/in/michal-majer-90656515b/"><i className="fab fa-linkedin"></i></a>
            </div>
            <div className="copyRight">&copy; Michal Majer </div>
        </div>
    );
}

export default Footer;