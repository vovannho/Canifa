import React from "react"
import "react-slideshow-image/lib/css/styles.css"
import { Slide } from"react-slideshow-image";

const slideImages = [
    "/assets/images/img-slide1.png",
    "/assets/images/img-slide2.jpg",
    "/assets/images/img-slide3.jpg",
    "/assets/images/img-slide4.png"
  ];
  const properties = {
    duration: 3000,
    transitionDuration: 300,
    arrows: true,
  }
           

const SlideHomeCanifa= () => {
    return (
          <Slide   {...properties}>
            <div className="each-slide ">
              <div style={{"backgroundImage": `url(${slideImages[0]})`}}>
                <span> <img className="" src="/assets/images/img-slide1.png" /></span>
              </div>
            </div>
            <div className="each-slide ">
              <div style={{"backgroundImage": `url(${slideImages[1]})`}}>
                <span><img className="" src="/assets/images/img-slide2.jpg" /></span>
              </div>
            </div>
            <div className="each-slide ">
              <div style={{"backgroundImage": `url(${slideImages[2]})`}}>
                <span><img className="" src="/assets/images/img-slide3.jpg"/></span>
              </div>
            </div>
            <div className="each-slide ">
              <div style={{"backgroundImage": `url(${slideImages[3]})`}}>
                <span><img className="" src="/assets/images/img-slide4.png"/></span>
              </div>
            </div>
          </Slide>
      )
  };

export default SlideHomeCanifa