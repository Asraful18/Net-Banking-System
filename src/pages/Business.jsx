import React,{useState} from 'react';
import { Form,Button,Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Business = () => {
  return <>
     <h1 className='text-center text-info'>Open Your Business Account</h1>
    <Container className='account-container'>
    <Form>
    <Form.Group>
        <Form.Label>Name:</Form.Label>
        <Form.Control type='text' required />
    </Form.Group>
    <Form.Group>
        <Form.Label>Date of Birth:</Form.Label>
        <Form.Control type='date' required />
    </Form.Group>
     <Form.Group>
        <Form.Label>Business Namer:</Form.Label>
        <Form.Control type='text' required/>
    </Form.Group>
    <Form.Group>
        <Form.Label>Business Type:</Form.Label>
        <Form.Control type='text' required/>
    </Form.Group>
    <Form.Group>
        <Form.Label>Phone Number:</Form.Label>
        <Form.Control type='number' required />
    </Form.Group>
    <Form.Group>
        <Form.Label>Email:</Form.Label>
        <Form.Control type='email' required />
    </Form.Group>
    <Form.Group>
        <Form.Label>Addhar:</Form.Label>
        <Form.Control type='number' required />
    </Form.Group>
    <Form.Group>
        <Form.Label>Pan No:</Form.Label>
        <Form.Control type='number' required />
    </Form.Group>
    <Form.Group>
        <Form.Label>Address:</Form.Label>
        <Form.Control type='textarea' required />
        <Button variant='success' type='submit'>SUBMIT</Button>
    </Form.Group>
    </Form>
    </Container>
  </>
}

export default Business