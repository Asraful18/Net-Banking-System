import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Navberdata = () => {
  return <>
    <Navbar bg="white" expand="lg" className='navbar-item'>
      <Navbar.Brand className='text-secondary'><i className='fas fa-building'></i>Banking</Navbar.Brand>
      <Navbar.Toggle className='toggle bg-warning' />
      <Navbar.Collapse>
        <Nav className='nav-main text-light'>
          <Link className='nav-link text-secondary' to="/home">Home</Link>
          <Link className='nav-link text-secondary' to="/about">About</Link>
          <NavDropdown title="Services" id="nav-dropdown" className="bg-white">
            <NavDropdown className='nav-link text-secondary bg-white' id="nav-dropdown" title='Loan'>
               <NavDropdown.Item className='nav-link text-secondary bg-white' as={Link} to="/personelloan">Personel Loan</NavDropdown.Item>
               <NavDropdown.Item className='nav-link text-secondary bg-white' as={Link} to="/homeloan">Home Loan</NavDropdown.Item>
               <NavDropdown.Item className='nav-link text-secondary bg-white' as={Link} to="/carloan">Car Loan</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className='nav-link text-secondary bg-white' id='nav-dropdown' title="Account">
               <NavDropdown.Item className='nav-link text-secondary bg-white' as={Link} to="/businesspage">Business Account</NavDropdown.Item>
               <NavDropdown.Item className='nav-link text-secondary bg-white' as={Link} to="/fixedpage">Fixed Account</NavDropdown.Item>
               <NavDropdown.Item className='nav-link text-secondary bg-white' as={Link} to="/savingspage">Savings Account</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown.Item className='nav-link text-secondary bg-white pl-3' as={Link} to="/cardpage" id='nav-dropdown'>Card</NavDropdown.Item>
          </NavDropdown>
          <Link className='nav-link text-secondary' to="/team">Team</Link>
          <Link className='nav-link text-secondary' to="/contact">Contact</Link>
          <Link to={'/profile'}><i className='fas fa-user-circle'></i></Link>
        </Nav>
      </Navbar.Collapse>
      
  
    </Navbar>

  </>
}

export default Navberdata