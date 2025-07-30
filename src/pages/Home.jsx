import React from 'react'
import Navberdata from '../components/Navberdata'
import img1 from "../assets/B1.png"
import img8 from "../assets/B8.png"
import Carouselslider from '../components/Carouselslider'
import Productcard from '../components/Productcard'
import Subscribe from '../components/Subscribe'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
const Home = () => {
  return <>
    <Navberdata />
    <section className='section-1'>
      <div className="account">
        <h4>Simple. Transparent. Secure</h4>
        <h1>Banking Solution</h1>
        <Link>
         <Button>Open Account</Button>
        </Link>
      </div>
        <img src={img1} alt="img1" />
    </section>
    <Carouselslider />
    <div className="account1-info">
      <h5>Open your Account</h5>
      <h2>Choose Your Account</h2>
    </div>
    <section>
    <Productcard />
    </section>
    <section className='section-2' id='section-21'>
      <img src={img8} alt="" />
      <div className="section2-info">
        <h2>Need A Personalized Solution?</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Rem quas praesentium eos architecto voluptatem,
        </p>
        <Link to={'/contact'}>
        <button>Contact Us</button>
        </Link>
      </div>
    </section>
    <Subscribe/>
  </>
}

export default Home