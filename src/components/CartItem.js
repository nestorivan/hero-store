import React from 'react';
import numeral from 'numeral';

import './CartItem.css';

const CartItem = ({
  product: { id, title, brand, price, description: des, image: img, count },
  handleRemoveItem
}) => {
  return (
    <div className="row cart-item">
      <button
        className="remove text-muted"
        onClick={() => handleRemoveItem(id)}
      >
        x
      </button>
      <div className="col-4">
        <img className="mb-3" src={`/img/${img}`} alt={title} />
      </div>
      <div className="col-8 pr-3">
        <div>
          <span className="font-weight-bold text-uppercase">{title}</span>
          <span className="text-small"> x {count}</span>
        </div>
        <div>{brand}</div>
        <div className="font-weight-bold">
          {numeral(price).format('$0,0.00')}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
