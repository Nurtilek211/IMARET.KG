import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./Banner_C_Rec.scss";
import Codify from "../../assets/image/i_1.webp";
import Okurmen from "../../assets/image/OKUR.png";
import Manco from "../../assets/image/Manco.jpg";

function Banner_C_Rec() {
  return (
    <div className='Baner_REc'>
      <h2 className="Baner_REc__title">Наши спонсоры!</h2>

      <Carousel className='CArusel'>
        <Carousel.Item interval={2500}>
          <a href="https://www.codifylab.com/"><img
            className="carousel-img"
            src={Codify}
            alt="Codify"
          /></a>
          <Carousel.Caption className="carousel-caption">
            <h3><img src="https://www.codifylab.com/assets/logo.svg" alt="" /></h3>
            <p>IT школа для детей и подростков в Бишкеке</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <a href="https://www.okurmen.com"><img
            className="carousel-img"
            src={Okurmen}
            alt="Okurmen"
          /></a>
          <Carousel.Caption className="carousel-caption">
            <h3 className='Okurman font-bold text-5xl md:text-6xl text-blue-900'>ОКУРМЭН</h3>
            <p>Окуу көндүмдөрүн нөлдөн баштап ишенимдүү колдонуучуга чейин этап-этабы менен үйрөтүү</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={2500}>
          <a href="https://www.mancho.dev/"><img
            className="carousel-img"
            src={Manco}
            alt="Manco"
          /></a>
          <Carousel.Caption className="carousel-caption">
            <h3 className='Mancho'>Manco</h3>
            <p>Наша миссия — сделать жизнь справедливее</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Banner_C_Rec;
