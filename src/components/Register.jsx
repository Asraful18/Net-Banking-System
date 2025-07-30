import React,{useState} from 'react';
import { Form,Button,Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
   const [user,setUser] = useState({email:"",password:"",name:"",phone:""});
   const navigate = useNavigate();
   
   const hs = (e) => {
    e.preventDefault();
    localStorage.setItem('user',JSON.stringify(user));
    alert("Register successfully");
    navigate('/login');
   };

  return <>
   <div className="full-container">
    <div className='login-container'>
    <Form onSubmit={hs} className='login-form'>
      <Form.Group>
        <i className='fas fa-user'></i>
        <Form.Control className='login-input' type='text' placeholder='Name' required onChange={(e)=>setUser({...user,name:e.target.value})} />
    </Form.Group>
     <Form.Group>
        <Form.Control className='login-input' type='number' placeholder='Phone' required onChange={(e)=>setUser({...user,phone:e.target.value})} />
    </Form.Group>
    <Form.Group>
        <Form.Control className='login-input' type='email' placeholder='Email' required onChange={(e)=>setUser({...user,email:e.target.value})} />
    </Form.Group>
   <Form.Group>
        <Form.Control className='login-input' type='password' placeholder='Password' required onChange={(e)=>setUser({...user,password:e.target.value})} />
        <Button className='login-button' variant='danger' type='submit'>Register</Button>
    </Form.Group>
    </Form>
    <div className="login-text2">
      <h1><p>  </p>Welcome!</h1>
      <h5><i className='fas fa-arrow-left'></i> Register To Enjoy Digital Banking</h5>
    </div>
    </div>
    </div>
  </>
}

export default Register