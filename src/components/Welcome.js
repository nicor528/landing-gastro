import React from 'react';
import { Container } from 'react-bootstrap';
import './Welcome.css';
import img from "../img/gastro.jpeg"

function Welcome() {
  return (
    <div className="welcome-section">
      <img src={img} alt="Background" className="welcome-background" />
      <Container className="welcome-content">
        <h1 className='title-welcome'>Bienvenidos a "NOMBRENEGOCIO"</h1>
        <p className='title-welcome'>El mejor lugar para disfrutar de la mejor comida.</p>
      </Container>
    </div>
  );
}

export default Welcome;