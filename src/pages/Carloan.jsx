import React from 'react'
import img32 from '../assets/B32.png'
import img44 from '../assets/B44.png'
import { Link } from 'react-router-dom'
import { Card,Button } from 'react-bootstrap'
import Navberdata from '../components/Navberdata'
const Carloan = () => {
  return <>
   <Navberdata/>
  <section className='section-2'>
        <div className="section2-info">
          <h2>Car Loan</h2>
         <p><Link to={'/home'} className='text-light text-decoration-none'>Home</Link> <i className='fas fa-angle-right text-success-right'> Car Loan</i></p>
        </div>
        <img src={img32} id='b10' />
   </section>
    <section className='section-12'>
            <div className="acc12-img">
              <img src={img44} alt="img1" />
            </div>
            <div className="account12">
               <p className=' text-success'>Want A New Car?</p>
              <h2>Apply For Your Car Loan Today!</h2>
              <p><i className='fas fa-check text-success'></i> Quick Approvals</p>
              <p><i className='fas fa-check text-success'></i> Transparent Terms</p>
              <p><i className='fas fa-check text-success'></i> Easy Payments</p>
              <Link to="/car_loan">
              <button>Apply For Loan</button>
              </Link>
            </div>
       </section>
       <section className='section14'>
        <div className="section-header text-center">
                <p className=' text-success'>Loan Process</p>
                <h3>How It Works</h3>
        </div>
        <div className="section14-item pt-3">
            <Card className="section14-card">
               <Card.Body className='card-item14'> 
                <Card.Title><i className='fas fa-file'></i></Card.Title>
                <Card.Title>Fill The Form</Card.Title>
                <Card.Text>Good</Card.Text>
               </Card.Body>
            </Card>
            <Card className="section14-card">
                <Card.Body className='card-item14'> 
                <Card.Title><i className='fas fa-upload'></i></Card.Title>
                <Card.Title>Upload Documents</Card.Title>
                <Card.Text>Good</Card.Text>
               </Card.Body>
            </Card>
            <Card className="section14-card">
                <Card.Body className='card-item14'> 
                <Card.Title><i className='fas fa-check'></i></Card.Title>
                <Card.Title>Get Approval</Card.Title>
                <Card.Text>Good</Card.Text>
               </Card.Body>
            </Card>
            <Card className="section14-card">
                <Card.Body className='card-item14'> 
                <Card.Title><i className='fas fa-hand-holding-usd'></i></Card.Title>
                <Card.Title>Get The Loan</Card.Title>
                <Card.Text>Good</Card.Text>
               </Card.Body>
            </Card>
        </div>
       </section>
  </>
}

export default Carloan