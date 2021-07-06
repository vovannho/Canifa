import Flickity from "react-flickity-component";
import "./flickity.css";

const flickityOptions = {
  pageDots: false,
  prevNextButtons: true,
  groupCells: true,
};

const Carousel = ({ children }) => {
  return (
    <Flickity
      className={"carousel"} // default ''
      elementType={"div"} // default 'div'
      options={flickityOptions} // takes flickity options {}
      disableImagesLoaded={false} // default false
      reloadOnUpdate // default false
      static // default false
    >
      {children}
  
    </Flickity>
  );
};

export default Carousel;
