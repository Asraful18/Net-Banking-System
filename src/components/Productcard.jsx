import React from 'react'
import { Card,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../data/product'
import Savings from '../pages/Savings'
const Productcard = () => {
  return <>
  <div className='card-first'>
      <div className='card1-section' id='card-section'>
      <Card className='card-item'>
        <Card.Body>
          <Card.Title><i className='fas fa-piggy-bank'></i></Card.Title>
          <Card.Title>Saveings Account</Card.Title>
          <Card.Text className='pt-1.5 text-secondary'>Gives interest on saved money and allows easy access. Useful for daily saving and spending.
</Card.Text>
          <Link to={'/savingspage'}>
             <Button variant='primary'>Open Account <i className='fas fa-arrow-right'></i></Button>
          </Link>
        </Card.Body>
        </Card>
        <Card className='card-item'>
        <Card.Body >
          <Card.Title><i className='fas fa-building'></i></Card.Title>
          <Card.Title>Fixed Account</Card.Title>
          <Card.Text className='pt-1.5 text-secondary'>Gives higher interest for keeping money for a fixed time. Safe and best for long-term saving.</Card.Text>
          <Link to={'/fixedpage'}>
             <Button variant='primary'>Open Account <i className='fas fa-arrow-right'></i></Button>
          </Link>
        </Card.Body>
         </Card>
          <Card className='card-item'>
        <Card.Body>
          <Card.Title><i className='fas fa-suitcase'></i></Card.Title>
          <Card.Title>Business Account</Card.Title>
          <Card.Text className='pt-1.5 text-secondary'>Helps manage business money, payments, and receipts. Offers features like cheque book and online banking.
</Card.Text>
          <Link to={'/businesspage'}>
             <Button variant='primary'>Open Account <i className='fas fa-arrow-right'></i></Button>
          </Link>
        </Card.Body>
      </Card>
      </div>
      
  </div>
  </>
}

export default Productcard