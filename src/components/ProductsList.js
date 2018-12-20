import React, { useContext } from 'react';
import Product from './Product';
import { ProductsContext } from '../context/ProductsContext';
import { CartContext } from './../context/CartContext';


const ProductsList = () => {
  const { products, loading } = useContext(ProductsContext);
  const { handleAddItem } = useContext(CartContext);
  return (
        <div className="row">
          <div className="container">
            {loading ? (
              <span>Loading...</span>
            ) : (
              <div className="row">
                {products.map(product => (
                  <Product
                    key={product.id}
                    product={product}
                    handleAddItem={handleAddItem}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
  );
};

export default ProductsList;
