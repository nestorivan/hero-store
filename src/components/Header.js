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

import './Header.css';

const Header = () => {
  const [isOpen, toggle] = useState(false);

  const { handleToggleCart } = useContext(StoreContext);

  //todo: hook cart item count
  const test = 40;

  return (
    <div className="header">
      <Navbar color="faded" light expand="md" className="header-navbar">
        <NavbarBrand href="#">
          <img src="/img/logo.png" alt="hero"></img>
        </NavbarBrand>
        <NavbarToggler onClick={() => toggle(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#" onClick={handleToggleCart}>
                {test !== 0 ? <span>My Cart({test})</span> : <span>My Cart</span>}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
