import React from 'react';
import numeral from 'numeral';


import './product.css';

const Product = ({
  product: { id, title, brand, price, description: des, image: img },
  handleAddItem
}) => {
  return (
    <div className="col-sm-4 product my-4 text-center">
      <img className="img-thumbnail mb-3" src={`/img/${img}`} alt={title} />
      <div className="text-center text-muted">{brand}</div>
      <div className="text-center text-dark product-title my-1">{title}</div>
      <div className="text-center text-muted">
        {numeral(price).format('$0,0.00')}
      </div>
      <div>
        <button className="btn solid" onClick={() => handleAddItem(id)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
