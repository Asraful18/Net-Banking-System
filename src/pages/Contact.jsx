import React from 'react'
import img42 from '../assets/B42.png'
import img41 from '../assets/B41.png'
import { Link } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Navberdata from '../components/Navberdata'
import Fqa from '../components/Fqf'
import { NavDropdown } from 'react-bootstrap'
import img50 from '../assets/B50.png'
import Subscribe from '../components/Subscribe'
const Contact = () => {
    return <>
        <Navberdata />
        <section className='section-2'>
            <div className="section2-info">
                <h2>Contact Us</h2>
                <Link to={'/home'}><p>Home <i className='fas fa-angle-right'> Contact</i></p></Link>
            </div>
            <img src={img42} id='b10' />
        </section>
        <section className='contact-section'>
            <div className="img-section">
                <img src={img41} alt=""/>
                <div className="contact-info">
                    <div className="info-item">
                        <i className='fas fa-headset'></i>
                        <h5>Call Us</h5>
                        <p>+123-456-6789</p>
                        <p>+111-222-333</p>
                    </div>
                    <div className="info-item">
                        <i className='fas fa-file-alt'></i>
                        <h5>Email Us</h5>
                        <p>example@gmail.com</p>
                        <p>info@gmail.com</p>
                    </div>
                    <div className="info-item">
                        <i className='fas fa-handshake'></i>
                        <h5>Feedback Us</h5>
                        <p>Feedback form</p>
                        <p>Report An Issue</p>
                    </div>
                </div>
            </div>
           <div className="contact-form">
                    <h2>Get In Touch</h2>
                    <Form className='contact-in'>
                        <Form.Group>
                            <Form.Control className='login-input' type='text' placeholder='Name' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control className='login-input' type='number' placeholder='Phone' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control className='login-input' type='email' placeholder='Email' />
                        </Form.Group>
                        <Form.Group>
                            <Form.Control className='login-input' type='textarea' placeholder='Write Your Massage' required />
                            <Button className='login-button'  type='submit'>Send massage</Button>
                        </Form.Group>
                    </Form>
            </div>

        </section>
         <section className='section-12'>
                 <div className="account12">
                    
                   <Fqa/>
                 </div>
                 <div className="acc12-img">
                   <img src={img50} alt="img1" />
                 </div>
            </section>
            <Subscribe/>
    </>
}

export default Contact