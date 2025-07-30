import React from 'react'
import img32 from '../assets/B32.png'
import img36 from '../assets/B36.png'
import { Link } from 'react-router-dom'
import Navberdata from '../components/Navberdata'
import { Card, CardBody, CardTitle } from 'react-bootstrap'
const About = () => {
    return <>
        <Navberdata />
        <section className='section-2'>
            <div className="section2-info">
                <h2>About Us</h2>
                <Link to={'/home'}><p>Home <i className='fas fa-angle-right'> About</i></p></Link>
            </div>
            <img src={img32} id='b10' />
        </section>
        <section className='section-12'>
            <div className="acc12-img">
                <img src={img36} alt="img1" />
            </div>
            <div className="account12">
                <p className='text-success'>Why Choose Us?</p>
                <h2><b>Investing In Your Success</b></h2>
            
                <div className="percent-card">
                    <Card className='p-card-item'>
                        <Card.Title className='card-title'><b>100%</b></Card.Title>
                        <Card.Text>Coustomer</Card.Text>
                        <Card.Text>satisfaction</Card.Text>
                    </Card >
                    <Card className='p-card-item'>
                        <Card.Title className='card-title'><b>95%</b></Card.Title>
                        <Card.Text>Chances Loan</Card.Text>
                        <Card.Text>Easy Approval</Card.Text>
                    </Card>
                    <Card className='p-card-item'>
                        <Card.Title className='card-title'><b>100%</b></Card.Title>
                        <Card.Text>Secure, Safe</Card.Text>
                        <Card.Text>Transparent</Card.Text>
                    </Card>
                </div>
            </div>
        </section>
    <div className="card22-section">
        <Card className="card22 shadow-sm rounded-md">
            <CardBody className="card2-item text-left">
                <div className="text-success mb-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <CardTitle className="ct2">Fast And Reliable</CardTitle>
                <p className="text-secondary text-sm mt-2">
                    Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit...
                </p>
                <div className="d-flex align-items-center mt-4">
                    <i className="card-icon text-primary fas fa-user-circle" />
                    <div>
                        <p className="font-semibold m-0">John Deo</p>
                        <small className="text-muted">Account Holder</small>
                    </div>
                </div>
            </CardBody>
        </Card>
        <Card className=" shadow-sm rounded-md">
            <CardBody className="card2-item text-left">
                <div className= "text-success mb-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <CardTitle className="ct2">Great Service Experience</CardTitle>
                <p className="text-secondary text-sm mt-2">
                    Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit...
                </p>
                <div className="d-flex align-items-center mt-4">
                    <i className="card-icon text-primary fas fa-user-circle" />
                    <div>
                        <p className="font-semibold m-0">John Deo</p>
                        <small className="text-muted">Account Holder</small>
                    </div>
                </div>
            </CardBody>
        </Card>
        <Card className=" shadow-sm rounded-md">
            <CardBody className="card2-item text-left">
                <div className= "text-success mb-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <CardTitle className="ct2">Easy To Access</CardTitle>
                <p className="text-secondary text-sm mt-2">
                    Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit...
                </p>
                <div className="d-flex align-items-center mt-4">
                    <i className="card-icon text-primary fas fa-user-circle" />
                    <div>
                        <p className="font-semibold m-0">John Deo</p>
                        <small className="text-muted">Account Holder</small>
                    </div>
                </div>
            </CardBody>
        </Card>
        <Card className=" shadow-sm rounded-md">
            <CardBody className="card2-item text-left">
                <div className= "text-success mb-2">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                </div>
                <CardTitle className="ct2">Fast And Reliable</CardTitle>
                <p className="text-secondary text-sm mt-2">
                    Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit...
                </p>
                <div className="d-flex align-items-center mt-4">
                    <i className="card-icon text-primary fas fa-user-circle" />
                    <div>
                        <p className="font-semibold m-0">John Deo</p>
                        <small className="text-muted">Account Holder</small>
                    </div>
                </div>
            </CardBody>
        </Card>
     </div>
    </>
}

export default About