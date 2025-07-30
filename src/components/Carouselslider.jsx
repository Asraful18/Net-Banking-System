import React from 'react'
import { Carousel } from 'react-bootstrap'
import { carouselimage } from '../data/carouselimage'
const Carouselslider = () => {

  return <>
  <div className="slider-section">
    <Carousel className='slider' interval={1000}>
      {
        carouselimage.map(slide => (
          <Carousel.Item key={slide.id} >
            <img src={slide.src} className='w-100 ' width={450} height={300} alt={slide.alt} style={{objectFit: 'cover'}} />
          </Carousel.Item>
        ))
      }

    </Carousel>
    </div>

  </>
}

export default Carouselslider