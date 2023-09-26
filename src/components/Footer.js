import React from "react";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>UniMusic</h1>
          <p>Sua loja online para todos os tipos de instrumentos musicais.</p>
        </div>
        <div className="footer-contact">
          <h3>Entre em Contato</h3>
          <p>Email: loja@unimusic.com</p>
          <p>Telefone: (34) 99999-8888</p>
        </div>
        <div className="footer-social">
          <h3>Redes Sociais</h3>
          <a href="#" className="social-link">
            Facebook
          </a>
          <a href="#" className="social-link">
            Instagram
          </a>
          <a href="#" className="social-link">
            Twitter
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 UniMusic. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
