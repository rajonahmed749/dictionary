import React from 'react';

const Footer = ({ LightMode }) => {
    return (
        <footer className="footer">
            <small> Word Warrior Dictionary</small> | 2021 |
            <a style={{ color: LightMode ? "black" : "white" }} href="https://rajons.netlify.app/" target="_blank" rel="noreferrer"><i className="fas fa-user footerLink"></i>
            </a>
        </footer>
    );
};

export default Footer;