import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, } from 'react-bootstrap';

const Subscribe = () => {
    return <>
        <div className='subscribe'>
            <div className='quick-links'>
                
                <ul className='text-secondary'>
                    <h6 className='text-secondary'>Quick Links</h6>
                    <li><Link className='nav-link text-secondary' to="/home"><i className='fas fa-angle-right'></i> Home</Link></li>
                    <li><Link className='nav-link text-secondary' to="/about"><i className='fas fa-angle-right'></i> About</Link></li>
                    <li><NavDropdown title="Services" id="nav-dropdown" className="bg-white">
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
                              </NavDropdown></li>
                    <li><Link className='nav-link text-secondary' to="/team"><i className='fas fa-angle-right'></i> Team</Link></li>
                    <li><Link className='nav-link text-secondary' to="/contact"><i className='fas fa-angle-right'></i> Contact</Link></li>
                </ul>
            </div>
            <div className='email-form'>
                <h6 className='text-secondary'>Newsletter</h6>
                <Form.Group>
                    <Form.Control type='email' required className='input' placeholder='Enter Your Email' />
                </Form.Group>
                <Button variant='danger' type='subscribe'>Subscribe</Button>
            </div>
            <div className='quick-links'>
               
                <ul className='text-secondary'>
                     <h6 className='text-secondary '>Follow us</h6>
                    <li><i className='fab fa-youtube'></i> Youtube</li>
                    <li><i className='fab fa-whatsapp'></i> Whatsapp</li>
                    <li><i className='fab fa-instagram'></i> Instragram</li>
                    <li><i className='fab fa-linkedin'></i> Linkedin</li>
                </ul>
            </div>
        </div>
    </>
}

export default Subscribe