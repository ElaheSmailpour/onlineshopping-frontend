import { NavDropdown, Form, Nav, Button, FormControl, Navbar } from "react-bootstrap"
import React from 'react';
import { Link } from "react-router-dom"
import "./styles/navbar.css"
const Dropdownmenu = () => {
  
  
  
  const logoutClick = () => {
    localStorage.clear()
    window.location.reload();
}
  return (
    <div className="Dropdownmenu">
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown  className="navmenu1" title="Login" id="navbarScrollingDropdown">
              <Link to="/login">Login</Link>
              <Link to="changeprofile">Change profil</Link>
              <li onClick={logoutClick}>
                        <span>Logout</span>
                    </li>
              
           
            </NavDropdown>
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                <Link to="/ProductListCategory/60a4a61e318a3c21e32494a8">
                  Bag</Link></NavDropdown.Item>
            
           
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