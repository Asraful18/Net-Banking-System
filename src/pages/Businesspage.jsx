import React from 'react'
import img32 from '../assets/B32.png'
import img30 from '../assets/B30.png'
import img37 from '../assets/B37.png'
import img38 from '../assets/B38.png'
import img39 from '../assets/B39.png'
import { Link } from 'react-router-dom'
import Navberdata from '../components/Navberdata'
const Businesspage = () => {
  return <>
  <Navberdata/>
  <section className='section-2'>
        <div className="section2-info">
          <h2>Business Account</h2>
          <Link to={'/home'}><p>Home <i className='fas fa-angle-right'> Business Account</i></p></Link>
        </div>
        <img src={img32} id='b10' />
   </section>
   <section className='section-12'>
         <div className="acc12-img">
           <img src={img30} alt="img1" />
         </div>
         <div className="account12">
            <p>Powering Your Daily Business,</p>
           <h2>Smart Banking For Smart Businesses</h2>
           <p><i className='fas fa-check'></i> High Transaction Limite</p>
           <p><i className='fas fa-check'></i> Dedicated Business Support</p>
           <p><i className='fas fa-check'></i> Effortless Fund Management</p>
           <Link to="/business">
           <button>Open Account</button>
           </Link>
         </div>
    </section>
    <section className='section13'>
    <div className="account1-info">
      <h5>How It Works</h5>
      <h2>Three Easy Steps</h2>
    </div>
    <div className="section-card">
      <div className="section13-item">
        <div className="section13-img">
        <img src={img37} alt="" />
        </div>
        <div className="section13-info">
          <h6>Check Your Eligibility</h6>
        </div>
      </div>
      <div className="section13-item">
        <div className="section13-img">
        <img src={img38} alt="" />
        </div>
        <div className="section13-info">
          <h6>Open Your Account</h6>
        </div>
      </div>
      <div className="section13-item">
        <div className="section13-img">
        <img src={img39} alt="" />
        </div>
        <div className="section13-info">
          <h6>Start Investing</h6>
        </div>
      </div>
  
    </div>
    </section>
  </>
}

export default Businesspage