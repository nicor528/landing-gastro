import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import './Catalog.css';
import ham from "../img/ham.jpg"; import pizza from "../img/pizza.jpeg"; 
import cesar from "../img/cesar.jpeg";

const mockProducts = [
  {
    id: 1,
    name: 'Pizza Margarita',
    price: '$8.00',
    description: 'Deliciosa pizza con salsa de tomate y mozzarella.',
    image: pizza
  },
  {
    id: 2,
    name: 'Hamburguesa Clásica',
    price: '$5.50',
    description: 'Hamburguesa con carne a la parrilla y queso.',
    image: ham
  },
  {
    id: 3,
    name: 'Ensalada César',
    price: '$4.00',
    description: 'Ensalada fresca con pollo y aderezo César.',
    image: cesar
  },
];

function Catalog() {
  return (
    <div className="catalog-section">
      <h2 className="text-center">Nuestro Catálogo</h2>
      <Row>
        {mockProducts.map((product) => (
          <Col sm={12} md={4} key={product.id}>
            <Card className="catalog-card">
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="text-muted">{product.price}</Card.Text>
                <Button variant="outline-light">Ordenar</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Catalog;
