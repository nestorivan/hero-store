import React from 'react'

import CartModal from './CartModal';
import HeroBanner from './HeroBanner';
import ProductsList from './ProductsList';

const Main = () => {
  return (
    <div className="container-fluid">
        <CartModal/>
        <HeroBanner />
        <ProductsList/>
    </div>
  )
}

export default Main;