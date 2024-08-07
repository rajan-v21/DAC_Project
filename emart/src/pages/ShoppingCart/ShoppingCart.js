import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card, ListGroup } from 'react-bootstrap';
import Header from '../../components/Header';
import './shoppingcart.css'; // CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const ShoppingCart = (initialQuantity, itemId) => {
  const initialCartItems = [
    {
      id: 1,
      name: 'Holiday Luxury Chocolate Advent Calendar',
      sku: '14169',
      price: 39.95,
      quantity: 2,
      image: 'assets/images/chocolate-advent-calendar.jpg',
    },
    {
      id: 2,
      name: 'Assorted Coffee, Ground, Set of 3, 10 oz. Each',
      sku: '191990',
      price: 36.00,
      originalPrice: 44.85,
      quantity: 1,
      image: 'assets/images/assorted-coffee.jpg',
    },
  ];

  const [cartItems, setCartItems] = useState(initialCartItems);

  const handleIncrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div>
      <Header />
      <Container className="row-shopping-cart">
        <Row className="">
          <div>
            <h2>Your Cart</h2>
          </div>
          <Col>
            {cartItems.map((item) => (
              <Card key={item.id} className="card-shopping-cart">
                <Card.Body>
                  <Row>
                    <Col md={3}>
                      <Card.Img className='card-cart-img' src={item.image} alt={item.name} />
                    </Col>
                    <Col>
                      <h5>{item.name}</h5>
                      <p><strong>Each:</strong> ₹{item.price.toFixed(2)}</p>
                      <Form.Group as={Row} controlId={`quantity-${item.id}`} className="quantity-control">
                        <Form.Label column sm="2">
                          Quantity:
                        </Form.Label>
                        <div className='quantity-div'>
                        <button type="button" className="quantity-button"
                            onClick={() => handleDecrement(item.id)}>
                            -
                          </button>
                          <Form.Control
                            type="number" value={item.quantity} readOnly className="quantity-input" />
                          <button type="button" className="quantity-button" 
                            onClick={() => handleIncrement(item.id)}>
                            +
                          </button>
                        </div>
                      </Form.Group>
                      <p><strong>Total:</strong> ₹{(item.price * item.quantity).toFixed(2)}</p>
                      <Button className="custom-delete-button" onClick={() => {}}>
                        <FontAwesomeIcon icon={faTrash} /> Remove
                      </Button>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
            <Button variant="link" className="continue-shopping">Continue Shopping</Button>
          </Col>
          <Col md={4}>
            <div className="cart-promotion">
              <h4>Promotions</h4>
              <ListGroup variant="flush" className='cart-summary'>
                <ListGroup.Item>Free Shipping on Orders ₹39+ <span className="text-success">-₹18.97</span></ListGroup.Item>
                <ListGroup.Item>Subtotal <span className="float-end">₹{calculateTotal()}</span></ListGroup.Item>
                <ListGroup.Item>Shipping cost <span className="float-end">₹18.97</span></ListGroup.Item>
                <ListGroup.Item>Shipping Discount <span className="text-danger float-end">-₹18.97</span></ListGroup.Item>
                <ListGroup.Item>Estimated Sales Tax <span className="float-end">TBD</span></ListGroup.Item>
                <ListGroup.Item><strong>Estimated Total</strong> <span className="float-end"><strong>₹{calculateTotal()}</strong></span></ListGroup.Item>
              </ListGroup>
              <Button className="w-100 mt-3 checkout-button">CHECKOUT</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ShoppingCart;