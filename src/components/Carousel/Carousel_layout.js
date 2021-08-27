import Flickity from "react-flickity-component";
import "./flickity.css";
import React from 'react';

const Carousel_layout = ({ children }) => {

  const flickityOptions = {
    // freeScroll: true,
    // wrapAround: true,
    // cellAlign: 'left',
    // contain: true,
    // lazyLoad: true
    // groupCells: true,
    // groupCells: 3
    freeScroll: true,
    contain: true,
    autoPlay: 2000,
    // disable previous & next buttons and dots
    prevNextButtons: true,
    pageDots: false,
  }

  return (
      <Flickity class="carousel"
        options={flickityOptions}
        className="absolute"
      >
          <div class="carousel-cell ">
              <img
                  className=" w-full cursor-pointer "
                  src="/assets/images/img-slide1.png" alt="noload">
               </img>
          </div>
          <div class="carousel-cell ">
              <img
                  className=" w-full cursor-pointer "
                  src="/assets/images/img-slide2.jpg" alt="noload">
               </img>
          </div>
          <div class="carousel-cell ">
              <img
                  className=" w-full cursor-pointer "
                  src="/assets/images/img-slide3.jpg" alt="noload">
               </img>
          </div>
          <div class="carousel-cell ">
              <img
                  className=" w-full cursor-pointer "
                  src="/assets/images/img-slide4.png" alt="noload">
               </img>
          </div>
          
      </Flickity>
  );
};
export default Carousel_layout;