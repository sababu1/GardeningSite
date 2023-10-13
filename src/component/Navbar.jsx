import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navbar1 = () => {
  return (
    <div>
         <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/Home">Sababu's Gardening</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/Home">Home</Nav.Link>
          
          <Nav.Link as={Link} to="/Page1">Plant ID</Nav.Link>
        
          <Nav.Link as={Link} to="/NewsContext">News</Nav.Link>
          
          <Nav.Link as={Link} to="/Flowers">Flowers</Nav.Link>
          
        </Nav>
      </Container>
    </Navbar>
    </div>
  );
}

export default Navbar1;

//email news articles
