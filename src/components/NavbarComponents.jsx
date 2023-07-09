import {useState, useEffect} from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'

import {navLinks} from "../data/index";
import { Link, NavLink } from 'react-router-dom';

const NavbarComponents = () => {
const [changecolor, setchangecolor] = useState(false);

const changebackgroundcolor = () => {
  if (window.scrollY > 10) {
    setchangecolor(true);
  } else {
    setchangecolor(false);
  }
};

useEffect(() => {
  changebackgroundcolor();

window.addEventListener("scroll", changebackgroundcolor);
});

  return (
    <div>
        <Navbar expand="lg" className={changecolor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className='fs-3 fw-bold'>Sagara Vote</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((Link) => {
                return ( 
                <div className="nav-link" key={Link.id}>
                 <NavLink to={Link.path} className={({ isActive, isPending }) =>isPending ? "pending" : 
                 isActive ? "active" : ""}>
                    {Link.text}
                 </NavLink>
                </div>
                );
            })}
          </Nav>

          <div className='text-center'>
            <button className='btn btn-outline-danger rounded-1'>join now!</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponents