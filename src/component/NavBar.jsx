import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';

const NavBar = ({ filterBySearch }) => {
  const [searchchvalue, setsearchchvalue] = useState('');

  const onSearsh = () => {
    filterBySearch(searchchvalue);
    setsearchchvalue('')
  }

  return (
    <Row>
      <Navbar bg="dark" expand="lg" variant="dark" className="navbar-custom">
        <Container>
          <Navbar.Brand href="#">
            <div className="brand-color">
              مطعم جديد
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="ابحث"
                className="mx-3"
                onChange={(e) => setsearchchvalue(e.target.value)}
                value={searchchvalue}
              />
              <Button onClick={onSearsh} variant="outline-success" className="search-btn">بحث</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  )
}

export default NavBar;
