import React from 'react'
import {Container , Nav , Navbar}from 'react-bootstrap';


const Header = () => {
  return (
    <>
    <Navbar bg="dark" expand="lg" variant='dark' collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">Computer Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto'>
            <Nav.Link href="/home">
            <i className="fa-solid fa-cart-shopping"></i>
              &nbsp;  Cart</Nav.Link>
            <Nav.Link href="/link">
            <i className="fa-solid fa-user"></i>
            &nbsp;  SignIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header