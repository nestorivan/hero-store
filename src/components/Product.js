import React from 'react';
import numeral from 'numeral';

import './product.css';

const Product = ({
  product: { title, brand, price, description: des, image: img }
}) => {
  return (
    <div className="col-4 product my-4">
      <img className="img-thumbnail mb-3" src={`/img/${img}`} alt={title} />
      <div className="text-center text-muted">{brand}</div>
      <div className="text-center text-dark product-title my-1">{title}</div>
      <div className="text-center text-muted">
      {numeral(price).format('$0,0.00')}
      </div>
    </div>
  );
};

export default Product;
