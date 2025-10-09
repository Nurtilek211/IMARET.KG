import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Banner_C_Rec.scss"
import Codify from "../../assets/image/i_1.webp"
import Okurmen from "../../assets/image/OKUR.png"
import Manco from "../../assets/image/Manco.jpg"

function Banner_C_Rec() {
  return (
    <div className='Baner_REc'>
      <Carousel className='CArusel'>
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={Codify}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
            src={Okurmen}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Manco}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner_C_Rec;
