import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./partnerslider.css";

class CustomSlide extends Component {
  render() {
    const { imgsrc, ...props } = this.props;
    return (
      // <div {...props}>
      <div className="img-circle">
        <img src={imgsrc} alt="partner" />
          <p className="comp-name">Company name</p>
      </div>
    );
  }
}

export default class OurPartners extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      adaptiveHeight: true,
    };
    return (
      <div className="our-partners">
      <div>
        <p className="slider-title">OUR PARTNERS</p>

        <Slider {...settings}>
          <CustomSlide imgsrc={"https://source.unsplash.com/random/?sig=1"} />
          <CustomSlide imgsrc={"https://picsum.photos/600?random=1"}  />
          <CustomSlide imgsrc={"https://picsum.photos/600?random=2"}  />
          <CustomSlide imgsrc={"https://picsum.photos/600?random=3"}  />
          <CustomSlide imgsrc={"https://picsum.photos/600"}  />
          <CustomSlide imgsrc={"https://source.unsplash.com/random/600?sig=6"}  />
        </Slider>
        </div>
      </div>
    );
  }
}