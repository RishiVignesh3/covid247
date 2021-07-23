import { Carousel } from "antd";
import "antd/dist/antd.css";
import Style from "./Carousel.module.scss";
import Carousel1 from "../../Carousel1.jpg"
import Carousel2 from "../../Carousel2.jpg"
import Carousel3 from "../../Carousel3.jpg"
import Carousel4 from "../../Carousel4.jpg"

const CarouselFunction = () => {

  const Arr = [Carousel1,Carousel2,Carousel3,Carousel4];
  return (
    <div className={Style["DashBoard__Carousel_Main"]}>
    <Carousel dots={true} autoplay={true}>
    {Arr.map((item)=>(
      <img key={Math.random()} alt='carouselImg'
      className={Style["DashBoard__Carousel"]}
      src={item} height="350px"
    />
    ))}
     
    </Carousel>
    </div>
  );
};

export default CarouselFunction;
