import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-section">
      <h2 className="text-center">Contáctanos</h2>
      <Form className="contact-form">
        <Form.Group controlId="formName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingresa tu nombre" />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingresa tu email" />
        </Form.Group>
        <Form.Group controlId="formMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button variant="outline-light" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
