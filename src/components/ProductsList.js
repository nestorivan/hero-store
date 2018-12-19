import React, { useContext } from 'react';
import { ProductsContext } from '../context/ProductsContext';
import Product from './Product';

const ProductsList = () => {
  const { products, loading } = useContext(ProductsContext);
  return (
    <div className="row">
      <div className="container">
        {loading ? (
          <span>Loading...</span>
        ) : (
          <div className="row">
            {products.map(product => (
              <Product product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;
