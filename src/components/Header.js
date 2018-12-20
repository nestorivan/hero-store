import React, { useState, useContext } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { StoreContext } from '../context/StoreContext';
import { CartContext } from '../context/CartContext';

import './Header.css';

const Header = () => {
  const [isOpen, toggle] = useState(false);

  const { handleToggleCart } = useContext(StoreContext);
  const { items } = useContext(CartContext);

  let counter = 0;

  Object.entries(items).forEach(([key, value]) => {
    counter += value;
  });

  return (
    <div className="header">
      <Navbar color="faded" light expand="md" className="header-navbar">
        <NavbarBrand href="#">
          <img src="/img/logo.png" alt="hero" />
        </NavbarBrand>
        <NavbarToggler onClick={() => toggle(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={handleToggleCart}>
                {counter > 0 ? (
                  <span>My Cart({counter})</span>
                ) : (
                  <span>My Cart</span>
                )}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
