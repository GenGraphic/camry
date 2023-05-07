import React from 'react';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const MyNavbar = () => {
  const scrollTo = (section) => {
    const element = document.getElementById(section);

    if(element) {
      element.scrollIntoView({behavior: 'smooth'});
    }
  }

  return (
    <Navbar bg="none" expand="lg">
      <Container>
        <Navbar.Brand href="#home" style={{fontWeight: 'bold'}}>$CAMRY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollTo('about')}>About us</Nav.Link>
            <Nav.Link onClick={() => scrollTo('tokenomics')}>Tokenomics</Nav.Link>
            <Nav.Link onClick={() => scrollTo('swap')}>Camry Swap</Nav.Link>
            <Nav.Link onClick={() => scrollTo('contact')}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
