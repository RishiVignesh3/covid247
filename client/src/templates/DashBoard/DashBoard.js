import CarouselFunction from "../../atoms/Carousel/Carousel";
import Card from "../../molecules/CardNearFooter/Card2";
import Style from "./DashBoard.module.scss";
import MainImage from "./img-doctors@1x.webp"

const DashBoard = () => {
  return (
    <div className={Style["DashBoard"]}>
      <CarouselFunction/>
      <h1>Break The Chain</h1>
      <div className={Style["outer"]}>
        <img
          className={Style["mainImage"]}
          src={MainImage}
          alt="MainImage"
          width="1200"
          height="500"
        />
      </div>
      <Card />
    </div>
  );
};

export default DashBoard;
