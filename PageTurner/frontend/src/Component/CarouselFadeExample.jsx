import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";
import img from "../Images/new1.jpg";
import img1 from "../Images/new2.jpg";
import img2 from "../Images/new3.jpg";
function CarouselFadeExample() {
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={img} alt="" className="w-full h-[563px]" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={img1} alt="" className="w-full h-[563px]" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={img2} alt="" className="w-full h-[563px]" />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
