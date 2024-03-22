import React from 'react';
import { Modal, Button, ListGroup } from 'react-bootstrap';

const Cart = ({ cartItems, removeFromCart, show, handleClose, finalizePurchase }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Carrinho de Compras</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          {cartItems.map((item, index) => (
            <ListGroup.Item key={index}>
              {item.name} - R$ {item.price.toFixed(2)}
              <Button variant="danger" size="sm" onClick={() => removeFromCart(index)} className="ms-2">
                Remover
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <p className="mt-3">Total: R$ {totalPrice.toFixed(2)}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={finalizePurchase}>
          Finalizar Compra
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Cart;
