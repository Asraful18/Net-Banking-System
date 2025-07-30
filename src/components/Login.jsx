import React,{useState} from 'react';
import { Form,Button,Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import img100 from '../assets/BG.jpg'
const Login = () => {
   const [crendential,setCrendential] = useState({email:"",password:""});
   const navigate = useNavigate();
   
   const hl = (e) => {
    e.preventDefault();
    const storeuser = JSON.parse(localStorage.getItem('user'));

    if(storeuser && 
      crendential.email === storeuser.email &&
      crendential.password === storeuser.password
    ) {
      localStorage.setItem('loggedin',true);
      navigate('/home');
    } else {
      alert("invalid credential");
    }
   };

  return <>
  <div className="full-container">
   <div  className='login-container'>

    <div className="login-text">
      <h1>Welcome Back!</h1>
      <h5>Login To Explor Again <i className='fas fa-arrow-right'></i></h5>
    </div>
    
    <Form onSubmit={hl} className='login-form'>
    <Form.Group>
        <i className='fas fa-user-circle'></i>
        
        <Form.Control className='login-input' type='email' placeholder='Email' required onChange={(e)=>setCrendential({...crendential,email:e.target.value})} />
    </Form.Group>
   <Form.Group>
        
        <Form.Control className='login-input' type='password' placeholder='Password' required onChange={(e)=>setCrendential({...crendential,password:e.target.value})} />
        <Button variant='success' type='submit' className='login-button'>Login</Button>
    </Form.Group>
    </Form>
    </div>
    </div>
  </>
}

export default Login;