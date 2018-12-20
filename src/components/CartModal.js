import React, { useContext } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { StoreContext } from '../context/StoreContext';
import { CartContext } from '../context/CartContext';
import { ProductsContext } from '../context/ProductsContext';
import CartItem from './CartItem';

import numeral from 'numeral';

const CartModal = () => {
  const { handleToggleCart, showCart } = useContext(StoreContext);
  const { items, handleRemoveItem } = useContext(CartContext);
  const { products } = useContext(ProductsContext);

  const toggleModal = () => {
    handleToggleCart();
  };

  let itemsInCart = [];
  for (const key in items) {
    let item = products.find(product => product.id === parseInt(key));
    item.count = items[key];
    if (item) itemsInCart.push(item);
  }

  const total = numeral(
    itemsInCart.reduce((acc, { price, count }) => (acc += price * count), 0)
  ).format('$0,0.00');

  return (
    <div>
      <Modal
        className="cart-modal"
        isOpen={showCart}
        toggle={toggleModal}
        size="sm"
      >
        <ModalHeader toggle={toggleModal}>My Cart</ModalHeader>
        <ModalBody>
          {!Object.keys(items).length ? (
            <span>There are no items in your cart!</span>
          ) : (
            itemsInCart.map(product => (
              <CartItem
                key={product.id}
                product={product}
                handleRemoveItem={handleRemoveItem}
              />
            ))
          )}
        </ModalBody>
        <ModalFooter>
          <div className="p-0 col-12">
            {Object.keys(items).length ? (
              <div className="col-12 p-0 text-muted">
                <div className="col-4 p-0 text-left float-left">TOTAL</div>
                <div className="col-4 p-0 text-right float-right">{total}</div>
              </div>
            ) : null}
            <div className="col-12 mt-4 p-0">
              <Button onClick={toggleModal} className="float-left outline">
                View Cart
              </Button>
              <Button onClick={toggleModal} className="float-right solid">
                Checkout
              </Button>
            </div>
          </div>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CartModal;
