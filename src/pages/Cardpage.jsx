import React from 'react'
import Navberdata from '../components/Navberdata'
import img35 from '../assets/B35.png'
import img34 from '../assets/B34.png'
import img12 from '../assets/B12.png'
import img22 from '../assets/B22.png'
import img222 from '../assets/B222.png'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import Subscribe from '../components/Subscribe'
const Cardpage = () => {
  return <>
  <Navberdata/>
    <section className='section-1 bg-info'>
      <div className="account">
        <h4 className='text-success'>Any Card, Anywhere</h4>
        <h1>Discover Your Perfect Card.</h1>
        <button className='bg-primary text-light'>Get Started</button>
      </div>
      <div className="acc-img">
        <img src={img35} alt="img1" />
      </div>
    </section>
    <section className='section14'>
        <div className="section-header text-center">
                <p className=' text-success'>Powerful Features</p>
                <h3>What Our Card Offers</h3>
        </div>
        <div className="section14-item pt-3">
            <Card className="section14-card">
               <Card.Body className='card-item14'> 
                <Card.Title><i className='fas fa-money-bill-wave'></i></Card.Title>
                <Card.Title>No Annual Fees</Card.Title>
                <Card.Text>Good</Card.Text>
               </Card.Body>
            </Card>
            <Card className="section14-card">
                <Card.Body className='card-item14'> 
                <Card.Title><i className='fas fa-file-invoice-dollar'></i></Card.Title>
                <Card.Title>No Foreign Exchange Fees</Card.Title>
                <Card.Text>Good</Card.Text>
               </Card.Body>
            </Card>
            <Card className="section14-card">
                <Card.Body className='card-item14'> 
                <Card.Title><i className='fas fa-money-check-alt'></i></Card.Title>
                <Card.Title>No SSN Needed</Card.Title>
                <Card.Text>Good</Card.Text>
               </Card.Body>
            </Card>
        </div>
    </section>
    <section className='section-12'>
            <div className="acc12-img bg-primary pl-10 pr-10">
              <img className='' src={img34} alt="img1" />
            </div>
            <div className="account12">
               <p className=' text-success'>Pay Smart. Live More</p>
              <h2>All Bank Cards In One Place.</h2>
              <p><i className='fas fa-check text-success'></i> Global Acceptance</p>
              <p><i className='fas fa-check text-success'></i> Rewarding Experiences</p>
              <p><i className='fas fa-check text-success'></i> Enhanced Security</p>
              <Link to="/car_loan">
              <button>Apply Now</button>
              </Link>
            </div>
    </section>
    <section className='section15'>
        <div className="account1-info">
          <h5>Compare & Apply</h5>
          <h2>Find Your Ideal Card</h2>
        </div>
        <div className="section15-card">
          <div className="section15-item">
            <div className="section15-img">
            <img src={img12} alt="" />
            </div>
            <div className="section15-info">
              <Button>Apply Now</Button>
            </div>
          </div>
          <div className="section15-item">
            <div className="section15-img">
            <img src={img222} alt="" />
            </div>
            <div className="section15-info">
              <Button>Apply Now</Button>
            </div>
          </div>
          <div className="section15-item">
            <div className="section15-img">
            <img src={img22} alt="" />
            </div>
            <div className="section15-info">
              <Button>Apply Now</Button>
            </div>
          </div>
      
        </div>
        </section>
        <Subscribe/>
  </>
}

export default Cardpage