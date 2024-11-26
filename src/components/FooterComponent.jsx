import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <footer className="footerContainer">
            <div className="container-footer-link">
                <a target="_blank" href="https://www.facebook.com/RonaldoFarfanA/">
                    <i className="link1 bi bi-facebook"></i>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/ronaldo-farfan-ayma-968000150/">
                    <i className="link1 bi bi-linkedin"></i>
                </a>
                <a target="_blank" href="https://www.instagram.com/ronaldofarfan/">
                    <i className="link1 bi bi-instagram"></i>
                </a>
                <a target="_blank" href="https://github.com/Ronaldo14715">
                    <i className="link1 bi bi-github"></i>
                </a>
            </div>
            <div className="container-footer-name">
                <p>Ronaldo F.</p>
                <p>React JS</p>
                <p>Lima, Perú - 936364880</p>
            </div>
        </footer>
    )
}

export default Footer;