// import Buttons from "../../atoms/Buttons/Buttons";
import CardDashboard from "../../atoms/Card/DashBoardCard";

import Style from "./Card2.module.scss";

const Card = () => {
  const cardContent = [
    { content: "Ran out of medications ?", content2: "We are ought to help you" },
    {
      content: "Confused of Choosing Doc's",
      content2: "Personalise Your Choice",
    },
  ];
 

  return (
    <div>
      <div className={Style["cardAlign"]}>
        {cardContent.map((items, index) => (
          <CardDashboard keyIndex={index} content={items} >
          </CardDashboard>
        ))}
      </div>
      
    </div>
  );
};

export default Card;
