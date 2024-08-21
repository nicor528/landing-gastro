import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-custom">
      <p>&copy; {new Date().getFullYear()} GastroNegocio. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;
