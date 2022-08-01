import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'


function CarouselFade() {
  return (
    <div className="carousel-bg">
        <Carousel controls={false} indicators={false} interval={10000}>
      <Carousel.Item>
        <Carousel.Caption>
          <p className='carousel-text'>"That's one small step for a man, one giant leap for mankind."</p>
          <h3 className='carousel-text'>-Neil Armstrong</h3>
          
        </Carousel.Caption>
        <img
          className="carousel-img d-block w-100"
          alt=" "
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt=" "
        />

        <Carousel.Caption>
          <p className='carousel-text'>"A person who never made a mistake never tried anything new."</p>
          <h3 className='carousel-text'>-Albert Einstein</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt=" "
        />

        <Carousel.Caption>
          <p className='carousel-text'>"The Earth is the cradle of humanity, but mankind cannot stay in the cradle forever."</p>
          <h3 className='carousel-text'>-Konstantin Tsiolkovsky</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt=" "
        />

        <Carousel.Caption>
          <p className='carousel-text'>"There are no passengers on spaceship earth. We are all crew."</p>
          <h3 className='carousel-text'>-Marshall McLuhan</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt=" "
        />

        <Carousel.Caption>
          <p className='carousel-text'>"The moon is a friend for the lonesome to talk to."</p>
          <h3 className='carousel-text'>-Carl Sandburg</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carousel-img d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt=" "
        />

        <Carousel.Caption>
          <p className='carousel-text'>"The Universe is under no obligation to make sense to you."</p>
          <h3 className='carousel-text'>-Neil deGrasse Tyson</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CarouselFade;