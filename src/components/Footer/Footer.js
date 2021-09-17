import React from 'react';

const Footer = ({LightMode}) => {
    return (
        <footer className="footer">
            <small>Word Warrior Dictionary</small> | 2021 |
            <a style={{  color: LightMode ? "black" : "white" }} href="https://www.linkedin.com/in/rajon749/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt footerLink"></i>
            </a>
            <a style={{  color: LightMode ? "black" : "white" }} className="textColor text-decoration-none" href="https://github.com/rajonahmed749" target="_blank" rel="noreferrer"><i className="fab fa-github footerLink"></i>
            </a>
            <a style={{  color: LightMode ? "black" : "white" }} className="textColor text-decoration-none" href="https://www.facebook.com/razon.hossain.338/" target="_blank" rel="noreferrer"><i className="fas fa-external-link-alt footerLink"></i>
            </a>
        </footer>
    );
};

export default Footer;