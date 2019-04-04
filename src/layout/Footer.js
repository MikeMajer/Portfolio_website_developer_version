import React from 'react';
import "../styles/Footer.css";

const Footer = () => {
    return (
        <div className="footerWrapper">
            <div className="social">
                <a href="https://github.com/"><i class="fab fa-github"></i></a>
                <a href="https://codepen.io/"><i class="fab fa-codepen"></i></a>
                <a href="https://au.linkedin.com/"><i class="fab fa-linkedin"></i></a>
            </div>
            <div className="copyRight">&copy; Mike Majer </div>
        </div>
    );
}

export default Footer;