import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../assets/coffee-g8e6326781_1920.jpg";
import img2 from "../../assets/coffee-gc1d0cbcb2_1920.jpg";
import img3 from "../../assets/cake-gf019ffda1_1920.jpg";
import img4 from "../../assets/coffee-g1d05741af_1920.jpg";

const Gallery = () => {
  var settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section className="container gallery" id="gallery">
      <h2>Galeria</h2>
      <Slider {...settings}>
        <div className="gallery__img">
          <img src={img1} alt="coffee with cake" />
        </div>
        <div className="gallery__img">
          <img src={img2} alt="coffee with foam" />
        </div>
        <div className="gallery__img">
          <img src={img3} alt="coffee with a pattern" />
        </div>
        <div className="gallery__img">
          <img src={img4} alt="ice coffee" />
        </div>
      </Slider>
    </section>
  );
};

export default Gallery;
