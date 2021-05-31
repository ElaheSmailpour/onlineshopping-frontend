import {NavDropdown,Form,Nav,Button,FormControl,Navbar  } from "react-bootstrap"
import React from 'react';
import { Link } from "react-router-dom"
const Dropdownmenu=()=>{
    return(
        <div className="Dropdownmenu">
<Navbar bg="light" expand="lg">
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <NavDropdown title="Login" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3">My Account</NavDropdown.Item>
        <NavDropdown.Item href="#action3">My profil</NavDropdown.Item>
        <NavDropdown.Item href="#action4">My Order</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
        <NavDropdown.Item href="#action5">Logout</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Category" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">
        <Link to="/ProductListCategory/60a4a61e318a3c21e32494a8">
          Bag</Link></NavDropdown.Item>
        <NavDropdown.Item href="#action4">Men
        </NavDropdown.Item>
        <NavDropdown.Item href="#action5">Children</NavDropdown.Item>
        <NavDropdown.Divider />

       

        <NavDropdown.Item href="#action5"> <Link to="/ProductListCategory/60994aca5c079d1905146394">Accesories</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>


        </div>
    )
}
export default Dropdownmenu