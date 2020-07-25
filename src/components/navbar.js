import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  light expand="md">
        
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/aboutme"><h5 className="nav-links">About </h5></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects"><h5 className="nav-links">Projects </h5></NavLink>
            </NavItem>
          <NavItem>
              <NavLink href="/contact"><h5 className="nav-links">Contact </h5></NavLink>
            </NavItem>
            
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;