import React, { useState } from 'react';
import { Form, Button, Container, FormGroup } from 'react-bootstrap';
const Home_loan = () => {
    return <>
        <h1 className='text-center text-primary'>Get Your Car Loan</h1>
        <div className="account-container">
        <Container>
            <Form className='acc-container-item'>
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type='text' required />
                </Form.Group>
                <Form.Group className='gender'>
                    <Form.Label>Gender:</Form.Label>
                    <Form.Check type='radio' name='n1' required />Male
                    <Form.Check type='radio' name='n1' required />Female
                    <Form.Check type='radio' name='n1' required />Others
                </Form.Group>
                <Form.Group>
                    <Form.Label>Date of Birth:</Form.Label>
                    <Form.Control type='date' required />
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
                    <Form.Label>Upload Income Certificate:</Form.Label>
                    <Form.Control type='file' required />
                </Form.Group>
                 <Form.Group>
                    <Form.Label>Loan Amount:</Form.Label>
                    <Form.Control type='number' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type='textarea' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Poperty Type:</Form.Label>
                    <Form.Control type='text' placeholder='Flat/Independent House/Land'/>
                </Form.Group>
                 <Form.Group>
                    <Form.Label>Poperty Location:</Form.Label>
                    <Form.Control type='text' placeholder='Flat/Independent House/Land'/>
                </Form.Group>
                <FormGroup className='button-item'>
                <Button variant='secondary' type='reset'>RESET</Button>
                <Button variant='success' type='submit'>SUBMIT</Button>
                </FormGroup>
            </Form>
        </Container>
        </div>
    </>
}

export default Home_loan