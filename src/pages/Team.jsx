import React from 'react'
import img37 from '../assets/B37.png'
import Navberdata from '../components/Navberdata'
import { Link } from 'react-router-dom'
import img111 from '../assets/pallab.jpg'
import img123 from '../assets/sujon.jpg'
import img345 from '../assets/Argho.jpg'
import img456 from '../assets/asraful.png'
import Subscribe from '../components/Subscribe'
const Team = () => {
  return <>
   <Navberdata />
        <section className='section-2'>
            <div className="section2-info">
                <h2>Our Team</h2>
                <Link to={'/home'}><p>Home <i className='fas fa-angle-right'> Team</i></p></Link>
            </div>
            <img src={img37} id='b10' />
        </section>
        <div className="account1-info">
      <h5>Meet The Team</h5>
      <h2>The Professional Expert</h2>
    </div>
        <section className='team-profile'>
            <div className="profile-image">
                <img src={img111} alt="" />
                 <div className="social-media">
                <Link><i className='fab fa-facebook'></i></Link>
                <Link><i className='fab fa-instagram'></i></Link>
                <Link><i className='fab fa-whatsapp'></i></Link>
                <Link><i className='fab fa-linkedin'></i></Link>
            </div>
            <h6>Pallab Sil</h6>
            </div>
           
            <div className="profile-image">
                <img src={img123} alt="" />
                 <div className="social-media">
                <Link><i className='fab fa-facebook'></i></Link>
                <Link><i className='fab fa-instagram'></i></Link>
                <Link><i className='fab fa-whatsapp'></i></Link>
                <Link><i className='fab fa-linkedin'></i></Link>
            </div>
            <h6>Sujon Saha</h6>
            </div>

            <div className="profile-image">
                <img src={img345} alt="" />
                 <div className="social-media">
                <Link><i className='fab fa-facebook'></i></Link>
                <Link><i className='fab fa-instagram'></i></Link>
                <Link><i className='fab fa-whatsapp'></i></Link>
                <Link><i className='fab fa-linkedin'></i></Link>
            </div>
            <h6>Argho Ghosh</h6>
            </div>
            <div className="profile-image">
                <img src={img456} alt="" />
                 <div className="social-media">
                <Link><i className='fab fa-facebook'></i></Link>
                <Link><i className='fab fa-instagram'></i></Link>
                <Link><i className='fab fa-whatsapp'></i></Link>
                <Link><i className='fab fa-linkedin'></i></Link>
            </div>
            <h6>Sk Asraful Azam</h6>
            </div>
        </section>
        <Subscribe/>
  </>
}

export default Team