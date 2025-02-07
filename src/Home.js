import React from 'react'

import Header from './common/Header'
import Footer from './common/Footer'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import natural from "./images/natural.jpeg"


function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div>
      <Header/>
        <h1>home</h1>
        <Slider {...settings}>
      <div>
        <img src={natural}/>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>

      
        <button>go to payment</button>
        
        <Footer/>
    </div>
  )
}

export default Home