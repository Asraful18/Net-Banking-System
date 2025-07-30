import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';


const Fixed = () => {
    return <>
        <h1 className='text-center text-primary'>Open Your Fixed Account</h1>
        <Container className='account-container'>
            <Form>
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
                    <Form.Label>Pan No:</Form.Label>
                    <Form.Control type='text' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Address:</Form.Label>
                    <Form.Control type='textarea' required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Nominy:</Form.Label>
                    <Form.Control type='text' />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Deposit Amount:</Form.Label>
                    <Form.Control type='number' required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Deposit Tenure:</Form.Label>
                    <Form.Control type='number' required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Gender:</Form.Label>
                    <Form.Check type='radio' name='n2' required />Monthly
                    <Form.Check type='radio' name='n2' required />Quarterly
                    <Form.Check type='radio' name='n2' required />Yearly
                </Form.Group>
            </Form>
        </Container>
    </>
}

export default Fixed